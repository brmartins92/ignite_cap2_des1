import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] | undefined {
    if (!user_id) {
      throw new Error("Mensagem do erro");
    }
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Mensagem do erro");
    } else {
      if (user.admin) {
        return this.usersRepository.list();
      }
      throw new Error("Mensagem do erro");
    }
  }
}

export { ListAllUsersUseCase };
