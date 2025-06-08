// contexts/user-management/domain/entity/user.ts

import { UserId } from "../value-object/userId";
import { UserName } from "../value-object/userName";

export class User {
  private readonly _id: UserId;
  private _name: UserName;

  constructor({
    id,
    name,
  }: {
    id: UserId,
    name: UserName
  }) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  changeName(newName: UserName) {
    if (this._name.equals(newName)) return;
    this._name = newName;
  }
}
