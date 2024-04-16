import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { PlayerService } from './player.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PlayerGateway {
  constructor(private readonly playerService: PlayerService) {}
  @SubscribeMessage('player')
  async handleEvent(@ConnectedSocket() client: Socket) {
    const user = await this.playerService.findAll();
    client.broadcast.emit('player', {
      user,
    });
    // return user;
  }
}
