// contexts/user-management/domain/aggregate/userAggregate.ts

import { User } from "../entity/user";
import { UserId } from "../value-object/userId";
import { UserName } from "../value-object/userName";

export class UserAggregate {
  private readonly _user: User;

  constructor(user: User) {
    this._user = user;
  }

  get id(): UserId {
    return this._user.id;
  }

  get user(): User {
    return this._user;
  }


  public changeUserName(newName: UserName): void {
    this._user.changeName(newName);
    // e.g., DomainEvents.dispatch(new UserNameChangedEvent(this._user.id, newName));
  }
}
