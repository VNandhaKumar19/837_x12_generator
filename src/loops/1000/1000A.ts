import { Submitter } from "../../models/request.model";
import { formatObject } from "../../utils/global";

/**
 * The function `generate1000A` takes a `Submitter` object as input and generates a formatted string
 * based on the data provided in the object.
 * @param {Submitter} submitter - The `submitter` parameter is an object that contains information
 * about the submitter. It includes the `organizationName` and `contactInformation` properties. The
 * `organizationName` is a string representing the name of the organization, and the
 * `contactInformation` property is an object that includes the `
 * @returns The function `generate1000A` is returning a formatted string that is generated based on the
 * `submitter` object provided as a parameter. The string is constructed by mapping over an array of
 * objects, formatting each object, and joining them with a tilde (~) delimiter. The resulting string
 * is then returned by the function.
 */
export function generate1000A(submitter: Submitter): string {
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
          "IdentificationCodeQualifier": "46",
          "IdentificationCode": submitter.npi,
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