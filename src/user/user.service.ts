import { Body, Injectable, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userRepository.save({ ...createUserDto })
  }

  async findAll() {
    const result = await this.userRepository.find();
    return result
  }

  findOne(@Param('id') id: string) {
    return this.userRepository.findOneBy({ id: id });
  }

  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(@Param('id') id: string) {
    return this.userRepository.remove(await this.findOne(id));
  }
}
