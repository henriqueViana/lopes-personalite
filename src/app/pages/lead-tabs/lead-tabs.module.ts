import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadTabsPageRoutingModule } from './lead-tabs-routing.module';

import { LeadTabsPage } from './lead-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadTabsPageRoutingModule
  ],
  declarations: [LeadTabsPage]
})
export class LeadTabsPageModule {}
