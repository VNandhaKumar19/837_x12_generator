import { Attachment, ServiceLine } from "../../models/request.model";
import { formatObject } from "../../utils/global";
import { generate2430 } from "./2430";


/**
 * The function `generate2400` in TypeScript generates a formatted string based on input data for a
 * specific service line.
 * @param {ServiceLine} serviceLine - The `serviceLine` parameter in the `generate2400` function
 * represents a specific line item of a service in a healthcare claim. It contains various details
 * related to the service provided, such as procedure modifiers, institutional service information,
 * service date, line item charge amount, service unit count, supplemental information
 * @param {number} index - The `index` parameter in the `generate2400` function is used to determine
 * the assigned number for the segment in the generated data. It is incremented by 1 to create a unique
 * identifier for each segment in the output.
 * @returns The function `generate2400` returns a formatted string that includes various segments and
 * data related to a service line, such as LX, SV2, DTP segments, as well as additional segments for
 * attachments, prior authorizations, and line adjudication information. The data is formatted as
 * objects and joined with '~' delimiter before being returned.
 */
export function generate2400(serviceLine: ServiceLine, index: number) {
    const procedureModifiers = serviceLine?.procedureModifiers ? serviceLine?.procedureModifiers : serviceLine?.institutionalService?.procedureModifiers

    const data: any = [
        {
            "Segment": "LX",
            "AssignedNumber": `${index + 1}`
        },
        {
            "Segment": `SV2`,
            "revenueCode": "0305",
            "CompositeMedicalProcedureIdentifier": {
                "ProductServiceIDQualifier": "HC",
                "ProductServiceID": '85025',
                "ProcedureModifier1": procedureModifiers && procedureModifiers[0] ? procedureModifiers[0] : '',
                "ProcedureModifier2": procedureModifiers && procedureModifiers[1] ? procedureModifiers[1] : '',
                "ProcedureModifier3": procedureModifiers && procedureModifiers[2] ? procedureModifiers[2] : '',
                "ProcedureModifier4": procedureModifiers && procedureModifiers[3] ? procedureModifiers[3] : '',
            },
            "MonetaryAmount": serviceLine.institutionalService.lineItemChargeAmount ? serviceLine.institutionalService.lineItemChargeAmount.toString() : '0',
            "UnitOrBasisForMeasurementCode": "UN",
            "Quantity": serviceLine.institutionalService.serviceUnitCount ?? '',
        },
        {
            "Segment": "DTP",
            "DateTimeQualifier": "472",   // default value for serviceDate qualifier
            "DateTimePeriodFormatQualifier": "D8",
            "DateTimePeriod": serviceLine.serviceDate ?? ''
        }
    ]

    const attachmentArray = serviceLine?.serviceLineSupplementalInformation
    if (attachmentArray && attachmentArray.length > 0) {
        // Loop through priorAuthArray and add REF segments
        attachmentArray.forEach((item) => {
            data.push(patchAttachments(item));
        });
    }


    const priorAuthArray = serviceLine?.serviceLineReferenceInformation?.priorAuthorization
    if (priorAuthArray && priorAuthArray.length > 0) {
        // Loop through priorAuthArray and add REF segments
        priorAuthArray.forEach((item) => {
            if (item?.priorAuthorizationOrReferralNumber) data.push(patchPriorAuth(item));
        });
    }

    const lineAdjudicationInfo = serviceLine?.lineAdjudicationInformation;
    if (lineAdjudicationInfo && lineAdjudicationInfo.length > 0) {
        data.push(generate2430(lineAdjudicationInfo))

    }

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}

/**
 * The function `patchPriorAuth` creates a segment object with specific properties based on the input
 * service line's prior authorization or referral number.
 * @param serviceLine - The `serviceLine` parameter is an object that contains a property
 * `priorAuthorizationOrReferralNumber` which is a string representing the prior authorization or
 * referral number for a specific service line.
 * @returns The function `patchPriorAuth` is returning an object with the following properties:
 * - "Segment": "REF"
 * - "PriorAuthQualifier": 'G1'
 * - "PriorAuthNumber": The value of `serviceLine.priorAuthorizationOrReferralNumber` if it exists,
 * otherwise an empty string.
 */
function patchPriorAuth(serviceLine: { priorAuthorizationOrReferralNumber: string; }) {
    const segment = {
        "Segment": "REF",
        "PriorAuthQualifier": 'G1',
        "PriorAuthNumber": serviceLine?.priorAuthorizationOrReferralNumber ?? ''
    };
    return segment;
}

/**
 * The function `patchAttachments` creates a segment object with specific properties based on the input
 * attachment object.
 * @param {Attachment} attachment - The `attachment` parameter in the `patchAttachments` function is an
 * object that contains the following properties:
 * @returns The function `patchAttachments` is returning an object `segment` with the following
 * properties:
 * - "Segment": "PWK"
 * - "AttachmentReportTypeCode": The value of `attachment.attachmentReportTypeCode` if it exists,
 * otherwise an empty string
 * - "AttachmentTransmissionCode": The value of `attachment.attachmentTransmissionCode` if it exists,
 * otherwise an empty string
 * - "NotUsed
 */
function patchAttachments(attachment: Attachment) {
    const segment = {
        "Segment": "PWK",
        "AttachmentReportTypeCode": attachment?.attachmentReportTypeCode ?? '',
        "AttachmentTransmissionCode": attachment?.attachmentTransmissionCode ?? '',
        "NotUsedByHIPAA1": '',
        "NotUsedByHIPAA2": '',
        "NotUsedByHIPAA3": '',
        "IdentificationCodeQualifier": 'AC',
        "AttachmentControlNumber": attachment?.attachmentControlNumber ?? '',
    };
    return segment;
}
