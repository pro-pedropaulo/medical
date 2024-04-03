import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PatientService } from '../../service/patient.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import { PatientFilterComponent } from '../patient-filter/patient-filter.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatSort,
    MatIcon,
    PatientFilterComponent,
    MatTooltip,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [PatientService],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  pageSize = 10;
  currentPage = 0;
  totalPatients = 0;
  pageSizeOptions: number[] = [5, 10, 20];
  rangeStart!: number;
  rangeEnd!: number;
  displayedColumns: string[] = [
    'fullName',
    'status',
    'diagnosis',
    'medication',
    'healthPlan',
    'lastRequest',
    'actions',
  ];
  patientsData: any[] = [];
  fullPatientData: any[] = [];

  constructor(
    private patientService: PatientService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fullPatientData = this.patientService.getPatients();
    this.totalPatients = this.fullPatientData.length;
    this.dataSource = new MatTableDataSource<any>([]);
    this.updatePatientsForPage();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onSearch(value: string) {
    const searchTerm = value.trim().toLowerCase();

    const filteredData = this.fullPatientData.filter((patient) => {
      return (
        patient.fullName.toLowerCase().includes(searchTerm) ||
        patient.diagnosis.toLowerCase().includes(searchTerm) ||
        patient.medicineNameComecial.toLowerCase().includes(searchTerm) ||
        patient.healthPlan.toLowerCase().includes(searchTerm)
      );
    });

    this.totalPatients = filteredData.length;

    this.updatePatientsForPage(filteredData);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onStatusFilter(value: string) {
    let filteredData = this.fullPatientData;

    if (value === 'active') {
      filteredData = this.fullPatientData.filter((p) => p.status === 'Active');
    } else if (value === 'inactive') {
      filteredData = this.fullPatientData.filter(
        (p) => p.status === 'Inactive'
      );
    }
    this.totalPatients = filteredData.length;

    this.updatePatientsForPage(filteredData);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyStatusFilter(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const status = selectElement.value;
    if (status === 'active') {
      this.dataSource.data = this.patientsData.filter(
        (p) => p.status === 'Active'
      );
    } else if (status === 'inactive') {
      this.dataSource.data = this.patientsData.filter(
        (p) => p.status === 'Inactive'
      );
    } else {
      this.dataSource.data = this.patientsData;
    }
  }

  applyFilter(value: string) {
    const filteredData = this.fullPatientData.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(value.toLowerCase()) ||
        patient.diagnosis.toLowerCase().includes(value.toLowerCase()) ||
        patient.medicineNameComecial.toLowerCase().includes(value.toLowerCase())
      );
    });

    this.totalPatients = filteredData.length;
    this.updatePatientsForPage(filteredData);
  }

  updatePatientsForPage(filteredData: any[] = this.fullPatientData): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = filteredData.slice(startIndex, endIndex);
    this.updateRangeText();
  }

  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePatientsForPage();
  }

  totalPages(): number {
    return Math.ceil(this.totalPatients / this.pageSize);
  }

  updateRangeText(): void {
    this.rangeStart = this.currentPage * this.pageSize + 1;
    this.rangeEnd = Math.min(
      (this.currentPage + 1) * this.pageSize,
      this.totalPatients
    );
  }

  setPageSize(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const size = Number(selectElement.value);
    this.pageSize = size;
    this.currentPage = 0;
    this.updatePatientsForPage();
  }

  isNameTooLong(name: string): boolean {
    return name.length > 25;
  }

  getDisplayName(name: string): string {
    return this.isNameTooLong(name) ? `${name.slice(0, 22)}...` : name;
  }

  toggleStatus(patientId: number): void {
    const patientIndex = this.dataSource.data.findIndex(
      (p) => p.id === patientId
    );
    if (patientIndex !== -1) {
      const newStatus = this.patientService.togglePatientStatus(patientId);
      this.dataSource.data[patientIndex].status = newStatus;

      this.dataSource.data = [...this.dataSource.data];

      this.snackBar.open(
        `O status de ${
          this.dataSource.data[patientIndex].fullName
        } foi alterado para ${newStatus === 'Active' ? 'Ativo' : 'Inativo'}.`,
        'Fechar',
        {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snackbar-warning'],
        }
      );
    }
  }
}
