import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private usersService: UsersService,
  ) {}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    const pet = this.petRepository.create(createPetInput);
    return this.petRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail({ where: { id } });
  }

  async getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
