
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerSearch } from './customerSearch/customerSearch.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormGroup,
    FormBuilder,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
