import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/auth/v1');

  app.use(
    session({
      secret: 'TresTresSecret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360000 },
    }),
  );
  app.enableCors()

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8080);
}
bootstrap();
