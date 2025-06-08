// contexts/user-management/domain/value-object/userName.ts

import { InvalidValueError } from "../../../shared/domain/value-objects/errors/InvalidValueError";

export class UserName {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  validate() {
    if (typeof this._value !== "string") {
      throw new InvalidValueError("you don't know the name?");
    }

    if (this._value.length < 5) {
      throw new InvalidValueError("who named you?");
    }
  }
}
