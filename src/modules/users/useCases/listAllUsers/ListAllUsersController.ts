import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id }: any = request.headers;

    if (!user_id) {
      return response.status(400).send();
    }

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).send();
    }
  }
}

export { ListAllUsersController };
