import { Email, NumberString, RawDateString, RawHourString } from "./common.model";

export type RequestBody = {
    tradingPartnerName?: string;
    controlNumber: string,
    tradingPartnerServiceId: string,
    submitter: Submitter,
    receiver: Receiver,
    subscriber: Subscriber,
    dependent?: Dependent,
    providers: Providers,
    operatingPhysician?: OperatingPhysician,
    claimInformation: ClaimInformation,
    payerAddress?: Address,
    supervising_same_as_rendering?: any
}

export type ClaimInformation = {
    otherDiagnosisInformationList?: OtherDiagnosisInformationList;
    claimFilingCode: string,
    patientControlNumber: string,
    claimChargeAmount: NumberString | Number,
    placeOfServiceCode: NumberString,
    claimFrequencyCode: string,
    signatureIndicator?: string,
    planParticipationCode: string,
    releaseInformationCode: string,
    benefitsAssignmentCertificationIndicator: string,
    billingNote?: string,
    claimDateInformation: ClaimDateInformation,
    claimCodeInformation: ClaimCodeInformation,
    claimSupplementalInformation?: ClaimSupplementalInformation,
    conditionCodesList?: ConditionCodeList,
    principalProcedureInformation?: PrincipalProcedureInformation,
    claimPricingInformation?: ClaimPricingInformation,
    serviceFacilityLocation: ServiceFacilityLocation,
    serviceLines: ServiceLines,
    principalDiagnosis: PrincipalDiagnosis,
    admittingDiagnosis: AdmittingDiagnosis,
    occurrenceInformationList?: OccurrenceInformationList,
    valueInformationList?: ValueInformationList,
    occurrenceSpanInformations?: OccurrenceSpanInformations,
    patientReasonForVisits?: PatientReasonForVisits,
    externalCauseOfInjuries?: ExternalCauseOfInjuries
    diagnosisRelatedGroupInformation: DiagnosisRelatedGroupInformation
}

export type ClaimDateInformation = {
    admissionDate?: RawDateString;
    statementBeginDate: RawDateString,
    statementEndDate: RawDateString,
    dischargeHour: RawHourString,
    admissionDateAndHour: NumberString
}

export type ClaimCodeInformation = {
    admissionTypeCode: string,
    patientStatusCode: string,
    admissionSourceCode: string
}

export type ClaimSupplementalInformation = {
    claimControlNumber: string;
    reportInformation: ReportInformation,
    priorAuthorizationNumber: string,
    autoAccidentState: string
}

export type ReportInformation = {
    attachmentReportTypeCode: string,
    attachmentTransmissionCode: string,
    attachmentControlNumber: string
}

export type PrincipalProcedureInformation = {
    principalProcedureCode: string,
    principalProcedureDateTime: string,
}

export type ClaimPricingInformation = {
    pricingMethodologyCode: string
}

export type ServiceFacilityLocation = {
    address: Address,
    organizationName: string
}

export type ServiceLines = Array<ServiceLine>;

export type ServiceLine = {
    serviceLineReferenceInformation?: { priorAuthorization: { priorAuthorizationOrReferralNumber: string }[] },
    serviceLineSupplementalInformation?: Attachment[],
    serviceDate: RawDateString,
    serviceDateEnd?: RawDateString,
    procedureModifiers?: string[],
    assignedNumber?: NumberString,
    institutionalService: InstitutionalService,
    lineAdjudicationInformation?: LineAdjudicationInformation
}

export type LineAdjudicationInformation = {
    otherPayerPrimaryIdentifier: string,
    serviceLinePaidAmount: NumberString | number,
    serviceIdQualifier: string,
    procedureCode: string,
    procedureModifier: string[],
    paidServiceUnitCount: NumberString,
    claimAdjustmentInformation: ClaimAdjustmentInformation,
    adjudicationOrPaymentDate: string
}[]

export type ClaimAdjustmentInformation = {
    adjustmentGroupCode: string,
    adjustmentDetails: {
        adjustmentReasonCode: string,
        adjustmentAmount: string
    }[]
}[]

export type Attachment = {
    attachmentReportTypeCode: string,
    attachmentTransmissionCode: string,
    attachmentControlNumber: string
}

export type InstitutionalService = {
    procedureIdentifier?: string,
    procedureCode?: string,
    procedureModifiers?: string[],
    serviceLineRevenueCode?: Number,
    lineItemChargeAmount: NumberString | Number,
    measurementUnit: string,
    serviceUnitCount: NumberString | Number,
    compositeDiagnosisCodePointers?: {
        diagnosisCodePointers: string[]
    }
}

export type PrincipalDiagnosis = {
    qualifierCode: string,
    principalDiagnosisCode: string,
    presentOnAdmissionIndicator?: string
}

export type AdmittingDiagnosis = {
    qualifierCode: string,
    admittingDiagnosisCode?: string
}

export type DiagnosisRelatedGroupInformation ={
    drugRelatedGroupCode: NumberString
}

export type Submitter = {
    organizationName: string,
    taxId?: string,
    contactInformation: ContactInformation
}

export type ContactInformation = {
    name: string,
    phoneNumber?: string,
    email?: Email,
    faxNumber?: NumberString
}

export type Receiver = {
    organizationName: string,
    taxId?: string
}

export type Subscriber = {
    groupNumber?: string;
    memberId: string,
    paymentResponsibilityLevelCode: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string,
    address: Address,
    policyNumber: string
}

export type Address = {
    zipcode?: string;
    address1: string,
    city: string,
    state: string,
    postalCode?: string,
    countryCode?: string,
    countrySubDivisionCode?: string
}

export type Dependent = {
    address?: Address;
    gender: string,
    relationshipToSubscriberCode: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string
}

export type Providers = Array<Provider>;

export type Provider = {
    ssn?: string;
    providerType: string,
    npi?: string,
    employerId?: string,
    organizationName?: string,
    address?: Address,
    firstName?: string,
    lastName?: string,
    taxonomyCode?: string,
    stateLicenseNumber?: string,
    contactInformation?: ContactInformation
}

export type OperatingPhysician = {
    organizationName: string,
    lastName: string,
    firstName: string,
    npi: string
} 

export type OtherDiagnosisInformationList = Array<OtherDiagnosisInformation>;
export type OtherDiagnosisInformation = {
    qualifierCode: string,
    otherDiagnosisCode: string
}

export type ConditionCodeList = Array<ConditionCode>; 
export type ConditionCode = {
    conditionCode: string
}

export type OccurrenceInformationList =  Array<OccurrenceInformation>;
export type OccurrenceInformation = {
    occurrenceSpanCode: string,
    occurrenceSpanCodeDate: string
}

export type OccurrenceSpanInformations =  Array<OccurrenceSpanInformation>;
export type OccurrenceSpanInformation = {
    occurrenceSpanCode: string,
    occurrenceSpanCodeStartDate: string,
    occurrenceSpanCodeEndDate: string
}

export type ValueInformationList =  Array<ValueInformation>;
export type ValueInformation = {
    valueCode: string,
    valueCodeAmount: string
}

export type PatientReasonForVisits =  Array<PatientReasonForVisit>;
export type PatientReasonForVisit = {
    qualifierCode: string,
    patientReasonForVisitCode: string
}

export type ExternalCauseOfInjuries =  Array<ExternalCauseOfInjury>;
export type ExternalCauseOfInjury = {
    qualifierCode: string,
    externalCauseOfInjury: string
}
