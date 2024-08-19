import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

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