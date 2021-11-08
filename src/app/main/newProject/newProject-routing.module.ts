import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReportBankTransferComponent } from './report-bank-transfer/report-bank-transfer.component';
import { PayaTakTransferComponent } from './paya-tak-transfer/paya-tak-transfer.component';
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
import { GroupGhabzComponent } from './group-ghabz/group-ghabz.component';
import { WalletTransactionComponent } from './wallet-transaction/wallet-transaction.component';
import { YektaListComponent } from './yekta-list/yekta-list.component';
import { ReportClearComponent } from './report-clear/report-clear.component';
import { ReportStatusWalletComponent } from './report-status-wallet/report-status-wallet.component';
import { SubmitClearComponent } from './submit-clear/submit-clear.component';
import { SubmitCheckComponent } from './submit-check/submit-check.component';
import { TashilatListComponent } from './tashilat-list/tashilat-list.component';
import { OrganizationalEntityManagerComponent } from "./organizational-entity-manager/organizational-entity-manager.component";
import { PersonEditorComponent } from "./person-editor/person-editor.component";
import { CardBoardComponent } from './card-board/card-board.component';
import { CardBoardPayaComponent } from "./card-board-paya/card-board-paya.component";
import { Bill2Component } from "./bill2/bill2.component";
import { YourRialAccountsComponent } from "./your-rial-accounts/your-rial-accounts.component";
import { YourCurrencyAccountsComponent } from "./your-currency-accounts/your-currency-accounts.component";
import { CardBoardSatnaComponent } from "./card-board-satna/card-board-satna.component";
import { SooratHesabComponent } from "./soorat-hesab/soorat-hesab.component";
import { GardeshRizEnteghalVojoohComponent } from "./gardesh-riz-enteghal-vojooh/gardesh-riz-enteghal-vojooh.component";
import { DaryaftFileSoorathesabComponent } from "./daryaft-file-soorathesab/daryaft-file-soorathesab.component";
import { InternetRemittanceReportComponent } from "./internet-remittance-report/internet-remittance-report.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { InternetRemittanceRegisterationComponent } from "./internet-remittance-registeration/internet-remittance-registeration.component";
import { InternetRemittanceCartableComponent } from "./internet-remittance-cartable/internet-remittance-cartable.component";
import { SatnaRemittanceRegistrationComponent } from "./satna-remittance-registration/satna-remittance-registration.component";
import { PayaRegularRemittanceRegistrationComponent } from "./paya-regular-remittance-registration/paya-regular-remittance-registration.component";
import { PayaRegularRemittanceCartableComponent } from "./paya-regular-remittance-cartable/paya-regular-remittance-cartable.component";
import { PayaGroupRemittanceCartableComponent } from "./paya-group-remittance-cartable/paya-group-remittance-cartable.component";


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
        path: 'tashilatList',
        component: TashilatListComponent,
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
    {
        path: 'cardBoard',
        component: CardBoardComponent,
    },
    {
        path: 'cardBoardPaya',
        component: CardBoardPayaComponent,
    },
    {
        path: 'oldBill',
        component: Bill2Component,
    },
    {
        path: 'yourRialAccounts',
        component: YourRialAccountsComponent,
    },
    {
        path: 'yourCurrencyAccounts',
        component: YourCurrencyAccountsComponent,
    },
    {
        path: 'cardBoardSatna',
        component: CardBoardSatnaComponent,
    },
    {
        path: 'sooratHesab',
        component: SooratHesabComponent,
    },
    {
        path: 'gardeshRizEnteghalVojooh',
        component: GardeshRizEnteghalVojoohComponent,
    },
    {
        path: 'daryaftFileSooratHesab',
        component: DaryaftFileSoorathesabComponent,
    },
    {
        path: 'internetRemittanceReport',
        component: InternetRemittanceReportComponent,
    },
    {
        path: 'internetRemittanceRegistration',
        component: InternetRemittanceRegisterationComponent,
    },
    {
        path: 'internetRemittanceCartable',
        component: InternetRemittanceCartableComponent,
    },
    {
        path: 'satnaRemittanceRegistration',
        component: SatnaRemittanceRegistrationComponent,
    },
    {
        path: 'payaRegularRemittanceRegistration',
        component: PayaRegularRemittanceRegistrationComponent,
    },
    {
        path: 'payaRegularRemittanceCartable',
        component: PayaRegularRemittanceCartableComponent,
    },
    {
        path: 'payaGroupRemittanceCartable',
        component: PayaGroupRemittanceCartableComponent,
    },






    // these should be last
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
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
