import { Attachment, ServiceLine } from "../../models/request.model";
import { formatObject } from "../../utils/global";
import { generate2430 } from "./2430";


export function generate2400(serviceLine: ServiceLine, index: number) {
    const procedureModifiers = serviceLine?.procedureModifiers ? serviceLine?.procedureModifiers : serviceLine?.institutionalService?.procedureModifiers

    let data: any = [
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

function patchPriorAuth(serviceLine: { priorAuthorizationOrReferralNumber: string; }) {
    const segment = {
        "Segment": "REF",
        "PriorAuthQualifier": 'G1',
        "PriorAuthNumber": serviceLine?.priorAuthorizationOrReferralNumber ?? ''
    };
    return segment;
}

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
