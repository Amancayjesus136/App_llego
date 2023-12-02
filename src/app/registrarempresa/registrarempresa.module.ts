import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarempresaPageRoutingModule } from './registrarempresa-routing.module';

import { RegistrarempresaPage } from './registrarempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarempresaPageRoutingModule
  ],
  declarations: [RegistrarempresaPage]
})
export class RegistrarempresaPageModule {}
