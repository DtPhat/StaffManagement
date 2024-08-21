import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffComponent } from './staff/staff.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test';
}
