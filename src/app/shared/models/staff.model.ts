


export interface Staff {
  picture: string,
  employeeId: string,
  lastName: string,
  middleName: string,
  firstName: string,
  birthdate: string,
  gender: 'male' | 'female',
  ethnicity: string,
  religion: string,
  identityCard: IdentityCard,
  temporalResidence: Residence,
  permanentResidence: Residence,
  contact: Contact,
  health: {
    height: number,
    weight: number,
    disease: Disease[]
  },
  family: {
    relationship: string,
    lastName: string,
    middleName: string,
    firstName: string,
    birthdate: string,
  }[],

  insurance: {
    number: number,
    name: string,
    type: string
  }[],

  academicProcess: {
    from: string,
    to: string,
    school: string
  }[],

  passport: {
    number: number,
    issueDate: string,
    expirationDate: string,
  }[],

  activityHistory: {
    from: string,
    to: string,
    type: string
  }[],

}

interface Residence {
  street: string,
  ward?: string,
  commune?: string,
  district?: string,
  county?: string
  city?: string,
  province?: string,
}



interface Disease {
  name: string,
  description: string,
}

interface IdentityCard {
  cmnd: string,
  cccd: string,
  issueDate: string,
  issuePlace: string,
}

interface Contact {
  email: string,
  phone: number,
}