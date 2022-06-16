import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ThemeDarkComponent} from "./theme-dark/theme-dark.component";
import {ThemeLoaderComponent} from "./theme-loader/theme-loader.component";
import {DataShareService} from "./services/data-share.service";
import {AppConstants} from "./AppConstants";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {AboutComponent} from "./about/about.component";
import {TermComponent} from "./term/term.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {FailOrderComponent} from "./fail-order/fail-order.component";
// import {ThemeDarkComponent} from "./theme-dark/theme-dark.component";

const routes: Routes = [
  {
    path: '',
    component: ThemeLoaderComponent
  },

  {
    path:'order-status/:status',
    component:PlaceOrderComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'terms',
    component:TermComponent
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent
  },
  {
    path:'order-fail',
    component:FailOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
