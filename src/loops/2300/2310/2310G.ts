import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310G` creates a formatted string based on the provided supervising provider's
 * information.
 * @param {Provider} supervisingProvider - The `supervisingProvider` parameter is an object that
 * represents a provider. It contains the following properties:
 * @returns The `generate2310G` function is returning a formatted string that represents data related
 * to a supervising provider. The data includes information such as the last name, first name, and NPI
 * (National Provider Identifier) of the supervising provider. The function formats this data into a
 * specific structure and joins the formatted objects with a tilde (~) delimiter before returning the
 * final formatted string.
 */
export function generate2310G(supervisingProvider: Provider) {
    const data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "DQ",
            "EntityTypeQualifier": "1",
            "LastName": supervisingProvider?.lastName ?? '',
            "FirstName": supervisingProvider?.firstName ?? '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": supervisingProvider?.npi ?? ''
        },

    ]
    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}