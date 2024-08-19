import { formatObject } from "../../../utils/global";

export function generate2310F(referringProvider: any) {
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