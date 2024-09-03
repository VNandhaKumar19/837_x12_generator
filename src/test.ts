import { generate837I } from "./837i.generator";

const payload: any = {
    "controlNumber": "558761039",
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
                    "lineItemChargeAmount": 250,
                    "procedureCode": "99202",
                    "measurementUnit": "UN",
                    "serviceUnitCount": 1,
                    "serviceLineRevenueCode": '110',
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
                    "lineItemChargeAmount": 235,
                    "procedureCode": "99238",
                    "measurementUnit": "UN",
                    "serviceUnitCount": 1,
                    "serviceLineRevenueCode": '110',
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
            "dischargeHour": "1130",
            "admissionDateAndHour": "202407271242"
        },
        "claimCodeInformation": {
            "admissionTypeCode": "1",
            "patientStatusCode": "01",
            "admissionSourceCode": "1"
        },
        "principalDiagnosis": {
            "qualifierCode": "ABK",
            "principalDiagnosisCode": "A0100"
        },
        "admittingDiagnosis": {
            "qualifierCode": "ABJ"
        }
    },
    "tradingPartnerServiceId": "66002",
    "tradingPartnerName": "BCBS Texas - Star and Chip UB (DOS 5/1/24 & after)"
}
const result = generate837I(payload, '')
console.log('result: ', result);