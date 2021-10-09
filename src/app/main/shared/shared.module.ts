import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainAccountPipe} from "./pipes/mainAccount.pipe";
import {PurchaseTypePipe} from "./pipes/purchaseType.pipe";
import {ChargeTypePipe} from "./pipes/chargeType.pipe";
import {SegmentTypePipe} from "./pipes/segmentType.pipe";
import {StatusPipe} from "./pipes/status.pipe";
import {TimePipe} from "./pipes/time.pipe";
import {CastToDatePipe} from "./pipes/cast-to-date.pipe";
import {ParameterTitlePipe} from "./pipes/param-title-pipe";
import {statusReportOrganizationPipe} from './pipes/status-report-organization.pipe';
import {AddCommaDirective} from './directives/add-comma.directive';
import {NumberOnlyDirective} from './directives/number-only.directive';
import {AddCommaPipe} from './pipes/add-comma.pipe';
import {RialCurrencyPipe} from './pipes/rial-currency.pipe';
import {CustomComponentsModule} from "../../../walletlibs/custom-components.module";
import {RestrictionTypePipe} from './pipes/restriction-type.pipe';
import {AddCaracterPipe} from "./pipes/add-caracter.pipe";


@NgModule({
    declarations: [
        MainAccountPipe,
        PurchaseTypePipe,
        ChargeTypePipe,
        SegmentTypePipe,
        StatusPipe,
        TimePipe,
        CastToDatePipe,
        ParameterTitlePipe,
        statusReportOrganizationPipe,
        AddCommaDirective,
        NumberOnlyDirective,
        AddCommaPipe,
        RialCurrencyPipe,
        RestrictionTypePipe,
        AddCaracterPipe
    ],
    exports: [
        MainAccountPipe,
        PurchaseTypePipe,
        ChargeTypePipe,
        SegmentTypePipe,
        StatusPipe,
        TimePipe,
        CastToDatePipe,
        ParameterTitlePipe,
        AddCaracterPipe,
        statusReportOrganizationPipe,
        AddCommaDirective,
        NumberOnlyDirective,
        AddCommaPipe,
        RialCurrencyPipe,
        RestrictionTypePipe,
        CustomComponentsModule
    ],
    imports: [
        CommonModule,
        CustomComponentsModule
    ]
})

export class SharedModule {
}
