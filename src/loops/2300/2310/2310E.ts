import { ServiceFacilityLocation } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310E` takes a `ServiceFacilityLocation` object as input and generates a
 * formatted string based on its properties.
 * @param {ServiceFacilityLocation} serviceFacilityLocation - The `generate2310E` function takes a
 * `ServiceFacilityLocation` object as a parameter and generates a formatted string based on the data
 * in that object. The `ServiceFacilityLocation` object likely contains information about a service
 * facility location, such as organization name, address, city, state
 * @returns The function `generate2310E` is returning a formatted string that represents the data
 * provided in the `serviceFacilityLocation` object. The data is structured in an array of objects,
 * each representing a segment of information. The function formats each object and joins them with a
 * tilde (~) delimiter before returning the final formatted string.
 */
export function generate2310E(serviceFacilityLocation: ServiceFacilityLocation) {
    const data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "77",
            "EntityTypeQualifier": "2",
            "LastName": serviceFacilityLocation?.organizationName ?? '',
            "Unknown1": '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "",
            "IdentificationCode": '',
        },
        {
            "Segment": "N3",
            "AddressInformation": serviceFacilityLocation?.address?.address1 ?? '',
        },
        {
            "Segment": "N4",
            "CityName": serviceFacilityLocation?.address?.city ?? '',
            "StateCode": serviceFacilityLocation?.address?.state ?? '',
            "PotalCode": serviceFacilityLocation?.address?.postalCode ?? '',
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}