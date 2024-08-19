/**
 * ISA - Interchange control header
 * @param username TriZetto Site Id or Unique Identifier
 * @param ISACtrlNumber Tracking Number
 * @param date Current Date
 * @param time Current Time
 * @returns ISA Segment string
 */
export function generateISA(username: string, ISACtrlNumber: string, date: string, time: string): string {
    const data = {
        "Segment": "ISA",
        "AuthorizationInformationQualifier": "00",  // "00" specifically indicates that no authorization information is present or required for the interchange
        "AuthorizationInformation": "          ",
        "SecurityInformationQualifier": "00",
        "SecurityInformation": "          ",
        "InterchangeSenderIDQualifier": "ZZ",  // indicates type os sender id. 'ZZ' is mutually defined Ids between sender and receiver
        "InterchangeSenderID": `${username}           `, // Id assigned by Trizetto
        "InterchangeReceiverIDQualifier": "ZZ",
        "InterchangeReceiverID": "263923727000000", //263923727000000
        "InterchangeDate": date,  // date of interchange
        "InterchangeTime": time,// time of interchange
        "InterchangeControlStandardsIdentifier": "^",  //typically represents the ASC X12 standard
        "InterchangeControlVersionNumber": "00501", // indicates the version 5010 of the ASC X12 standard
        "InterchangeControlNumber": ISACtrlNumber,  // tracking number for the X12 fILE SENT
        "AcknowledgmentRequested": "1", //  indicates whether acknowledgment of the interchange is requested. if '1' means sender is expecting acknowledgement from receiver.
        "UsageIndicator": "P",   // test Or production
        "ComponentElementSeparator": ":"
    }
    const formattedString = Object.values(data)
        .map(value => value)
        .join('*') + '~';

    return formattedString;
}
