import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { formatDate } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './register-patient.component.html',
  styleUrl: './register-patient.component.scss',
})
export class RegisterPatientComponent {
  patient: any = {
    lastRequest: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
  };
  constructor(private dialogRef: MatDialogRef<RegisterPatientComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('Paciente a ser salvo:', this.patient);
    this.dialogRef.close(this.patient);
  }
}
