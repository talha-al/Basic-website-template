import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MatMenuModule } from '@angular/material/menu';
import { AboutUsComponent } from './main-page/about-us/about-us.component';
import { PhotosSectionComponent } from './main-page/photos-section/photos-section.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommunicationStickyComponent } from './main-page/communication-sticky/communication-sticky.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { HomeComponent } from './main-page/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PhotoGalleryComponent,
    AboutUsComponent,
    PhotosSectionComponent,
    ContactComponent,
    CommunicationStickyComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatGridListModule
  ],
  exports:[MainPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
