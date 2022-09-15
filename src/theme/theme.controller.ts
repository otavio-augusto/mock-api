import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) { }

  @Put()
  createTheme(@Body() createThemeDto: CreateThemeDto) {
    return this.themeService.createTheme({ ...createThemeDto })
  }

  @Get()
  findAll() {
    return this.themeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.themeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(id, updateThemeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.themeService.remove(id);
  }
}
