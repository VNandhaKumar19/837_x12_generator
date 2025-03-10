import { generate1000A } from "./loops/1000/1000A";
import { generate1000B } from "./loops/1000/1000B";
import { generate2000A } from "./loops/2000/2000A/2000A";
import { generate2000B } from "./loops/2000/2000B/2000B";
import { generate2000C } from "./loops/2000/2000C/2000C";
import { generate2300 } from "./loops/2300/2300";
import { generate2310A } from "./loops/2300/2310/2310A";
import { generate2310B } from "./loops/2300/2310/2310B";
import { generate2310D } from "./loops/2300/2310/2310D";
import { generate2310E } from "./loops/2300/2310/2310E";
import { generate2310F } from "./loops/2300/2310/2310F";
import { generate2310G } from "./loops/2300/2310/2310G";
import { generate2400 } from "./loops/2400/2400";
import { RequestBody } from "./models/request.model";
import { generateBHT } from "./segments/BHT";
import { generateGE } from "./segments/GE";
import { generateGS } from "./segments/GS";
import { generateIEA } from "./segments/IEA";
import { generateISA } from "./segments/ISA";
import { generateSE } from "./segments/SE";
import { generateST } from "./segments/ST";
import { getControlNumber, getCurrentDate, getCurrentTime } from "./utils/global";
import { validateRequestBody } from "./utils/validator";

/**
 * The function `generate837I` generates an 837I X12 transaction based on the provided payload and
 * other optional parameters.
 * @param {RequestBody} payload - The `payload` parameter in the `generate837I` function represents the
 * request body containing information needed to generate an 837I transaction. This information
 * includes details about providers, claim information, service lines, submitter, receiver, trading
 * partner service ID, dependent, and more. The function processes this
 * @param {string} userName - The `userName` parameter in the `generate837I` function is a string that
 * represents the user name associated with the generation of the 837I payload. It is used within the
 * function to generate various segments of the X12 data interchange format for healthcare
 * transactions.
 * @param {number} [isaCtrlNumber] - The `isaCtrlNumber` parameter in the `generate837I` function is an
 * optional parameter of type number. It is used to specify the ISA control number for the X12
 * transaction set. If provided, it will be used as the ISA control number; otherwise, a default
 * control number will be
 * @param {number} [gsCtrlNumber] - The `gsCtrlNumber` parameter in the `generate837I` function is an
 * optional parameter of type number. It is used to specify the GS control number for the X12
 * transaction set. If a value is provided for `gsCtrlNumber`, it will be used as the GS control
 * number.
 * @returns The function `generate837I` returns a string that represents an electronic data interchange
 * (EDI) document in X12 format. The document contains various segments such as ISA, GS, ST, BHT,
 * 1000A, 1000B, 2000A, 2000B, 2300, 2310A, 2310B, 2310D, 2310E, 2310F, 2310G, 2400, SE, GE, and IEA.
 */
export function generate837I(payload: RequestBody, userName: string, isWorkComp: boolean = false, isaCtrlNumber?: number, gsCtrlNumber?: number) {

    if (!validateRequestBody(payload)) {
        throw Error('Invalid Request Body');
    }

    const payerAddress = payload?.payerAddress ?? null;
    const ISACtrlNumber = isaCtrlNumber?.toString() ?? getControlNumber();
    const GSCtrlNumber = gsCtrlNumber?.toString() ?? getControlNumber();
    const renderingProvider = payload.providers.find((pro) => pro.providerType == 'RenderingProvider');
    const referringProvider = payload.providers.find((pro) => pro.providerType == 'ReferringProvider');
    const supervisingProvider = payload.providers.find((pro) => pro.providerType == 'SupervisingProvider');
    const orderingProvider = payload.providers.find((pro) => pro.providerType == 'OrderingProvider');
    const billingProvider = payload.providers.find((pro) => pro.providerType == 'BillingProvider');
    const attendingProvider = payload.providers.find((pro) => pro.providerType == 'AttendingProvider');
    const operatingPhysician = payload?.operatingPhysician;

    const date = getCurrentDate();
    const time = getCurrentTime();

    const x12DataArray = [
        { type: 'ISA', value: generateISA(userName, ISACtrlNumber, getCurrentDate('isa'), time) }, // Interchange Control Header
        { type: 'GS', value: generateGS(userName, GSCtrlNumber, date, time) }, // Functional Group Header
        { type: 'ST', value: generateST(payload?.controlNumber) }, // Transaction Set Header
        { type: 'BHT', value: generateBHT(payload?.controlNumber, date, time) }, // Beginning of Hierarchy
        { type: '1000A', value: generate1000A(payload?.submitter) }, // Submitter
        { type: '1000B', value: generate1000B(payload?.receiver, payload?.tradingPartnerServiceId) }, // Receiver
        { type: '2000A', value: billingProvider ? generate2000A(billingProvider) : '' }, // Billing Provider
        { type: '2000B', value: generate2000B(payload, payerAddress, isWorkComp) }, // Payer
        { type: '2000C', value: payload?.dependent ? generate2000C(payload?.dependent) : '' }, // Dependent
        { type: '2300', value: generate2300(payload?.claimInformation, isWorkComp) }, // Claim Information
        { type: '2310A', value: attendingProvider ? generate2310A(attendingProvider) : '' }, // Attending Provider (optional)
        { type: '2310B', value: operatingPhysician ? generate2310B(operatingPhysician) : '' }, // Operating Physician (optional)
        { type: '2310D', value: renderingProvider ? generate2310D(renderingProvider) : '' }, // Rendering Provider
        { type: '2310E', value: generate2310E(payload?.claimInformation?.serviceFacilityLocation) }, // Service Facility Location
        { type: '2310F', value: referringProvider ? generate2310F(referringProvider) : '' }, // Referring Provider (optional)
        { type: '2310G', value: supervisingProvider && !payload.supervising_same_as_rendering ? generate2310G(supervisingProvider) : '' }, // Supervising Provider (optional)
        { type: '2310H', value: orderingProvider ? generate2310G(orderingProvider) : '' }, // Supervising Provider (optional)
    ];

    if (payload?.claimInformation?.serviceLines) {
        payload?.claimInformation?.serviceLines.forEach((serviceLine, index) => {
            x12DataArray.push({ type: '2400', value: generate2400(serviceLine, index) }) // Service Line
        })
    }

    x12DataArray.push(
        { type: 'SE', value: generateSE(payload?.controlNumber, getSegmentsCount(x12DataArray)) }, // Transaction Set Trailer
        { type: 'GE', value: generateGE(GSCtrlNumber) }, // Functional Group Trailer
        { type: 'IEA', value: generateIEA(ISACtrlNumber) }, // Interchange Control Trailer
    )

    return x12DataArray.map(segment => segment.value).join('').toString();
}


function getSegmentsCount(x12DataArray: any[]): number {
    const inputString = x12DataArray.map(segment => segment.value).join('').toString();
    const segmentCount: number = inputString.split('~').filter(segment => segment.trim() !== '').length;
    return segmentCount;
}
