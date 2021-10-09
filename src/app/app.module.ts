import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';


import {TabViewModule} from 'primeng/tabview';


import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {HttpConfigInterceptor} from "./main/shared/interceptor/httpconfig.interceptor";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LoginComponent} from './auth/login/login.component';
import {NewProjectModule} from './main/newProject/newProject.module';
import {MatCoreModule} from "../walletlibs/mat-core/mat-core.module";
import {CustomComponentsModule} from "../walletlibs/custom-components.module";
import {PrimengProgressBarModule} from "../@fuse/components/primeng-progress-bar/primeng-progress-bar.component";

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'login'
    },
];
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        MatCoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes,{useHash: true}),

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        NewProjectModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        InputMaskModule,
        InputNumberModule,
        TabViewModule,
        CardModule,
        ReactiveFormsModule,
        PanelModule,
        TableModule,
        CustomComponentsModule,
        PrimengProgressBarModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        }
    ]
})
export class AppModule
{
}
