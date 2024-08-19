import { StringObject } from "../../models/common.model"
import { ClaimInformation } from "../../models/request.model"
import { formatObject } from "../../utils/global"

export function generate2300(claimData: ClaimInformation) {
    const data: any = [
        {
            "Segment": "CLM",
            "PatientControlNumber": claimData?.patientControlNumber ?? '',
            "MonetaryAmount": claimData?.claimChargeAmount ?? '',
            "facilityTypeCode": `${claimData?.placeOfServiceCode}1` ?? '',
            'unknown': '',
            "ClaimFilingIndicatorCode": {
                "placeOfServiceCode": claimData?.placeOfServiceCode ?? '',
                "FacilityCodeIdentifier": 'B',
                "claimFrequencyCode": claimData?.claimFrequencyCode ?? '',
            },
            "signatureIndicator": '',
            "planParticipationCode": claimData?.planParticipationCode ?? '',
            "BenefitsAssignmentCode": claimData?.benefitsAssignmentCertificationIndicator ?? '',
            "ReleaseOfInformationCode": claimData?.releaseInformationCode ?? '',
        },

    ]


    if (claimData?.claimDateInformation?.statementBeginDate && claimData?.claimDateInformation?.statementEndDate) {
        data.push({
            "Segment": "DTP",
            "DateTimeQualifier": "434",
            "DateTimePeriodFormatQualifier": "RD8",
            "statementBeginDate": claimData?.claimDateInformation?.statementBeginDate + '-' + claimData?.claimDateInformation?.statementEndDate,
        })
    }

    if (claimData?.claimDateInformation?.admissionDateAndHour) {
        data.push({
            "Segment": "DTP",
            "DateTimeQualifier": "435",   // default value for AdmissionDate qualifier
            "DateTimePeriodFormatQualifier": "DT",
            "DateTimePeriod": claimData?.claimDateInformation?.admissionDateAndHour ?? ''
        })
    }


    if (claimData?.claimDateInformation?.dischargeHour) {
        data.push({
            "Segment": "DTP",
            "DateTimeQualifier": "096",
            "DateTimePeriodFormatQualifier": "TM",
            "dischargeHour": claimData?.claimDateInformation?.dischargeHour ?? '',
        })
    }


    if (claimData?.claimCodeInformation) {
        data.push({
            "Segment": "CL1",
            "AdmissionTypeCode": claimData?.claimCodeInformation?.admissionTypeCode,
            "AdmissionSourceCode": claimData?.claimCodeInformation?.admissionSourceCode,
            "PatientStatusCode": claimData?.claimCodeInformation?.patientStatusCode
        })
    }


    if (claimData?.claimDateInformation?.admissionDate) {
        data.push({
            "Segment": "DTP",
            "DateTimeQualifier": "435",   // default value for AdmissionDate qualifier
            "DateTimePeriodFormatQualifier": "D8",
            "DateTimePeriod": claimData?.claimDateInformation?.admissionDate ?? ''
        })
    }

    if (claimData?.otherDiagnosisInformationList?.length > 0) {
        data.push(getHealthCareCodeInformation(claimData?.otherDiagnosisInformationList ?? []));
    }

    if (claimData?.principalDiagnosis) {
        data.push({
            "Segment": "HI",
            "HealthCareCodeInformation": {
                "qualifierCode": claimData?.principalDiagnosis?.qualifierCode,
                "principalDiagnosisCode": claimData?.principalDiagnosis?.principalDiagnosisCode,
            }
        })
    }

    if (claimData?.admittingDiagnosis) {
        data.push({
            "Segment": "HI",
            "HealthCareCodeInformation": {
                "qualifierCode": claimData?.admittingDiagnosis?.qualifierCode,
                "admittingDiagnosisCode": claimData?.admittingDiagnosis?.admittingDiagnosisCode,

            }
        })
    }

    if (claimData?.claimSupplementalInformation?.claimControlNumber) {
        data.push({
            "Segment": "REF",
            "ReferenceIdentificationQualifier": 'F8',
            "ReferenceIdentification": claimData?.claimSupplementalInformation?.claimControlNumber ?? ''
        })
    }

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}

function getHealthCareCodeInformation(diagnosis: any[]) {
    const segment: StringObject = {
        "Segment": "HI",
    };

    if (diagnosis && diagnosis.length) {
        diagnosis.forEach((code, index) => {
            segment[`HealthCareCodeInformation${index + 1}`] = {
                "qualifierCode": code.qualifierCode,
                "otherDiagnosisCode": code.otherDiagnosisCode
            };
        })
    }
    return segment;
}