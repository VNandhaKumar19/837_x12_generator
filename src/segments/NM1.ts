import { StringObject } from "../models/common.model";
import { Provider } from "../models/request.model";

export function generateNM1(entity: Provider, entityType: { code: string, qualifier: string }, identity?: { qualifier: string }) {
    const data: StringObject = {
        "Segment": "NM1",
        "EntityIdentifierCode": entityType.code,
        "EntityTypeQualifier": entityType.qualifier,
        "OrganizationName": entity.organizationName ?? '',
        "Unknown1": '',
        "Unknown2": '',
        "Unknown3": '',
        "Unknown4": '',
        "IdentificationCodeQualifier": identity?.qualifier ?? "",
        "IdentificationCode": entity?.npi ?? ''
    };

    if (['IL', "71", "QC", "72", "82", "DN", "DQ"].includes(entityType.code)) {
        data['LastName'] = entity.lastName ?? "";
        data['FirstName'] = entity.firstName ?? "";
    }
    if (["41", "40"].includes(entityType.code)) {
        data["OrganizationName"] = entity.organizationName ?? "";
    }
    if (["85", "77"]) {
        data['LastName'] = entity.organizationName ?? "";
    }
    if (["PR"]) {
        // data["PayerName"] = entity?.tradingPartnerName,
    }
}