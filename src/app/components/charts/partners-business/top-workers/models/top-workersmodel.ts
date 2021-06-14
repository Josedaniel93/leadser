import { ITopWorkersData } from "./top-workers.interface";



export class TopWorkersData implements ITopWorkersData {
  year: string;
  type: string;
  data: number;

  constructor() {
    this.year = "";
    this.type = "";
    this.data = 0;
  }

}
