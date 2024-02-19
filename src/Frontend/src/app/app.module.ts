import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsalApplicationModule } from 'src/app/core/msal-application/msal-application.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MsalBroadcastService, MsalGuard, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { FailedLoginComponent } from './failed-login/failed-login.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';
import { DialogModule } from 'src/app/modules/dialog/dialog.module';
import { ErrorHandlerInterceptor } from 'src/app/core/interceptors/error-handler.interceptor';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FailedLoginComponent,
    ProfileComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MsalApplicationModule.forRoot('config.json'),
    MatToolbarModule,
    MatMenuModule,
    MsalModule,
    MatIconModule,
    MatTooltipModule,
    DialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', subscriptSizing: 'dynamic' } },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
