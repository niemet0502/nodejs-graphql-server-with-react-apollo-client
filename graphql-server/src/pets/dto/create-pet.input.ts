import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field((type) => Int)
  userId: number;
}
