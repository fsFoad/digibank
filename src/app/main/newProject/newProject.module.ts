import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportBankTransferComponent } from './report-bank-transfer/report-bank-transfer.component';
import { NewProjectRoutingModule } from './newProject-routing.module';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { RippleModule } from 'primeng/ripple';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { PersianCalendarModule } from '../../../walletlibs/persian-calendar/persian-calendar.module';
import { PayaTakTransferComponent } from './paya-tak-transfer/paya-tak-transfer.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
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
import { FileUploadModule } from 'primeng/fileupload';
import { GroupGhabzComponent } from './group-ghabz/group-ghabz.component';
import { WalletTransactionComponent } from './wallet-transaction/wallet-transaction.component';
import { YektaListComponent } from './yekta-list/yekta-list.component';
import { ReportClearComponent } from './report-clear/report-clear.component';
import { ReportStatusWalletComponent } from './report-status-wallet/report-status-wallet.component';
import { SubmitClearComponent } from './submit-clear/submit-clear.component';
import { SubmitCheckComponent } from './submit-check/submit-check.component';
import { UpOrDownloadComponent } from './up-or-download/up-or-download.component';
import { TashilatListComponent } from './tashilat-list/tashilat-list.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { OrganizationalEntityManagerComponent } from './organizational-entity-manager/organizational-entity-manager.component';
import { OrganizationalEntityInfoEditorComponent } from './organizational-entity-manager/organizational-entity-info-editor/organizational-entity-info-editor.component';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PaginatorModule } from 'primeng/paginator';
import { ChartModule } from 'primeng/chart';
import { OrganizationalEntityInfoViewerComponent } from './organizational-entity-manager/organizational-entity-info-viewer/organizational-entity-info-viewer.component';
import { EditViewOtpProcessComponent } from './edit-view-otp-process/edit-view-otp-process.component';
import { BoardOfDirectorsEditorComponent } from './board-of-directors-editor/board-of-directors-editor.component';
import { PartySignatureEditorComponent } from './person-editor/party-signature-editor/party-signature-editor.component';
import { OrganizationalRoleEditorComponent } from './person-editor/organizational-role-editor/organizational-role-editor.component';
import { OrganizationalContactInfoEditorComponent } from './person-editor/organizational-contact-info-editor/organizational-contact-info-editor.component';
import { OrganizationalEntityDocumentsEditorComponent } from './person-editor/organizational-entity-documents-editor/organizational-entity-documents-editor.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { PersonIdentityInfoEditorComponent } from './person-editor/person-identity-info-editor/person-identity-info-editor.component';
import { PersonSupplementaryInfoEditorComponent } from './person-editor/person-supplementary-info-editor/person-supplementary-info-editor.component';
import { CardBoardComponent } from './card-board/card-board.component';
import { CardBoardPayaComponent } from './card-board-paya/card-board-paya.component';
import { DetailsReliableRemittanceRequestComponent } from './details-reliable-remittance-request/details-reliable-remittance-request.component';
import { Bill2Component } from './bill2/bill2.component';
import { YourRialAccountsComponent } from './your-rial-accounts/your-rial-accounts.component';
import { YourCurrencyAccountsComponent } from './your-currency-accounts/your-currency-accounts.component';
import { CardBoardSatnaComponent } from './card-board-satna/card-board-satna.component';
import { SpecificationsRequestSatnaComponent } from './specifications-request-satna/specifications-request-satna.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SooratHesabComponent } from './soorat-hesab/soorat-hesab.component';
import { GardeshRizEnteghalVojoohComponent } from './gardesh-riz-enteghal-vojooh/gardesh-riz-enteghal-vojooh.component';
import { DaryaftFileSoorathesabComponent } from './daryaft-file-soorathesab/daryaft-file-soorathesab.component';
import { InternetRemittanceReportComponent } from './internet-remittance-report/internet-remittance-report.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InternetRemittanceRegisterationComponent } from './internet-remittance-registeration/internet-remittance-registeration.component';
import { InternetRemittanceCartableComponent } from './internet-remittance-cartable/internet-remittance-cartable.component';
import { SatnaRemittanceRegistrationComponent } from './satna-remittance-registration/satna-remittance-registration.component';
import { SatnaRemittanceRegistrationConfirmationComponent } from './satna-remittance-registration-confirmation/satna-remittance-registration-confirmation.component';
import { PayaRegularRemittanceRegistrationConfirmationComponent } from './paya-regular-remittance-registration-confirmation/paya-regular-remittance-registration-confirmation.component';
import { PayaRegularRemittanceRegistrationComponent } from './paya-regular-remittance-registration/paya-regular-remittance-registration.component';
import { PayaRegularRemittanceCartableComponent } from './paya-regular-remittance-cartable/paya-regular-remittance-cartable.component';
import { PayaRegularRemittanceCartableDetailsComponent } from './paya-regular-remittance-cartable-details/paya-regular-remittance-cartable-details.component';
import { PayaGroupRemittanceCartableComponent } from './paya-group-remittance-cartable/paya-group-remittance-cartable.component';
import { PayaGroupRemittanceCartableDetailsComponent } from './paya-group-remittance-cartable-details/paya-group-remittance-cartable-details.component';
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
import { SpecialPaymentCartableComponent } from './special-payment-cartable/special-payment-cartable.component';
import { SpecialPaymentCartableDetailsComponent } from './special-payment-cartable-details/special-payment-cartable-details.component';
import { CardBoardGhobozComponent } from './card-board-ghoboz/card-board-ghoboz.component';
import { RequestGhobozComponent } from './request-ghoboz/request-ghoboz.component';
import { SorathesabTashilatKarkonanComponent } from './sorathesab-tashilat-karkonan/sorathesab-tashilat-karkonan.component';
import { PardakhtAghsatComponent } from './pardakht-aghsat/pardakht-aghsat.component';
import { DialogModule } from 'primeng/dialog';
import { IndirectLiabilitiesReportsComponent } from './indirect-liabilities-reports/indirect-liabilities-reports.component';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { AccountSummaryCardComponent } from './account-summary-card/account-summary-card.component';
import { DepositSourcesReportComponent } from './deposit-sources-report/deposit-sources-report.component';
import { InternetRemittanceCartableDetailsComponent } from './internet-remittance-cartable-details/internet-remittance-cartable-details.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PersonalEntityListComponent } from './personal-entity-list/personal-entity-list.component';
import { UpdatePersonalComponent } from './update-personal/update-personal.component';
import { UpdatePersonIdentityInfoEditorComponent } from './update-personal/update-person-identity-info-editor/update-person-identity-info-editor.component';
import { UpdatePartySignatureEditorComponent } from './update-personal/update-party-signature-editor/update-party-signature-editor.component';
import { UpdateOrganizationalRoleEditorComponent } from './update-personal/update-organizational-role-editor/update-organizational-role-editor.component';
import { UpdateOrganizationalContactInfoEditorComponent } from './update-personal/update-organizational-contact-info-editor/update-organizational-contact-info-editor.component';
import { UpdatePersonSupplementaryInfoEditorComponent } from './update-personal/update-person-supplementary-info-editor/update-person-supplementary-info-editor.component';
import { UpdateOrganizationalEntityDocumentsEditorComponent } from './update-personal/update-organizational-entity-documents-editor/update-organizational-entity-documents-editor.component';
import { CreateContactComponent } from './person-editor/organizational-contact-info-editor/create-contact/create-contact.component';
import { CreateAddressComponent } from './person-editor/organizational-contact-info-editor/create-address/create-address.component';
import { AccountTreeComponent } from './account-tree/account-tree.component';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ChartOfFacilitiesReceivedComponent } from './chart-of-facilities-received/chart-of-facilities-received.component';
import { ExpendituresAndRevenuesComponent } from './expenditures-and-revenues/expenditures-and-revenues.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { NotifierService, MessageService as MessageService2 } from '../shared/notifier/notifier.module';
import { UpdateAddressComponent } from './update-personal/update-organizational-contact-info-editor/update-address/update-address.component';
import { UpdateContactComponent } from './update-personal/update-organizational-contact-info-editor/update-contact/update-contact.component';
import { UpdateOrganizationalEntityManagerComponent } from './update-organizational-entity-manager/update-organizational-entity-manager.component';
import { OrganizationalEntityListComponent } from './organizational-entity-list/organizational-entity-list.component';
import { CreateRegistrationInfoComponent } from './board-of-directors-editor/create-registration-info/create-registration-info.component';
import { IdentificationTransactionComponent } from './identification-transaction/identification-transaction.component';
import { ActivityFieldComponent } from './person-editor/activity-field/activity-field.component';
import { RialAccountByBankComponent } from './rial-account-by-bank/rial-account-by-bank.component';
import { HoldingsBillComponent } from './holdings-bill/holdings-bill.component';

@NgModule({
  providers: [
    ConfirmationService,
    MessageService,
    NotifierService,
    MessageService2,
  ],
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

    OrganizationalEntityManagerComponent,
    OrganizationalEntityInfoEditorComponent,
    OrganizationalEntityInfoViewerComponent,
    EditViewOtpProcessComponent,
    BoardOfDirectorsEditorComponent,
    PartySignatureEditorComponent,
    OrganizationalRoleEditorComponent,
    OrganizationalContactInfoEditorComponent,
    OrganizationalEntityDocumentsEditorComponent,
    PersonEditorComponent,
    PersonIdentityInfoEditorComponent,
    PersonSupplementaryInfoEditorComponent,
    CardBoardComponent,
    CardBoardPayaComponent,
    DetailsReliableRemittanceRequestComponent,
    Bill2Component,
    YourRialAccountsComponent,
    YourCurrencyAccountsComponent,
    CardBoardSatnaComponent,
    SpecificationsRequestSatnaComponent,
    SooratHesabComponent,
    GardeshRizEnteghalVojoohComponent,
    DaryaftFileSoorathesabComponent,
    InternetRemittanceReportComponent,
    NotFoundComponent,
    HomePageComponent,
    InternetRemittanceRegisterationComponent,
    InternetRemittanceCartableComponent,
    SatnaRemittanceRegistrationComponent,
    SatnaRemittanceRegistrationConfirmationComponent,
    PayaRegularRemittanceRegistrationConfirmationComponent,
    PayaRegularRemittanceRegistrationComponent,
    PayaRegularRemittanceCartableComponent,
    PayaRegularRemittanceCartableDetailsComponent,
    PayaGroupRemittanceCartableComponent,
    PayaGroupRemittanceCartableDetailsComponent,
    PayaGroupRemittanceUploadFileComponent,
    ReliableRemittanceReportComponent,
    ReportGroupRemittanceComponent,
    GhobozUploadFileComponent,
    SubmitInformationVarizComponent,
    ReportUploadedFilesComponent,
    ViewEditInformationDepositManagementComponent,
    UploadPaymentManagementFileComponent,
    SubmitInformationPymentMnagementComponent,
    ViewEditInformationPaymentManagementComponent,
    ReportUploadedFilesPaymentManagmentComponent,
    BillingReportComponent,
    ReportFeePaymentManagmentComponent,
    SpecialPaymentCartableComponent,
    SpecialPaymentCartableDetailsComponent,
    CardBoardGhobozComponent,
    RequestGhobozComponent,
    SorathesabTashilatKarkonanComponent,
    PardakhtAghsatComponent,
    IndirectLiabilitiesReportsComponent,
    ChartTestComponent,
    AccountSummaryCardComponent,
    DepositSourcesReportComponent,
    InternetRemittanceCartableDetailsComponent,
    PersonalEntityListComponent,
    UpdatePersonalComponent,
    UpdatePersonIdentityInfoEditorComponent,
    UpdatePartySignatureEditorComponent,
    UpdateOrganizationalRoleEditorComponent,
    UpdateOrganizationalContactInfoEditorComponent,
    UpdatePersonSupplementaryInfoEditorComponent,
    UpdateOrganizationalEntityDocumentsEditorComponent,
    CreateContactComponent,
    CreateAddressComponent,
    AccountTreeComponent,
    ChartOfFacilitiesReceivedComponent,
    ExpendituresAndRevenuesComponent,
    AccountTransactionsComponent,
    UpdateAddressComponent,
    UpdateContactComponent,
    UpdateOrganizationalEntityManagerComponent,
    OrganizationalEntityListComponent,
    CreateRegistrationInfoComponent,
    IdentificationTransactionComponent,
    ActivityFieldComponent,
    RialAccountByBankComponent,
    HoldingsBillComponent,
  ],
  imports: [
    CommonModule,
    NewProjectRoutingModule,
    ButtonModule,
    PanelModule,
    CardModule,
    InputTextareaModule,
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
    TabViewModule,
    PasswordModule,
    AutoCompleteModule,
    CalendarModule,
    MultiSelectModule,
    CascadeSelectModule,
    ChipsModule,
    DividerModule,
    InputSwitchModule,
    RadioButtonModule,
    ConfirmDialogModule,
    PaginatorModule,
    DialogModule,
    ChartModule,
    TreeModule,
    ContextMenuModule,
    ToastModule,
  ],
  exports: [
    ReportBankTransferComponent
  ]
})
export class NewProjectModule {
}
