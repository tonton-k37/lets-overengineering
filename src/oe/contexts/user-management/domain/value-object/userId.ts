// contexts/user-management/domain/value-object/userId.ts

import { InvalidValueError } from "../../../shared/exceptions/InvalidValueError";

export class UserId {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value
  }

  // do we need this method? no, we don't but it's in the book!!!
  equals(other: UserId) {
    return this._value === other.value;
  }

  validate() {
    if (typeof this._value !== 'string') {
      throw new InvalidValueError("oops, you stupid. it's not the proper user id moron");
    }
  }
}
