/**
 * IEA - Interchange control trailer
 * @param ISACtrlNumber Tracking Number
 * @returns IEA Segment string
 */
export function generateIEA(ISACtrlNumber: string): string {
    const data = {
        "Segment": "IEA",
        "NumberOfIncludedFunctionalGroups": "1",
        "InterchangeControlNumber": ISACtrlNumber
    }
    return `${data.Segment}*${data.NumberOfIncludedFunctionalGroups}*${data.InterchangeControlNumber}~`;
}