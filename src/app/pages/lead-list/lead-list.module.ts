import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadListPageRoutingModule } from './lead-list-routing.module';

import { LeadListPage } from './lead-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadListPageRoutingModule
  ],
  declarations: [LeadListPage]
})
export class LeadListPageModule {}
