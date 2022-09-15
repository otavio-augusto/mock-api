import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeModule } from './theme/theme.module';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { typeOrmConfig } from 'src/typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    ThemeModule,
    ClientModule,
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
