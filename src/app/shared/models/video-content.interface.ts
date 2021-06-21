export interface IVideoContent {

  telecomunicaciones: string[];
  seguros: string[];
  banca: string[];
  dataFarm: string[];

}

export class VideoContent implements IVideoContent {

  telecomunicaciones: string[];
  seguros: string[];
  banca: string[];
  dataFarm: string[];




  constructor() {
    this.telecomunicaciones = ["wBqhUWt5UYk", "BgKKikTD8dw", "dzh7faTkHCk", "Ztr24-JBL2s", "uRaViAXLPXw"];
    this.seguros = ["BgKKikTD8dw", "wBqhUWt5UYk", "dzh7faTkHCk", "Ztr24-JBL2s", "uRaViAXLPXw"];
    this.banca = ["dzh7faTkHCk", "BgKKikTD8dw", "wBqhUWt5UYk", "Ztr24-JBL2s", "uRaViAXLPXw"];
    this.dataFarm = ["Ztr24-JBL2s", "BgKKikTD8dw", "dzh7faTkHCk", "wBqhUWt5UYk", "uRaViAXLPXw"];
  }

}
