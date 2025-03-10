import { generate837I } from "./837i.generator";
import * as logger from './utils/logger';
logger;
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
    "controlNumber": "478640193",
    "submitter": {
      "organizationName": "Trizetto2",
      "npi": "1801426952",
      "contactInformation": {
        "name": "Trizetto2",
        "phoneNumber": "9348498087"
      }
    },
    "receiver": {
      "organizationName": "Atlantic PPO to Rider Insurance",
      "payerId": "a"
    },
    "subscriber": {
      "memberId": "32565858",
      "paymentResponsibilityLevelCode": "P",
      "firstName": "Sukumar",
      "lastName": "N",
      "gender": "M",
      "dateOfBirth": "19840218",
      "policyNumber": "32565858",
      "address": {
        "address1": "235 Hog Mountain Rd",
        "city": "Jefferson",
        "state": "GA",
        "postalCode": "30549"
      }
    },
    "providers": [
      {
        "providerType": "BillingProvider",
        "npi": "1801426952",
        "taxonomyCode": "225100000X",
        "organizationName": "Trizetto2",
        "address": {
          "address1": "1 WARREN WAY",
          "city": "PROVIDENCE",
          "state": "NY",
          "postalCode": "10003"
        },
        "contactInformation": {
          "name": "Robert WilliamsTwo",
          "phoneNumber": "4052724905"
        },
        "first_name": "Robert",
        "lastName": "WilliamsTwo",
        "ssn": "124545784"
      },
      {
        "providerType": "ReferringProvider",
        "firstName": "Richard",
        "lastName": "Synder",
        "taxonomyCode": "103TS0200X",
        "address": {
          "address1": "2041 PINETRAIL ST",
          "city": "LAS CRUCES",
          "state": "NM",
          "postalCode": "880126004"
        },
        "npi": "1912229436",
        "ssn": "666325926"
      },
      {
        "providerType": "OrderingProvider",
        "firstName": "GEORGE",
        "lastName": "DELOSA",
        "taxonomyCode": "183500000X",
        "npi": "1679689251",
        "ssn": "666325926"
      },
      {
        "providerType": "SupervisingProvider",
        "npi": "1801426952",
        "taxonomyCode": "225100000X",
        "firstName": "Robert",
        "lastName": "WilliamsTwo",
        "address": {
          "address1": "1 WARREN WAY",
          "city": "PROVIDENCE",
          "state": "NY",
          "postalCode": "10003"
        },
        "ssn": "124545784"
      },
      {
        "providerType": "RenderingProvider",
        "taxonomyCode": "225100000X",
        "firstName": "Robert",
        "lastName": "WilliamsTwo",
        "address": {
          "address1": "1 WARREN WAY",
          "city": "PROVIDENCE",
          "state": "NY",
          "postalCode": "10003"
        },
        "npi": "1801426952",
        "ssn": "124545784"
      }
    ],
    "claimInformation": {
      "claimFilingCode": "ZZ",
      "patientControlNumber": "C1212CA26331",
      "claimChargeAmount": "300.00",
      "placeOfServiceCode": "11",
      "claimFrequencyCode": "1",
      "signatureIndicator": "Y",
      "planParticipationCode": "A",
      "benefitsAssignmentCertificationIndicator": "Y",
      "releaseInformationCode": "I",
      "claimSupplementalInformation": {
        "claimNumber": "C1212CA26478",
        "reportInformation": [
          {
            "attachmentReportTypeCode": "06",
            "attachmentTransmissionCode": "EL",
            "attachmentControlNumber": 294436475,
            "name": "export-pdf-demo.pdf"
          },
          {
            "attachmentReportTypeCode": "04",
            "attachmentTransmissionCode": "EL",
            "attachmentControlNumber": 573801951,
            "name": "m9e3nlk-7.pdf"
          },
          {
            "attachmentReportTypeCode": "06",
            "attachmentTransmissionCode": "EL",
            "attachmentControlNumber": 958223390,
            "name": "m9e3nlk-4.pdf"
          }
        ]
      },
      "healthCareCodeInformation": [
        {
          "diagnosisTypeCode": "ABK",
          "diagnosisCode": "K810"
        },
        {
          "diagnosisTypeCode": "ABF",
          "diagnosisCode": "A0100"
        }
      ],
      "serviceFacilityLocation": {
        "organizationName": "Trizetto2",
        "address": {
          "address1": "213 E 117TH ST",
          "city": "NEW YORK",
          "state": "NY",
          "postalCode": "100354814"
        }
      },
      "serviceLines": [
        {
          "serviceDate": "20240821",
          "serviceDateEnd": "20240821",
          "professionalService": {
            "procedureIdentifier": "HC",
            "lineItemChargeAmount": 300,
            "procedureCode": "99202",
            "measurementUnit": "UN",
            "serviceUnitCount": 1,
            "compositeDiagnosisCodePointers": {
              "diagnosisCodePointers": [
                "2"
              ]
            },
            "procedureModifiers": [
              "0A",
              "",
              "",
              ""
            ]
          }
        }
      ]
    },
    "tradingPartnerServiceId": "J2068",
    "tradingPartnerName": "Atlantic PPO to Rider Insurance"
  }
const result = generate837I(payload, 'V30Z')
console.log('result: ', result);