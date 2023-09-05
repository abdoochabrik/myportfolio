import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { HomeComponent } from './components/right-bar/home/home.component';
import { AboutComponent } from './components/right-bar/about/about.component';
import { ServiceComponent } from './components/right-bar/service/service.component';
import { ContactComponent } from './components/right-bar/contact/contact.component';
import { ResumeComponent } from './components/right-bar/resume/resume.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    RightBarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    ChipModule,
    NgxExtendedPdfViewerModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
