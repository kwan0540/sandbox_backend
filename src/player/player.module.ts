import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { Player, PlayerSchema } from './player.schema';
import { PlayerGateway } from './player.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [PlayerController],
  providers: [PlayerService, PlayerGateway],
})
export class PlayerModule {}
