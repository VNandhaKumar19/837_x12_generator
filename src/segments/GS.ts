/**
 * The function `generateGS` creates a GS segment for electronic submission of a Health Care Claim with
 * specific data fields.
 * @param {string} username - The `username` parameter in the `generateGS` function represents the
 * TriZetto Provider Solutions assigned site id.
 * @param {string} GSCtrlNumber - The `GSCtrlNumber` parameter in the `generateGS` function is used to
 * specify the Group Control Number for the GS segment in an electronic health care claim submission.
 * This number helps in identifying and grouping related transactions together.
 * @param {string} date - The `date` parameter in the `generateGS` function represents the date on
 * which the transaction is being processed or created. It is expected to be provided in a string
 * format.
 * @param {string} time - The `time` parameter in the `generateGS` function represents the time at
 * which the transaction is being processed or created. It is a string value that should be provided in
 * a specific format, such as "HH:MM:SS" (hours:minutes:seconds).
 * @param {boolean} [isInstitutional=true] - The `isInstitutional` parameter in the `generateGS`
 * function determines whether the electronic submission of a Health Care Claim is institutional or
 * professional. If `isInstitutional` is `true`, it indicates an institutional claim, and the function
 * will use the version release industry identifier code "005010X223A1" else it will use "005010X222A1"
 * which represents a professional claim.
 * @returns The function `generateGS` returns a formatted string representing a segment of a Health
 * Care Claim transaction. The string includes various data fields such as Segment,
 * FunctionalIdentifierCode, ApplicationSenderCode, ApplicationReceiverCode, Date, Time,
 * GroupControlNumber, ResponsibleAgencyCode, and VersionReleaseIndustryIdentifierCode. The values for
 * these fields are provided as input parameters to the function.
 */
export function generateGS(username: string, GSCtrlNumber: string, date: string, time: string, isInstitutional: boolean = true): string {
    const data = {
        "Segment": "GS",
        "FunctionalIdentifierCode": "HC",
        "ApplicationSenderCode": `${username}`, // TriZetto Provider Solutions assigned site id;
        "ApplicationReceiverCode": "263923727",
        "Date": date,
        "Time": time,
        "GroupControlNumber": GSCtrlNumber,
        "ResponsibleAgencyCode": "X",// organization responsible for maintaining the standards used in the transaction, 'X' is X12 org
        "VersionReleaseIndustryIdentifierCode": isInstitutional ? "005010X223A1" // institutional  electronic submission of a Health Care Claim 
            : "005010X222A1", // professional electronic submission of a Health Care Claim
    }

    return `${data.Segment}*${data.FunctionalIdentifierCode}*${data.ApplicationSenderCode}*${data.ApplicationReceiverCode}*${data.Date}*${data.Time}*${data.GroupControlNumber}*${data.ResponsibleAgencyCode}*${data.VersionReleaseIndustryIdentifierCode}~`;
}