import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {
    BatchCharge,
    BranchUpdateDto,
    createCommercialWalletDto,
    CreateWalletDto,
    FeeDto,
    LimitDto,
    MerchantCustomerDto,
    RequestBuyWalletDto,
    RequestChargeWalletDto,
    RequestGroupCharge,
    RequestServiceIdDto, RequestSettle,
    RestrictionDto,
    serviceDto, SettlementResultInfoDto,
    TerminalAccountTerminalDto
} from '../entities/public-api';
import {NotifierService} from '../notifier/notifier.module';
import {ConnectionService} from '../repositories/connection.service';
import {FeeManageDto} from "../../wallet/models/FeeManageDto";
import {AppSetting} from './AppSetting';

@Injectable({
    providedIn: 'root'
})
export class ApiFacadeService {


    constructor(private httpClient: HttpClient, private notifierService: NotifierService,
                private connectionService: ConnectionService) {

    }

    getcustomerbyid(customerId: string) {
        return this.connectionService.getConnection('/party/getcustomerbyid/' + customerId, 'getcustomerbyid');
    }

    getwalletinfo(tokenno): Observable<any> {
        return this.connectionService.getConnection('/wallet1/getwalletinfo/'
            + tokenno, 'getwalletinfo');

    }

    getbalancewalletsegmentinfo(tokenno): Observable<any> {
        return this.connectionService.getConnection('/wallet1/getbalancewalletsegmentinfo/'
            + tokenno, 'getbalancewalletsegmentinfo');
    }


    getbalanceinfo(tokenno): Observable<any> {
        return this.connectionService.getConnection('/wallet1/getbalanceinfo/'
            + tokenno, 'getbalanceinfo');
    }

    getaccounttransbyid(id: number): Observable<Object> {
        return this.connectionService.getConnection('/wallet/findallaccounttransbyid/' + id, 'findallaccounttransbyid');
    }

    getlimitType(productId?: number, hostId?: number, serviceId?: number, status?: number): any {
        return this.connectionService.getConnection('/wallet/getlimitbyproductidandserviceid?' +
            (productId ? 'productId=' + productId : '') + (serviceId ? '&serviceId=' + serviceId : '') +
            (hostId ? '&hostId=' + hostId : '') + (status ? '&status=' + status : ''), 'getlimitbyproductidandserviceid');
    }

    getReportaccounttranswallet(tokenNo?, walletType?, nationalCode?, mobileNo?, fromDate?, toDate?): Observable<any> {
        return this.connectionService.getConnection('/wallet1/reportaccounttranswallet/?'
            + (tokenNo ? 'tokenNo=' + tokenNo : '') + (walletType ? '&walletType=' + walletType : '') +
            (mobileNo ? '&mobileNo=' + mobileNo : '') + (nationalCode ? '&nationalCode=' + nationalCode : '') +
            (fromDate ? '&fromDate=' + fromDate : '') + (toDate ? '&toDate=' + toDate : ''), 'reportaccounttranswallet');
    }

    getrestrictionbyproductidandserviceid(productId?: number, hostId?: number, serviceId?: number,
                                          status?: number): Observable<any> {
        return this.connectionService.getConnection('/wallet/getrestrictionbyproductidandserviceid?' +
            (productId ? 'productId=' + productId : '') + (serviceId ? '&serviceId=' + serviceId : '') +
            (hostId ? '&hostId=' + hostId : '') + (status ? '&status=' + status : ''),
            'getrestrictionbyproductidandserviceid');
    }

    addrestriction(restrict: RestrictionDto) {
        return this.connectionService.postConnection('/wallet/addrestriction', restrict, 'addrestriction');
    }

    editrestriction(restrict: RestrictionDto) {
        return this.connectionService.postConnection('/wallet/editrestriction?', restrict, 'editrestriction');
    }

    getserviceType(serviceId?: string, name?: string, status?: string): Observable<any> {
        return this.connectionService.getConnection('/switch/getservicetype?' +
            (serviceId ? 'serviceId=' + serviceId : '') + (name ? '&name=' + name : '') +
            (status ? '&status=' + status : ''), 'getservicetype');
    }

    createservicetype(service: serviceDto) {
        return this.connectionService.postConnection('/switch/createservicetype', service, 'createservicetype');
    }

    updateservicetype(service: serviceDto) {
        return this.connectionService.postConnection('/switch/updateservicetype', service, 'updateservicetype');
    }

    addlimit(limit: LimitDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/addlimit', limit, 'addlimit');
    }

    editlimit(limit: LimitDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/editlimit', limit, 'editlimit');
    }

    getallproduct(): Observable<any> {
        return this.connectionService.getConnection('/wallet/getallproduct', 'getallproduct');
    }

    createwalletpersonal(createWalletDto: CreateWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createpersonalwallet', createWalletDto, 'createpersonalwallet');
    }

    createpersonalwalletbysegment(createWalletDto: CreateWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createpersonalwalletbysegment', createWalletDto,
            'createpersonalwalletbysegment');
    }

    createpersonalwalletbyshahkar(createWalletDto: CreateWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createpersonalwalletbyshahkar',
            createWalletDto, 'createpersonalwalletbyshahkar');
    }

    createcommercialwallet(wallet: createCommercialWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createcommercialwallet', wallet,
            'createcommercialwallet');
    }

    updatemerchantcustomer(wallet: MerchantCustomerDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/updatemerchantcustomer', wallet,
            'updatemerchantcustomer');
    }


    getReportAccountTransWalletBySegment(tokenNo?, walletType?, nationalCode?, mobileNo?, segmentTypeId?: string, fromDate?, toDate?): Observable<any> {
        return this.connectionService.getConnection('/wallet1/reportaccounttranswalletbysegment/?'
            + (tokenNo ? 'tokenNo=' + tokenNo : '') + (walletType ? '&segmentType=' + walletType : '') +
            (mobileNo ? '&mobileNo=' + mobileNo : '') + (segmentTypeId ? '&segmentTypeId=' + segmentTypeId : '') +
            (nationalCode ? '&nationalCode=' + nationalCode : '') +
            (fromDate ? '&fromDate=' + fromDate : '') + (toDate ? '&toDate=' + toDate : ''),
            'reportaccounttranswalletbysegment');
    }

    createBatchCharge(batchCharge: BatchCharge): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createbatchchargefile', batchCharge,
            'createbatchchargefile');
    }

    findAllSegment(): Observable<any> {
        return this.connectionService.getConnection('/wallet/getallsegmenttype',
            'getallsegmenttype');
    }

    getTerminalByCommercial(token: number): Observable<any> {
        return this.connectionService.getConnection('/wallet1/getwalletterminalbytokenno/' + token,
            'getwalletterminalbytokenno');
    }

    getWalletBySegmentInfo(tokenno): Observable<any> {
        return this.connectionService.getConnection('/wallet1/getsegmentinfobytokenno/'
            + tokenno, 'getsegmentinfobytokenno');
    }

    requestChargeWallet(wallet: RequestChargeWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createrequestservicechargewallet', wallet, 'createrequestservice');
    }

    chargeWallet(requestServiceId: RequestServiceIdDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/chargewalletbyrequestserviceid', requestServiceId, 'chargewalletbyrequestserviceid');
    }

    requestChargeWalletBySegment(wallet: RequestChargeWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createrequestservicechargewalletsegmenttype', wallet);
    }

    chargeWalletBySegment(wallet: RequestServiceIdDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/chargewalletsegmenttypeidbyrequestserviceid', wallet, 'chargewalletsegmenttypeidbyrequestserviceid');
    }

    requestBuyWallet(wallet: RequestBuyWalletDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createrequestservicebuywallet', wallet);
    }

    buyWallet(wallet: RequestServiceIdDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/buywalletbyrequestserviceid', wallet, 'buywalletbyrequestserviceid');
    }

    requestBatchCharge(requestgroupCharge: RequestGroupCharge): Observable<any> {
        return this.connectionService.postConnection('/wallet1/createrequestservicebatchcharge', requestgroupCharge);
    }

    batchCharge(requestNumber: RequestServiceIdDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/batchchargebyrequestserviceid', requestNumber);
    }

    createWage(fee: FeeManageDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/addfee', fee);
    }
    updateWage(fee: FeeManageDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/editfee', fee);
    }


    getWages(productId?: number, hostId?: number, serviceId?: number, status?: number): any {
        return this.connectionService.getConnection('/wallet/getfeebyproductidandserviceid?' +
            (productId ? 'productId=' + productId : '') + (serviceId ? '&serviceId=' + serviceId : '') +
            (hostId ? '&hostId=' + hostId : '') + (status ? '&status=' + status : ''),
            'getfeebyproductidandserviceid');
    }

    getFeeList(productId?: number, hostId?: number, serviceId?: number, status?: number): any{
        return this.connectionService.getConnection('/wallet1/getfeebyproductandservice?' +
            (productId ? 'productId=' + productId : '') + (serviceId ? '&serviceId=' + serviceId : '') +
            (hostId ? '&hostId=' + hostId : '') + (status ? '&status=' + status : ''),
            'getfeebyproductandservice');
    }

    updateWages(fee: FeeDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/editfee', fee,'editfee');
    }

    getReportWalletForExcel(tokenNo?, walletType?, nationalCode?, mobileNo?, fromDate?, toDate?) {
        window.location.href = AppSetting.API_ENDPOINT+'/wallet1/reportaccounttranswallet/export/excel/?'
            + (tokenNo ? 'tokenNo=' + tokenNo : '') + (walletType ? '&walletType=' + walletType : '') +
            (mobileNo ? '&mobileNo=' + mobileNo : '') + (nationalCode ? '&nationalCode=' + nationalCode : '') +
            (fromDate ? '&fromDate=' + fromDate : '') + (toDate ? '&toDate=' + toDate : '');
    }

    getReportWalletBySegmentForExcel(tokenNo?, walletType?, nationalCode?, mobileNo?, segmentTypeId?: string, fromDate?, toDate?) {
        return this.connectionService.downloadConnection('/wallet1/reportaccounttranswalletbysegment/export/excel/?'
            + (tokenNo ? 'tokenNo=' + tokenNo : '') + (walletType ? '&segmentType=' + walletType : '') +
            (mobileNo ? '&mobileNo=' + mobileNo : '') + (segmentTypeId && segmentTypeId != ''  ? '&segmentTypeId=' + segmentTypeId : '') +
            (nationalCode ? '&nationalCode=' + nationalCode : '') +
            (fromDate ? '&fromDate=' + fromDate : '') + (toDate ? '&toDate=' + toDate : ''))
    }

    getMerchant(): Observable<any> {
        return this.connectionService.getConnection('/party/findallmerchant',
            'findallmerchant');
    }

    getMerchantBranchByMerchantId(merchantId: number): Observable<any> {
        return this.connectionService.getConnection('/party/getmerchantbranchbymerchantid/' + merchantId);
    }

    updateBranch(branch: BranchUpdateDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/updatemerchantbranch', branch);
    }

    getTerminalAccountByMerchantId(merchantId: number): Observable<any> {
        return this.connectionService.getConnection('/wallet1/findterminalandterminalaccountbymerchantid/' + merchantId);
    }

    findMerchantBranchByMerchantId(merchantId: number): Observable<any> {
        return this.connectionService.getConnection('/wallet1/findmerchantbranchbymerchantid/' + merchantId);
    }
    fetchfeebyfeeid(feeid: number | string): Observable<any> {
        return this.connectionService.getConnection('/wallet1/fetchfeebyfeeid/' + feeid,'fetchfeebyfeeid');
    }
    updateTerminalAccount(terminalAccount: TerminalAccountTerminalDto): Observable<any> {
        return this.connectionService.postConnection('/wallet1/updateterminalandterminalaccount', terminalAccount);
    }
    createsettlementbatch(date?: number, transType?: number, categoryType?: number): any{
        return this.connectionService.downloadConnection('/wallet1/createsettlementbatch?'+
            (date ? 'date=' + date : '') + (transType ? '&transType=' + transType : '') +
            (categoryType ? '&categoryType='+ categoryType : ''));

    }

    createrequestservicesettleregister(requestsettlement: RequestSettle): Observable<any> {
        return this.connectionService.postConnection('wallet1/createrequestservicesettleregister', requestsettlement);
    }

    settlementregistered(settlementResultInfoDto: SettlementResultInfoDto): Observable<any> {
        console.log(settlementResultInfoDto);
        return this.connectionService.postConnection('wallet1/settlementregistered', settlementResultInfoDto);
    }
}
