import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy-insurance/buy-insurance.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { TravelComponent } from './travel-insurance/travel-insurance.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddVehiclePlanComponent } from './add-vehicle-plan/add-vehicle-plan.component';
import { AddTravelPlanComponent } from './add-travel-plan/add-travel-plan.component';
import { TravelCalculatorComponent } from './travel-calculator/travel-calculator.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { VehicleCalculatorComponent } from './vehicle-calculator/vehicle-calculator.component';
import { TravelPremiumComponent } from './travel-premium/travel-premium.component';
import { CalPageComponent } from './cal-page/cal-page.component';
import { AdminVerifyClaimComponent } from './admin-verify-claim/admin-verify-claim.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewCustomerClaimsComponent } from './view-customer-claims/view-customer-claims.component';
import { ViewAllClaimAdminComponent } from './view-all-claim-admin/view-all-claim-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyComponent,
    AdminComponent,
    HomeComponent,
    AdminNavComponent,
    HomeMenuComponent,
    DashboardNavComponent,
    DashboardComponent,
    TravelPageComponent,
    ContactComponent,
    TravelComponent,
    TravelPremiumComponent,
    RenewInsuranceComponent,
    PaymentPageComponent,
    UpdateProfileComponent,
    AddVehiclePlanComponent,
    AddTravelPlanComponent,
    TravelCalculatorComponent,
    ForgotpasswordComponent,
    ClaimInsuranceComponent,
    VehicleCalculatorComponent,
    CalPageComponent,
    AdminVerifyClaimComponent,
    ViewAllComponent,
    ViewAllComponent,
    ViewCustomerClaimsComponent,
    ViewAllClaimAdminComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
