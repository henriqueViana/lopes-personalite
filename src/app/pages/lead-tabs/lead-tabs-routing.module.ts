import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadTabsPage } from './lead-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LeadTabsPage,
    children: [
      {
        path: 'my-leads',
        loadChildren: () =>
          import('./my-leads/my-leads.module').then((m) => m.MyLeadsPageModule),
      },
      {
        path: 'lead-list',
        loadChildren: () =>
          import('./lead-list/lead-list.module').then(
            (m) => m.LeadListPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/lead-tabs/lead-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'lead-detail',
    loadChildren: () =>
      import('./lead-detail/lead-detail.module').then(
        (m) => m.LeadDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadTabsPageRoutingModule {}
