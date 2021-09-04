import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AngularMaterialModule { }
