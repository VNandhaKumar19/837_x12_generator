/**
 * SE - Transaction set trailer
 * @param controlNumber Claim Control Number
 * @param segmentsCount Total Segment Count
 * @returns SE segment string
 */
export function generateSE(controlNumber: string, segmentsCount: Number): string {
    const data = {
        "Segment": "SE",
        "NumberOfIncludedSegments": segmentsCount,
        "TransactionSetControlNumber": controlNumber
    }

    return `${data.Segment}*${data.NumberOfIncludedSegments}*${data.TransactionSetControlNumber}~`;
}