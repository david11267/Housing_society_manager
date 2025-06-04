export type PortCode = {
  code: string;
  status: "working" | "broken" | "changed" | "other";
  accessibility: "easy" | "hard" | "medium" | undefined;
  lastUpdate: Date;
};

export type Note = {
  uuid: string;
  type: "comment" | "complaint" | "todo";
  header: string;
  note: string;
  lastUpdated: Date;
  dueDateTime?: Date | null;
};

export type HousingSociety = {
  uuid: string;
  name: string;
  address: string;
  builtYear: number;
  nrOfApartments: number;
  lastNotesDrop: Date;
  registeredPhoneNumbers: number;
  lastUpdated: Date;
  port: PortCode;
  notes: Note[];
};

export const fakeData: HousingSociety[] = [
  {
    uuid: "1e4b7a4b-df5d-4b74-a95f-93b5b69df1b2",
    name: "Green Valley Society",
    address: "123 Elm Street",
    builtYear: 1995,
    nrOfApartments: 50,
    lastNotesDrop: new Date("2025-05-30T10:00:00Z"),
    registeredPhoneNumbers: 10,
    lastUpdated: new Date("2025-06-01T15:30:00Z"),
    port: {
      code: "GV123",
      status: "working",
      accessibility: "easy",
      lastUpdate: new Date("2025-06-01T12:00:00Z"),
    },
    notes: [
      {
        uuid: "3f5b3a2a-ab2d-47b2-a33b-eba6c2399f11",
        type: "comment",
        header: "Maintenance Update",
        note: "The maintenance will be conducted next week.",
        lastUpdated: new Date("2025-05-28T09:00:00Z"),
        dueDateTime: new Date("2025-06-05T00:00:00Z"),
      },
      {
        uuid: "7e9a6e8d-ccda-42ff-92f0-dbc3c95df23a",
        type: "complaint",
        header: "Power Outage",
        note: "There will be a power outage tomorrow from 10AM to 12PM.",
        lastUpdated: new Date("2025-05-29T08:00:00Z"),
        dueDateTime: null,
      },
    ],
  },
  {
    uuid: "2b6f9f9e-c1b3-4f8c-9b0d-7d4b8a9e2e32",
    name: "Sunset Heights",
    address: "456 Oak Avenue",
    builtYear: 2001,
    nrOfApartments: 75,
    lastNotesDrop: new Date("2025-05-25T11:00:00Z"),
    registeredPhoneNumbers: 15,
    lastUpdated: new Date("2025-06-02T14:45:00Z"),
    port: {
      code: "SH456",
      status: "other", // changed from 'maintenance' to 'other'
      accessibility: "medium", // changed from 'moderate' to 'medium'
      lastUpdate: new Date("2025-06-02T10:30:00Z"),
    },
    notes: [
      {
        uuid: "9a4e6c1b-8f7c-4de1-ae22-123456789abc",
        type: "todo",
        header: "Elevator Repair",
        note: "Elevator will be out of service for 3 days.",
        lastUpdated: new Date("2025-05-24T13:00:00Z"),
        dueDateTime: new Date("2025-05-28T00:00:00Z"),
      },
    ],
  },
  {
    uuid: "3c9e7a0f-e2d1-4a67-8f3c-56789abcdef0",
    name: "Lakeside Residences",
    address: "789 Pine Road",
    builtYear: 2010,
    nrOfApartments: 120,
    lastNotesDrop: new Date("2025-05-20T09:30:00Z"),
    registeredPhoneNumbers: 20,
    lastUpdated: new Date("2025-06-03T16:20:00Z"),
    port: {
      code: "LR789",
      status: "working",
      accessibility: "hard",
      lastUpdate: new Date("2025-06-03T15:00:00Z"),
    },
    notes: [],
  },
  {
    uuid: "4d8a6b2c-f3d0-4f9b-9a7f-112233445566",
    name: "Mountain View",
    address: "321 Cedar Lane",
    builtYear: 1985,
    nrOfApartments: 40,
    lastNotesDrop: new Date("2025-05-18T14:00:00Z"),
    registeredPhoneNumbers: 8,
    lastUpdated: new Date("2025-06-04T12:15:00Z"),
    port: {
      code: "MV321",
      status: "broken", // changed from 'offline' to 'broken'
      accessibility: "hard", // changed from 'restricted' to 'hard'
      lastUpdate: new Date("2025-06-04T11:30:00Z"),
    },
    notes: [
      {
        uuid: "abcd1234-5678-90ef-ghij-klmnopqrstuv",
        type: "complaint",
        header: "Water Supply Issue",
        note: "Water supply will be shut down from 9AM to 5PM.",
        lastUpdated: new Date("2025-05-17T10:00:00Z"),
        dueDateTime: new Date("2025-05-19T17:00:00Z"),
      },
      {
        uuid: "wxyz5678-1234-abcd-efgh-ijklmnopqrstu",
        type: "comment",
        header: "Parking Lot Renovation",
        note: "Renovation scheduled next month.",
        lastUpdated: new Date("2025-05-15T09:00:00Z"),
        dueDateTime: null,
      },
      {
        uuid: "mnop3456-7890-abcd-efgh-ijklqrstuvwx",
        type: "todo",
        header: "Annual Meeting",
        note: "Don’t forget the annual meeting on June 10th.",
        lastUpdated: new Date("2025-05-10T08:00:00Z"),
        dueDateTime: new Date("2025-06-10T18:00:00Z"),
      },
    ],
  },
  {
    uuid: "5e7f8g9h-i0jk-1lmn-2opq-3rstuvwx4567",
    name: "Riverbank Estates",
    address: "654 Spruce Street",
    builtYear: 1998,
    nrOfApartments: 60,
    lastNotesDrop: new Date("2025-05-22T13:15:00Z"),
    registeredPhoneNumbers: 12,
    lastUpdated: new Date("2025-06-01T14:50:00Z"),
    port: {
      code: "RE654",
      status: "working",
      accessibility: "easy",
      lastUpdate: new Date("2025-06-01T14:00:00Z"),
    },
    notes: [
      {
        uuid: "note1234-5678-abcd-efgh-ijklmnopqrst",
        type: "todo",
        header: "Garden Maintenance",
        note: "Gardens will be trimmed this weekend.",
        lastUpdated: new Date("2025-05-21T09:00:00Z"),
        dueDateTime: null,
      },
    ],
  },
];
