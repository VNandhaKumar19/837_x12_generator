import { OperatingPhysician } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310B` creates a formatted string based on the provided `orderingProvider`
 * information.
 * @param {OperatingPhysician} orderingProvider - The `orderingProvider` parameter is an object
 * representing the operating physician. It contains the following properties:
 * @returns The function `generate2310B` is returning a formatted string that represents the data of
 * the ordering provider (OperatingPhysician) in a specific format. The data includes the last name,
 * first name, and NPI (National Provider Identifier) of the ordering provider. The data is formatted
 * as per the requirements specified in the function and joined with the '~' delimiter before being
 * returned.
 */
export function generate2310B(orderingProvider: OperatingPhysician) {
    const data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "72",
            "EntityTypeQualifier": "1",
            "LastName": orderingProvider?.lastName,
            "FirstName": orderingProvider?.firstName,
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": orderingProvider?.npi ?? ''
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}