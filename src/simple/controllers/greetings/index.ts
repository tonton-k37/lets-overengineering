import { RequestHandler } from "express";
import { Greeting } from "../../features/greeting";
import { GreetingRepository } from "../../features/greeting/index.repository";


const index: RequestHandler = async (req, res) => {
  const feature = new Greeting(new GreetingRepository());
  const message = await feature.execute();

  res.send(message);
}

export {
  index
}
