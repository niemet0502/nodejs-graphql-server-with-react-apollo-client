import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pet } from 'src/pets/entities/pet.entity';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  age: number;

  @OneToMany(() => Pet, (pet) => pet.user)
  @Field((type) => [User], { nullable: true })
  pets?: Pet[];
}
