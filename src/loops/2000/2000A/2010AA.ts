import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

export function generate2010AA(provider: Provider) {
    let data = [
        {
            "Segment": "PRV",
            "ProviderCode": "BI",
            "ProviderSpecialtyInformation": "PXC",
            "ProviderClassificationCode": provider?.taxonomyCode ?? ''
        },
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "85",
            "EntityTypeQualifier": "2",
            "LastName": provider?.organizationName ?? '',
            "Unknown1": '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": provider?.npi ?? ''
        },
        {
            "Segment": "N3",
            "AddressInformation": provider?.address?.address1 ?? ''
        },
        {
            "Segment": "N4",
            "CityName": provider?.address?.city ?? '',
            "StateCode": provider?.address?.state ?? '',
            "PostalCode": provider?.address?.postalCode ?? '',
        },

        {
            "Segment": "REF",
            "ReferenceIdentificationQualifier": provider?.employerId ? "EI" : 'SY',
            "ReferenceIdentification": (provider?.employerId ? provider?.employerId : provider?.ssn) ?? ''
        },

    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}