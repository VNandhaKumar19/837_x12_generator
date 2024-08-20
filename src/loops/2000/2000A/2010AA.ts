import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2010AA` in TypeScript generates a formatted string based on provider
 * information for a specific data format.
 * @param {Provider} provider - The `provider` parameter is an object that contains information about a
 * healthcare provider. It includes the following properties:
 * @returns The function `generate2010AA` is returning a formatted string that represents data related
 * to a provider in the 2010AA format. The data includes segments such as PRV, NM1, N3, N4, and REF,
 * each containing specific information about the provider such as provider code, specialty
 * information, name, address, NPI, and reference identification. The data objects are formatted
 */
export function generate2010AA(provider: Provider) {
    const data = [
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
        }
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}