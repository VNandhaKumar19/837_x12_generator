import { ClaimInformation, Dependent, Subscriber } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2010BA` in TypeScript generates a formatted string based on subscriber,
 * dependent, and claim information.
 * @param {Subscriber} subscriber - The `subscriber` parameter represents the primary person who is
 * covered by the insurance policy. This person is responsible for the payment of the insurance
 * premiums and may also be the policyholder.
 * @param {Dependent | undefined} dependent - The `dependent` parameter represents information about a
 * dependent related to the subscriber. If a dependent is provided, their relationship to the
 * subscriber will be used in the generated data. If no dependent is provided, a default relationship
 * code of '18' will be used.
 * @param {ClaimInformation} claimInformation - The `claimInformation` parameter in the
 * `generate2010BA` function represents information related to a claim. This could include details such
 * as the claim filing code, which indicates how the claim will be filed (e.g., electronically or on
 * paper). The function uses this information to generate a formatted string
 * @returns The function `generate2010BA` returns a formatted string that represents data related to a
 * subscriber, dependent (if provided), and claim information. The data is structured in segments and
 * includes information such as payer responsibility, individual relationship code, group number, name,
 * address, date of birth, and gender. The data objects are formatted and joined with a tilde (~)
 * separator before being returned.
 */
export function generate2010BA(subscriber: Subscriber, dependent: Dependent | undefined, claimInformation: ClaimInformation) {
    const data = [
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
        }
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}