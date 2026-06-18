import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {AmountBoxComponent} from "./amount-box/amount-box.component";
import {ButtonModule} from "primeng/button";
import { MatPersianCalendarComponent } from './mat-persian-calendar/mat-persian-calendar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {CustomDialog} from "./dialog/dialog";
import {FocusTrapModule} from "primeng/focustrap";


@NgModule({
    declarations: [
        AmountBoxComponent,
        MatPersianCalendarComponent,
        CustomDialog
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        FocusTrapModule,
    ],
    exports: [
        AmountBoxComponent,
        CustomDialog,
        MatPersianCalendarComponent
    ]
})
export class CustomComponentsModule {
}
