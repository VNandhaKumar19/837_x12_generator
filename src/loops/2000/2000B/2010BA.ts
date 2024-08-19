import { ClaimInformation, Dependent, Subscriber } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

export function generate2010BA(subscriber: Subscriber, dependent: Dependent, claimInformation: ClaimInformation) {
    let data = [
        {
            "Segment": "SBR",
            "PayerResponsibilitySequenceNumberCode": subscriber?.paymentResponsibilityLevelCode ?? '',
            "IndividualRelationshipCode": dependent ? dependent?.relationshipToSubscriberCode : '18',
            "GroupNumber": subscriber?.groupNumber ?? '',
            'unknown1': '',
            'unknown2': '',
            'unknown3': '',
            'unknown4': '',
            'unknown5': '',
            "ClaimFilingIndicator": claimInformation?.claimFilingCode ?? 'ZZ'
        },
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "IL",
            "EntityTypeQualifier": "1",
            "LastName": subscriber?.lastName ?? '',
            "FirstName": subscriber?.firstName ?? '',
            'unknown1': '',
            'unknown2': '',
            'unknown3': '',
            "IdentificationCodeQualifier": "MI",
            "IdentificationCode": subscriber?.memberId ?? ''
        },
        {
            "Segment": "N3",
            "AddressInformation": subscriber?.address?.address1 ?? ''
        },
        {
            "Segment": "N4",
            "CityName": subscriber?.address?.city ?? '',
            "StateCode": subscriber?.address?.state ?? '',
            "PostalCode": subscriber?.address?.postalCode ?? '',
        },
        {
            "Segment": "DMG",
            "DateTimePeriodFormatQualifier": "D8",
            "DateOfBirth": subscriber?.dateOfBirth ?? '',
            "Gender": subscriber?.gender ?? ''
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}