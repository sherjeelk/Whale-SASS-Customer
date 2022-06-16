import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {MatStepperModule} from "@angular/material/stepper";
import {CalendarComponent} from './pages/calendar/calendar.component';
import {OrderComponent} from './pages/order/order.component';
import {ServiceComponent} from './pages/service/service.component';
import {ServicesComponent} from './components/services/services.component';
import {ProductsComponent} from './components/products/products.component';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {DividerComponent} from './components/divider/divider.component';
import {EditComponent} from './components/edit/edit.component';
import {EditTextboxComponent} from './components/edit-textbox/edit-textbox.component';
import {EmptyPlaceholderComponent} from './components/empty-placeholder/empty-placeholder.component';
import {FormFieldComponent} from './components/form-field/form-field.component';
import {FormFieldHalfComponent} from './components/form-field-half/form-field-half.component';
import {MatOptionComponent} from './components/mat-option/mat-option.component';
import {RadioButtonComponent} from './components/radio-button/radio-button.component';
import {SubServiceComponent} from './components/sub-service/sub-service.component';
import {SubServiceStackComponent} from './components/sub-service-stack/sub-service-stack.component';
import {TextBoxComponent} from './components/text-box/text-box.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DataShareService} from "./services/data-share.service";
import {MatCardModule} from "@angular/material/card";

import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {PlaceOrderComponent} from './place-order/place-order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ThemeDarkComponent} from './theme-dark/theme-dark.component';
import {ThemeLoaderComponent} from './theme-loader/theme-loader.component';
import {FailOrderComponent} from './fail-order/fail-order.component';
import {AboutComponent} from './about/about.component';
import {TermComponent} from './term/term.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {NgxStripeModule} from 'ngx-stripe';
import {AppConstants} from "./AppConstants";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    OrderComponent,
    ServiceComponent,
    ServicesComponent,
    ProductsComponent,
    ButtonComponent,
    CheckboxComponent,
    DividerComponent,
    EditComponent,
    EditTextboxComponent,
    EmptyPlaceholderComponent,
    FormFieldComponent,
    FormFieldHalfComponent,
    MatOptionComponent,
    RadioButtonComponent,
    SubServiceComponent,
    SubServiceStackComponent,
    TextBoxComponent,
    HeaderComponent,
    FooterComponent,
    PlaceOrderComponent,
    ProductDeleteComponent,
    ThemeDarkComponent,
    ThemeLoaderComponent,
    FailOrderComponent,
    AboutComponent,
    TermComponent,
    PrivacyPolicyComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    NgxStripeModule.forRoot(AppConstants.STRIPE_KEY),
    MatSnackBarModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
