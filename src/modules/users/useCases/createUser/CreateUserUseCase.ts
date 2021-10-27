import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    const emailExist = this.usersRepository.findByEmail(email);
    if (emailExist) {
      throw new Error("Mensagem do erro");
    }
    if (email && name) {
      const user = this.usersRepository.create({ name, email });
      return user;
    } else {
      throw new Error("Mensagem do erro");
    }
  }
}

export { CreateUserUseCase };
