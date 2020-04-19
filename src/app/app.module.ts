import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuppliersListComponent } from '@components/suppliers-list/suppliers-list.component';
import { SuppliersFormComponent } from '@components/suppliers-form/suppliers-form.component';

import { SuppliersService } from '@services/suppliers/suppliers.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    SuppliersFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SuppliersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
