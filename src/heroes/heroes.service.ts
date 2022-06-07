import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroesService {
  heroes = [
    {
      id: 0,
      name: 'Jo Carrillo',
    },
    {
      id: 1,
      name: 'Daphne Cross',
    },
    {
      id: 2,
      name: 'Margie Oneill',
    },
    {
      id: 3,
      name: 'Natalia Robbins',
    },
    {
      id: 4,
      name: 'Mccormick Knox',
    },
    {
      id: 5,
      name: 'Jodi Maxwell',
    },
    {
      id: 6,
      name: 'Key Leonard',
    },
    {
      id: 7,
      name: 'Mary Compton',
    },
    {
      id: 8,
      name: 'Cunningham Brennan',
    },
    {
      id: 9,
      name: 'Carissa Hammond',
    },
    {
      id: 10,
      name: 'Maryanne Cobb',
    },
    {
      id: 11,
      name: 'Alexandra Hanson',
    },
    {
      id: 12,
      name: 'Navarro Salazar',
    },
    {
      id: 13,
      name: 'Maxine Townsend',
    },
    {
      id: 14,
      name: 'Jordan Stark',
    },
    {
      id: 15,
      name: 'Sellers Perry',
    },
    {
      id: 16,
      name: 'Ayala Reed',
    },
    {
      id: 17,
      name: 'Doyle Rocha',
    },
    {
      id: 18,
      name: 'Downs Calhoun',
    },
    {
      id: 19,
      name: 'Gertrude Stanley',
    },
    {
      id: 20,
      name: 'Chrystal Cole',
    },
    {
      id: 21,
      name: 'Workman Reid',
    },
    {
      id: 22,
      name: 'Gentry Mayer',
    },
    {
      id: 23,
      name: 'Fletcher Gutierrez',
    },
    {
      id: 24,
      name: 'Bowman Day',
    },
    {
      id: 25,
      name: 'Baker Mcmahon',
    },
    {
      id: 26,
      name: 'William Sims',
    },
    {
      id: 27,
      name: 'Blevins Tran',
    },
    {
      id: 28,
      name: 'Andrea Phelps',
    },
    {
      id: 29,
      name: 'Phoebe Sherman',
    },
    {
      id: 30,
      name: 'Ramos Hutchinson',
    },
    {
      id: 31,
      name: 'Susan Gaines',
    },
    {
      id: 32,
      name: 'Avery Gill',
    },
    {
      id: 33,
      name: 'Reyes Stanton',
    },
    {
      id: 34,
      name: 'Patrice Lindsay',
    },
    {
      id: 35,
      name: 'Carlson Pittman',
    },
    {
      id: 36,
      name: 'Kelly Harper',
    },
    {
      id: 37,
      name: 'Holt Murray',
    },
    {
      id: 38,
      name: 'Hughes Powers',
    },
    {
      id: 39,
      name: 'Imelda Kennedy',
    },
  ];

  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  findAll() {
    return { heroes: this.heroes };
  }

  findOne(id_hero: number) {
    return (
      this.heroes.find(({ id }) => id === id_hero) || {
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
