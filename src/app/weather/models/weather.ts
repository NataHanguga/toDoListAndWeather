export class Weather {
  current: any;
  constructor(
    public cityName: string,
    public temp: string,
    public icon: string,
    public weatherKind: string
  ) { }
}
