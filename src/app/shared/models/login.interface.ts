
export interface Login {

  email: string;
  password: string;
  role: string;
}
export interface ResponseData {
  result: string;
  role: string;
}

export class CreateLogin implements Login {
  email: string;
  password: string;
  role: string;
  constructor() {
    this.email = "";
    this.password = "";
    this.role = "";
  }

}
