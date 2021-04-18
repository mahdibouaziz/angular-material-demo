import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// this module is responsible for only importing and exporting material components

const MaterialComponents = [
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
