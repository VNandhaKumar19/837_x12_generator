/**
 * GS - Group Header
 * @param username TriZetto Site Id or Unique Identifier
 * @param GSCtrlNumber Group Control Number
 * @param date Current Date
 * @param time Current Time
 * @returns GS segment string with specific values on each part of it
 */
export function generateGS(username: string, GSCtrlNumber: any, date: string, time: string): string {
    const data = {
        "Segment": "GS",
        "FunctionalIdentifierCode": "HC",
        "ApplicationSenderCode": `${username}`, // TriZetto Provider Solutions assigned site id;
        "ApplicationReceiverCode": "263923727",
        "Date": date,
        "Time": time,
        "GroupControlNumber": GSCtrlNumber,
        "ResponsibleAgencyCode": "X",// organization responsible for maintaining the standards used in the transaction, 'X' is X12 org
        "VersionReleaseIndustryIdentifierCode": "005010X223A1" // institutional  electronic submission of a Health Care Claim
    }

    return `${data.Segment}*${data.FunctionalIdentifierCode}*${data.ApplicationSenderCode}*${data.ApplicationReceiverCode}*${data.Date}*${data.Time}*${data.GroupControlNumber}*${data.ResponsibleAgencyCode}*${data.VersionReleaseIndustryIdentifierCode}~`;
}