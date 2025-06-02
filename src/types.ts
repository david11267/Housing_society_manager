export type FakeData = {
  name: string;
  address: string;
  builtYear: number;
  nrOfApartments: number;
  lastNotesDrop: Date;
  registeredPhoneNumbers: number; //these are registered at a crm //TODO connect this number from the crm
  lastUpdated: Date;
  portCode: {
    code: string;
    status: string; // consider making this a enumType
    accessibility: string; // consider making this a enumType or bool
    lastUpdate: Date;
  };
  todos: {
    dueDateTime: Date;
    note: string;
  }[];
  notes: {
    type: 'complaint' | 'comment';
    reminderDateTime: Date;
    header: string;
    note: string;
  }[];
};

export const data: FakeData[] = [
  {
    name: 'Central Heights',
    address: 'Södra Vägen 12, Göteborg',
    builtYear: 1990,
    nrOfApartments: 42,
    lastNotesDrop: new Date('2025-05-15T14:23:00'),
    lastUpdated: new Date('2025-05-30T10:11:00'),
    registeredPhoneNumbers: 12,
    portCode: {
      code: '1234',
      status: 'active',
      accessibility: 'yes',
      lastUpdate: new Date('2025-05-25T09:15:00'),
    },
    todos: [
      {
        dueDateTime: new Date('2025-06-01T09:00:00'),
        note: 'Fix broken intercom',
      },
    ],
    notes: [
      {
        type: 'complaint',
        reminderDateTime: new Date('2025-06-02T11:30:00'),
        header: 'Noise issue',
        note: 'Complaints about loud music from apartment 5C.',
      },
    ],
  },
  {
    name: 'Lindhagen Point',
    address: 'Kungsholmsgatan 45, Stockholm',
    builtYear: 2001,
    nrOfApartments: 60,
    lastNotesDrop: new Date('2025-05-20T08:45:00'),
    lastUpdated: new Date('2025-05-29T16:42:00'),
    registeredPhoneNumbers: 8,
    portCode: {
      code: '5678',
      status: 'inactive',
      accessibility: 'no',
      lastUpdate: new Date('2025-05-28T13:00:00'),
    },
    todos: [
      {
        dueDateTime: new Date('2025-06-03T15:00:00'),
        note: 'Replace lobby light',
      },
    ],
    notes: [
      {
        type: 'comment',
        reminderDateTime: new Date('2025-06-05T10:00:00'),
        header: 'Garden',
        note: 'Residents appreciate the new garden benches.',
      },
    ],
  },
  {
    name: 'Central Heights',
    address: 'Södra Vägen 12, Göteborg',
    builtYear: 1990,
    nrOfApartments: 42,
    lastNotesDrop: new Date('2025-05-15T14:23:00'),
    lastUpdated: new Date('2025-05-30T10:11:00'),
    registeredPhoneNumbers: 12,
    portCode: {
      code: '1234',
      status: 'active',
      accessibility: 'yes',
      lastUpdate: new Date('2025-05-25T09:15:00'),
    },
    todos: [
      {
        dueDateTime: new Date('2025-06-01T09:00:00'),
        note: 'Fix broken intercom',
      },
    ],
    notes: [
      {
        type: 'complaint',
        reminderDateTime: new Date('2025-06-02T11:30:00'),
        header: 'Noise issue',
        note: 'Complaints about loud music from apartment 5C.',
      },
    ],
  },
  // Add 8 more entries similarly...
];
