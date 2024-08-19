import { formatObject } from "../../../utils/global";

export function generate2310A(attendingProvider: any) {
    let data: any = [
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