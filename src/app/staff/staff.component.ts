import { Component, OnInit, effect } from '@angular/core';
import { StaffListComponent } from "./staff-display/staff-list/staff-list.component";
import { StaffDetailsComponent } from "./staff-display/staff-details/staff-details.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { Staff } from '../shared';
import { StaffActionsComponent } from "./staff-actions/staff-actions.component";
import { StaffDisplayComponent } from "./staff-display/staff-display.component";
import { StaffEditComponent } from "./staff-edit/staff-edit.component";
import { StaffService } from './staff.service';
import { StaffView } from './staff.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    StaffListComponent,
    StaffDetailsComponent,
    MatGridListModule,
    MatDividerModule,
    StaffActionsComponent,
    StaffDisplayComponent,
    StaffEditComponent,
    CommonModule
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  staffView: StaffView = StaffView.Display
  StaffView = StaffView
  constructor(
    private staffService: StaffService,
  ) {
    effect(() => {
      this.staffView = this.staffService.getStaffView();
    });
  }
}
