import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { localAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(localAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: { id: string, email: string, authType: string }; }) {
    return this.authService.generateAuth(req.user)
  }
}
