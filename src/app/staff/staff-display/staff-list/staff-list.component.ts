import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, effect } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { StaffService } from '../../staff.service';
import { Staff } from '../../../shared';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, CommonModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss'
})


export class StaffListComponent implements OnInit, OnDestroy {

  staffList: Staff[] = []
  selectedStaff?: Staff;
  displayedColumns: string[] = ['#', 'position', 'picture', 'employeeId', 'lastName', 'middleName', 'firstName'];

  constructor(
    private staffService: StaffService,
    private elementRef: ElementRef,
    private router: Router
  ) {
    effect(() => {
      this.staffList = this.staffService.getStaffList();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
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

  onRowClicked(row: Staff, event: Event): void {
    this.selectedStaff = row;
    // this.displayStaff.emit(this.selectedStaff);
    this.displayStaff(this.selectedStaff.employeeId)
  }

  private updateSelection(rowElement: HTMLElement) {
    const rowIndex = Array.from(this.elementRef.nativeElement.querySelectorAll('tr[mat-row]')).indexOf(rowElement);
    this.selectedStaff = this.staffList[rowIndex];
    // this.displayStaff.emit(this.selectedStaff)
    this.displayStaff(this.selectedStaff.employeeId)
    rowElement.focus();
  }

  focusStaffDetails() {
    const detailsElement = document.querySelector('app-staff-details');
    const inputs = detailsElement?.querySelectorAll('input');
    if (inputs?.length) {
      inputs[1].focus();
    }
  }

  navigateToAddingStaff() {
    this.router.navigate(['/staff/new']);
  }

  displayStaff(id: string) {
    // this.router.navigate([`/staff/${this.selectedStaff.employeeId}`]);
    this.staffService.selectStaff(id)
  }

}
