import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantsModule } from './participants/participants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Participant } from './participants/entities/participant.entity';
import { DatabaseModule } from './database/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Participant]),
    ParticipantsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
