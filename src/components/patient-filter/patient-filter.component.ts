import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Subject, debounceTime } from 'rxjs';
import { RegisterPatientComponent } from '../register-patient/register-patient.component';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient-filter',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './patient-filter.component.html',
  styleUrl: './patient-filter.component.scss',
})
export class PatientFilterComponent implements OnDestroy {
  @Output() search = new EventEmitter<string>();
  @Output() statusFilter = new EventEmitter<string>();

  private searchSubject = new Subject<string>();
  private subscription: any;

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService
  ) {
    this.subscription = this.searchSubject
      .pipe(debounceTime(850))
      .subscribe((value) => {
        this.search.emit(value.trim().toLowerCase());
      });
  }

  applyFilter(value: string) {
    this.searchSubject.next(value);
  }

  applyStatusFilter(value: string) {
    this.statusFilter.emit(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterPatientComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.patientService.addPatient(result);
      }
    });
  }
}
