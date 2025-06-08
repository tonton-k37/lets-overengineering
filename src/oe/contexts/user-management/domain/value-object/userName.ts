// contexts/user-management/domain/value-object/userName.ts

import { InvalidValueError } from "../../../shared/exceptions/InvalidValueError";

export class UserName {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  equals(other: UserName) {
    return this._value === other.value;
  }

  get value() {
    return this._value;
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
