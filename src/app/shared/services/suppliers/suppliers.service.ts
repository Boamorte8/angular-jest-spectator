import { Injectable } from '@angular/core';

import { Supplier } from '@models/supplier';

/**
 *
 *
 * @export
 * @class SuppliersService
 */
@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor() { }

  get(id: any)  {
    return new Supplier();
  }
}
