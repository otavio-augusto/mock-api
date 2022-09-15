import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) { }

  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientRepository.save({ ...createClientDto })
  }

  async findAll() {
    const result = await this.clientRepository.find();
    return result
  }

  findOne(@Param('id') id: string) {
    return this.clientRepository.findOneBy({ id: id });
  }

  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  async remove(@Param('id') id: string) {
    return this.clientRepository.remove(await this.findOne(id));
  }
}
