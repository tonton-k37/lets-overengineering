// contexts/user-management/domain/value-object/userId.ts

import { InvalidValueError } from "../../../shared/domain/value-objects/errors/InvalidValueError";

export class UserId {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value
  }

  validate() {
    if (typeof this._value !== 'string') {
      throw new InvalidValueError("oops, you stupid. it's not the proper user id moron");
    }
  }
}
