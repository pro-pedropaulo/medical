import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private mockDataService: MockDataService) {}

  getPatients() {
    const mockData = this.mockDataService.getData();
    return mockData.map((patient) => ({
      ...patient,
      lastRequest: this.convertDate(patient.lastRequest),
    }));
  }

  togglePatientStatus(patientId: number): 'Active' | 'Inactive' {
    const mockData = this.mockDataService.getData();
    const patientIndex = mockData.findIndex((p) => p.id === patientId);
    if (patientIndex !== -1) {
      const patient = mockData[patientIndex];
      const newStatus = patient.status === 'Active' ? 'Inactive' : 'Active';
      this.mockDataService.updateStatus(patientId, newStatus);
      return newStatus;
    }
    throw new Error('Patient not found');
  }

  convertDate(dateString: string): Date {
    return new Date(dateString.split('/').reverse().join('-'));
  }

  addPatient(patient: any) {
    this.mockDataService.addPatient(patient);
  }
}
