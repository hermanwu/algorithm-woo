import { Note } from "./note.model";

export interface Analysis {
  name: string;
  pros: Note[];
  cons: Note[];
  examples?: Note[];
  parents?: Analysis[];
  children?: Analysis[];
}
