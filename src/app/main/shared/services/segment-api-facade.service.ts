import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotifierService} from "../notifier/notifier.module";
import {Observable} from "rxjs";
import {SegmentDto} from "../entities/segmentModels/segmentDto";
import {ProductSegmentDto} from "../entities/segmentModels/productSegmentDto";
import {TerminalSegmentDto} from "../entities/TerminalSegmentModels/TerminalSegmentDto";
import {ConnectionService} from "../repositories/connection.service";

@Injectable({
    providedIn: 'root'
})
export class SegmentApiFacadeService {

    createdSegment: SegmentDto;

    constructor(private httpClient: HttpClient, private notifierService: NotifierService,
                private connectionService: ConnectionService) {

    }

    createSegment(segment: SegmentDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/addsegmenttype', segment,
            'addsegmenttype');
    }

    findAllSegment(): Observable<any> {
        return this.connectionService.getConnection('/wallet/getallsegmenttype','getallsegmenttype');
    }

    editsegmenttype(segment: SegmentDto): Observable<any> {
        this.createdSegment = segment;
        return this.connectionService.postConnection('/wallet/editsegmenttype', segment,
            'editsegmenttype');
    }

    getproductsegment(productId?: string | number, segmentId?: string | number): Observable<any> {
        return this.connectionService.getConnection('/wallet/getproductsegment?' + (productId ? 'productId=' + productId : '') +
            (segmentId ? '&segmentTypeId=' + segmentId : ''),
            'getproductsegment');
    }

    addproductsegment(productSegmentDto: ProductSegmentDto[]): Observable<any> {
        return this.connectionService.postConnection('/wallet/addproductsegment', productSegmentDto ,
            'addproductsegment');
    }

    editproductsegment(productSegmentDto: ProductSegmentDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/editproductsegment', productSegmentDto ,
            'editproductsegment');
    }



    getallproduct(): Observable<any> {
        return this.connectionService.getConnection('/wallet/getallproduct',
            'getallproduct');
    }

    getallsegmenttype(): Observable<any> {
        return this.connectionService.getConnection('/wallet/getallsegmenttype','getallsegmenttype');
    }

    getmerchant(): Observable<any> {
        return this.connectionService.getConnection('/party/findallmerchant',
            'findallmerchant');
    }

    getterminal(merchantId: number): Observable<any> {
        return this.connectionService.getConnection('/party/findterminalbymerchantid/' + merchantId,
            'findterminalbymerchantid');
    }

    addTerminalSegment(terminalSegmentDto: TerminalSegmentDto[]): Observable<any> {
        return this.connectionService.postConnection('/wallet/addterminalsegment', terminalSegmentDto,
            'addterminalsegment');
    }

    getTerminalSegment(terminalId?: string | number, segmentId?: string | number): Observable<any> {
        return this.connectionService.getConnection('/wallet/getterminalsegment?' + (terminalId ? 'terminalId=' + terminalId : '') +
            (segmentId ? '&segmentTypeId=' + segmentId : ''),'getterminalsegment');
    }

    updateTerminalSegment(terminalSegmentDto: TerminalSegmentDto): Observable<any> {
        return this.connectionService.postConnection('/wallet/editterminalsegment', terminalSegmentDto,
            'editterminalsegment');
    }




}