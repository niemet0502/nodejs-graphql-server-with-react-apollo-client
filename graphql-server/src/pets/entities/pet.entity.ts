import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/users.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Int)
  userId: number;

  @ManyToOne(() => User, (user) => user.pets)
  @Field((type) => User, { nullable: true })
  user?: User;
}
