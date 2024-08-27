import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { StaffService } from '../staff.service';
import { StaffView } from '../staff.constants';

@Component({
  selector: 'app-staff-actions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './staff-actions.component.html',
  styleUrl: './staff-actions.component.scss'
})
export class StaffActionsComponent {
  constructor(private staffService: StaffService){

  }
  onAddStaff(){
    this.staffService.selectStaffView(StaffView.Edit)
  }
}
