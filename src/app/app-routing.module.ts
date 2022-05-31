import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { SingleProductPageModule } from './pages/single-product.page-module';
import { AllProductsPageModule } from './pages/all-products.page-module';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'contact', 
        loadChildren: () => ContactPageModule
      },
  { 
        path: 'about', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'product', 
        loadChildren: () => SingleProductPageModule
      },
  { 
        path: 'allProducts', 
        loadChildren: () => AllProductsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
