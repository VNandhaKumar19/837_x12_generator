export function generate1000B(receiver: any, tradingPartnerServiceId: any): string {
    const data = {
        "Segment": "NM1",
        "EntityIdentifierCode": "40",
        "EntityTypeQualifier": "2",
        "LastName": receiver?.organizationName,
        "Unknown1": '',
        "Unknown2": '',
        "Unknown3": '',
        "Unknown4": '',
        "IdentificationCodeQualifier": "",
        "IdentificationCode": ''
    }

    const formattedString = Object.values(data)
        .map(value => value.trim())
        .join('*') + '~';

    return formattedString;
}