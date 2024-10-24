import { StringObject } from "../../models/common.model"
import { ClaimInformation, ConditionCode, ConditionCodeList, ExternalCauseOfInjuries, ExternalCauseOfInjury, OccurrenceInformation, OccurrenceInformationList, OccurrenceSpanInformation, OccurrenceSpanInformations, OtherDiagnosisInformation, OtherDiagnosisInformationList, PatientReasonForVisit, PatientReasonForVisits, ValueInformation, ValueInformationList } from "../../models/request.model"
import { formatObject } from "../../utils/global"

/**
 * The function `generate2300` in TypeScript generates a formatted string based on the provided
 * `ClaimInformation` data.
 * @param {ClaimInformation} claimData - The `generate2300` function takes in a `ClaimInformation`
 * object named `claimData` as a parameter. This object contains various pieces of information related
 * to a claim, such as patient control number, claim charge amount, place of service code, claim
 * frequency code, dates, diagnosis information,
 * @returns The function `generate2300` is returning a formatted string that contains various segments
 * and data related to a claim based on the `ClaimInformation` provided as input. The segments include
 * CLM, DTP, CL1, HI, and REF, each with specific data fields related to the claim. The data is
 * formatted and joined with '~' as a delimiter before being returned.
 */
export function generate2300(claimData: ClaimInformation) {
    const data: any = [
        {
            "Segment": "CLM",
            "PatientControlNumber": claimData?.patientControlNumber ?? '',
            "MonetaryAmount": claimData?.claimChargeAmount ? claimData?.claimChargeAmount.toString() : '0.00',
            "facilityTypeCode": '',
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

    if (claimData?.otherDiagnosisInformationList && claimData?.otherDiagnosisInformationList?.length > 0) {
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

    if (claimData?.admittingDiagnosis && claimData?.admittingDiagnosis?.admittingDiagnosisCode) {
        data.push({
            "Segment": "HI",
            "HealthCareCodeInformation": {
                "qualifierCode": claimData?.admittingDiagnosis?.qualifierCode,
                "admittingDiagnosisCode": claimData?.admittingDiagnosis?.admittingDiagnosisCode,

            }
        })
    }

    if (claimData?.conditionCodes && claimData?.conditionCodes.length) {
        data.push(getConditionCodeInformation(claimData?.conditionCodes))
    }
 
    if (claimData?.occurrenceInformationList && claimData?.occurrenceInformationList.length) {
        data.push(getOccurenceCodeInformation(claimData?.occurrenceInformationList))
    }

    if (claimData?.occurrenceSpanInformations && claimData?.occurrenceSpanInformations.length) {
        data.push(getOccurenceSpanCodeInformation(claimData?.occurrenceSpanInformations))
    }

    if (claimData?.valueInformationList && claimData?.valueInformationList.length) {
        data.push(getValueCodeInformation(claimData?.valueInformationList))
    }

    if (claimData?.patientReasonForVisits && claimData?.patientReasonForVisits.length) {
        data.push(getPatientReasonForVisits(claimData?.patientReasonForVisits))
    }

    if (claimData?.externalCauseOfInjuries && claimData?.externalCauseOfInjuries.length) {
        data.push(getExternalCauseOfInjuries(claimData?.externalCauseOfInjuries))
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

/**
 * The function `getHealthCareCodeInformation` creates a segment object with health care code
 * information based on an array of diagnosis codes.
 * @param {any[]} diagnosis - The `diagnosis` parameter is an array containing information about health
 * care diagnosis codes. Each element in the array is an object with the following properties:
 * @returns The function `getHealthCareCodeInformation` returns an object containing health care code
 * information based on the provided diagnosis array. The object has a "Segment" property with the
 * value "HI", and additional properties named "HealthCareCodeInformation1",
 * "HealthCareCodeInformation2", etc., for each diagnosis in the input array. Each of these properties
 * contains an object with "qualifierCode" and
 */
function getHealthCareCodeInformation(diagnosis: OtherDiagnosisInformationList) {
    const segment: StringObject = {
        "Segment": "HI",
    };

    if (diagnosis && diagnosis.length) {
        diagnosis.forEach((code: OtherDiagnosisInformation, index) => {
            segment[`HealthCareCodeInformation${index + 1}`] = {
                "qualifierCode": code.qualifierCode,
                "otherDiagnosisCode": code.otherDiagnosisCode
            };
        })
    }
    return segment;
}


function getConditionCodeInformation(conditioncodes : ConditionCodeList) {
    const segment: StringObject = {
        "Segment": "HI",
    };

    if (conditioncodes && conditioncodes.length) {
        conditioncodes.forEach((code: ConditionCode, index) => {
            segment[`ConditionCodeInformation${index + 1}`] = {
                  "CodeListQualifierCode": "BG",
                  "ConditionCode": code.conditionCode
            };
        })
    }
    return segment;
}


function getOccurenceCodeInformation(occurenceCode: OccurrenceInformationList) {
    const segment: StringObject = {
        "Segment": "HI",
    };

    if (occurenceCode && occurenceCode?.length) {
        occurenceCode.forEach((code: OccurrenceInformation, index) => {
            segment[`OccurenceCodeInformation${index + 1}`] = {
               "CodeListQualifierCode": "BH",
                "OccurrenceCode": code.occurrenceSpanCode,
                "DateQualifier": "D8",
                "Date": code.occurrenceSpanCodeDate
            };
        })
    }
    return segment;
}


function getOccurenceSpanCodeInformation(occurenceSpanCode: OccurrenceSpanInformations) {
    if (occurenceSpanCode && occurenceSpanCode?.length) {
    const segment: StringObject = {
        "Segment": "HI",
    };

        occurenceSpanCode.forEach((code: OccurrenceSpanInformation, index) => {
            segment[`OccurenceCodeInformation${index + 1}`] = {
               "CodeListQualifierCode": "BI",
                "OccurrenceCode": code.occurrenceSpanCode,
                "DateQualifier": "RD8",
                "StartDate": code.occurrenceSpanCodeStartDate + '-' + code.occurrenceSpanCodeEndDate
            };
        })
        return segment;
    }
}


function getValueCodeInformation(valueCode: ValueInformationList) {
    if (valueCode && valueCode?.length) {
    const segment: StringObject = {
        "Segment": "HI",
    };

        valueCode.forEach((code: ValueInformation, index) => {
            segment[`ValueCodeInformation${index + 1}`] = {
               "CodeListQualifierCode": "BE",
               "ValueCode": code.valueCode,
               "Unknown1": '',
               "Unknown2": '',
               "MonetaryAmount": code.valueCodeAmount
            };
        })
        return segment;
    }
}

function getPatientReasonForVisits(codeVisit: PatientReasonForVisits) {
    if (codeVisit && codeVisit?.length) {
    const segment: StringObject = {
        "Segment": "HI",
    };

        codeVisit.forEach((code: PatientReasonForVisit, index) => {
            segment[`PatientReasonForVisit${index + 1}`] = {
               "qualifierCode": code.qualifierCode,
               "PatientReasonCode": code.patientReasonForVisitCode
            };
        })
        return segment;
    }
}

function getExternalCauseOfInjuries(codeInjury: ExternalCauseOfInjuries) {
    if (codeInjury && codeInjury?.length) {
    const segment: StringObject = {
        "Segment": "HI",
    };

        codeInjury.forEach((code: ExternalCauseOfInjury, index) => {
            segment[`ExternalCauseOfInjury${index + 1}`] = {
               "qualifierCode": code.qualifierCode,
               "CauseOfInjury": code.externalCauseOfInjury
            };
        })
        return segment;
    }
}