import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Supplier } from '@models/supplier';

import { SuppliersService } from '@services/suppliers/suppliers.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierResolverService implements Resolve<Supplier> {

  constructor(private api: SuppliersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supplier> | Promise<Supplier> | Supplier {
    const id = route.paramMap.get('id');
    if (id === 'new') {
      return new Supplier();
    }
    return this.api.get(route.paramMap.get('id'));
  }
}
