import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller()
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @GrpcMethod('HeroesService', 'FindOne')
  findOne(@Payload() { id_hero }: { id_hero: number }) {
    console.log('passou', id_hero);
    return this.heroesService.findOne(+id_hero);
  }
}
