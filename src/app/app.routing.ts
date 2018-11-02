import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MainsiteComponent } from './mainsite/mainsite.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: MainsiteComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
