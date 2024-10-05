import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { GoogleAuthGuard } from './guards/google-Oauth.guard';
import { GithubAuthGuard } from './guards/github-Oauth.guard';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  async SignIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.validateUser(email, password);
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  loginGoogle() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async redirectGoogle(@Req() req, @Res() res: Response) {
    const { password, ...payload } = await req.user;
    res.redirect(
      `http://localhost:5173/auth/login?token=${(await this.authService.generateToken(payload)).access_token}`,
    );
  }

  @Get('github/login')
  @UseGuards(GithubAuthGuard)
  loginGithub() {
    return { msg: 'Github Authentication' };
  }

  @Get('github/callback')
  @UseGuards(GithubAuthGuard)
 async redirectGithub(@Req() req, @Res() res: Response) {
    const { password, ...payload } = req.user;
    res.redirect(
      `http://localhost:5173/auth/login?token=${(await this.authService.generateToken(payload)).access_token}`,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
