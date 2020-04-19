import { Component, OnInit } from '@angular/core';

import { Supplier } from '@models/supplier';
import { ActivatedRoute } from '@angular/router';

/**
 *
 *
 * @export
 * @class SuppliersFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrls: ['./suppliers-form.component.scss']
})
export class SuppliersFormComponent implements OnInit {

  /**
   *
   *
   * @type {Supplier}
   * @memberof SuppliersFormComponent
   */
  data: Supplier;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data.supplier as Supplier;
  }

}
