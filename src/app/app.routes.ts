import { Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff/staff-display/staff-details/staff-details.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'staff',
    children: [
      { path: '', component: StaffComponent, },
      { path: 'new', component: StaffEditComponent, },
      { path: ':id', component: StaffComponent, },
    ]
  },
  {
    path: 'staff/:id',
    component: StaffEditComponent,
  }
];
