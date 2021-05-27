import { ISalesTimeData } from './sales-time.interface';


export class SalesTimeData implements SalesTimeData {
  date: string;

  total: number;


  constructor() {
    this.date = "";
    this.total = 0;
  }

}
