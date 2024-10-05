import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    @Inject(ConfigService) protected readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.getOrThrow('GITHUB_CLIENT_ID'),
      clientSecret: configService.getOrThrow('GITHUB_CLIENT_SECRET'),
      callbackURL: configService.getOrThrow('GITHUB_REDIRECT'),
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.authService.validateUserGithub(
      profile.emails[0].value,
      profile.username,
    );
    return user || null;
  }
}
