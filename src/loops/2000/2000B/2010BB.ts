import { Address, RequestBody } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

export function generate2010BB(claimData: RequestBody, payerAddress: Address | null) {
    let data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "PR",
            "EntityTypeQualifier": "2",
            "PayerName": claimData?.tradingPartnerName ?? '',
            "Unknown1": '',
            "Unknown2": '',
            "Unknown3": '',
            "Unknown4": '',
            "IdentificationCodeQualifier": "PI",
            "IdentificationCode": claimData?.tradingPartnerServiceId
        }
    ]

    if (payerAddress?.address1) {
        data.push({
            "Segment": "N3",
            "AddressInformation": payerAddress?.address1 ?? ''
        })
    }

    if ((payerAddress?.city || payerAddress?.state || payerAddress?.zipcode)) {
        data.push({
            "Segment": "N4",
            "CityName": payerAddress?.city ?? '',
            "StateCode": payerAddress?.state ?? '',
            "PostalCode": payerAddress?.zipcode ?? '',
        })
    }

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~');
    return formattedString;
}