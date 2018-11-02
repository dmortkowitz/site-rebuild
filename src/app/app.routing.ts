import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MainsiteComponent } from './mainsite/mainsite.component';



const appRoutes: Routes = [
  {
    path: 'mainsite',
    component: MainsiteComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
