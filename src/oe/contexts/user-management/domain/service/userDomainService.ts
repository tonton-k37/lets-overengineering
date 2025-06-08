import { User } from "../entity/user";
import { UserNameSpecification } from "../specification/userNameSpecification";
import { UserName } from "../value-object/userName";


// no need interface since this service is not surfaced to any outer module
export class UserDomainService {
  constructor(private readonly userNameSpec: UserNameSpecification) { }

  canChangeUserName(user: User, newName: UserName): boolean {
    if (user.name.equals(newName)) return false;
    return this.userNameSpec.isSatisfiedBy(newName);
  }
}
