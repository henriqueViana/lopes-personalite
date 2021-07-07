import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LeadCardComponent } from './lead-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [LeadCardComponent],
  exports: [LeadCardComponent],
})
export class LeadCardModule {}
