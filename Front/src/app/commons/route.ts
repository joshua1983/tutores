import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from './PageNotFound';

import { FacturaComponent } from '../compra/factura.component';

export const APPROUTER:Routes = [
    {
        path: 'facturar',
        component: FacturaComponent
    },
    {
        path: '/',
        component: AppComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
    
]