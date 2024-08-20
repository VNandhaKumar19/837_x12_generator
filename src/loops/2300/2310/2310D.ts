import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310D` creates a formatted string based on the provided rendering provider
 * information.
 * @param {Provider} renderingProvider - The `renderingProvider` parameter is an object that represents
 * a healthcare provider. It contains the following properties:
 * @returns The `generate2310D` function returns a formatted string representing data related to a
 * rendering provider. The data includes information such as the rendering provider's last name, first
 * name, and NPI (National Provider Identifier). The function formats this data into a specific
 * structure and joins the formatted objects with a tilde (~) delimiter before returning the final
 * formatted string.
 */
export function generate2310D(renderingProvider: Provider) {
    let data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "82",
            "EntityTypeQualifier": "1",
            "LastName": renderingProvider?.lastName ?? '',
            "FirstName": renderingProvider?.firstName ?? '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": renderingProvider?.npi ?? ''
        }
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}