export interface Note {
  content: string | any;
  // Determine whether it is a question.
  isQuestion?: boolean;
  link?: string;

  imageLink?: string;
  notes?: Note[];
}
