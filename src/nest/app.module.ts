import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppService, TestService],
})
export class AppModule {}
