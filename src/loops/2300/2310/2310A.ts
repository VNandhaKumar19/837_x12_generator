import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310A` creates a formatted string based on the provided attending provider
 * information.
 * @param {Provider} attendingProvider - The `attendingProvider` parameter is an object that represents
 * a healthcare provider. It contains the following properties:
 * @returns The `generate2310A` function returns a formatted string representing the data of the
 * attending provider in the 2310A segment format. The data includes the last name, first name, and NPI
 * (National Provider Identifier) of the attending provider. The function formats the data objects and
 * joins them with the tilde character '~' before returning the formatted string.
 */
export function generate2310A(attendingProvider: Provider) {
    const data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "71",
            "EntityTypeQualifier": "1",
            "LastName": attendingProvider?.lastName,
            "FirstName": attendingProvider?.firstName,
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": attendingProvider?.npi
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}