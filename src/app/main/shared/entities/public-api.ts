import moment from 'moment-jalaali';


export interface acountTransDto {
    'enable': boolean,
    'accountid': number,
    'rowno': number,
    'requestserviceid': number,
    'amount': number,
    'availablebalance': number,
    'quarteravailablebalance': number,
    'category': number,
    'hostid': number,
    'settlementstatus': number,
    'description': string,
    'transdate': number,
    'transtime': string,
    'currency': string,
    'status': number,
    'userid': string
}

export interface accountTransTypeDto {
    accountId: number,
    accountNo: string,
    createDate: number,
    nationalCode: string,
    targetName: string,
    targetProductCode: number,
    targetProductTitle: string,
}


export interface CustomerType {
    name: string,
    code: string
}

export interface CityType {
    name: string,
    code: string,
    provinceCode?: string
}

export interface ProvinceType {
    name: string,
    code: string,
    countryCode?: string
}

export interface comboType {
    name: string,
    code: string
}

export interface LicenseDto {
    rowno: number,
    licenseType: number,
    licenseNo: number,
    issueDate: number,
    expireDate: number,
}

export interface AgentDto {
    branchName: string,
    branchNameEn?: string,
    tellNo?: string,
    countryId?: number,
    provinceId?: number,
    cityId?: number,
    address?: string,
    postalCode?: number,
    code: number
}

export interface terminalTypeDto {
    agentName: string,
    guildCode: string,
    model: string,
    serial: string,
    terminalNo: string,
    terminalType: string,
    title: string,
    version: string,
}

export interface accountTypeDto {
    accountNo: string,
    iban: string,
    sharePercentage: string,
    status: string,
}

export interface limitDto {
    limitid: number;
    productid: number;
    serviceid: number;
    hostid: number;
    maxamount: number;
    minamount: number;
    status: number;
    description: string;

}

export interface restrictDto {
    restrictid: number;
    productid: number;
    serviceid: number;
    hostid: number;
    maxamount: number;
    minamount: number;
    status: number;
    description: string;

}

export interface serviceDto {
    serviceId: number,
    name: string,
    nameEn: string,
    status: number,
}

export interface BuyWalletDto {
    sourceToken: string,
    destinationToken: string,
    amount: number,
    description: string
}

export interface RequestBuyWalletDto {
    sourceToken: string,
    amount: number,
    destinationToken: string,
    requestServiceId: number,
    requestId: string,
    hostId: number,
    requestDate: number,
    currency: string,
    segmentTypeId: number;
    terminalId: number;
    terminalType: number;
    description: string;
}

export interface BuyWalletInfo {
    availablebalance: number,
    actualbalance: number,
    holdBalance: number,
}


export interface reportAccountDto {
    accountid: number,
    amount: number,
    availablebalance: number,
    category: number,
    currency: string,
    description: string,
    hostid: number,
    iuserid: number,
    links: null
    quarteravailablebalance: number,
    regDate: number,
    requestid: string,
    requestserviceid: number,
    rowno: number,
    settlementstatus: number,
    status: number,
    terminalno: number,
    transdate: number,
    transtime: string,
    unitCode: number,
    unitId: number,
    userId: number,
    uuserid: number,
}

export interface reportSegmentAccountDto {
    segmentTypeId: number,
    transdate: number,
    transtime: string,
    description: string,
    amount: number,
    availablebalance: number,
    terminalno: null,
    segmentTypeName: string,

}

export interface ChargeWalletBySegmentDto {
    sourceToken: string,
    amount: number,
    description: string,
    requestServiceId: number,
    requestId: string,
    hostId: number,
    requestDate: number,
    currency: string,
    segmentTypeId: number;
}

export interface segmentTypeInfoDtoList {
    segmentTypeId: number,
    segmentTypeName: string,
    accountNo: string,
    accountId: number

}

export interface ChargeWalletInfo {
    availablebalance: number,
    actualbalance: number,
    holdBalance: number,
    walletType: number,
}

export interface ChargeWalletBySegmentInfo {
    availablebalance: number,
    actualbalance: number,
    holdBalance: number,
    walletType: number,
}

export interface SegmentWalletDto {
    segmentTypeId: 0,
    segmentTypeName: ' ',
    'accountNo': ' ',
    'accountId': 0
}

export interface WalletLimitDto {
    id: number,
    limitId: number,
    walletId: number,
    dailyCurrentTotalAmount: number,
    dailyCurrentTotalCount: number,
    workingDate: number,
    createDate: number,
    updateDate: number,
}

export interface WalletLimitCreateResultDto {
    id: number,
    limitid: number,
    walletid: number,
    dailycurrenttotalamount: number,
    dailycurrenttotalcount: number,
    workingdate: number,
    createdate: number,
    updatedate: number,
}

export interface LimitDto {
    limitId: number,
    productId: number,
    serviceId: number,
    hostId: number,
    maxAmount: number,
    maxCount: number,
    status: number,
    description: string
}

export interface CreateWalletDto {
    firstName: string,
    lastName?: string,
    nationalCode: string,
    mobileNo: string,
    birthDate?: number,
    personType: number,
    hostId?: number,
    requestId?: string,
    requestDateTime?: string,
    traceCode?: number,
    level?: number,
    productId?: number
}

export interface RestrictionDto {
    restrictionId: number,
    productId: number,
    serviceId: number,
    hostId: number,
    restrictionType: number,
    minAmount: number,
    maxAmount: number,
    descriptions: string,
    status: number,
}

export class createCommercialWalletDto {
    merchantInfo: MerchantInfo;
    merchantBranch: MerchantBranchInfo[] = [new MerchantBranchInfo];
    terminalsInfoList: TerminalsInfo[] = [new TerminalsInfo];
    terminalAccountInfoList: TerminalAccountInfo[] = [new TerminalAccountInfo];
    merchantLicense: MerchantLicenseInfo[] = [new MerchantLicenseInfo];
}

export class MerchantInfo {
    merchantNumber?: '';
    customerType?: number = 0;
    citizenshipType?: number = 0;
    gender?: number = 0;
    firstName?: '';
    lastName?: '';
    fatherName?: '';
    nationalCode?: '';
    birthDate?: number = 0;
    businessName?: string = '';
    businessNameEn?: string = '';
    commercialCode: number = 0;
    mccCode?: string = '';
    passportNo?: string = '';
    firstNameEn?: string = '';
    lastNameEn?: string = '';
    fatherNameEn?: string = '';
    residence?: number = 0;
    residenceType?: number = 0;
    SettleAccountNo?: string = '';
    iban?: string = '';
    mobileNo?: string = '';
    tellNo?: string = '';
    countryId?: number = 0;
    provinceId?: number = 0;
    cityId?: number = 0;
    address?: string = '';
    postalCode?: number = 0;
}

export class MerchantBranchInfo {
    branchName: string = '';
    branchNameEn?: string = '';
    tellNo?: string = '';
    countryId?: number = 0;
    branchId: number = 0;
    provinceId?: number = 0;
    cityId?: number = 0;
    address?: string = '';
    postalCode?: number = 0;
    recordState?: number = 1;
}

export class TerminalsInfo {
    branchId?: number = 0;
    branchName: number = 0;
    terminalId: number = 0;
    terminalNumber?: number = 0;
    terminalType?: number = 0;
    serialNumber?: string = '';
    hardwareBrand: string = '';
    hardwareModel?: string = '';
    version?: string = '';
    recordState?: number = 1;
}

export class TerminalAccountInfo {
    terminalAccountId: number = 0;
    terminalId: number = 0;
    merchantId: number = 0;
    terminalNumber: number = 0;
    iban: string = '';
    accountNumber: string = '';
    percentAgeSharing: number = 0;
    recordState: number = 1;
    hardwareBrandDrop: string = '';

}

export class MerchantLicenseInfo {
    licenseType: number = 0;
    licenseNo: string = '';
    issueDate: number = 0;
    expireDate: number = 0;
    recordState: number = 1;
}

export class balanceInfoDtoList {
    accountId: number;
    accountNo: string;
    actualbalance: number;
    availablebalance: number;
    holdBalance: number;
    segmentTypeId: number;
    segmentTypeName: string;
}

export class walletTerminalsDto {
    terminalId: number;
    terminalNo: number;
    terminalType: number;
    terminalName: string;
}

export class ChargeDetailDto {
    batchId?: number;
    rowNo?: number;
    insertDate?: number;
    nationalCode?: string;
    tokenNo?: string;
    amount?: number;
    organizationId?: number;
    segmentTypeId?: number;
    status?: number;

    objectMapperToList(formObject: any, products: any): ChargeDetailDto[] {
        let chargeDetailDtoList: ChargeDetailDto[] = [];
        let rowNumber = 0;
        const moment1 = moment();
        moment1.format('jYYYYjMMjDD');
        products.forEach(a => {
            rowNumber++;
            //todo some data is mock
            let chargeDetailDto = new ChargeDetailDto;
            chargeDetailDto.amount = a.amount;
            chargeDetailDto.batchId = 0;
            chargeDetailDto.rowNo = rowNumber;
            chargeDetailDto.insertDate = moment1.format('jYYYYjMMjDD');
            chargeDetailDto.nationalCode = a.nationalCode;
            chargeDetailDto.tokenNo = a.tokenNo;
            chargeDetailDto.organizationId = formObject.controls['organization'].value;
            chargeDetailDto.segmentTypeId = formObject.controls['segment'].value;
            chargeDetailDto.status = 0;
            chargeDetailDtoList.push(chargeDetailDto);
        });
        return chargeDetailDtoList;
    }

}

export class ChargeHeaderDto {
    batchId?: number;
    fileName?: string;
    insertDate?: number;
    organizationId?: number;
    segmentId?: number;
    fileType?: number;
    rowCount?: number;
    processCount?: number;

    objectMapper(formObject: any, selectedFile: any, products: any): ChargeHeaderDto {
        const moment1 = moment();
        moment1.format('jYYYYjMMjDD');
        let chargeHeaderDto: ChargeHeaderDto = new ChargeHeaderDto;
        chargeHeaderDto.segmentId = formObject.controls['segment'].value;
        chargeHeaderDto.organizationId = formObject.controls['organization'].value;
        chargeHeaderDto.fileName = selectedFile.currentFiles[0].name;
        //todo some data is mock
        chargeHeaderDto.fileType = 1;
        chargeHeaderDto.batchId = 0;
        chargeHeaderDto.insertDate = moment1.format('jYYYYjMMjDD');
        chargeHeaderDto.rowCount = products.length;
        chargeHeaderDto.processCount = 0;
        return chargeHeaderDto;
    }
}

export class BatchCharge {
    chargeHeaderDto: ChargeHeaderDto;
    chargeDetailDtoList: ChargeDetailDto[];
}

export class excelFile {
    amount: number;
    nationalCode: string;
    row: number;
    tokenNo: number;
    status: number;
}

export interface ChargeWalletDto {
    token: string,
    amount: number;
    description: string
}

export class RequestChargeWalletDto {
    sourceToken: string;
    amount: number;
    description: string;
    requestServiceId: number;
    requestId: string;
    hostId: number;
    requestDate: number;
    currency: string;

}

export class RequestGroupCharge {
    currency: string;
    description: string;
    hostId: number;
    requestDate: number;
    requestId: string;
    requestServiceId: number;
    batchId: number;
}

export class RequestServiceIdDto {
    requestServiceId: number;
}

export class FeeDto {

    productId: number;
    serviceId: number;
    hostId: number;
    fixAmount: number;
    minAmount: number;
    maxAmount: number;
    fromAmount: number;
    toAmount: number;
    percentAge: number;
    serviceAffectedType: number;
    serviceAffectedCode: string;
    feeAffectedType: number;
    feeAffectedCode: string;
    status: number;
    description: string;
}

export class FeeUpdateDto {
    description: string;
    feeAffectedType: number;
    feeId: number;
    hostId: number;
    iuserId: string;
    lastDate: number;
    lastTime: string;
    productId: number;
    serviceId: number;
    status: number;
    uuserId: string;
    walletAffectedId: number
    walletAffectedNo:number
}

export interface MerchantBranchDto {
    'merchantId': number,
    'customerId': number,
    'mcc': string,
    'merchantNo': string,
    'businessName': string,
    'commercialCode': number,
    'settleAccountNo': string,
    'createDate': number,
    'iban': string,
    'tellNo': string,
    'mobileNo': string,
    'countryId': number,
    'provinceId': number,
    'cityId': number,
    'address': string,
    'postalCode': number,
    'iuserid': string,
    'uuserid': string
    'branchId': number,
    'branchName': string,
    'branchNameEn': string,
    'status': number,
    'hostId': number,

}

export interface BranchDto {
    'branchId': number,
    'merchantId': number,
    'branchName': string,
    'branchNameEn': string,
    'mcc': string,
    'tellNo': string,
    'countryId': number,
    'provinceId': number,
    'cityId': number,
    'address': string,
    'postalCode': number,
    'status': number,
    'hostId': number,
    'createDate': number

}

export class BranchUpdateDto {
    branchId: number;
    merchantId: number;
    branchName: string;
    branchNameEn: string;
    mcc: string;
    tellNo: string;
    countryId: number;
    provinceId: number;
    cityId: number;
    address: string;
    postalCode: number;
    status: number;
    hostId: number;
    createDate: number;
    businessName?: string;

}


export class MerchantCustomerDto {
    merchant:MerchantDto;
    customer:CustomerDto;

    static objectMapper(merchant:MerchantDto,customer:CustomerDto):MerchantCustomerDto{
        let result = new MerchantCustomerDto;
        result.customer=customer;
        result.merchant=merchant;
        return result
    }
}

export class MerchantDto  {

    merchantId:number;
    customerId:number;
    mcc:string;
    merchantNo:string;
    businessName:string;
    businessNameEn:string;
    commercialCode:number;
    settleAccountNo:string;
    createDate:number;
    iban:string;
    tellNo:string;
    mobileNo:string;
    countryId:number;
    provinceId:number;
    cityId:number;
    address:string;
    postalCode:number;
    status:number;

    static objectMapper(dto:any,fetchedCustomer:any,inputMerchant:any):MerchantDto{
        let result = new MerchantDto;
        result.merchantId=inputMerchant?.merchantId;
        result.customerId=fetchedCustomer?.customerId;
        result.mcc=inputMerchant?.mcc;
        result.merchantNo=inputMerchant?.merchantNo;
        result.businessName=inputMerchant?.businessName;
        result.status=inputMerchant?.status;
        result.businessNameEn=dto?.businessNameEn;
        result.commercialCode=dto?.commercialCode;
        result.settleAccountNo=dto?.settleAccountNo;
        result.createDate=dto?.createDate;
        result.iban=dto?.iban;
        result.tellNo=dto?.tellNo;
        result.mobileNo=dto?.mobileNo;
        result.countryId=dto?.countryId;
        result.provinceId=dto?.provinceId;
        result.cityId=dto?.cityId;
        result.address=dto?.address;
        result.postalCode=dto?.postalCode;
        return result;
    }

}

export class CustomerDto {

    customerId:number;
    customerType:number;
    citizenshipType:number;
    gender:number;
    birthDate:number;
    residence:number;
    residenceType:number;
    nationalCode:string;
    firstName:string;
    lastName:string;
    firstNameEn:string;
    lastNameEn:string;
    fatherName:string;
    fatherNameEn:string;
    mobileNo:string;
    passportNo:string;
    isCardHolder:number;
    isMerchant:number;
    createDate:number;

    static objectMapper(dto:any,fetchedCustomer:any):CustomerDto{
        let result = new CustomerDto;

        result.customerId=fetchedCustomer?.customerId;
        result.customerType=fetchedCustomer?.customerType;
        result.citizenshipType=fetchedCustomer?.citizenshipType;
        result.gender=fetchedCustomer?.gender;
        result.birthDate=fetchedCustomer?.birthDate;
        result.residence=dto?.residence;
        result.residenceType=dto?.residenceType;
        result.nationalCode=fetchedCustomer?.nationalCode;
        result.firstName=fetchedCustomer?.firstName;
        result.lastName=fetchedCustomer?.lastName;
        result.firstNameEn=dto?.firstNameEn;
        result.lastNameEn=dto?.lastNameEn;
        result.fatherName=dto?.fatherName;
        result.fatherNameEn=dto?.fatherNameEn;
        result.mobileNo=dto?.mobileNo;
        result.passportNo=fetchedCustomer?.passportNo;
        result.isCardHolder=fetchedCustomer?.isCardHolder;

        return result;
    }
}


export interface MerchantTerminalDto {
    merchantId: number,
    customerId: number,
    mcc: string,
    merchantNo: string,
    businessName: string,
    commercialCode: number,
    settleAccountNo: string,
    createDate: number,
    iban: string,
    tellNo: string,
    mobileNo: string,
    countryId: number,
    provinceId: number,
    cityId: number,
    address: string,
    postalCode: number,
    iuserid: string,
    uuserid: string
    branchId: number,
    branchName: string,
    branchNameEn: string,
    status: number,
    hostId: number,

}

export class TerminalAccountDtoList {
    address: string;
    alias: string;
    branchId: number;
    currency: string;
    hostId: number;
    mcc: string;
    merchantId: number;
    model: string;
    serialNo: string;
    shopCityCode: string;
    shopPostCode: string;
    shopProvinceCode: string;
    status: number;
    terminalId: number;
    terminalNo: number;
    terminalType: number;
    version: string;
}

export interface AccountsTerminalMerchantBranchDto {
    accountNo: string;
    address: string;
    alias: string;
    branchId: number;
    branchName: string;
    businessName: string;
    cityId: number;
    commercialCode: number;
    countryId: number;
    createDate: number;
    currency: string;
    customerId: number;
    hostId: number;
    iban: string;
    id: number;
    iuserid: string;
    lastEditDate: number;
    links: string;
    mcc: string;
    merchantId: number;
    merchantNo: string;
    mobileNo: string;
    model: string;
    percentAgeSharing: number;
    postalCode: number;
    provinceId: number;
    regDate: number;
    serialNo: string;
    shopCityCode: string;
    shopPostCode: string;
    shopProvinceCode: string;
    status: number;
    tellNo: string;
    terminalId: number;
    terminalNo: number;
    terminalType: number;
    unitCode: number;
    unitId: number;
    userId: number;
    uuserid: string;
    version: string;
}

export interface UpdateTerminalDto{
    address: string;
    alias :string;
    branchId: number;
    branchName: string;
    businessName: string;
    cityId: number;
    commercialCode: number;
    countryId: number;
    createDate: number;
    currency: string;
    customerId: number;
    hostId: number;
    iban: string;
    iuserid:string;
    mcc: string;
    merchantId: number;
    merchantNo: string;
    mobileNo: string;
    model: string;
    postalCode: number;
    provinceId: number;
    serialNo: string;
    shopCityCode: string;
    shopPostCode: string;
    shopProvinceCode: string;
    status: number;
    tellNo: string;
    terminalId: number;
    terminalNo: number;
    terminalType: number;
    uuserid: string;
    version: string;
}

export interface UpdateAccountDto{
    accountNo: string;
    createDate: number;
    currency: string;
    iban: string;
    id: number;
    iuserid: string;
    lastEditDate: number;
    links: number;
    merchantId: number;
    percentAgeSharing: number;
    regDate: number;
    status: number;
    terminalId: number;
    terminalNo: number;
    unitCode: number;
    unitId: number;
    userId: number;
    uuserid: string;
}
export class TerminalAccountTerminalDto {
    terminalSearchResultDto: TerminalSearchResultDto;
    terminalAccountSearchResultDtoList: TerminalAccountSearchResultDto[];


}
export class TerminalSearchResultDto{
    terminalId : number;
    branchId : number;
    merchantId : number;
    terminalNo : number;
    serialNo: string;
    alias: string;
    model: string;
    version: string;
    mcc: string;
    terminalType : number;
    status : number;
    hostId : number;
    address: string;
    shopPostCode: string;
    shopProvinceCode: string;
    shopCityCode: string;
    currency: string;
    objectMapper(formObject: any): TerminalSearchResultDto {
        const moment1 = moment();
        moment1.format('jYYYYjMMjDD');
        let terminalSearchResultDto: TerminalSearchResultDto = new TerminalSearchResultDto;

        terminalSearchResultDto.terminalId = formObject.terminalId;
        terminalSearchResultDto.branchId = formObject.branchId;
        terminalSearchResultDto.merchantId = formObject.merchantId;
        terminalSearchResultDto.terminalNo = formObject.terminalNo;
        terminalSearchResultDto.serialNo = formObject.serialNo;
        terminalSearchResultDto.alias =formObject.alias;
        terminalSearchResultDto.model = formObject.model;
        terminalSearchResultDto.version = formObject.version;
        terminalSearchResultDto.mcc = formObject.mcc;
        terminalSearchResultDto.terminalType = formObject.terminalType;
        terminalSearchResultDto.status = formObject.status;
        terminalSearchResultDto.hostId =formObject.hostId;
        terminalSearchResultDto.address = formObject.address;
        terminalSearchResultDto.shopPostCode = formObject.shopPostCode;
        terminalSearchResultDto.shopProvinceCode = formObject.shopProvinceCode;
        terminalSearchResultDto.shopCityCode = formObject.shopCityCode;
        terminalSearchResultDto.currency = formObject.currency;
        return terminalSearchResultDto;
    }
}
export class TerminalAccountSearchResultDto{
    id : number;
    terminalId : number;
    terminalNo : number;
    merchantId : number;
    accountNo : string;
    iban : string;
    percentAgeSharing : number;
    status : number;
    createDate : number;
    lastEditDate : number;
    currency : string;

    objectMapperToList( formObject: any): TerminalAccountSearchResultDto[] {
        let terminalAccountSearchResultDtoList: TerminalAccountSearchResultDto[] = [];
        const moment1 = moment();
        moment1.format('jYYYYjMMjDD');
        formObject.forEach(a => {


            let terminalAccountSearchResultDto = new TerminalAccountSearchResultDto;
            terminalAccountSearchResultDto.id = a.id;
            terminalAccountSearchResultDto.terminalId = a.terminalId;
            terminalAccountSearchResultDto.terminalNo = a.terminalNo;
            terminalAccountSearchResultDto.merchantId = a.merchantId;
            terminalAccountSearchResultDto.accountNo = a.accountNo;
            terminalAccountSearchResultDto.iban = a.iban;
            terminalAccountSearchResultDto.percentAgeSharing = a.percentAgeSharing;
            terminalAccountSearchResultDto.status = a.status;
            terminalAccountSearchResultDto.createDate = a.createDate;
            terminalAccountSearchResultDto.lastEditDate = moment1.format('jYYYYjMMjDD');
            terminalAccountSearchResultDto.currency = a.currency;
            terminalAccountSearchResultDtoList.push(terminalAccountSearchResultDto);
        });
        return terminalAccountSearchResultDtoList;

    }
}

export class RequestSettle {
    hostId: number;
    requestDate: number;
    requestId: string;
    requestServiceId: number;
    settleBatchId: number;
}
export class SettlementResultInfoDto {
    requestServiceId: number;
    settleList: SettleList[];

}
export class SettleList {
    walletSettleIban: string;
    settleDesc: string;
    transId: number;
    totalAmount: number;
    transDate: number;
    walletId: number;
    objectMapperToList(filelist: any):SettleList[] {
        let settlementInfoDtoList: SettleList[] = [];

        filelist.forEach(a => {
            let settleList = new SettleList;
            settleList.walletSettleIban=a.walletSettleIban;
            //todo : مقدار تستی که خانم کرونی گفتن
            settleList.transId=158;
            settleList.transDate=14040527;
            settleList.walletId=a.walletId;
            settleList.totalAmount=a.totalAmount;
            settleList.settleDesc=a.settleDesc;
            settlementInfoDtoList.push(settleList);
        });
        return settlementInfoDtoList;
    }
}
