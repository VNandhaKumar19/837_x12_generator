import { Dependent } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2010CA` in TypeScript generates a formatted string based on the provided
 * dependent data.
 * @param {Dependent} dependent - The `dependent` parameter in the `generate2010CA` function is an
 * object that represents information about a dependent. It contains the following properties:
 * @returns The function `generate2010CA` returns a formatted string that represents data related to a
 * dependent. The data includes segments such as "PAT", "NM1", "N3", "N4", and "DMG" with corresponding
 * information like relationship code, name, address, date of birth, and gender. The data objects are
 * formatted and joined with a tilde (~) separator before being
 */
export function generate2010CA(dependent: Dependent) {
    const data = [
        {
            "Segment": "PAT",
            "IndividualRelationshipCode": dependent ? dependent?.relationshipToSubscriberCode : '18',

        },
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "QC",
            "EntityTypeQualifier": "1",
            "LastName": dependent?.lastName ?? '',
            "FirstName": dependent?.firstName ?? '',
        },
        {
            "Segment": "N3",
            "AddressInformation": dependent?.address?.address1 ?? ''
        },
        {
            "Segment": "N4",
            "CityName": dependent?.address?.city ?? '',
            "StateCode": dependent?.address?.state ?? '',
            "PostalCode": dependent?.address?.postalCode ?? '',
        },
        {
            "Segment": "DMG",
            "DateTimePeriodFormatQualifier": "D8",
            "DateOfBirth": dependent?.dateOfBirth ?? '',
            "Gender": dependent?.gender ?? ''
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}