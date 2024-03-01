import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://prem:vespheroo7@localhost:27017/', {}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
