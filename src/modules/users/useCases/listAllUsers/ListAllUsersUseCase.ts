import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] | undefined {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      return [];
    } else {
      if (user.admin) {
        return this.usersRepository.list();
      } else {
        return [];
      }
    }
  }
}

export { ListAllUsersUseCase };
