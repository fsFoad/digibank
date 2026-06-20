import * as lookups from 'assets/data/lookups.json';
export interface AccountSummary {
  title: string;
  accountNumber: string;
  balance: number;
  blockedAmount: number;
  openingDate: number;
  openingBranch: string;
  dateOfLastTurnover: number;
}

export interface Tashilat {
  remaining: number;
  relevantUnit: string;
  branch: string;
  tashilatType: string;
  fileNumber: string;
  amount: number;
  date: number;
  accumulationPaymentObligation: number;
  installmentsPaid: number;
}

export class Constants {
  static acSummaries: AccountSummary[] = (lookups as any).acSummaries;
  static branchNames = (lookups as any).branchNames;
  static operationType = (lookups as any).operationType;
  static banklist = (lookups as any).banklist;
  static documentType = (lookups as any).documentType;
  static priority = (lookups as any).priority;

  static acItems = (lookups as any).acItems;
  static tashilats: Tashilat[] = (lookups as any).tashilats;
  static organizationalUnit = (lookups as any).organizationalUnit;
  static shenasnameType = (lookups as any).shenasnameType;
  static signType = (lookups as any).signType;
  static postOrganization = (lookups as any).postOrganization;

  static contactTypes = (lookups as any).contactTypes;
  static statusZinaf = (lookups as any).statusZinaf;
  static noMalekiat = (lookups as any).noMalekiat;
  static bankNameList = (lookups as any).bankNameList;
  static financialHeading = (lookups as any).financialHeading;
  static availableRoles = (lookups as any).availableRoles;
  static availableRolespickList = (lookups as any).availableRolespickList;
  static activityFieldOptions = (lookups as any).activityFieldOptions;
  static codeHoze = (lookups as any).codeHoze;
  static HavaleInternetiStatus = (lookups as any).HavaleInternetiStatus;
  static referralType = (lookups as any).referralType;
  static forItems = (lookups as any).forItems;
  // --------------------------------------------------------------------------------------
  static postalPattern = '\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b';
  static phoneNumPattern = '^[0][0-9][0-9]([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]*$)';
  static mobNumPattern = '^((\\+98-?)|0)?[9][0-9]{9}$';
  static farsilabelMaxLength = 25;
  static farsiFamilyMaxLength = 25;
  static farsiSegmentMaxLength = 50;
  static EnSegmentMaxLength = 100;
  static maxAmountMaxLength = 21;
  static minAmountMaxLength = 21;
  static maxPostalvalue = 10;
  static maxPhoneNumber = 11;
  static maxLicenseNumber = 25;
  static servicelabelMaxLength = 25;
  static serviceEnlabelMaxLength = 50;
  static titleLimitMaxLength = 125;
  static titleRestrictionsMaxLength = 100;
  static wageTitleMaxLength = 125;
  static serviceAffectedIdMaxLength = 26;
  static feeAffectedIdMaxLength = 26;
  static maxToken = 26;
  static nationalvalueLength = 10;
  static shenaseMelliLength = 11;
  static mobileLength = 11;
  static cardNoLength = 16;
  static yearRangeNormal = '1300:1410';
  static optionValueNormal = 'value';
  static optionLabelNormal = 'label';
  static commercialProductId = 1300;
  static commercialProductId2 = 1100;
  static commercialProductId3 = 1200;
  static commercialProductId4 = 1800;
  static LTRDirectionForForDiv = 'ltr';
  static RTLDirectionForForDiv = 'rtl';
  static APPDirection = 'rtl';
  static IsFontIran = false;
  static AppFontClass: string = 'isFontIran';
  static AppWrapperInitializer: boolean = true;
  static notifiSuccess = 'عملیات با موفقیت انجام شد';
  static licenseInfoList = (lookups as any).licenseInfoList;
  static customerTypes = (lookups as any).customerTypes;
  static citizenshipTypes = (lookups as any).citizenshipTypes;
  static genderTypes = (lookups as any).genderTypes;
  static contactTypeGroups = (lookups as any).contactTypeGroups;
  static mantaghe = (lookups as any).mantaghe;
  static countryList = (lookups as any).countryList;
  static provinceList = (lookups as any).provinceList;
  static cityList = (lookups as any).cityList;
  static residenceTypes = (lookups as any).residenceTypes;
  static religion = (lookups as any).religion;
  static nahveTasarofs = (lookups as any).nahveTasarofs;
  static eduMaghta = (lookups as any).eduMaghta;
  static eduReshte = (lookups as any).eduReshte;
  static recruitmentType = (lookups as any).recruitmentType;
  static vahed = (lookups as any).vahed;
  static post = (lookups as any).post;

  static eduGraesh = (lookups as any).eduGraesh;
  static eduMoaseseType = (lookups as any).eduMoaseseType;
  static sect = (lookups as any).sect;
  static howResidence = (lookups as any).howResidence;
  static terminalTypesList = (lookups as any).terminalTypesList;

  static segmentTypeList = (lookups as any).segmentTypeList;
  static purchaseTypeList = (lookups as any).purchaseTypeList;
  static chargeTypeList = (lookups as any).chargeTypeList;
  static statusList = (lookups as any).statusList;
  static currencyList = (lookups as any).currencyList;
  static priorityList = (lookups as any).priorityList;
  static organizationList = (lookups as any).organizationList;


  constructor() {
    // Constants.notifiSuccess =this.translateService.instant('label.http.status.200');

  }
  static bill_organList = (lookups as any).bill_organList;
  static bill_representationList = (lookups as any).bill_representationList;
  static bill_operationList = (lookups as any).bill_operationList;
  static creatWallet_listDrop = (lookups as any).creatWallet_listDrop;
  static createYekta_listDrop = (lookups as any).createYekta_listDrop;
  static createYekta_listDrop2 = (lookups as any).createYekta_listDrop2;
  static internetRemittanceReport_statusItems = (lookups as any).internetRemittanceReport_statusItems;
  static payaGroupRemittanceUploadFile_acItems = (lookups as any).payaGroupRemittanceUploadFile_acItems;
  static payaRegularRemittanceRegistration_periodItems = (lookups as any).payaRegularRemittanceRegistration_periodItems;
  static registerBonCard_listDrop = (lookups as any).registerBonCard_listDrop;
  static regularPayaRegisterTransfer_listDrop = (lookups as any).regularPayaRegisterTransfer_listDrop;
  static reliableRemittanceReport_reportTypeList = (lookups as any).reliableRemittanceReport_reportTypeList;
  static reportBankTransfer_numberTranslate = (lookups as any).reportBankTransfer_numberTranslate;
  static reportGroupRemittance_searchTypeList = (lookups as any).reportGroupRemittance_searchTypeList;
  static satnaRemittanceRegistration_receiverItems = (lookups as any).satnaRemittanceRegistration_receiverItems;
  static submitInformationPymentMnagement_dropList = (lookups as any).submitInformationPymentMnagement_dropList;
  static yektaList_listDrop = (lookups as any).yektaList_listDrop;
  static accountTree_contextMenuItems = (lookups as any).accountTree_contextMenuItems;
  static bill_organList_x = (lookups as any).bill_organList_x;
  static bill_representationList_x = (lookups as any).bill_representationList_x;
  static bill_operationList_x = (lookups as any).bill_operationList_x;
  static bill_tableList = (lookups as any).bill_tableList;
  static creatWallet_listDrop_x = (lookups as any).creatWallet_listDrop_x;
  static createYekta_listDrop_x = (lookups as any).createYekta_listDrop_x;
  static createYekta_listDrop2_x = (lookups as any).createYekta_listDrop2_x;
  static detailsReliableRemittanceRequest_table1List = (lookups as any).detailsReliableRemittanceRequest_table1List;
  static detailsReliableRemittanceRequest_table1List_2 = (lookups as any).detailsReliableRemittanceRequest_table1List_2;
  static detailsReliableRemittanceRequest_table1List_3 = (lookups as any).detailsReliableRemittanceRequest_table1List_3;
  static detailsReliableRemittanceRequest_table2List = (lookups as any).detailsReliableRemittanceRequest_table2List;
  static detailsReliableRemittanceRequest_table2List_2 = (lookups as any).detailsReliableRemittanceRequest_table2List_2;
  static detailsReliableRemittanceRequest_table2List_3 = (lookups as any).detailsReliableRemittanceRequest_table2List_3;
  static registerBonCard_listDrop_x = (lookups as any).registerBonCard_listDrop_x;
  static regularPayaRegisterTransfer_listDrop_x = (lookups as any).regularPayaRegisterTransfer_listDrop_x;
  static reliableRemittanceReport_reportTypeList_x = (lookups as any).reliableRemittanceReport_reportTypeList_x;
  static reportGroupRemittance_searchTypeList_x = (lookups as any).reportGroupRemittance_searchTypeList_x;
  static requestGhoboz_table1List = (lookups as any).requestGhoboz_table1List;
  static requestGhoboz_table1List_2 = (lookups as any).requestGhoboz_table1List_2;
  static requestGhoboz_table1List_3 = (lookups as any).requestGhoboz_table1List_3;
  static submitInformationPymentMnagement_dropList_x = (lookups as any).submitInformationPymentMnagement_dropList_x;
}
