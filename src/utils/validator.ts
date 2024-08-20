import { AdmittingDiagnosis, Attachment, ClaimAdjustmentInformation, ClaimCodeInformation, ClaimDateInformation, ClaimPricingInformation, ClaimSupplementalInformation, InstitutionalService, LineAdjudicationInformation, PrincipalDiagnosis, PrincipalProcedureInformation, ReportInformation, ServiceFacilityLocation, ServiceLine, ServiceLines, Address, ClaimInformation, ContactInformation, Dependent, OperatingPhysician, Provider, Providers, Receiver, RequestBody, Submitter, Subscriber } from "../models/request.model";
import { isOptional, isString, isAny, isNumberString, isEmail, isArray, isRawDateString, isRawHourString } from './validators.util';

// Validation function for RequestBody
export function validateRequestBody(body: any): body is RequestBody {
    return (
        isOptional(isString)(body.tradingPartnerName) &&
        isString(body.controlNumber) &&
        isString(body.tradingPartnerServiceId) &&
        validateSubmitter(body.submitter) &&
        validateReceiver(body.receiver) &&
        validateSubscriber(body.subscriber) &&
        validateDependent(body.dependent) &&
        validateProviders(body.providers) &&
        validateOperatingPhysician(body.operatingPhysician) &&
        validateClaimInformation(body.claimInformation) &&
        isOptional(validateAddress)(body.payerAddress) &&
        isOptional(isAny)(body.supervising_same_as_rendering)
    );
}

function validateSubmitter(submitter: any): submitter is Submitter {
    return (
        isString(submitter.organizationName) &&
        isString(submitter.taxId) &&
        validateContactInformation(submitter.contactInformation)
    );
}

function validateContactInformation(info: any): info is ContactInformation {
    return (
        isString(info.name) &&
        isNumberString(info.phoneNumber) &&
        isEmail(info.email) &&
        isNumberString(info.faxNumber)
    );
}

function validateReceiver(receiver: any): receiver is Receiver {
    return (
        isString(receiver.organizationName) &&
        isString(receiver.taxId)
    );
}

function validateSubscriber(subscriber: any): subscriber is Subscriber {
    return (
        isString(subscriber.groupNumber) &&
        isString(subscriber.memberId) &&
        isString(subscriber.paymentResponsibilityLevelCode) &&
        isString(subscriber.firstName) &&
        isString(subscriber.lastName) &&
        isString(subscriber.gender) &&
        isString(subscriber.dateOfBirth) &&
        validateAddress(subscriber.address)
    );
}

function validateDependent(dependent: any): dependent is Dependent {
    return (
        isOptional(validateAddress)(dependent.address) &&
        isString(dependent.gender) &&
        isString(dependent.relationshipToSubscriberCode) &&
        isString(dependent.firstName) &&
        isString(dependent.lastName) &&
        isString(dependent.dateOfBirth)
    );
}

function validateProviders(providers: any): providers is Providers {
    return isArray(providers, validateProvider);
}

function validateProvider(provider: any): provider is Provider {
    return (
        isOptional(isString)(provider.ssn) &&
        isString(provider.providerType) &&
        isString(provider.npi) &&
        isString(provider.employerId) &&
        isOptional(isString)(provider.organizationName) &&
        isOptional(validateAddress)(provider.address) &&
        isOptional(isString)(provider.firstName) &&
        isOptional(isString)(provider.lastName) &&
        isOptional(isString)(provider.taxonomyCode) &&
        isString(provider.stateLicenseNumber)
    );
}

function validateOperatingPhysician(physician: any): physician is OperatingPhysician {
    return (
        isString(physician.organizationName) &&
        isString(physician.lastName) &&
        isString(physician.firstName) &&
        isString(physician.npi)
    );
}

function validateClaimInformation(claimInfo: any): claimInfo is ClaimInformation {
    return (
        isArray(claimInfo.otherDiagnosisInformationList, isAny) &&
        isString(claimInfo.claimFilingCode) &&
        isString(claimInfo.patientControlNumber) &&
        isNumberString(claimInfo.claimChargeAmount) &&
        isNumberString(claimInfo.placeOfServiceCode) &&
        isString(claimInfo.claimFrequencyCode) &&
        isString(claimInfo.signatureIndicator) &&
        isString(claimInfo.planParticipationCode) &&
        isString(claimInfo.releaseInformationCode) &&
        isString(claimInfo.benefitsAssignmentCertificationIndicator) &&
        isString(claimInfo.billingNote) &&
        validateClaimDateInformation(claimInfo.claimDateInformation) &&
        validateClaimCodeInformation(claimInfo.claimCodeInformation) &&
        validateClaimSupplementalInformation(claimInfo.claimSupplementalInformation) &&
        isArray(claimInfo.conditionCodes, isString) &&
        validatePrincipalProcedureInformation(claimInfo.principalProcedureInformation) &&
        validateClaimPricingInformation(claimInfo.claimPricingInformation) &&
        validateServiceFacilityLocation(claimInfo.serviceFacilityLocation) &&
        validateServiceLines(claimInfo.serviceLines) &&
        validatePrincipalDiagnosis(claimInfo.principalDiagnosis) &&
        validateAdmittingDiagnosis(claimInfo.admittingDiagnosis)
    );
}

function validateClaimDateInformation(claimDateInformation: any): claimDateInformation is ClaimDateInformation {
    return (
        isOptional(isRawDateString)(claimDateInformation.admissionDate) &&
        isRawDateString(claimDateInformation.statementBeginDate) &&
        isRawDateString(claimDateInformation.statementEndDate) &&
        isRawHourString(claimDateInformation.dischargeHour) &&
        isNumberString(claimDateInformation.admissionDateAndHour)
    );
}

function validateClaimCodeInformation(claimCodeInformation: any): claimCodeInformation is ClaimCodeInformation {
    return (
        isString(claimCodeInformation.admissionTypeCode) &&
        isString(claimCodeInformation.patientStatusCode) &&
        isString(claimCodeInformation.admissionSourceCode)
    )
}

function validateClaimSupplementalInformation(claimSupplementalInformation: any): claimSupplementalInformation is ClaimSupplementalInformation {
    return (
        isString(claimSupplementalInformation.claimControlNumber) &&
        isString(claimSupplementalInformation.priorAuthorizationNumber) &&
        isString(claimSupplementalInformation.autoAccidentState) &&
        validateReportInformation(claimSupplementalInformation.reportInformation)
    )
}

function validatePrincipalProcedureInformation(principalProcedureInformation: any): principalProcedureInformation is PrincipalProcedureInformation {
    return (
        isString(principalProcedureInformation.qualifierCode)
    );
}

function validateClaimPricingInformation(claimPricingInformation: any): claimPricingInformation is ClaimPricingInformation {
    return (
        isString(claimPricingInformation.pricingMethodologyCode)
    );
}

function validateServiceFacilityLocation(serviceFacilityLocation: any): serviceFacilityLocation is ServiceFacilityLocation {
    return (
        validateAddress(serviceFacilityLocation.address) &&
        isString(serviceFacilityLocation.organizationName)
    );
}

function validateServiceLines(serviceLines: any): serviceLines is ServiceLines {
    return (
        isArray(serviceLines, validateServiceLine)
    );
}

function validatePrincipalDiagnosis(principalDiagnosis: any): principalDiagnosis is PrincipalDiagnosis {
    return (
        isString(principalDiagnosis.qualifierCode) &&
        isString(principalDiagnosis.principalDiagnosisCode) &&
        isString(principalDiagnosis.presentOnAdmissionIndicator)
    );
}

function validateAdmittingDiagnosis(admittingDiagnosis: any): admittingDiagnosis is AdmittingDiagnosis {
    return (
        isString(admittingDiagnosis.admittingDiagnosis) &&
        isString(admittingDiagnosis.admittingDiagnosisCode)
    )
}

function validateServiceLine(serviceLine: any): serviceLine is ServiceLine {
    return (
        validateServiceLineReferenceInformation(serviceLine.serviceLineReferenceInformation) &&
        isArray(serviceLine.serviceLineSupplementalInformation, validateServiceLineSupplementalInformation) &&
        isRawDateString(serviceLine.serviceDate) &&
        isArray(serviceLine.procedureModifiers, isString) &&
        isNumberString(serviceLine.assignedNumber) &&
        validateInstitutionalService(serviceLine.institutionalService) &&
        validateLineAdjudicationInformation(serviceLine.lineAdjudicationInformation)
    );
}

function validateServiceLineReferenceInformation(serviceLineReferenceInformation: any): serviceLineReferenceInformation is { priorAuthorization: { priorAuthorizationOrReferralNumber: string }[] } {
    return (
        validatePriorAuthorization(serviceLineReferenceInformation.priorAuthorization)
    )
}

function validatePriorAuthorization(priorAuthorization: any): priorAuthorization is { priorAuthorizationOrReferralNumber: string }[] {
    return (
        isArray(priorAuthorization.priorAuthorizationOrReferralNumber, isString)
    )
}

function validateServiceLineSupplementalInformation(serviceLineSupplementalInformation: any): serviceLineSupplementalInformation is Attachment {
    return (
        isString(serviceLineSupplementalInformation.attachmentReportTypeCode) &&
        isString(serviceLineSupplementalInformation.attachmentTransmissionCode) &&
        isString(serviceLineSupplementalInformation.attachmentControlNumber)
    );
}

function validateInstitutionalService(institutionalService: any): institutionalService is InstitutionalService {
    return (
        isArray(institutionalService.procedureModifiers, isString) &&
        isString(institutionalService.serviceLineRevenueCode) &&
        isNumberString(institutionalService.lineItemChargeAmount) &&
        isString(institutionalService.measurementUnit) &&
        isNumberString(institutionalService.serviceUnitCount)
    )
}

function validateLineAdjudicationInformation(lineAdjudicationInformation: any): lineAdjudicationInformation is LineAdjudicationInformation {
    return (
        isString(lineAdjudicationInformation.otherPayerPrimaryIdentifier) &&
        isNumberString(lineAdjudicationInformation.serviceLinePaidAmount) &&
        isString(lineAdjudicationInformation.serviceIdQualifier) &&
        isString(lineAdjudicationInformation.procedureCode) &&
        isArray(lineAdjudicationInformation.procedureModifier, isString) &&
        isNumberString(lineAdjudicationInformation.paidServiceUnitCount) &&
        validateClaimAdjustmentInformation(lineAdjudicationInformation.claimAdjustmentInformation) &&
        isRawDateString(lineAdjudicationInformation.adjudicationOrPaymentDate)
    );
}

function validateClaimAdjustmentInformation(claimAdjustmentInformation: any): claimAdjustmentInformation is ClaimAdjustmentInformation {
    return (
        isString(claimAdjustmentInformation.adjustmentGroupCode) &&
        isArray(claimAdjustmentInformation.adjustmentDetails, validateAdjustmentDetail)
    )
}

function validateAdjustmentDetail(adjustmentDetail: any): adjustmentDetail is {
    adjustmentReasonCode: string;
    adjustmentAmount: string;
} {
    return (
        isString(adjustmentDetail.adjustmentReasonCode) &&
        isString(adjustmentDetail.adjustmentAmount)
    )
}

function validateReportInformation(reportInformation: any): reportInformation is ReportInformation {
    return (
        isString(reportInformation.attachmentReportTypeCode) &&
        isString(reportInformation.attachmentTransmissionCode) &&
        isString(reportInformation.attachmentControlNumber)
    );
}

function validateAddress(address: any): address is Address {
    return (
        isOptional(isString)(address.zipcode) &&
        isString(address.address1) &&
        isString(address.city) &&
        isString(address.state) &&
        isOptional(isString)(address.postalCode) &&
        isOptional(isString)(address.countryCode) &&
        isOptional(isString)(address.countrySubDivisionCode)
    )
}
