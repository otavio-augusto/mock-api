import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { Theme } from './entities/theme.entity';

@Injectable()
export class ThemeService {

  constructor(
    @InjectRepository(Theme) private themeRepository: Repository<Theme>,
  ) { }

  createTheme(@Body() createThemeDto: CreateThemeDto) {
    return this.themeRepository.save({ ...createThemeDto })
  }

  async findAll() {
    const result = await this.themeRepository.find();
    return result
  }

  findOne(@Param('id') id: number) {
    return this.themeRepository.findOneBy({ id: id });
  }

  update(@Param('id') id: number, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeRepository.update(id, updateThemeDto);
  }

  async remove(@Param('id') id: number) {
    return this.themeRepository.remove(await this.findOne(id));
  }
}
