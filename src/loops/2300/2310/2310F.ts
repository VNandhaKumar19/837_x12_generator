import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

/**
 * The function `generate2310F` creates a formatted string based on the provided referring provider
 * information.
 * @param {Provider} referringProvider - The `referringProvider` parameter is an object that represents
 * a healthcare provider. It contains the following properties:
 * @returns The `generate2310F` function returns a formatted string representing data related to a
 * referring provider. The data includes information such as the provider's last name, first name, and
 * NPI (National Provider Identifier). The function formats this data into a specific structure and
 * joins the formatted objects with a tilde (~) separator before returning the final formatted string.
 */
export function generate2310F(referringProvider: Provider) {
    const data: any[] = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "DN",
            "EntityTypeQualifier": "1",
            "LastName": referringProvider?.lastName ?? '',
            "FirstName": referringProvider?.firstName ?? '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": referringProvider?.npi ?? '',
        }
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}