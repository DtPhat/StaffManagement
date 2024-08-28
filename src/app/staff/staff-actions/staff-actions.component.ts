import { Component, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
  isStaffSelected = false;
  constructor(private staffService: StaffService) {
    effect(() => {
      this.isStaffSelected = this.staffService.getSelectedStaffMember() != null;
    })
  }
  onAddStaff() {
    this.staffService.selectStaffView(StaffView.Add)
  }
  onEditStaff() {
    if (!this.isStaffSelected) {
      return;
    }
    this.staffService.selectStaffView(StaffView.Edit)
  }
}
