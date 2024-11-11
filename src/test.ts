import { generate837I } from "./837i.generator";

const payload1: any = {
    "controlNumber": "541435696",
    "submitter": {
        "organizationName": "Institutional Hospital",
        "contactInformation": {
            "name": "Institutional Hospital",
            "phoneNumber": "1215550100"
        },
        "npi": "1323132122"
    },
    "receiver": {
        "organizationName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)",
        "payerId": "1255"
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
    "controlNumber": "753098499",
    "submitter": {
        "organizationName": "Institutional Hospital",
        "contactInformation": {
            "name": "Institutional Hospital",
            "phoneNumber": "1215550100"
        },
        "npi": "1323132122"
    },
    "receiver": {
        "organizationName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)",
        "payerId": "1255"
    },
    "subscriber": {
        "memberId": "123456789",
        "paymentResponsibilityLevelCode": "P",
        "firstName": "Test 1",
        "lastName": "John",
        "gender": "M",
        "dateOfBirth": "20001220",
        "policyNumber": "123456789",
        "address": {
            "address1": "PO BOX 660044",
            "city": "Dallas",
            "state": "TX",
            "postalCode": "75266"
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
        "patientControlNumber": "C0920CA11212",
        "claimChargeAmount": "0.00",
        "placeOfServiceCode": "23",
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
                "serviceDate": "20240920",
                "serviceDateEnd": "20240920",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "96365",
                    "measurementUnit": "UN",
                    "serviceUnitCount": "1",
                    "serviceLineRevenueCode": "0113",
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": [
                            "1"
                        ]
                    },
                    "procedureModifiers": [
                        "LT",
                        "",
                        "",
                        ""
                    ]
                }
            },
            {
                "serviceDate": "20240920",
                "serviceDateEnd": "20240920",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "99439",
                    "measurementUnit": "UN",
                    "serviceUnitCount": "1",
                    "serviceLineRevenueCode": "0113",
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    }
                }
            },
            {
                "serviceDate": "20240920",
                "serviceDateEnd": "20240920",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "99283",
                    "measurementUnit": "UN",
                    "serviceUnitCount": "1",
                    "serviceLineRevenueCode": "0110",
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    },
                    "procedureModifiers": [
                        "25",
                        "",
                        "",
                        ""
                    ]
                }
            },
            {
                "serviceDate": "20240920",
                "serviceDateEnd": "20240920",
                "institutionalService": {
                    "procedureIdentifier": "HC",
                    "lineItemChargeAmount": "0",
                    "procedureCode": "00834",
                    "measurementUnit": "UN",
                    "serviceUnitCount": "1",
                    "serviceLineRevenueCode": "0185",
                    "compositeDiagnosisCodePointers": {
                        "diagnosisCodePointers": []
                    },
                    "procedureModifiers": [
                        "0A",
                        "",
                        "",
                        ""
                    ]
                }
            }
        ],
        "claimDateInformation": {
            "statementBeginDate": "20240920",
            "statementEndDate": "20240920",
            "dischargeHour": "1450",
            "admissionDateAndHour": "202409201432"
        },
        "claimCodeInformation": {
            "admissionTypeCode": "5",
            "patientStatusCode": "03",
            "admissionSourceCode": "6"
        },
        "principalDiagnosis": {
            "qualifierCode": "ABK",
            "principalDiagnosisCode": "A012"
        },
        "admittingDiagnosis": {
            "qualifierCode": "ABJ",
            "admittingDiagnosisCode": "A0104"
        },
        "principalProcedureInformation": {
            "principalProcedureCode": "96365",
            "principalProcedureDateTime": "2024-09-20"
        },
        "diagnosisRelatedGroupInformation": {
            "drugRelatedGroupCode": "1"
        },
        "conditionCodes": [
            {
                "conditionCode": "10"
            },
            {
                "conditionCode": "19"
            },
            {
                "conditionCode": "30"
            },
            {
                "conditionCode": "36"
            }
        ],
        "patientReasonForVisits": [
            {
                "qualifierCode": "APR",
                "patientReasonForVisitCode": "A0104"
            },
            {
                "qualifierCode": "APR",
                "patientReasonForVisitCode": "A012"
            }
        ],
        "occurrenceInformationList": [
            {
                "occurrenceSpanCode": "70",
                "occurrenceSpanCodeDate": "20240925"
            }
        ],
        "occurrenceSpanInformations": [
            {
                "occurrenceSpanCode": "70",
                "occurrenceSpanCodeStartDate": "20240919",
                "occurrenceSpanCodeEndDate": "20240926"
            }
        ],
        "valueInformationList": [
            {
                "valueCode": "6",
                "valueCodeAmount": "110.00"
            }
        ],
        "externalCauseOfInjuries": [
            {
                "qualifierCode": "ABN",
                "externalCauseOfInjury": "A012"
            },
            {
                "qualifierCode": "ABN",
                "externalCauseOfInjury": "A0104"
            }
        ]
    },
    "tradingPartnerServiceId": "66002",
    "tradingPartnerName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)"
}
const result = generate837I(payload, 'V30Z')
console.log('result: ', result);