import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './Components/navbar-top/navbar-top.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ButtonGralComponent } from './Components/Reutils/button-gral/button-gral.component';
import { HeroComponent } from './Layouts/hero/hero.component';
import { TitlesComponent } from './Components/Reutils/titles/titles.component';
import { ClientesComponent } from './Layouts/clientes/clientes.component';
import { FeaturesComponent } from './Layouts/features/features.component';
import { AboutComponent } from './Layouts/about/about.component';
import { IconTextComponent } from './Components/Reutils/icon-text/icon-text.component';
import { About2Component } from './Layouts/about2/about2.component';
import { IntegracionesComponent } from './Layouts/integraciones/integraciones.component';
import { TestimonialsComponent } from './Layouts/testimonials/testimonials.component';
import { PricesComponent } from './Layouts/prices/prices.component';
import { FaqsComponent } from './Layouts/faqs/faqs.component';
import { RedesComponent } from './Layouts/redes/redes.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ButtonScrollComponent } from './Components/button-scroll/button-scroll.component';
import { PreloadingComponent } from './Components/loaders/preloading/preloading.component';
import { DemoComponent } from './Layouts/demo/demo.component';
import { SelectDiscountComponent } from './Components/Reutils/select-discount/select-discount.component';
import { MonthlyPaymentsComponent } from './Components/Reutils/monthly-payments/monthly-payments.component';
import { AcordeonComponent } from './Components/acordeon/acordeon.component';
import { SkeletonPricesComponent } from './Components/loaders/skeleton-prices/skeleton-prices.component';
import { SkeletonMonthlyComponent } from './Components/loaders/skeleton-monthly/skeleton-monthly.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarComponent,
    ButtonGralComponent,
    HeroComponent,
    TitlesComponent,
    ClientesComponent,
    FeaturesComponent,
    AboutComponent,
    IconTextComponent,
    About2Component,
    IntegracionesComponent,
    TestimonialsComponent,
    PricesComponent,
    FaqsComponent,
    RedesComponent,
    FooterComponent,
    ButtonScrollComponent,
    PreloadingComponent,
    DemoComponent,
    SelectDiscountComponent,
    MonthlyPaymentsComponent,
    AcordeonComponent,
    SkeletonPricesComponent,
    SkeletonMonthlyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
