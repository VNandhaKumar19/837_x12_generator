import { AdmittingDiagnosis, Attachment, ClaimAdjustmentInformation, ClaimCodeInformation, ClaimDateInformation, ClaimPricingInformation, ClaimSupplementalInformation, InstitutionalService, LineAdjudicationInformation, PrincipalDiagnosis, PrincipalProcedureInformation, ReportInformation, ServiceFacilityLocation, ServiceLine, ServiceLines, Address, ClaimInformation, ContactInformation, Dependent, OperatingPhysician, Provider, Providers, Receiver, RequestBody, Submitter, Subscriber, DiagnosisRelatedGroupInformation } from "../models/request.model";
import { isOptional, isString, isAny, isNumberString, isEmail, isArray, isRawDateString, isRawHourString, isNumber } from './validators.util';

// Validation function for RequestBody
/**
 * The function `validateRequestBody` in TypeScript validates the structure and content of a request
 * body object.
 * @param {any} body - The `validateRequestBody` function is a TypeScript function that takes an object
 * `body` as a parameter and checks if it conforms to the `RequestBody` type. The function performs
 * various validation checks on different properties of the `body` object using helper functions like
 * `isOptional`, `isString`, `
 * @returns The `validateRequestBody` function is returning a boolean value indicating whether the
 * `body` parameter passed to the function matches the structure defined by the `RequestBody` type. The
 * function checks various properties of the `body` object against specific validation functions and
 * conditions, and returns `true` if all validations pass, indicating that the `body` object is
 * considered a valid `RequestBody`.
 */
export function validateRequestBody(body: any): body is RequestBody {
    return (
        isOptional(isString)(body.tradingPartnerName) &&
        isString(body.controlNumber) &&
        isString(body.tradingPartnerServiceId) &&
        validateSubmitter(body.submitter) &&
        validateReceiver(body.receiver) &&
        validateSubscriber(body.subscriber) &&
        isOptional(validateDependent)(body.dependent) &&
        validateProviders(body.providers) &&
        isOptional(validateOperatingPhysician)(body.operatingPhysician) &&
        validateClaimInformation(body.claimInformation) &&
        isOptional(validateAddress)(body.payerAddress) &&
        isOptional(isAny)(body.supervising_same_as_rendering)
    );
}

function validateSubmitter(submitter: any): submitter is Submitter {
    return (
        isString(submitter.organizationName) &&
        isOptional(isString)(submitter.taxId) &&
        validateContactInformation(submitter.contactInformation)
    );
}

function validateContactInformation(info: any): info is ContactInformation {
    return (
        isString(info.name) &&
        isOptional(isNumberString)(info.phoneNumber) &&
        isOptional(isEmail)(info.email) &&
        isOptional(isNumberString)(info.faxNumber)
    );
}

function validateReceiver(receiver: any): receiver is Receiver {
    return (
        isString(receiver.organizationName) &&
        isOptional(isString)(receiver.taxId)
    );
}

function validateSubscriber(subscriber: any): subscriber is Subscriber {
    return (
        isOptional(isString)(subscriber.groupNumber) &&
        isString(subscriber.memberId) &&
        isString(subscriber.paymentResponsibilityLevelCode) &&
        isString(subscriber.firstName) &&
        isString(subscriber.lastName) &&
        isString(subscriber.gender) &&
        isString(subscriber.dateOfBirth) &&
        validateAddress(subscriber.address) &&
        isOptional(isString)(subscriber.policyNumber)
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
        isOptional(isString)(provider.npi) &&
        isOptional(isString)(provider.employerId) &&
        isOptional(isString)(provider.organizationName) &&
        isOptional(validateAddress)(provider.address) &&
        isOptional(isString)(provider.firstName) &&
        isOptional(isString)(provider.lastName) &&
        isOptional(isString)(provider.taxonomyCode) &&
        isOptional(isString)(provider.stateLicenseNumber) &&
        isOptional(validateContactInformation)(provider.contactInformation)
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
        isOptional(validateOtherDiagnosisInformationList)(claimInfo.otherDiagnosisInformationList) &&
        isString(claimInfo.claimFilingCode) &&
        isString(claimInfo.patientControlNumber) &&
        (isNumberString(claimInfo.claimChargeAmount) || isNumber(claimInfo.claimChargeAmount)) &&
        isNumberString(claimInfo.placeOfServiceCode) &&
        isString(claimInfo.claimFrequencyCode) &&
        isOptional(isString)(claimInfo.signatureIndicator) &&
        isString(claimInfo.planParticipationCode) &&
        isString(claimInfo.releaseInformationCode) &&
        isString(claimInfo.benefitsAssignmentCertificationIndicator) &&
        isOptional(isString)(claimInfo.billingNote) &&
        validateClaimDateInformation(claimInfo.claimDateInformation) &&
        validateClaimCodeInformation(claimInfo.claimCodeInformation) &&
        isOptional(validateClaimSupplementalInformation)(claimInfo.claimSupplementalInformation) &&
        isOptional(validateConditionCodes)(claimInfo.conditionCodes) &&
        isOptional(validatePrincipalProcedureInformation)(claimInfo.principalProcedureInformation) &&
        isOptional(validateClaimPricingInformation)(claimInfo.claimPricingInformation) &&
        validateServiceFacilityLocation(claimInfo.serviceFacilityLocation) &&
        validateServiceLines(claimInfo.serviceLines) &&
        validatePrincipalDiagnosis(claimInfo.principalDiagnosis) &&
        validateAdmittingDiagnosis(claimInfo.admittingDiagnosis) &&
        validateDiagnosisRelatedGroupInformation(claimInfo.diagnosisRelatedGroupInformation)
    );
}

function validateOtherDiagnosisInformationList(otherDiagnosisInformationList: any): otherDiagnosisInformationList is Array<any> {
    return (isArray(otherDiagnosisInformationList, isAny))
}

function validateConditionCodes(conditionCodes: any): conditionCodes is Array<string> {
    return (isArray(conditionCodes, isString))
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
    console.log('claimSupplementalInformation.priorAuthorizationNumber: ', claimSupplementalInformation.priorAuthorizationNumber);
    return (
        isString(claimSupplementalInformation.claimControlNumber) &&
        isString(claimSupplementalInformation.priorAuthorizationNumber) &&
        isString(claimSupplementalInformation.autoAccidentState) &&
        validateReportInformation(claimSupplementalInformation.reportInformation)
    )
}

function validatePrincipalProcedureInformation(principalProcedureInformation: any): principalProcedureInformation is PrincipalProcedureInformation {
    return (
        isString(principalProcedureInformation.principalProcedureCode) &&
        isString(principalProcedureInformation.principalProcedureDateTime) 
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
        isOptional(isString)(principalDiagnosis.presentOnAdmissionIndicator)
    );
}

function validateAdmittingDiagnosis(admittingDiagnosis: any): admittingDiagnosis is AdmittingDiagnosis {
    return (
        isString(admittingDiagnosis.qualifierCode) &&
        isOptional(isString)(admittingDiagnosis.admittingDiagnosisCode)
    )
}

function validateDiagnosisRelatedGroupInformation(diagnosisRelatedGroupInformation: any): diagnosisRelatedGroupInformation is DiagnosisRelatedGroupInformation {
    return (
        isNumber(diagnosisRelatedGroupInformation?.drugRelatedGroupCode)
    )
}

function validateServiceLine(serviceLine: any): serviceLine is ServiceLine {
    return (
        isOptional(validateServiceLineReferenceInformation)(serviceLine.serviceLineReferenceInformation) &&
        isOptional(validateServiceLineSupplementalInformationArray)(serviceLine.serviceLineSupplementalInformation) &&
        isRawDateString(serviceLine.serviceDate) &&
        isOptional(isRawDateString)(serviceLine.serviceDateEnd) &&
        isOptional(validateProcedureModifiers)(serviceLine.procedureModifiers) &&
        isOptional(isNumberString)(serviceLine.assignedNumber) &&
        validateInstitutionalService(serviceLine.institutionalService) &&
        isOptional(validateLineAdjudicationInformation)(serviceLine.lineAdjudicationInformation)
    );
}

function validateServiceLineSupplementalInformationArray(serviceLineSupplementalInformation: any): serviceLineSupplementalInformation is Array<Attachment> {
    return (
        isArray(serviceLineSupplementalInformation, validateServiceLineSupplementalInformation)
    )
}

function validateServiceLineReferenceInformation(serviceLineReferenceInformation: any): serviceLineReferenceInformation is { priorAuthorization: { priorAuthorizationOrReferralNumber: string }[] } {
    console.log('serviceLineReferenceInformation.priorAuthorization: ', serviceLineReferenceInformation.priorAuthorization);
    return (
        validatePriorAuthorization(serviceLineReferenceInformation.priorAuthorization)
    )
}

function validatePriorAuthorization(priorAuthorization: any): priorAuthorization is { priorAuthorizationOrReferralNumber: string }[] {
    console.log('priorAuthorization: ', priorAuthorization);
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
        isOptional(isString)(institutionalService.procedureIdentifier) &&
        isOptional(isString)(institutionalService.procedureCode) &&
        isOptional(validateProcedureModifiers)(institutionalService.procedureModifiers) &&
        isNumber(institutionalService.serviceLineRevenueCode) &&
        (isNumberString(institutionalService.lineItemChargeAmount) || isNumber(institutionalService.lineItemChargeAmount)) &&
        isString(institutionalService.measurementUnit) &&
        (isNumberString(institutionalService.serviceUnitCount) || isNumber(institutionalService.serviceUnitCount)) &&
        isOptional(validateCompositeDiagnosisCodePointers)(institutionalService.compositeDiagnosisCodePointers)
    )
}

function validateProcedureModifiers(value: any): value is string[] {
    return (
        isArray(value, isString)
    )
};

function validateCompositeDiagnosisCodePointers(compositeDiagnosisCodePointers: any): compositeDiagnosisCodePointers is {
    diagnosisCodePointers: string[]
} {
    return (
        validateDiagnosisCodePointers(compositeDiagnosisCodePointers.diagnosisCodePointers)
    )
}

function validateDiagnosisCodePointers(diagnosisCodePointers: any): diagnosisCodePointers is string[] {
    return (
        isArray(diagnosisCodePointers, isString)
    )
}

function validateLineAdjudicationInformation(lineAdjudicationInformation: any): lineAdjudicationInformation is LineAdjudicationInformation {
    return (
        isString(lineAdjudicationInformation.otherPayerPrimaryIdentifier) &&
        (isNumberString(lineAdjudicationInformation.serviceLinePaidAmount) || isNumber(lineAdjudicationInformation.serviceLinePaidAmount)) &&
        isString(lineAdjudicationInformation.serviceIdQualifier) &&
        isString(lineAdjudicationInformation.procedureCode) &&
        isArray(lineAdjudicationInformation.procedureModifier, isString) &&
        isNumberString(lineAdjudicationInformation.paidServiceUnitCount) &&
        validateClaimAdjustmentInformation(lineAdjudicationInformation.claimAdjustmentInformation) &&
        isString(lineAdjudicationInformation.adjudicationOrPaymentDate)
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
