import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TableModule} from 'primeng/table';
import { DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CurrencyMaskModule,
    TableModule,
    PanelModule,
    GrowlModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    {
      provide: LOCALE_ID, useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
