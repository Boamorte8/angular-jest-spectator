import { Routes } from '@angular/router';

import { ComponentBComponent } from '@components/component-b/component-b.component';
import { SuppliersFormComponent } from '@components/suppliers-form/suppliers-form.component';
import { SuppliersListComponent } from '@components/suppliers-list/suppliers-list.component';

import { SupplierResolverService } from '@services/supplierresolver/supplier-resolver.service';

// This is an example the router for angular resolver example


const routes: Routes = [
    {
        path: '',
        component: ComponentBComponent,
        children: [
            {
                path: '',
                component: SuppliersListComponent
            },
            {
                path: ':id',
                component: SuppliersFormComponent,
                resolve: {
                    supplier: SupplierResolverService,
                }
            },
        ]
    }
];
