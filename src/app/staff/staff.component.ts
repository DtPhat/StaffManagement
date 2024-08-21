import { Component, OnInit } from '@angular/core';
import { StaffListComponent } from "./staff-list/staff-list.component";
import { StaffDetailsComponent } from "./staff-details/staff-details.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { Staff } from '../shared';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [StaffListComponent, StaffDetailsComponent, MatGridListModule, MatDividerModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  staffDetails?: Staff;

  onDisplayStaff(data: Staff) {
    this.staffDetails = data;
    console.log('Data sent from Component A:', data);
  }
}
