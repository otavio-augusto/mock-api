import { Controller, Request, Post, UseGuards, Get, Res } from '@nestjs/common';
import { Response } from 'express';
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
  async login(@Request() req: { user: { id: string, email: string, authType: string }; }, @Res({ passthrough: true }) response: Response) {
    const token = await this.authService.generateAuth(req.user)
    response.cookie('auth-cookie', token.acess_token, { httpOnly: true, secure: true })
    return {
      auth: token.acess_token
    }
  }
}
