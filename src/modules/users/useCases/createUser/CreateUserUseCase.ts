import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    let user: any;
    const emailExist = this.usersRepository.findByEmail(email);

    if (emailExist) {
      throw new Error("Mensagem do erro");
    }

    if (email || name) {
      user = this.usersRepository.create({ name, email });
    } else {
      throw new Error("Mensagem do erro");
    }
    return user;
  }
}

export { CreateUserUseCase };
