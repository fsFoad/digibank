import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportBankTransferComponent} from './report-bank-transfer/report-bank-transfer.component';
import {NewProjectRoutingModule} from './newProject-routing.module';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {RippleModule} from 'primeng/ripple';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TranslateModule} from '@ngx-translate/core';
import {TooltipModule} from 'primeng/tooltip';
import {PersianCalendarModule} from '../../../walletlibs/persian-calendar/persian-calendar.module';
import { PayaTakTransferComponent } from './paya-tak-transfer/paya-tak-transfer.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import { SantaRegisterTransferComponent } from './santa-register-transfer/santa-register-transfer.component';
import { RegularPayaRegisterTransferComponent } from './regular-paya-register-transfer/regular-paya-register-transfer.component';
import { RegisterPayaTransferComponent } from './register-paya-transfer/register-paya-transfer.component';
import { BankpayaChargeComponent } from './bankpaya-charge/bankpaya-charge.component';
import { ReportPayaBankComponent } from './report-paya-bank/report-paya-bank.component';
import { BanckPayaGhabzComponent } from './banck-paya-ghabz/banck-paya-ghabz.component';
import { EnsedadBonCardComponent } from './ensedad-bon-card/ensedad-bon-card.component';
import { RafeEnsedadBonCardComponent } from './rafe-ensedad-bon-card/rafe-ensedad-bon-card.component';
import { EnsedadWalletComponent } from './ensedad-wallet/ensedad-wallet.component';
import { ChargWalletComponent } from './charg-wallet/charg-wallet.component';
import { ReportYektaVarrizComponent } from './report-yekta-varriz/report-yekta-varriz.component';
import { ReportGhabzComponent } from './report-ghabz/report-ghabz.component';
import { BillComponent } from './bill/bill.component';
import { BillingBonCardComponent } from './billing-bon-card/billing-bon-card.component';
import { ReportCheckBardashtComponent } from './report-check-bardasht/report-check-bardasht.component';
import { InquiryCheckComponent } from './inquiry-check/inquiry-check.component';
import { SearchYektaComponent } from './search-yekta/search-yekta.component';
import { BranchPayComponent } from './branch-pay/branch-pay.component';
import { RegisterGhabzComponent } from './register-ghabz/register-ghabz.component';
import { RegisterBonCardComponent } from './register-bon-card/register-bon-card.component';
import { CreatWalletComponent } from './creat-wallet/creat-wallet.component';
import { CreateYektaComponent } from './create-yekta/create-yekta.component';
import {FileUploadModule} from 'primeng/fileupload';
import { GroupGhabzComponent } from './group-ghabz/group-ghabz.component';
import { WalletTransactionComponent } from './wallet-transaction/wallet-transaction.component';
import { YektaListComponent } from './yekta-list/yekta-list.component';
import { ReportClearComponent } from './report-clear/report-clear.component';
import { ReportStatusWalletComponent } from './report-status-wallet/report-status-wallet.component';
import { SubmitClearComponent } from './submit-clear/submit-clear.component';
import { SubmitCheckComponent } from './submit-check/submit-check.component';
import { UpOrDownloadComponent } from './up-or-download/up-or-download.component';
import { TashilatListComponent } from './tashilat-list/tashilat-list.component';


@NgModule({
    declarations: [
        ReportBankTransferComponent,
        PayaTakTransferComponent,
        SantaRegisterTransferComponent,
        RegularPayaRegisterTransferComponent,
        RegisterPayaTransferComponent,
        BankpayaChargeComponent,
        ReportPayaBankComponent,
        BanckPayaGhabzComponent,
        EnsedadBonCardComponent,
        RafeEnsedadBonCardComponent,
        EnsedadWalletComponent,
        ChargWalletComponent,
        ReportYektaVarrizComponent,
        ReportGhabzComponent,
        BillComponent,
        BillingBonCardComponent,
        ReportCheckBardashtComponent,
        InquiryCheckComponent,
        SearchYektaComponent,
        BranchPayComponent,
        RegisterGhabzComponent,
        RegisterBonCardComponent,
        CreatWalletComponent,
        CreateYektaComponent,
        GroupGhabzComponent,
        WalletTransactionComponent,
        YektaListComponent,
        ReportClearComponent,
        ReportStatusWalletComponent,
        SubmitClearComponent,
        SubmitCheckComponent,
        UpOrDownloadComponent,
        TashilatListComponent,

    ],
    imports: [
        CommonModule,
        NewProjectRoutingModule,
        ButtonModule,
        PanelModule,
        CardModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        ListboxModule,
        ReactiveFormsModule,
        SharedModule,
        TableModule,
        PickListModule,
        FormsModule,
        RippleModule,
        KeyFilterModule,
        TranslateModule,
        TooltipModule,
        PersianCalendarModule,
        InputNumberModule,
        InputMaskModule,
        FileUploadModule,
    ],
    exports: [
        ReportBankTransferComponent
    ]
})
export class NewProjectModule {
}
