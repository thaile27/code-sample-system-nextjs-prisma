export class Program {
  private _programCode: string;
  private _description: string;
  private readonly _enrolledStudents: Student[];

  constructor(programCode: string, description: string) {
    this._programCode = programCode;
    this._description = description;
    this._enrolledStudents = [];
  }

  // Getter and setter for ProgramCode
  ProgramCode = () => this._programCode;

  SetProgramCode = (value: string) => {
    if (value && value.trim().length > 0) {
      this._programCode = value.toUpperCase();
    } else {
      throw new Error("Program code cannot be empty");
    }
  };

  // Description getter and setter
  Description = () => this._description;
  SetDescription = (value: string) => {
    if (value && value.trim().length > 0) {
      this._description = value;
    } else {
      throw new Error("Description cannot be empty");
    }
  };

  // EnrolledStudents getter (read-only)
  EnrolledStudents = (): readonly Student[] => this._enrolledStudents;
}
