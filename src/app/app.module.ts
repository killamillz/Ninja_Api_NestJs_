import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaController } from '../ninja/ninja.controller';
import { NinjaService } from '../ninja/ninja.service';
import { NinjaModule } from '../ninja/ninja.module';

@Module({
  imports: [NinjaModule],
  controllers: [AppController, NinjaController],
  providers: [AppService, NinjaService],
})
export class AppModule {}
