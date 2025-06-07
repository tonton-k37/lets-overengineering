import { GreetingRepository } from "./index.repository";

export class Greeting {
  constructor(
    private readonly repository: GreetingRepository
  ) { }

  async execute() {
    return await this.repository.take()
  }
}
