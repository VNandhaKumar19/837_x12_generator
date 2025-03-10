export interface X12Document {
    ISA: ISA;
    GS: GS;
    ST: ST;
    BHT: BHT;
    HLs: HL[];
    SE: SE;
    GE: GE;
    IEA: IEA;
}

export interface ISA {
    authorizationInformationQualifier: string;
    authorizationInformation: string;
    securityInformationQualifier: string;
    securityInformation: string;
    interchangeIdQualifierSender: string;
    interchangeSenderId: string;
    interchangeIdQualifierReceiver: string;
    interchangeReceiverId: string;
    date: string;
    time: string;
    repetitionSeparator: string;
    controlVersionNumber: string;
    interchangeControlNumber: string;
    acknowledgmentRequested: string;
    usageIndicator: string;
    componentElementSeparator: string;
}

export interface GS {
    functionalIdentifierCode: string;
    applicationSenderCode: string;
    applicationReceiverCode: string;
    date: string;
    time: string;
    groupControlNumber: string;
    responsibleAgencyCode: string;
    versionReleaseIndustryIdentifierCode: string;
}

export interface ST {
    transactionSetIdentifierCode: string;
    transactionSetControlNumber: string;
    implementationConventionReference: string;
}

export interface BHT {
    hierarchicalStructureCode: string;
    transactionSetPurposeCode: string;
    referenceIdentification: string;
    date: string;
    time: string;
    transactionTypeCode: string;
}

export interface HL {
    hierarchicalIdNumber: string;
    hierarchicalParentIdNumber?: string;
    hierarchicalLevelCode: string;
    hierarchicalChildCode: string;
    NM1?: NM1;
    PER?: PER;
    PRV?: PRV;
    N3?: N3;
    N4?: N4;
    REF?: REF[];
    PAT?: PAT;
    CLM?: CLM;
    DTP?: DTP[];
    PWK?: PWK;
    AMT?: AMT[];
    K3?: string;
    NTE?: NTE;
    CR1?: CR1;
    CR2?: CR2;
    HI?: HI[];
    DN1?: DN1;
    DN2?: string;
    SBR?: SBR;
    OI?: OI;
    LXs?: LX[];
}

export interface NM1 {
    entityIdentifierCode: string;
    entityTypeQualifier: string;
    nameLastOrOrganizationName: string;
    nameFirst?: string;
    identificationCodeQualifier?: string;
    identificationCode?: string;
}

export interface PER {
    contactFunctionCode: string;
    name: string;
    communicationNumberQualifier: string;
    communicationNumber: string;
}

export interface PRV {
    providerCode: string;
    referenceIdentificationQualifier: string;
    referenceIdentification: string;
}

export interface N3 {
    addressInformation: string;
}

export interface N4 {
    cityName: string;
    stateOrProvinceCode: string;
    postalCode: string;
}

export interface REF {
    referenceIdentificationQualifier: string;
    referenceIdentification: string;
}

export interface PAT {
    individualRelationshipCode: string;
}

export interface CLM {
    claimSubmitterIdentifier: string;
    monetaryAmount: string;
    claimFilingIndicatorCode: string;
    releaseOfInformationCode: string;
    patientSignatureSourceCode: string;
}

export interface DTP {
    dateTimeQualifier: string;
    dateTimePeriodFormatQualifier: string;
    dateTimePeriod: string;
}

export interface PWK {
    reportTypeCode: string;
    reportTransmissionCode: string;
    identificationCodeQualifier: string;
    identificationCode: string;
}

export interface AMT {
    amountQualifierCode: string;
    monetaryAmount: string;
}

export interface NTE {
    noteReferenceCode: string;
    description: string;
}

export interface CR1 {
    unitOrBasisForMeasurementCode: string;
    transportTrailerLoadNumber: string;
    weight: string;
    unitOrBasisForMeasurementCodeForWeight: string;
}

export interface CR2 {
    ambulanceTransportReasonCode: string;
    unitOrBasisForMeasurementCode: string;
    transportDistance: string;
    addressInformation?: string;
    roundTripPurposeDescription?: string;
    stretcherPurposeDescription?: string;
}

export interface HI {
    healthCareCodeInformation: string;
}

export interface DN1 {
    orthodonticTreatmentIndicator: string;
    treatmentMonthsCount: string;
    unitBasisMeasurementCode: string;
}

export interface SBR {
    payerResponsibilitySequenceNumberCode: string;
    referenceIdentification: string;
    name: string;
    claimFilingIndicatorCode: string;
}

export interface OI {
    claimFrequencyTypeCode: string;
}

export interface LX {
    assignedNumber: string;
    SV1?: SV1;
    DTP?: DTP[];
    REF?: REF[];
    MEA?: MEA;
    PS1?: PS1;
    HCP?: string;
}

export interface SV1 {
    productOrServiceId: string;
    monetaryAmount: string;
    unitOrBasisForMeasurementCode: string;
    quantity: string;
}

export interface MEA {
    measurementReferenceIdCode: string;
    measurementQualifier: string;
    measurementValue: string;
}

export interface PS1 {
    purchasedServiceProviderId: string;
    purchasedServiceChargeAmount: string;
}

export interface SE {
    numberOfIncludedSegments: string;
    transactionSetControlNumber: string;
}

export interface GE {
    numberOfTransactionSetsIncluded: string;
    groupControlNumber: string;
}

export interface IEA {
    numberOfIncludedFunctionalGroups: string;
    interchangeControlNumber: string;
}
