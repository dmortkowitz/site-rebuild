import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from "./marketplace/marketplace.component"

const appRoutes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
