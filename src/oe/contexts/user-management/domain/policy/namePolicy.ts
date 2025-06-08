// contexts/user-management/domain/policy/namePolicy.ts

import { UserName } from "../value-object/userName"

export class NamePolicy {
  private readonly forbiddenWords = ["admin", "root", "null", "anonymous"]

  isSatisfiedBy(name: UserName): boolean {
    const lowerName = name.value.toLowerCase();
    return !this.forbiddenWords.includes(lowerName);
  }
}
