import { Dependent } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

export function generate2010CA(dependent: Dependent) {
    let data = [
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