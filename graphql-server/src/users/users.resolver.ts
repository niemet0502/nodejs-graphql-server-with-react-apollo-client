import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  create(@Args('CreateUserDTO') createUserDTO: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserDTO);
  }

  @Query((returns) => User)
  getOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation((returns) => Boolean)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
