import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportBankTransferComponent } from './report-bank-transfer/report-bank-transfer.component';
import { PayaTakTransferComponent } from './paya-tak-transfer/paya-tak-transfer.component';
import { SantaRegisterTransferComponent } from './satna-register-transfer/santa-register-transfer.component';
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
import { OrganizationalEntityManagerComponent } from './organizational-entity-manager/organizational-entity-manager.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { CardBoardComponent } from './card-board/card-board.component';
import { CardBoardPayaComponent } from './card-board-paya/card-board-paya.component';
import { Bill2Component } from './bill2/bill2.component';
import { YourRialAccountsComponent } from './your-rial-accounts/your-rial-accounts.component';
import { YourCurrencyAccountsComponent } from './your-currency-accounts/your-currency-accounts.component';
import { CardBoardSatnaComponent } from './card-board-satna/card-board-satna.component';
import { SooratHesabComponent } from './soorat-hesab/soorat-hesab.component';
import { GardeshRizEnteghalVojoohComponent } from './gardesh-riz-enteghal-vojooh/gardesh-riz-enteghal-vojooh.component';
import { DaryaftFileSoorathesabComponent } from './daryaft-file-soorathesab/daryaft-file-soorathesab.component';
import { InternetRemittanceReportComponent } from './internet-remittance-report/internet-remittance-report.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InternetRemittanceRegisterationComponent } from './internet-remittance-registeration/internet-remittance-registeration.component';
import { InternetRemittanceCartableComponent } from './internet-remittance-cartable/internet-remittance-cartable.component';
import { SatnaRemittanceRegistrationComponent } from './satna-remittance-registration/satna-remittance-registration.component';
import { PayaRegularRemittanceRegistrationComponent } from './paya-regular-remittance-registration/paya-regular-remittance-registration.component';
import { PayaRegularRemittanceCartableComponent } from './paya-regular-remittance-cartable/paya-regular-remittance-cartable.component';
import { PayaGroupRemittanceCartableComponent } from './paya-group-remittance-cartable/paya-group-remittance-cartable.component';
import { PayaGroupRemittanceUploadFileComponent } from './paya-group-remittance-upload-file/paya-group-remittance-upload-file.component';
import { ReliableRemittanceReportComponent } from './reliable-remittance-report/reliable-remittance-report.component';
import { ReportGroupRemittanceComponent } from './report-group-remittance/report-group-remittance.component';
import { GhobozUploadFileComponent } from './ghoboz-upload-file/ghoboz-upload-file.component';
import { SubmitInformationVarizComponent } from './submit-information-variz/submit-information-variz.component';
import { ReportUploadedFilesComponent } from './report-uploaded-files/report-uploaded-files.component';
import { ViewEditInformationDepositManagementComponent } from './view-edit-information-deposit-management/view-edit-information-deposit-management.component';
import { UploadPaymentManagementFileComponent } from './upload-payment-management-file/upload-payment-management-file.component';
import { SubmitInformationPymentMnagementComponent } from './submit-information-pyment-mnagement/submit-information-pyment-mnagement.component';
import { ViewEditInformationPaymentManagementComponent } from './view-edit-information-payment-management/view-edit-information-payment-management.component';
import { ReportUploadedFilesPaymentManagmentComponent } from './report-uploaded-files-payment-managment/report-uploaded-files-payment-managment.component';
import { BillingReportComponent } from './billing-report/billing-report.component';
import { ReportFeePaymentManagmentComponent } from './report-fee-payment-managment/report-fee-payment-managment.component';
import { CardBoardGhobozComponent } from './card-board-ghoboz/card-board-ghoboz.component';
import { SpecialPaymentCartableComponent } from './special-payment-cartable/special-payment-cartable.component';
import { SorathesabTashilatKarkonanComponent } from './sorathesab-tashilat-karkonan/sorathesab-tashilat-karkonan.component';
import { PardakhtAghsatComponent } from './pardakht-aghsat/pardakht-aghsat.component';
import { IndirectLiabilitiesReportsComponent } from './indirect-liabilities-reports/indirect-liabilities-reports.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { LoginGuard } from '../../auth/guard/login.guard';
import { LoginComponent } from 'app/auth/login/login.component';
import { DepositSourcesReportComponent } from './deposit-sources-report/deposit-sources-report.component';
import { PersonalEntityListComponent } from './personal-entity-list/personal-entity-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [LoginGuard], children: [

      {
        path: 'registerPayaTransfer',
        component: RegisterPayaTransferComponent,
      },
      {
        path: 'payaTakTransfer',
        component: PayaTakTransferComponent,
      },
      {
        path: 'santaRegisterTransfer',
        component: SantaRegisterTransferComponent,
      },
      {
        path: 'regularPayaRegisterTransfer',
        component: RegularPayaRegisterTransferComponent,
      },
      {
        path: 'reportBankTransfer',
        component: ReportBankTransferComponent,
      },
      {
        path: 'bankpayaCharge',
        component: BankpayaChargeComponent,
      },
      {
        path: 'reportPayaBank',
        component: ReportPayaBankComponent,
      },
      {
        path: 'banckPayaGhabz',
        component: BanckPayaGhabzComponent,
      },
      {
        path: 'ensedadBonCard',
        component: EnsedadBonCardComponent,
      },
      {
        path: 'rafeEnsedadBonCard',
        component: RafeEnsedadBonCardComponent,
      },
      {
        path: 'ensedadWallet',
        component: EnsedadWalletComponent,
      },

      {
        path: 'chargAmountWallet',
        component: ChargWalletComponent,
      },
      {
        path: 'reportYektaVarriz',
        component: ReportYektaVarrizComponent,
      },
      {
        path: 'reportGhabz',
        component: ReportGhabzComponent,
      },
      {
        path: 'bills',
        component: BillComponent,
      },
      {
        path: 'billsBonCard',
        component: BillingBonCardComponent,
      },
      {
        path: 'reportCheckBardasht',
        component: ReportCheckBardashtComponent,
      },
      {
        path: 'inquiryCheck',
        component: InquiryCheckComponent,
      },
      {
        path: 'searchYekta',
        component: SearchYektaComponent,
      },
      {
        path: 'branchPay',
        component: BranchPayComponent,
      },
      {
        path: 'registerGhabz',
        component: RegisterGhabzComponent,
      },
      {
        path: 'registerBonCard',
        component: RegisterBonCardComponent,
      },
      {
        path: 'creatWallet',
        component: CreatWalletComponent,
      },
      {
        path: 'createYekta',
        component: CreateYektaComponent,
      },
      {
        path: 'groupGhabz',
        component: GroupGhabzComponent,
      },
      {
        path: 'walletTransaction',
        component: WalletTransactionComponent,
      },
      {
        path: 'yektaList',
        component: YektaListComponent,
      },
      {
        path: 'reportClear',
        component: ReportClearComponent,
      },
      {
        path: 'reportStatusWallet',
        component: ReportStatusWalletComponent,
      },
      {
        path: 'submitClear',
        component: SubmitClearComponent,
      },
      {
        path: 'submitCheck',
        component: SubmitCheckComponent,
      },
      {
        path: 'tashilatList',
        component: TashilatListComponent,
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
      {
        path: 'payaGroupRemittanceUploadFile',
        component: PayaGroupRemittanceUploadFileComponent,
      },
      {
        path: 'reliableRemittanceReport',
        component: ReliableRemittanceReportComponent,
      },
      {
        path: 'reportGroupRemittance',
        component: ReportGroupRemittanceComponent,
      },
      {
        path: 'ghobozUploadFile',
        component: GhobozUploadFileComponent,
      },
      {
        path: 'submitInformationVariz',
        component: SubmitInformationVarizComponent,
      },
      {
        path: 'reportUploadedFiles',
        component: ReportUploadedFilesComponent,
      },
      {
        path: 'viewEditInformationDepositManagement',
        component: ViewEditInformationDepositManagementComponent,
      },
      {
        path: 'uploadPaymentManagementFile',
        component: UploadPaymentManagementFileComponent,
      },
      {
        path: 'submitInformationPymentMnagement',
        component: SubmitInformationPymentMnagementComponent,
      },
      {
        path: 'viewEditInformationPaymentManagement',
        component: ViewEditInformationPaymentManagementComponent,
      },
      {
        path: 'reportUploadedFilesPaymentManagment',
        component: ReportUploadedFilesPaymentManagmentComponent,
      },
      {
        path: 'billingReport',
        component: BillingReportComponent,
      },
      {
        path: 'reportFeePaymentManagment',
        component: ReportFeePaymentManagmentComponent,
      },
      {
        path: 'specialPaymentCartable',
        component: SpecialPaymentCartableComponent,
      },
      {
        path: 'cardBoardGhoboz',
        component: CardBoardGhobozComponent,
      },
      {
        path: 'sorathesabTashilatKarkonan',
        component: SorathesabTashilatKarkonanComponent,
      },
      {
        path: 'PardakhtAghsat',
        component: PardakhtAghsatComponent,
      },
      {
        path: 'indirectLiabilitiesReports',
        component: IndirectLiabilitiesReportsComponent,
      },
      {
        path: 'chartTest',
        component: ChartTestComponent,
      },
      {
        path: 'depositSourcesReport',
        component: DepositSourcesReportComponent,
      },
      {
        path: 'personalEntityList',
        component: PersonalEntityListComponent,
      },


      // add new components above
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
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NewProjectRoutingModule {
}
