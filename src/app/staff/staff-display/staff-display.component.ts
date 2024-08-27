import { Component } from '@angular/core';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-staff-display',
  standalone: true,
  imports: [StaffListComponent, StaffDetailsComponent, MatDivider],
  templateUrl: './staff-display.component.html',
  styleUrl: './staff-display.component.scss'
})
export class StaffDisplayComponent {

}
