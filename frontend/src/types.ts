export type PortCode = {
  code: string;
  status: "working" | "broken" | "changed" | "other";
  accessibility: "easy" | "hard" | "medium" | undefined;
  lastUpdate: Date;
};

export type Note = {
  uuid: string;
  type: string;
  header: string;
  note: string;
  lastUpdated: Date;
  dueDateTime: Date | null;
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
