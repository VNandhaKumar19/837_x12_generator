import { formatObject } from "../../../utils/global";

export function generate2310E(serviceFacilityLocation: any) {
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