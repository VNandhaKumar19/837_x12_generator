import { Email, NumberString, RawDateString, RawHourString } from "./common.model";

export type RequestBody = {
    controlNumber: string,
    tradingPartnerServiceId: string,
    submitter: Submitter,
    receiver: Receiver,
    subscriber: Subscriber,
    dependent: Dependent,
    providers: Providers,
    operatingPhysician: OperatingPhysician,
    claimInformation: ClaimInformation,
    payerAddress?: Address,
    supervising_same_as_rendering?: any
}

type ClaimInformation = {
    claimFilingCode: string,
    patientControlNumber: string,
    claimChargeAmount: NumberString,
    placeOfServiceCode: NumberString,
    claimFrequencyCode: string,
    signatureIndicator: string,
    planParticipationCode: string,
    releaseInformationCode: string,
    benefitsAssignmentCertificationIndicator: string,
    billingNote: string,
    claimDateInformation: ClaimDateInformation,
    claimCodeInformation: ClaimCodeInformation,
    claimSupplementalInformation: ClaimSupplementalInformation,
    conditionCodes: Array<string>,
    principalProcedureInformation: PrincipalProcedureInformation,
    claimPricingInformation: ClaimPricingInformation,
    serviceFacilityLocation: ServiceFacilityLocation,
    serviceLines: ServiceLines,
    principalDiagnosis: PrincipalDiagnosis,
    admittingDiagnosis: AdmittingDiagnosis
}

type ClaimDateInformation = {
    statementBeginDate: RawDateString,
    statementEndDate: RawDateString,
    dischargeHour: RawHourString,
    admissionDateAndHour: NumberString
}

type ClaimCodeInformation = {
    admissionTypeCode: string,
    patientStatusCode: string,
    admissionSourceCode: string
}

type ClaimSupplementalInformation = {
    reportInformation: ReportInformation,
    priorAuthorizationNumber: string,
    autoAccidentState: string
}

type ReportInformation = {
    attachmentReportTypeCode: string,
    attachmentTransmissionCode: string,
    attachmentControlNumber: string
}

type PrincipalProcedureInformation = {
    qualifierCode: string
}

type ClaimPricingInformation = {
    pricingMethodologyCode: string
}

type ServiceFacilityLocation = {
    address: Address,
    organizationName: string
}

type ServiceLines = Array<ServiceLine>;

type ServiceLine = {
    assignedNumber: NumberString,
    institutionalService: InstitutionalService
}

type InstitutionalService = {
    serviceLineRevenueCode: string,
    lineItemChargeAmount: NumberString,
    measurementUnit: string,
    serviceUnitCount: NumberString
}

type PrincipalDiagnosis = {
    qualifierCode: string,
    principalDiagnosisCode: string,
    presentOnAdmissionIndicator: string
}

type AdmittingDiagnosis = {
    qualifierCode: string,
    admittingDiagnosisCode: string
}

type Submitter = {
    organizationName: string,
    taxId: string,
    contactInformation: ContactInformation
}

type ContactInformation = {
    name: string,
    phoneNumber: NumberString,
    email: Email,
    faxNumber: NumberString
}

type Receiver = {
    organizationName: string,
    taxId: string
}

type Subscriber = {
    memberId: string,
    paymentResponsibilityLevelCode: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string,
    address: Address
}

type Address = {
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    countryCode?: string,
    countrySubDivisionCode?: string
}

type Dependent = {
    gender: string,
    relationshipToSubscriberCode: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string
}

type Providers = Array<Provider>;

type Provider = {
    providerType: string,
    npi: string,
    employerId: string,
    organizationName?: string,
    address?: Address,
    firstName?: string,
    lastName?: string,
    taxonomyCode?: string,
    stateLicenseNumber: string,
}

type OperatingPhysician = {
    organizationName: string,
    lastName: string,
    firstName: string,
    npi: string
}