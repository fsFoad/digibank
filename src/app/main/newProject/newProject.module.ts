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
import { OrganizationalEntityInfoViewerComponent } from './organizational-entity-manager/organizational-entity-info-viewer/organizational-entity-info-viewer.component';
import { EditViewOtpProcessComponent } from './edit-view-otp-process/edit-view-otp-process.component';
import { BoardOfDirectorsEditorComponent } from './board-of-directors-editor/board-of-directors-editor.component';
import { PartySignatureEditorComponent } from './party-signature-editor/party-signature-editor.component';
import { OrganizationalRoleEditorComponent } from './organizational-role-editor/organizational-role-editor.component';
import { OrganizationalContactInfoEditorComponent } from './organizational-contact-info-editor/organizational-contact-info-editor.component';
import { OrganizationalEntityDocumentsEditorComponent } from './organizational-entity-documents-editor/organizational-entity-documents-editor.component';
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
import { ConfirmDialogModule } from "primeng/confirmdialog";
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
    ],
    exports: [
        ReportBankTransferComponent
    ]
})
export class NewProjectModule {
}
