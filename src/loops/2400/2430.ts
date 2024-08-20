import { LineAdjudicationInformation } from "../../models/request.model";
import { formatObject } from "../../utils/global";

/**
 * The function `generate2430` in TypeScript generates a formatted string based on input
 * LineAdjudicationInformation data.
 * @param {LineAdjudicationInformation} lineAdjudicationInfo - The `lineAdjudicationInfo` parameter in
 * the `generate2430` function is expected to be an array of objects containing information about line
 * adjudication. Each object should have the following properties:
 * @returns The `generate2430` function is returning a formatted string that contains data from the
 * `LineAdjudicationInformation` object provided as input. The data is structured into segments such as
 * "SVD", "CAS", and "DTP" with specific fields and values based on the properties of the
 * `LineAdjudicationInformation` object. The final formatted string is created by mapping each object
 * in
 */
export function generate2430(lineAdjudicationInfo: LineAdjudicationInformation) {
    const data: any = []

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