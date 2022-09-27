import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { typeOrmConfig } from './typeorm.config'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    ThemeModule,
    ClientModule,
    ProductModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
