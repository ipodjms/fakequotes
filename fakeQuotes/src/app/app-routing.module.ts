import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'quotes'
  },
  {
    path: 'quotes',
    pathMatch: 'full',
    loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
