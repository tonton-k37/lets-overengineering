// contexts/user-management/domain/specification/userNameSpecification.ts

import { NamePolicy } from "../policy/namePolicy";
import { UserName } from "../value-object/userName";

export class UserNameSpecification {
  constructor(private readonly namePolicy: NamePolicy) { }

  isSatisfiedBy(name: UserName): boolean {
    return this.namePolicy.isSatisfiedBy(name)
  }
}
