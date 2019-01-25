import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    MainComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
