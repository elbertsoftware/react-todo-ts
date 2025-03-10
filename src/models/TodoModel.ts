export class TodoModel {

  constructor(private _order: number, private _desc: string, private _assigned: string) {}

  get order(): number {
    return this._order;
  }

  set order(value: number) {
    this._order = value;
  }
  
  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get assigned(): string {
    return this._assigned;
  }

  set assigned(value: string) {
    this._assigned = value;
  }

}