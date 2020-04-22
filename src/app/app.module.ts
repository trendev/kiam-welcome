import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { FAQComponent } from './faq/faq.component';
import { ApplicationQuestionsComponent } from './faq/application-questions/application-questions.component';
import { FirstTimeQuestionsComponent } from './faq/first-steps-questions/first-steps-questions.component';
import { SecurityQuestionsComponent } from './faq/security-questions/security-questions.component';
import { OfferingQuestionsComponent } from './faq/offering-questions/offering-questions.component';
import { ClientsQuestionsComponent } from './faq/clients-questions/clients-questions.component';
import { CollectiveGroupsQuestionsComponent } from './faq/collective-groups-questions/collective-groups-questions.component';
import { BillsQuestionsComponent } from './faq/bills-questions/bills-questions.component';
import { SubscriptionQuestionsComponent } from './faq/subscription-questions/subscription-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CookieConsentComponent,
    FAQComponent,
    ApplicationQuestionsComponent,
    FirstTimeQuestionsComponent,
    SecurityQuestionsComponent,
    OfferingQuestionsComponent,
    ClientsQuestionsComponent,
    CollectiveGroupsQuestionsComponent,
    BillsQuestionsComponent,
    SubscriptionQuestionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
