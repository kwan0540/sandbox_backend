import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get()
  async findAll() {
    return await this.playerService.findAll();
  }

  @Post()
  async createUser(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playerService.create(createPlayerDto);
    return {
      status: 'sucess',
    };
  }
}
