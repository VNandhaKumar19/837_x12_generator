/**
 * BHT - Beginning of Hierarchy
 * @param controlNumber Claim ControlNumber
 * @param date Current Date
 * @param time Current Time
 * @returns BHT Segment String with respective values
 */
export function generateBHT(controlNumber: string, date: string, time: string): string {
    const data = {
        "Segment": "BHT",
        "HierarchicalStructureCode": "0019",
        "TransactionSetPurposeCode": "00",  // indicates whether its original claim or corrected claim -- '00' is  original transaction , '02' - transaction is correcting errors or updating information from a previously sent transaction
        "ReferenceIdentification": controlNumber,
        "Date": date,
        "Time": time,
        "TransactionTypeCode": "CH" // "RP"  represent institutional claim submission.
    };

    return `${data.Segment}*${data.HierarchicalStructureCode}*${data.TransactionSetPurposeCode}*${data.ReferenceIdentification}*${data.Date}*${data.Time}*${data.TransactionTypeCode}~`;
}