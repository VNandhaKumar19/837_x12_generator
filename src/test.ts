import { generate837I } from "./837i.generator";

const payload1: any = {
    "controlNumber": "541435696",
    "submitter": {
        "organizationName": "Institutional Hospital",
        "contactInformation": {
            "name": "Institutional Hospital",
            "phoneNumber": "1215550100"
        }
    },
    "receiver": {
        "organizationName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)"
    },
    "subscriber": {
        "memberId": "87445",
        "paymentResponsibilityLevelCode": "P",
        "firstName": "Institutional",
        "lastName": "Patient",
        "gender": "F",
        "dateOfBirth": "20010118",
        "policyNumber": "87445",
        "address": {
            "address1": "3250 Westchester Ave",
            "city": "New York",
            "state": "NY",
            "postalCode": "10461"
        },
        "groupNumber": "15453"
    },
    "providers": [
        {
            "providerType": "BillingProvider",
            "organizationName": "Institutional Hospital",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            },
            "contactInformation": {
                "name": "Institutional Hospital",
                "phoneNumber": "1215550100"
            },
            "employerId": "012740124",
            "taxonomyCode": "200000000X"
        },
        {
            "providerType": "RenderingProvider",
            "taxonomyCode": "200000000X",
            "firstName": "Trizetto",
            "lastName": "Institutional",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            },
            "ssn": "124444444",
            "npi": "2124511144"
        },
        {
            "providerType": "AttendingProvider",
            "taxonomyCode": "200000000X",
            "firstName": "Trizetto",
            "lastName": "Institutional",
            "npi": "2124511144"
        }
    ],
    "claimInformation": {
        "claimFilingCode": "ZZ",
        "patientControlNumber": "C0826CA11111",
        "claimChargeAmount": "485.00",
        "placeOfServiceCode": "11",
        "claimFrequencyCode": "1",
        "planParticipationCode": "A",
        "benefitsAssignmentCertificationIndicator": "Y",
        "releaseInformationCode": "I",
        "serviceFacilityLocation": {
            "organizationName": "Institutional Hospital",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            }
        },
        "serviceLines": [
            {
                "serviceDate": "20240826",
                "serviceDateEnd": "20240826",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": '250',
                    "procedureCode": "99202",
                    "measurementUnit": "UN",
                    "serviceUnitCount": '1',
                    "serviceLineRevenueCode": '111',
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    },
                    "procedureModifiers": [
                        "1D",
                        "1E",
                        "",
                        ""
                    ]
                }
            },
            {
                "serviceDate": "20240826",
                "serviceDateEnd": "20240826",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": '235',
                    "procedureCode": "99238",
                    "measurementUnit": "UN",
                    "serviceUnitCount": '1',
                    "serviceLineRevenueCode": '112',
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    },
                    "procedureModifiers": [
                        "2R",
                        "2K",
                        "",
                        ""
                    ]
                }
            }
        ],
        "claimDateInformation": {
            "statementBeginDate": "20240826",
            "statementEndDate": "20240826",
            "dischargeHour": "0100",
            "admissionDateAndHour": "2024082601"
        },
        "claimCodeInformation": {
            "admissionTypeCode": "3",
            "patientStatusCode": "02",
            "admissionSourceCode": "2"
        },
        "principalDiagnosis": {
            "qualifierCode": "ABK",
            "principalDiagnosisCode": "A0100"
        },
        "admittingDiagnosis": {
            "qualifierCode": "ABJ"
        },
        "principalProcedureInformation": {
            "principalProcedureCode": "99238",
            "principalProcedureDateTime": "2024-08-26"
        },
        "diagnosisRelatedGroupInformation": {
            "drugRelatedGroupCode": 6
        }
    },
    "tradingPartnerServiceId": "66002",
    "tradingPartnerName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)"
}

const payload: any = {
    "controlNumber": "724711979",
    "submitter": {
        "organizationName": "Institutional Hospital",
        "contactInformation": {
            "name": "Institutional Hospital",
            "phoneNumber": "1215550100"
        }
    },
    "receiver": {
        "organizationName": "Zing Health UB- formerly Zing Choice HMO UB"
    },
    "subscriber": {
        "memberId": "312323131",
        "paymentResponsibilityLevelCode": "P",
        "firstName": "John",
        "lastName": "David",
        "gender": "M",
        "dateOfBirth": "19970916",
        "policyNumber": "312323131",
        "address": {
            "address1": "Los Angeles International Airport",
            "city": "Los Angeles",
            "state": "CA",
            "postalCode": "90045"
        }
    },
    "providers": [
        {
            "providerType": "BillingProvider",
            "organizationName": "Institutional Hospital",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            },
            "contactInformation": {
                "name": "Institutional Hospital",
                "phoneNumber": "1215550100"
            },
            "employerId": "012740124",
            "taxonomyCode": "200000000X"
        },
        {
            "providerType": "RenderingProvider",
            "taxonomyCode": "200000000X",
            "firstName": "Trizetto",
            "lastName": "Institutional",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            },
            "ssn": "124444444",
            "npi": "2124511144"
        },
        {
            "providerType": "AttendingProvider",
            "taxonomyCode": "200000000X",
            "firstName": "Trizetto",
            "lastName": "Institutional",
            "npi": "2124511144"
        }
    ],
    "claimInformation": {
        "claimFilingCode": "ZZ",
        "patientControlNumber": "C0917CA11142",
        "claimChargeAmount": "0.00",
        "placeOfServiceCode": "11",
        "claimFrequencyCode": "1",
        "planParticipationCode": "A",
        "benefitsAssignmentCertificationIndicator": "Y",
        "releaseInformationCode": "I",
        "serviceFacilityLocation": {
            "organizationName": "Institutional Hospital",
            "address": {
                "address1": "3251 Cedar St",
                "city": "Philadelphia",
                "state": "PA",
                "postalCode": "19134"
            }
        },
        "serviceLines": [
            {
                "serviceDate": "20240917",
                "serviceDateEnd": "20240917",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "99203",
                    "measurementUnit": "UN",
                    "serviceUnitCount": "1",
                    "serviceLineRevenueCode": "0110",
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    }
                }
            }
        ],
        "claimDateInformation": {
            "statementBeginDate": "20240917",
            "statementEndDate": "20240917",
            "dischargeHour": "0100",
            "admissionDateAndHour": "202409170100"
        },
        "claimCodeInformation": {
            "admissionTypeCode": "2",
            "patientStatusCode": "01",
            "admissionSourceCode": "1"
        },
        "principalDiagnosis": {
            "qualifierCode": "ABK",
            "principalDiagnosisCode": "J069"
        },
        "admittingDiagnosis": {
            "qualifierCode": "ABJ",
            "admittingDiagnosisCode": "B948"
        },
        "principalProcedureInformation": {
            "principalProcedureCode": "99203",
            "principalProcedureDateTime": "2024-09-17"
        },
        "diagnosisRelatedGroupInformation": {
            "drugRelatedGroupCode": "5"
        },
        "conditionCodes": [
            {
                "conditionCode": "10"
            }
        ]
    },
    "tradingPartnerServiceId": "U3248",
    "tradingPartnerName": "Zing Health UB- formerly Zing Choice HMO UB"
}
const result = generate837I(payload, 'V30Z')
console.log('result: ', result);