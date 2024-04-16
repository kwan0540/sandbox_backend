import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdCat = new this.playerModel(createPlayerDto);
    return createdCat.save();
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }
}
