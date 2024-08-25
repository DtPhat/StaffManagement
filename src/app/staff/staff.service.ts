import { EventEmitter, Injectable } from '@angular/core';
import { Staff } from '../shared';
import { Subject } from 'rxjs';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaffService {

  staff = signal<Staff[]>(staffData)
  selectedStaffMember = signal<Staff | null>(null)

  constructor() { }

  getStaff() {
    return this.staff();
  }

  selectStaff(id: string): void {
    this.selectedStaffMember.set(
      this.staff().find(member => member.employeeId == id) ?? null
    )
  }

  getSelectedStaffMember() {
    return this.selectedStaffMember();
  }

  // getStaffMemberById(id: string) {
  //   return this.staff().find(member => member.employeeId == id) ?? null;
  // }

  addStaffMember(newStaff: Staff) {
    if (!newStaff.picture) {
      newStaff.picture = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
    }
    newStaff.employeeId = this.generateRandomId()
    this.staff.update((prevData) => ([
      ...prevData,
      newStaff
    ])
    )
    // this.staffData.push(staff);
    // this.staffChanged.next(this.staffData.slice());
  }

  updateStaffMember(staff: Staff) {
  }


  private generateRandomId(): string {
    const prefix = 'E';
    const maxNumber = 999;
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    const formattedNumber = randomNumber.toString().padStart(3, '0');
    return `${prefix}${formattedNumber}`;
  }
}

const staffData: Staff[] = [
  {
    picture: "https://st4.depositphotos.com/9998432/24360/v/450/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg",
    employeeId: "E001",
    lastName: "Nguyen",
    middleName: "Van",
    firstName: "An",
    birthdate: "1990-05-15",
    gender: "male",
    ethnicity: "kinh",
    religion: "none",
    identityCard: {
      cmnd: "123456789",
      cccd: "012345678901",
      issueDate: "2010-06-20",
      issuePlace: "Ho Chi Minh City",
    },
    temporalResidence: {
      street: "123 Nguyen Trai",
      ward: "Ward 5",
      commune: "Phu Nhuan",
      district: "District 3",
      county: "County 3",
      city: "Ho Chi Minh City",
      province: "Ho Chi Minh",
    },
    permanentResidence: {
      street: "456 Le Duan",
      ward: "Ward 7",
      commune: "Tan Binh",
      district: "District 1",
      county: "County 1",
      city: "Ho Chi Minh City",
      province: "Ho Chi Minh",
    },
    contact: {
      email: "an.nguyen@example.com",
      phone: 84912345678,
    },
    health: {
      height: 175,
      weight: 70,
      disease: [
        { name: "Hypertension", description: "High blood pressure" },
      ],
    },
    family: [
      {
        relationship: "Brother",
        lastName: "Nguyen",
        middleName: "Van",
        firstName: "Binh",
        birthdate: "1985-08-23",
      },
    ],
    insurance: [
      {
        number: 123456789,
        name: "Health Insurance",
        type: "Health",
      },
      {
        number: 123456789,
        name: "Health Insurance",
        type: "Health",
      },
    ],
    academicProcess: [
      {
        from: "2008-09-01",
        to: "2012-06-30",
        school: "University of Economics",
      }
    ],
    passport: [
      {
        number: 987654321,
        issueDate: "2015-01-01",
        expirationDate: "2025-01-01",
      }
    ],
    activityHistory: [
      {
        from: "2020-01-01",
        to: "2021-12-31",
        type: "Project Manager",
      },
      {
        from: "2020-01-01",
        to: "2021-12-31",
        type: "Project Manager",
      },
      {
        from: "2020-01-01",
        to: "2021-12-31",
        type: "Project Manager",
      },
      {
        from: "2020-01-01",
        to: "2021-12-31",
        type: "Project Manager",
      },
    ]
  },
  {
    picture: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg",
    employeeId: "E002",
    lastName: "Tran",
    middleName: "Thi",
    firstName: "Binh",
    birthdate: "1985-08-23",
    gender: "female",
    ethnicity: "tay",
    religion: "buddhism",
    identityCard: {
      cmnd: "987654321",
      cccd: "098765432109",
      issueDate: "2015-09-10",
      issuePlace: "Hanoi",
    },
    temporalResidence: {
      street: "789 Tran Hung Dao",
      ward: "Ward 10",
      commune: "Dong Da",
      district: "Dong Da",
      city: "Hanoi",
      province: "Hanoi",
    },
    permanentResidence: {
      street: "321 Hai Ba Trung",
      ward: "Ward 10",
      commune: "Ba Dinh",
      district: "Ba Dinh",
      city: "Hanoi",
      province: "Hanoi",
    },
    contact: {
      email: "binh.tran@example.com",
      phone: 84942341671,
    },
    health: {
      height: 160,
      weight: 55,
      disease: [
        { name: "Hypertension", description: "High blood pressure" },
        { name: "Myopia", description: "1 diopter of myopia" },
      ],
    },
    family: [
      {
        relationship: "Sister",
        lastName: "Tran",
        middleName: "Thi",
        firstName: "Mai",
        birthdate: "1990-03-12",
      },
      {
        relationship: "Sister",
        lastName: "Tran",
        middleName: "Thi",
        firstName: "Mai",
        birthdate: "1990-03-12",
      },
      {
        relationship: "Sister",
        lastName: "Tran",
        middleName: "Thi",
        firstName: "Mai",
        birthdate: "1990-03-12",
      },
    ],
    insurance: [
      {
        number: 987654321,
        name: "Life Insurance",
        type: "Life",
      },
      {
        number: 987654321,
        name: "Life Insurance",
        type: "Life",
      },
    ],
    academicProcess: [
      {
        from: "2006-09-01",
        to: "2010-06-30",
        school: "National University",
      },
      {
        from: "2006-09-01",
        to: "2010-06-30",
        school: "National University",
      },
      {
        from: "2006-09-01",
        to: "2010-06-30",
        school: "National University",
      },
    ],
    passport: [
      {
        number: 123456789,
        issueDate: "2018-05-01",
        expirationDate: "2028-05-01",
      },
      {
        number: 123456789,
        issueDate: "2018-05-01",
        expirationDate: "2028-05-01",
      },
    ],
    activityHistory: [
      {
        from: "2019-03-01",
        to: "2022-02-28",
        type: "Software Engineer",
      },
      {
        from: "2019-03-01",
        to: "2022-02-28",
        type: "Software Engineer",
      },
    ],
  },

  {
    picture: "https://cdn.vectorstock.com/i/500p/63/63/profile-placeholder-female-avatar-vector-21666363.jpg",
    employeeId: "E003",
    lastName: "Hoang",
    middleName: "Thi",
    firstName: "Minh",
    birthdate: "1988-11-30",
    gender: "male",
    ethnicity: "hoa",
    religion: "none",
    identityCard: {
      cmnd: "112233445",
      cccd: "223344556677",
      issueDate: "2012-11-15",
      issuePlace: "Da Nang",
    },
    temporalResidence: {
      street: "101 Bach Dang",
      ward: "Ward 8",
      commune: "Hai Chau",
      district: "Hai Chau",
      city: "Da Nang",
      province: "Da Nang",
    },
    permanentResidence: {
      street: "202 Le Duan",
      commune: "Thanh Khe",
      ward: "Ward 1",
      district: "Thanh Khe",
      city: "Da Nang",
      province: "Da Nang",
    },
    contact: {
      email: "minh.hoang@example.com",
      phone: 84998765432,
    },
    health: {
      height: 180,
      weight: 80,
      disease: [
        { name: "Diabetes", description: "Type 2 diabetes" },
      ],
    },
    family: [
      {
        relationship: "Wife",
        lastName: "Hoang",
        middleName: "Thi",
        firstName: "Mai",
        birthdate: "1990-01-15",
      },
    ],
    insurance: [
      {
        number: 112233445,
        name: "Car Insurance",
        type: "Car",
      },
    ],
    academicProcess: [
      {
        from: "2005-09-01",
        to: "2009-06-30",
        school: "Da Nang University",
      },
      {
        from: "2005-09-01",
        to: "2009-06-30",
        school: "Da Nang University",
      },
    ],
    passport: [
      {
        number: 987654321,
        issueDate: "2020-04-01",
        expirationDate: "2030-04-01",
      }
    ],
    activityHistory: [
      {
        from: "2021-06-01",
        to: "2024-08-15",
        type: "Business Analyst",
      },
      {
        from: "2021-06-01",
        to: "2024-08-15",
        type: "Business Analyst",
      }
    ],
  },
];