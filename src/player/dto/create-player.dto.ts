import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsNumber()
  score: number;
}
