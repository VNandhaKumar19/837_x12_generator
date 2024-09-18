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
                },
                "serviceLineReferenceInformation": {
                    "priorAuthorization": [
                        {
                            "priorAuthorizationOrReferralNumber": "5411"
                        }
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
            "admissionDateAndHour": "202408260100"
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
        },
        "claimSupplementalInformation": {
            "priorAuthorizationNumber": [
                "5411"
            ]
        }
    },
    "tradingPartnerServiceId": "66002",
    "tradingPartnerName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)"
}

const payload: any = {
    "controlNumber": "428523774",
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
        "memberId": "432424",
        "paymentResponsibilityLevelCode": "P",
        "firstName": "John",
        "lastName": "Cena",
        "gender": "M",
        "dateOfBirth": "19900918",
        "policyNumber": "432424",
        "address": {
            "address1": "3rd Street Promenade",
            "city": "Santa Monica",
            "state": "CA",
            "postalCode": "90401"
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
        "patientControlNumber": "C0918CA11144",
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
                "serviceDate": "20240918",
                "serviceDateEnd": "20240918",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "99202",
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
            "statementBeginDate": "20240918",
            "statementEndDate": "20240918",
            "dischargeHour": "202409180000",
            "admissionDateAndHour": "202409180000"
        },
        "claimCodeInformation": {
            "admissionTypeCode": "2",
            "patientStatusCode": "01",
            "admissionSourceCode": "2"
        },
        "principalDiagnosis": {
            "qualifierCode": "ABK",
            "principalDiagnosisCode": "A054"
        },
        "admittingDiagnosis": {
            "qualifierCode": "ABJ",
            "admittingDiagnosisCode": "A038"
        },
        "principalProcedureInformation": {
            "principalProcedureCode": "99202",
            "principalProcedureDateTime": "2024-09-18"
        },
        "diagnosisRelatedGroupInformation": {
            "drugRelatedGroupCode": "6"
        },
        "otherDiagnosisInformationList": [
            {
                "qualifierCode": "ABF",
                "otherDiagnosisCode": "A014"
            },
            {
                "qualifierCode": "ABF",
                "otherDiagnosisCode": "A011"
            },
            {
                "qualifierCode": "ABF",
                "otherDiagnosisCode": "A0104"
            }
        ],
        "conditionCodes": [
            {
                "conditionCode": "36"
            }
        ]
    },
    "tradingPartnerServiceId": "U3248",
    "tradingPartnerName": "Zing Health UB- formerly Zing Choice HMO UB"
}
const result = generate837I(payload, 'V30Z')
console.log('result: ', result);