import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrunListesiComponent } from './urun-listesi/urun-listesi.component';
import { UrunComponent } from './urun/urun.component';
import { SepetComponent } from './sepet/sepet.component';
import { HeaderComponent } from './header/header.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { SepetListesiComponent } from './sepet-listesi/sepet-listesi.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UrunListesiComponent,
    UrunComponent,
    SepetComponent,
    HeaderComponent,
    AnaSayfaComponent,
    SepetListesiComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
