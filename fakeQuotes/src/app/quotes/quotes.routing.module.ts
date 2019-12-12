import { QuoteListComponent } from './quote-list/quote-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
	{
	    path: "",
	    component: QuoteListComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class QuotesRoutingModule {}
