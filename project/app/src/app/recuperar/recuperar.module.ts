import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperarPageRoutingModule } from './recuperar-routing.module';
import { RecuperarPage } from './recuperar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPageRoutingModule
  ],
  declarations: [RecuperarPage]  // Asegúrate de que RecuperarPage esté correctamente importado
})
export class RecuperarPageModule {}
