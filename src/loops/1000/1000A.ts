import { formatObject } from "../../utils/global";

export function generate1000A(submitter: any): string {
    const data = [
        {
          "Segment": "NM1",
          "EntityIdentifierCode": "41",
          "EntityTypeQualifier": "2",
          "OrganizationName": submitter.organizationName ?? '',
          "Unknown1": '',
          "Unknown2": '',
          "Unknown3": '',
          "Unknown4": '',
          "IdentificationCodeQualifier": "",
          "IdentificationCode": "",
        },
        {
          "Segment": "PER",
          "ContactFunctionCode": "IC",
          "Name": submitter?.contactInformation.name ?? '',
          "CommunicationNumberQualifier": "TE",
          "CommunicationNumber": submitter?.contactInformation?.phoneNumber ? submitter?.contactInformation?.phoneNumber : '',
        }
      ];

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
      
}