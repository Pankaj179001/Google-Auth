import { Module } from '@nestjs/common';
import { AuthController } from './Controller/auth.controller';
import { AuthService } from './Service/Auth.service';
import { GoogleStrategy } from './Strategy/google.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
