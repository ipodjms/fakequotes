import { QuotesRoutingModule } from './quotes.routing.module';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteComponent } from './quote/quote.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [QuoteComponent, QuoteListComponent],
  imports: [
    CommonModule, SharedModule, QuotesRoutingModule
  ]
})
export class QuotesModule { }
