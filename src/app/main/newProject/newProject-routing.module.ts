import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReportBankTransferComponent} from './report-bank-transfer/report-bank-transfer.component';
import {PayaTakTransferComponent} from './paya-tak-transfer/paya-tak-transfer.component';
import {SantaRegisterTransferComponent} from './santa-register-transfer/santa-register-transfer.component';
import {RegularPayaRegisterTransferComponent} from './regular-paya-register-transfer/regular-paya-register-transfer.component';
import {RegisterPayaTransferComponent} from './register-paya-transfer/register-paya-transfer.component';
import {BankpayaChargeComponent} from './bankpaya-charge/bankpaya-charge.component';
import {ReportPayaBankComponent} from './report-paya-bank/report-paya-bank.component';
import {BanckPayaGhabzComponent} from './banck-paya-ghabz/banck-paya-ghabz.component';
import {EnsedadBonCardComponent} from './ensedad-bon-card/ensedad-bon-card.component';
import {RafeEnsedadBonCardComponent} from './rafe-ensedad-bon-card/rafe-ensedad-bon-card.component';
import {EnsedadWalletComponent} from './ensedad-wallet/ensedad-wallet.component';
import {ChargWalletComponent} from './charg-wallet/charg-wallet.component';
import {ReportYektaVarrizComponent} from './report-yekta-varriz/report-yekta-varriz.component';
import {ReportGhabzComponent} from './report-ghabz/report-ghabz.component';
import {BillComponent} from './bill/bill.component';
import {BillingBonCardComponent} from './billing-bon-card/billing-bon-card.component';
import {ReportCheckBardashtComponent} from './report-check-bardasht/report-check-bardasht.component';
import {InquiryCheckComponent} from './inquiry-check/inquiry-check.component';
import {SearchYektaComponent} from './search-yekta/search-yekta.component';
import {BranchPayComponent} from './branch-pay/branch-pay.component';
import {RegisterGhabzComponent} from './register-ghabz/register-ghabz.component';
import {RegisterBonCardComponent} from './register-bon-card/register-bon-card.component';
import {CreatWalletComponent} from './creat-wallet/creat-wallet.component';
import {CreateYektaComponent} from './create-yekta/create-yekta.component';
import {GroupGhabzComponent} from './group-ghabz/group-ghabz.component';
import {WalletTransactionComponent} from './wallet-transaction/wallet-transaction.component';
import {YektaListComponent} from './yekta-list/yekta-list.component';
import {ReportClearComponent} from './report-clear/report-clear.component';
import {ReportStatusWalletComponent} from './report-status-wallet/report-status-wallet.component';
import {SubmitClearComponent} from './submit-clear/submit-clear.component';
import {SubmitCheckComponent} from './submit-check/submit-check.component';
import { OrganizationalEntityManagerComponent } from "./organizational-entity-manager/organizational-entity-manager.component";
import { PersonEditorComponent } from "./person-editor/person-editor.component";

const routes = [
    {
        path: 'registerPayaTransfer',
        component: RegisterPayaTransferComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'payaTakTransfer',
        component: PayaTakTransferComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'santaRegisterTransfer',
        component: SantaRegisterTransferComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'regularPayaRegisterTransfer',
        component: RegularPayaRegisterTransferComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportBankTransfer',
        component: ReportBankTransferComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'bankpayaCharge',
        component: BankpayaChargeComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportPayaBank',
        component: ReportPayaBankComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'banckPayaGhabz',
        component: BanckPayaGhabzComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'ensedadBonCard',
        component: EnsedadBonCardComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'rafeEnsedadBonCard',
        component: RafeEnsedadBonCardComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'ensedadWallet',
        component: EnsedadWalletComponent,
        //canActivate:[LoginGuard],
    },

    {
        path: 'chargAmountWallet',
        component: ChargWalletComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportYektaVarriz',
        component: ReportYektaVarrizComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportGhabz',
        component: ReportGhabzComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'bills',
        component: BillComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'billsBonCard',
        component: BillingBonCardComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportCheckBardasht',
        component: ReportCheckBardashtComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'inquiryCheck',
        component: InquiryCheckComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'searchYekta',
        component: SearchYektaComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'branchPay',
        component: BranchPayComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'registerGhabz',
        component: RegisterGhabzComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'registerBonCard',
        component: RegisterBonCardComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'creatWallet',
        component: CreatWalletComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'createYekta',
        component: CreateYektaComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'groupGhabz',
        component: GroupGhabzComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'walletTransaction',
        component: WalletTransactionComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'yektaList',
        component: YektaListComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportClear',
        component: ReportClearComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'reportStatusWallet',
        component: ReportStatusWalletComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'submitClear',
        component: SubmitClearComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'submitCheck',
        component: SubmitCheckComponent,
        //canActivate:[LoginGuard],
    },
    {
        path: 'organizational-entity-manager',
        component: OrganizationalEntityManagerComponent,
    },
    {
        path: 'person-editor',
        component: PersonEditorComponent,
    },

]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class NewProjectRoutingModule { }
