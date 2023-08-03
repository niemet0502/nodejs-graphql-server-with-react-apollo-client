import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(input: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create(input);

    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { id } });
  }
}
