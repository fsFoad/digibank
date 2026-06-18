import {Component, Injectable, NgModule, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CommonModule} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";
import {CustomComponentsModule} from "../../../walletlibs/custom-components.module";

@Component({
    selector: 'app-primeng-progress-bar',
    templateUrl: './primeng-progress-bar.component.html',
    styleUrls: ['./primeng-progress-bar.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class PrimengProgressBarComponent implements OnInit {
    visible: any;

    constructor(private primengProgressBarService:PrimengProgressBarService) {
    }

    ngOnInit(): void {
        this.primengProgressBarService.visible.subscribe((res:boolean)=>{
            this.visible = res;
        })
    }

}

@NgModule({
    declarations: [
        PrimengProgressBarComponent
    ],
    imports: [
        DialogModule,
        ProgressSpinnerModule,
        CommonModule,
        CustomComponentsModule
    ],
    exports: [
        PrimengProgressBarComponent
    ]
})
export class PrimengProgressBarModule {
}
@Injectable({
    providedIn: 'root'
})
export class PrimengProgressBarService
{
    private _visible: BehaviorSubject<boolean>;

    constructor(
    )
    {
        // Initialize the service
        this._init();
    }
    /**
     * Visible
     */
    get visible(): Observable<any>
    {
        return this._visible.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    private _init(): void
    {
        this._visible = new BehaviorSubject(false);
    }

    show(): void
    {
        this._visible.next(true);
    }
    hide(): void
    {
        this._visible.next(false);
    }
}

