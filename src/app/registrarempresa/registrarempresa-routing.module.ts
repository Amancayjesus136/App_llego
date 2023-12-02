import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarempresaPage } from './registrarempresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarempresaPageRoutingModule {}
