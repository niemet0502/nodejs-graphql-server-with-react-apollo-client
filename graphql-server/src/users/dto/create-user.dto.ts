import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsInt } from 'class-validator';

@InputType()
export class CreateUserDTO {
  @IsAlpha()
  @Field()
  firstName: string;

  @IsAlpha()
  @Field()
  lastName: string;

  @IsInt()
  @Field()
  age: number;
}
