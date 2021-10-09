export class TerminalSegmentDto {
    terminalId: number;
    segmentTypeId: number;
    status: number;

    mapListToOtherListOFthis?(inputList: any[], terminalId: number, segmentID: number) {
        let output: TerminalSegmentDto [] = [];
        inputList.forEach(a => {
            let dto = new TerminalSegmentDto();
            dto.terminalId = a.terminalId;
            dto.segmentTypeId = segmentID;
            dto.status = 1;
            output.push(dto);
        });
        return output;
    }
}

export class TerminalSegmentCreateResultDto {
    merchantId?: number;
    merchantName: string;
    terminalNo: number;
    terminalName: string;
    segmentTypeId: number;
    segmentTypeName: string;
    status: number;
    terminalId:any;

}

export interface MerchantDto {
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
}

export interface TerminalDto {
    'enable': boolean,
    'terminalId': number,
    'branchId': number,
    'merchantId': number,
    'terminalNo': number,
    'serialNo': string,
    'alias': string,
    'model': string,
    'version': string,
    'mcc': string,
    'terminalType': number,
    'status': number,
    'hostId': number,
    'address': string,
    'shopPostCode': string,
    'shopProvinceCode': string,
    'shopCityCode': string,
    'currency': string
}