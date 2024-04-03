import { Injectable } from '@angular/core';

interface Patient {
  id: number;
  fullName: string;
  status: string;
  diagnosis: string;
  medication: string;
  medicineNameComecial: string;
  healthPlan: string;
  lastRequest: string;
}

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private mockedData: Patient[] = [
    {
      id: 1,
      fullName: 'César Gonçalves',
      status: 'Active',
      diagnosis: 'Artrite Reumatoide',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '01/02/2024',
    },
    {
      id: 2,
      fullName: 'Fernanda Gonçalves',
      status: 'Inactive',
      diagnosis: 'Artrite Psoriásica',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'IPSEMG',
      lastRequest: '06/02/2024',
    },
    {
      id: 3,
      fullName: 'Fernanda Nunes',
      status: 'Active',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '04/02/2024',
    },
    {
      id: 4,
      fullName: 'César Nunes',
      status: 'Inactive',
      diagnosis: 'Asma Grave',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '16/01/2024',
    },
    {
      id: 5,
      fullName: 'Alberto Marques',
      status: 'Active',
      diagnosis: 'Artrite Reumatoide',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'COPASA',
      lastRequest: '29/02/2024',
    },
    {
      id: 6,
      fullName: 'Hélio Flores',
      status: 'Active',
      diagnosis: 'Artrite Psoriásica',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '04/01/2024',
    },
    {
      id: 7,
      fullName: 'Gustavo Gonçalves',
      status: 'Active',
      diagnosis: 'Asma Grave',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'AMIL',
      lastRequest: '01/03/2024',
    },
    {
      id: 8,
      fullName: 'Alberto Gonçalves',
      status: 'Active',
      diagnosis: 'Asma Grave',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'FUNDAFFEMG',
      lastRequest: '03/02/2024',
    },
    {
      id: 9,
      fullName: 'Gustavo Marques',
      status: 'Inactive',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'IPSEMG',
      lastRequest: '11/02/2024',
    },
    {
      id: 10,
      fullName: 'Eliana Flores',
      status: 'Active',
      diagnosis: 'Asma Grave',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'AMIL',
      lastRequest: '25/02/2024',
    },
    {
      id: 11,
      fullName: 'Fernanda Beltrão',
      status: 'Inactive',
      diagnosis: 'Asma Grave',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'FUNDAFFEMG',
      lastRequest: '11/02/2024',
    },
    {
      id: 12,
      fullName: 'Júlio Nunes',
      status: 'Inactive',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'IPSEMG',
      lastRequest: '30/03/2024',
    },
    {
      id: 13,
      fullName: 'Gustavo Flores',
      status: 'Active',
      diagnosis: 'Osteoporose',
      medication: 'upadacitinibe',
      medicineNameComecial: 'Rinvoq',
      healthPlan: 'IPSEMG',
      lastRequest: '27/03/2024',
    },
    {
      id: 14,
      fullName: 'Eliana Marques',
      status: 'Active',
      diagnosis: 'Artrite Reumatoide',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'COPASA',
      lastRequest: '07/03/2024',
    },
    {
      id: 15,
      fullName: 'Hélio Gonçalves',
      status: 'Active',
      diagnosis: 'Asma Grave',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'IPSEMG',
      lastRequest: '26/02/2024',
    },
    {
      id: 16,
      fullName: 'Eliana Cristóvão',
      status: 'Active',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'upadacitinibe',
      medicineNameComecial: 'Rinvoq',
      healthPlan: 'FUNDAFFEMG',
      lastRequest: '12/02/2024',
    },
    {
      id: 17,
      fullName: 'César Flores',
      status: 'Inactive',
      diagnosis: 'Osteoporose',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'AMIL',
      lastRequest: '11/03/2024',
    },
    {
      id: 18,
      fullName: 'Fernanda Albuquerque',
      status: 'Active',
      diagnosis: 'Artrite Reumatoide',
      medication: 'upadacitinibe',
      medicineNameComecial: 'Rinvoq',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '09/03/2024',
    },
    {
      id: 19,
      fullName: 'Fernanda Astuto',
      status: 'Active',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'Abatacepte',
      medicineNameComecial: 'Orencia',
      healthPlan: 'UNIMED NACIONAL',
      lastRequest: '10/02/2024',
    },
    {
      id: 20,
      fullName: 'Diadora Beltrão',
      status: 'Active',
      diagnosis: 'Espondilite Anquilosante',
      medication: 'adalimumabe',
      medicineNameComecial: 'Humira',
      healthPlan: 'FUNDAFFEMG',
      lastRequest: '18/01/2024',
    },
    {
      id: 21,
      fullName: 'Alberto Nunes da Silva Costa',
      status: 'Active',
      diagnosis: 'Artrite Psoriásica',
      medication: 'upadacitinibe',
      medicineNameComecial: 'Rinvoq',
      healthPlan: 'COPASA',
      lastRequest: '06/03/2024',
    },
  ];

  constructor() {}

  getData(): Patient[] {
    return this.mockedData;
  }

  togglePatientStatus(id: number): void {
    const patient = this.mockedData.find((p) => p.id === id);
    if (patient) {
      patient.status = patient.status === 'Active' ? 'Inactive' : 'Active';
    }
  }

  updateStatus(patientId: number, newStatus: 'Active' | 'Inactive') {
    const patientIndex = this.mockedData.findIndex((p) => p.id === patientId);
    if (patientIndex !== -1) {
      this.mockedData[patientIndex].status = newStatus;
    }
  }

  addPatient(newPatient: Patient): void {
    const newId = Math.max(...this.mockedData.map((p) => p.id)) + 1;
    newPatient.id = newId;
    this.mockedData.push(newPatient);
  }
}
