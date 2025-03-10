/**
 * The function generates an ST segment for an X12 transaction set with specified control number and
 * industry identifier code.
 * @param {string} controlNumber - The `controlNumber` parameter is a string that represents the
 * transaction set control number for generating an ST segment in an X12 EDI file.
 * @param {boolean} [isInstitutional=true] - The `isInstitutional` parameter is a boolean flag that
 * determines whether the `VersionReleaseIndustryIdentifierCode` should be set to "005010X223A1" or
 * "005010X222A1" based on its value. If `isInstitutional` is `true`,
 * @returns The function `generateST` returns a formatted string containing the values of the
 * properties `Segment`, `TransactionSetIdentifierCode`, `TransactionSetControlNumber`, and
 * `VersionReleaseIndustryIdentifierCode` from the `data` object. The values are concatenated with '*'
 * as separators and '~' at the end.
 */

export function generateST(controlNumber: string, isInstitutional: boolean = true): string {
    const data = {
        "IncludeInX12": "Yes",
        "Segment": "ST",
        "TransactionSetIdentifierCode": "837",
        "TransactionSetControlNumber": controlNumber,
        "VersionReleaseIndustryIdentifierCode": isInstitutional ? "005010X223A1" :"005010X222A1"
    }
    return `${data.Segment}*${data.TransactionSetIdentifierCode}*${data.TransactionSetControlNumber}*${data.VersionReleaseIndustryIdentifierCode}~`;
}