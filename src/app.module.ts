import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
