import { Module } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from './entities/theme.entity';

@Module({
  controllers: [ThemeController],
  providers: [ThemeService],
  imports: [TypeOrmModule.forFeature([Theme])]
})
export class ThemeModule { }
