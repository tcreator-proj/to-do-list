import { nanoid } from "nanoid";

export class Item {
  protected _id: string;
  protected _text: string;
  protected _completed: boolean;
  protected _show: boolean;

  constructor(text: string) {
    this._id = nanoid();
    this._text = text;
    this._completed = false;
    this._show = true;
  }

  /**
   * Mark task item like complete ot not complete
   */
  public mark(): boolean {
    return this._completed = !this.completed;
  }

  /**
   * Hiding item on page
   * @return @type boolean
   */
   public hide(): boolean {
    return this._show = false;
  }

  /**
   * Show item on page
   * @return @type boolean
   */
   public toShow(): boolean {
    return this._show = true;
  }

  /**
   * id getter
   * @return @type string
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getting a boolean value, item having at page or not
   * @return @type boolean
   */
   public get show(): boolean {
    return this._show;
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