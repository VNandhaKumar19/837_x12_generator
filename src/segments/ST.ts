
/**
 * ST - Transaction set header
 * @param controlNumber Claim Control Number
 * @returns ST Segment string
 */
export function generateST(controlNumber: string): string {
    const data = {
        "IncludeInX12": "Yes",
        "Segment": "ST",
        "TransactionSetIdentifierCode": "837",
        "TransactionSetControlNumber": controlNumber,
        "VersionReleaseIndustryIdentifierCode": "005010X223A1"
    }
    return `${data.Segment}*${data.TransactionSetIdentifierCode}*${data.TransactionSetControlNumber}*${data.VersionReleaseIndustryIdentifierCode}~`;
}