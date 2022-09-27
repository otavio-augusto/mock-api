import { Controller, Get, Body, Patch, Param, Delete, Put, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Put()
  @ApiBody({ type: [CreateClientDto] })
  createClient(@Body() createClientDto: CreateClientDto): Promise<Client> {
    try {
      return this.clientService.createClient({ ...createClientDto })
    } catch (err) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'Usuário já existe!'
      })
    }
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const cliente = this.clientService.findOne(id);
    if (cliente)
      return cliente
    throw new HttpException({
      status: HttpStatus.NOT_FOUND,
      error: 'Usuário não encontrado!'
    }, HttpStatus.NOT_FOUND)
  }

  @Patch(':id')
  @ApiBody({ type: [UpdateClientDto] })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
