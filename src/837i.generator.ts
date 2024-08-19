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

export function generate837I(payload: RequestBody, userName: string) {
    const payerAddress = payload?.payerAddress ?? null;
    const ISACtrlNumber = getControlNumber();
    const GSCtrlNumber = getControlNumber();
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
        { type: 'ISA', value: generateISA(userName, ISACtrlNumber, getCurrentDate('isa'), time) },
        { type: 'GS', value: generateGS(userName, GSCtrlNumber, date, time) },
        { type: 'ST', value: generateST(payload?.controlNumber) },
        { type: 'BHT', value: generateBHT(payload?.controlNumber, date, time) },
        { type: '1000A', value: generate1000A(payload?.submitter) },
        { type: '1000B', value: generate1000B(payload?.receiver, payload?.tradingPartnerServiceId) },
        { type: '2000A', value: generate2000A(billingProvider) },
        { type: '2000B', value: generate2000B(payload, payerAddress) },
        { type: '2000C', value: payload?.dependent ? generate2000C(payload?.dependent) : '' },
        { type: '2300', value: generate2300(payload?.claimInformation) },
        { type: '2310A', value: attendingProvider ? generate2310A(attendingProvider) : '' },
        { type: '2310B', value: operatingPhysician ? generate2310B(operatingPhysician) : '' },
        { type: '2310D', value: renderingProvider ? generate2310D(renderingProvider) : '' },
        { type: '2310E', value: generate2310E(payload?.claimInformation?.serviceFacilityLocation) },
        { type: '2310F', value: referringProvider ? generate2310F(referringProvider) : '' },
        { type: '2310G', value: supervisingProvider && !payload.supervising_same_as_rendering ? generate2310G(supervisingProvider) : '' },
    ];

    if (payload?.claimInformation?.serviceLines) {
        payload?.claimInformation?.serviceLines.forEach((serviceLine, index) => {
            x12DataArray.push({ type: '2400', value: generate2400(serviceLine, index) })
        })
    }

    x12DataArray.push(
        { type: 'SE', value: generateSE(payload?.controlNumber, 32) },
        { type: 'GE', value: generateGE(GSCtrlNumber) },
        { type: 'IEA', value: generateIEA(ISACtrlNumber) },
    )

    return x12DataArray.map(segment => segment.value).join('').toString();
}