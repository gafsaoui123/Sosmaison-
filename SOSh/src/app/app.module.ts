import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './services/user.service';
import { TestComponent } from './test/test.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProvidersComponent } from './providers/providers.component';
import { AboutComponent } from './about/about.component';
import { DragDirective } from './drag.directive';
import { ShowServiceDetailsComponent } from './show-service-details/show-service-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './show-service-details/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowImagesDialogComponent } from './show-service-details/show-images-dialog/show-images-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { UserViewDetailsComponent } from './user-view-details/user-view-details.component';
import { UserViewMeComponent } from './user-view-me/user-view-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    TestComponent,
    AddNewProductComponent,
    ProvidersComponent,
    AboutComponent,
    DragDirective,
    ShowServiceDetailsComponent,
    ConfirmDialogComponent,
    ShowImagesDialogComponent,
    UserViewDetailsComponent,
    UserViewMeComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    AuthGuard,
    {

      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true


    },UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
