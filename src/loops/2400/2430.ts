import { LineAdjudicationInformation } from "../../models/request.model";
import { formatObject } from "../../utils/global";

export function generate2430(lineAdjudicationInfo: LineAdjudicationInformation) {
    let data: any = []

    lineAdjudicationInfo.forEach((item) => {
        data.push({
            "Segment": "SVD",
            "otherPayerPrimaryIdentifier": item?.otherPayerPrimaryIdentifier ?? '',
            "serviceLinePaidAmount": item?.serviceLinePaidAmount ?? '0',
            "serviceInfo": {
                "serviceIdQualifier": item?.serviceIdQualifier ?? '',
                "procedureCode": item?.procedureCode ?? '',
                "procedureModifier1": item?.procedureModifier && item?.procedureModifier[0] ? item?.procedureModifier[0] : '',
                "procedureModifier2": item?.procedureModifier && item?.procedureModifier[1] ? item?.procedureModifier[1] : '',
                "procedureModifier3": item?.procedureModifier && item?.procedureModifier[2] ? item?.procedureModifier[2] : '',
                "procedureModifier4": item?.procedureModifier && item?.procedureModifier[3] ? item?.procedureModifier[3] : ''
            },
            "unknown": '',
            "paidServiceUnitCount": item?.paidServiceUnitCount,
            "bundledOrUnbundledNumber": ''
        });

        if (item?.claimAdjustmentInformation && item?.claimAdjustmentInformation?.length > 0) {
            item?.claimAdjustmentInformation.forEach((adj, ind) => {
                data.push({
                    "Segment": "CAS",
                    "adjustmentGroupCode": adj?.adjustmentGroupCode ?? ''
                });

                const adjustmentObj: any = {}
                adj.adjustmentDetails.forEach((detail, detailIndex: number) => {
                    adjustmentObj[`adjustmentReasonCode${detailIndex + 1}`] = detail?.adjustmentReasonCode ?? '';
                    adjustmentObj[`adjustmentAmount${detailIndex + 1}`] = detail?.adjustmentAmount ?? '0';
                    adjustmentObj[`adjustmentQuantity${detailIndex + 1}`] = '';
                    data.push(adjustmentObj)
                });
            });
        }

        if (item?.adjudicationOrPaymentDate && item?.adjudicationOrPaymentDate) {
            data.push(
                {
                    "Segment": "DTP",
                    "DateTimeQualifier": "573",   // default value for adjudicationOrPaymentDate qualifier
                    "DateTimePeriodFormatQualifier": "D8",
                    "adjudicationOrPaymentDate": item?.adjudicationOrPaymentDate ?? ''
                }
            )
        }
    })

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}