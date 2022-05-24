import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';

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
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
