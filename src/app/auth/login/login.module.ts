import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { ButtonModule } from "primeng/button";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports:[
        FormsModule,
        HttpClientModule,
         BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzFormModule,
        NzCheckboxModule,
        NzInputModule,
        NzButtonModule,
        ReactiveFormsModule,
        ButtonModule,
        NzCardModule,
        RouterModule.forChild([
            {path: 'login', component: LoginComponent}
        ])
    ],
declarations:[
    LoginComponent
]

})
export class LoginModule{}