import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { StaffService } from '../staff.service';
import { Staff } from '../../shared';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss'
})


export class StaffListComponent implements OnInit {
  constructor(
    private staffService: StaffService,
    private elementRef: ElementRef,
  ) { }

  @Output() displayStaff = new EventEmitter<Staff>();
  staffList: Staff[] = []
  selectedStaff?: Staff;
  displayedColumns: string[] = ['#', 'position', 'picture', 'employeeId', 'lastName', 'middleName', 'firstName'];
  ngOnInit(): void {
    this.staffList = this.staffService.getStaff();
  }

  @HostListener('keydown', ['$event'])
  onRowKeydown(event: KeyboardEvent) {
    const rows = this.elementRef.nativeElement.querySelectorAll('tr[mat-row]');
    let index = Array.from(rows).indexOf(event.target as HTMLTableRowElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        index = (index + 1) % rows.length;
        this.updateSelection(rows[index] as HTMLElement)
        break;
      case 'ArrowUp':
        event.preventDefault();
        index = (index - 1 + rows.length) % rows.length;
        this.updateSelection(rows[index] as HTMLElement)
        break;
      case 'Tab':
        event.preventDefault();
        this.focusStaffDetails()
        break;
    }
  }

  onRowClicked(row: any): void {
    this.selectedStaff = row;
    this.displayStaff.emit(this.selectedStaff)
  }

  private updateSelection(rowElement: HTMLElement) {
    const rowIndex = Array.from(this.elementRef.nativeElement.querySelectorAll('tr[mat-row]')).indexOf(rowElement);
    this.selectedStaff = this.staffList[rowIndex];
    this.displayStaff.emit(this.selectedStaff)
    rowElement.focus();
  }

  focusStaffDetails() {
    const detailsElement = document.querySelector('app-staff-details');
    const firstInput = detailsElement?.querySelector('input');
    console.log(firstInput)
    if (firstInput) {
      firstInput.focus();
    }
  }

}
