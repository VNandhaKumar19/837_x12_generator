/**
 * GE - Group Trial
 * @param GSCtrlNumber Group Control Number
 * @returns GE segment string with specific values in place
 */
export function generateGE(GSCtrlNumber: any): string {
    const data = {
        "Segment": "GE",
        "NumberOfTransactionSetsIncluded": "1",
        "GroupControlNumber": GSCtrlNumber
    }

    return `${data.Segment}*${data.NumberOfTransactionSetsIncluded}*${data.GroupControlNumber}~`;
}