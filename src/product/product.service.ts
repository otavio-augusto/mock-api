import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private userRepository: Repository<Product>,
  ) { }

  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.userRepository.save({ ...createProductDto })
  }

  async findAll() {
    const result = await this.userRepository.find();
    return result
  }

  findOne(@Param('id') id: string) {
    return this.userRepository.findOneBy({ id: id });
  }

  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.userRepository.update(id, updateProductDto);
  }

  async remove(@Param('id') id: string) {
    return this.userRepository.remove(await this.findOne(id));
  }
}
