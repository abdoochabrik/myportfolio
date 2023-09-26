import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { HomeComponent } from './components/right-bar/home/home.component';
import { AboutComponent } from './components/right-bar/about/about.component';
import { ServiceComponent } from './components/right-bar/projects/service.component';
import { ContactComponent } from './components/right-bar/contact/contact.component';
import { ResumeComponent } from './components/right-bar/resume/resume.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CardModule } from 'primeng/card';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ProjectItemComponent } from './components/right-bar/projects/project-item/project-item.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    RightBarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ResumeComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    ChipModule,
    NgxExtendedPdfViewerModule,
    CardModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
