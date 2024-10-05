import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    const isPasswordMatched = await bcrypt.compare(pass, user.password);
    if (!isPasswordMatched) {
      throw new HttpException('Invalid credentials', 401);
    }
    const { password, ...payload } = user;

    return this.generateToken(payload);
  }

  async generateToken(payload: any) {
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUserGoogle(email: string, displayName: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) return user;
    return this.usersService.createOAuth(email, displayName);
  }

  async validateUserGithub(email: string, username: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) return user;
    return this.usersService.createOAuth(email, username);
  }
}
