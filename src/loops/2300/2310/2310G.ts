import { Provider } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

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