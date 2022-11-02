import { nanoid } from "nanoid";

export class Item {
  protected _id: string;
  protected _text: string;
  protected _completed: boolean;

  constructor(text: string) {
    this._id = nanoid();
    this._text = text;
    this._completed = false;
  }

  /**
   * Mark task item like complete ot not complete
   * 
   */
  public mark(): boolean {
    return this._completed = !this.completed;
  }

  /**
   * id getter
   * @return @type string
   */
  public get id(): string {
    return this._id;
  }

  /**
   * text content getter
   * @return @type string
   */
  public get text(): string {
    return this._text;
  }

  /**
   * completed getter
   * return true if task completed
   * @return @type boolean
   */
  public get completed(): boolean {
    return this._completed
  }
}