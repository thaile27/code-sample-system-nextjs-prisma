export class Student {
  private _studentID: string = "";
  private _firstName: string = "";
  private _lastName: string = "";
  private _email: string = "";

  constructor(
    studentID: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    this._studentID = studentID;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  // Getter and setter for StudentID
  StudentID = () => this._studentID;

  SetStudentID = (value: string) => {
    this._studentID = value;
  };

  // Getter and setter for FirstName
  FirstName = () => this._firstName;
  SetFirstName = (value: string) => {
    this._firstName = value;
  };

  // Getter and setter for LastName
  LastName = () => this._lastName;
  SetLastName = (value: string) => {
    this._lastName = value;
  };

  // Getter and setter for Email
  Email = () => this._email;
  SetEmail = (value: string) => {
    this._email = value;
  };
}
