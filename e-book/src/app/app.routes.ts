import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { BooksComponent } from './pages/books/books.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
        
    },
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'aboutus',
        component:AboutusComponent,
    },
    {
        path:'products',
        component:ProductsComponent,
    },
    {
        path:'contactus',
        component:ContactusComponent,
    },
    {
        path:'books',
        component:BooksComponent,       
    },
    
     {
        path:'login',
        component:LoginComponent,       
    },
];
