export type FakeData = {
  name: string;
  address: string;
  builtYear: number;
  nrOfApartments: number;
  lastNotesDrop: Date;
  registeredPhoneNumbers: number;
  lastUpdated: Date;
  portCode: {
    code: string;
    status: string;
    accessibility: string;
    lastUpdate: Date;
  };
  todos: {
    dueDateTime: Date;
    note: string;
  }[];
  notes: {
    type: "complaint" | "comment" | "todo";
    reminderDateTime: Date;
    header: string;
    note: string;
    dueDateTime?: Date;
  }[];
};

export const data: FakeData[] = [
  {
    name: "Central Heights",
    address: "Södra Vägen 12, Göteborg",
    builtYear: 1990,
    nrOfApartments: 42,
    lastNotesDrop: new Date("2025-05-15T14:23:00"),
    lastUpdated: new Date("2025-05-30T10:11:00"),
    registeredPhoneNumbers: 12,
    portCode: {
      code: "1234",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-25T09:15:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-01T09:00:00"),
        note: "Fix broken intercom",
      },
      {
        dueDateTime: new Date("2025-06-10T14:00:00"),
        note: "Check fire alarms",
      },
    ],
    notes: [
      {
        type: "complaint",
        reminderDateTime: new Date("2025-06-02T11:30:00"),
        header: "Noise issue",
        note: "Complaints about loud music from apartment 5C.",
      },
      {
        type: "todo",
        reminderDateTime: new Date("2025-06-03T09:00:00"),
        header: "Inspect elevator",
        note: "Elevator maintenance required.",
        dueDateTime: new Date("2025-06-05T12:00:00"),
      },
    ],
  },
  {
    name: "Lindhagen Point",
    address: "Kungsholmsgatan 45, Stockholm",
    builtYear: 2001,
    nrOfApartments: 60,
    lastNotesDrop: new Date("2025-05-20T08:45:00"),
    lastUpdated: new Date("2025-05-29T16:42:00"),
    registeredPhoneNumbers: 8,
    portCode: {
      code: "5678",
      status: "inactive",
      accessibility: "no",
      lastUpdate: new Date("2025-05-28T13:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-03T15:00:00"),
        note: "Replace lobby light",
      },
    ],
    notes: [
      {
        type: "comment",
        reminderDateTime: new Date("2025-06-05T10:00:00"),
        header: "Garden",
        note: "Residents appreciate the new garden benches.",
      },
    ],
  },
  {
    name: "Vasastan Towers",
    address: "Odengatan 77, Stockholm",
    builtYear: 1985,
    nrOfApartments: 55,
    lastNotesDrop: new Date("2025-05-18T12:00:00"),
    lastUpdated: new Date("2025-05-28T09:30:00"),
    registeredPhoneNumbers: 15,
    portCode: {
      code: "9101",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-27T11:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-07T10:00:00"),
        note: "Paint stairwell",
      },
    ],
    notes: [
      {
        type: "todo",
        reminderDateTime: new Date("2025-06-08T13:00:00"),
        header: "Window cleaning",
        note: "Schedule window cleaning for all floors.",
        dueDateTime: new Date("2025-06-15T09:00:00"),
      },
    ],
  },
  {
    name: "Haga Residence",
    address: "Haga Nygata 5, Göteborg",
    builtYear: 1978,
    nrOfApartments: 38,
    lastNotesDrop: new Date("2025-05-22T15:30:00"),
    lastUpdated: new Date("2025-05-31T17:20:00"),
    registeredPhoneNumbers: 10,
    portCode: {
      code: "4321",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-30T08:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-12T11:00:00"),
        note: "Check roof for leaks",
      },
    ],
    notes: [
      {
        type: "comment",
        reminderDateTime: new Date("2025-06-13T10:00:00"),
        header: "Mailbox",
        note: "Mailbox locks replaced.",
      },
    ],
  },
  {
    name: "Solna View",
    address: "Solnavägen 100, Solna",
    builtYear: 2005,
    nrOfApartments: 70,
    lastNotesDrop: new Date("2025-05-25T09:00:00"),
    lastUpdated: new Date("2025-05-27T14:10:00"),
    registeredPhoneNumbers: 20,
    portCode: {
      code: "8765",
      status: "inactive",
      accessibility: "no",
      lastUpdate: new Date("2025-05-26T10:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-15T16:00:00"),
        note: "Update entry system",
      },
    ],
    notes: [
      {
        type: "complaint",
        reminderDateTime: new Date("2025-06-16T09:00:00"),
        header: "Parking",
        note: "Unauthorized cars in guest parking.",
      },
    ],
  },
  {
    name: "Kvillebäcken Apartments",
    address: "Kvillebäcken 3, Göteborg",
    builtYear: 2012,
    nrOfApartments: 80,
    lastNotesDrop: new Date("2025-05-28T13:45:00"),
    lastUpdated: new Date("2025-05-29T18:00:00"),
    registeredPhoneNumbers: 25,
    portCode: {
      code: "2468",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-28T12:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-18T10:00:00"),
        note: "Inspect basement",
      },
    ],
    notes: [
      {
        type: "todo",
        reminderDateTime: new Date("2025-06-19T11:00:00"),
        header: "Fire drill",
        note: "Plan fire drill for all residents.",
        dueDateTime: new Date("2025-06-25T14:00:00"),
      },
    ],
  },
  {
    name: "Frölunda Park",
    address: "Frölunda Torg 1, Göteborg",
    builtYear: 1995,
    nrOfApartments: 50,
    lastNotesDrop: new Date("2025-05-17T11:20:00"),
    lastUpdated: new Date("2025-05-26T15:00:00"),
    registeredPhoneNumbers: 18,
    portCode: {
      code: "1357",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-25T10:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-20T09:00:00"),
        note: "Clean ventilation system",
      },
    ],
    notes: [
      {
        type: "comment",
        reminderDateTime: new Date("2025-06-21T10:00:00"),
        header: "Playground",
        note: "New playground equipment installed.",
      },
    ],
  },
  {
    name: "Sundbyberg Suites",
    address: "Sturegatan 10, Sundbyberg",
    builtYear: 2010,
    nrOfApartments: 65,
    lastNotesDrop: new Date("2025-05-19T10:30:00"),
    lastUpdated: new Date("2025-05-25T13:00:00"),
    registeredPhoneNumbers: 22,
    portCode: {
      code: "9753",
      status: "inactive",
      accessibility: "no",
      lastUpdate: new Date("2025-05-24T09:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-22T15:00:00"),
        note: "Upgrade security cameras",
      },
    ],
    notes: [
      {
        type: "complaint",
        reminderDateTime: new Date("2025-06-23T11:00:00"),
        header: "Elevator",
        note: "Elevator out of service frequently.",
      },
    ],
  },
  {
    name: "Östermalm Plaza",
    address: "Karlavägen 50, Stockholm",
    builtYear: 1988,
    nrOfApartments: 58,
    lastNotesDrop: new Date("2025-05-21T14:00:00"),
    lastUpdated: new Date("2025-05-24T17:00:00"),
    registeredPhoneNumbers: 14,
    portCode: {
      code: "8642",
      status: "active",
      accessibility: "yes",
      lastUpdate: new Date("2025-05-23T08:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-24T10:00:00"),
        note: "Test fire alarms",
      },
    ],
    notes: [
      {
        type: "todo",
        reminderDateTime: new Date("2025-06-25T09:00:00"),
        header: "Annual inspection",
        note: "Prepare for annual building inspection.",
        dueDateTime: new Date("2025-06-30T12:00:00"),
      },
    ],
  },
  {
    name: "Mölndal Terraces",
    address: "Mölndalsvägen 30, Mölndal",
    builtYear: 2008,
    nrOfApartments: 72,
    lastNotesDrop: new Date("2025-05-23T16:00:00"),
    lastUpdated: new Date("2025-05-22T11:00:00"),
    registeredPhoneNumbers: 19,
    portCode: {
      code: "7531",
      status: "inactive",
      accessibility: "no",
      lastUpdate: new Date("2025-05-21T10:00:00"),
    },
    todos: [
      {
        dueDateTime: new Date("2025-06-26T13:00:00"),
        note: "Repair parking gate",
      },
    ],
    notes: [
      {
        type: "comment",
        reminderDateTime: new Date("2025-06-27T10:00:00"),
        header: "Lobby",
        note: "Lobby repainting scheduled.",
      },
    ],
  },
];
