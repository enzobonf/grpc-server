import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroesService {
  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  findAll() {
    return `This action returns all heroes`;
  }

  findOne(id_hero: number) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return (
      items.find(({ id }) => id === id_hero) || {
        id: -1,
        name: 'Não encontrado',
      }
    );
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
