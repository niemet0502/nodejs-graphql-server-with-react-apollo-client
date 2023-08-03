import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Pet } from './entities/pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), UsersModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
