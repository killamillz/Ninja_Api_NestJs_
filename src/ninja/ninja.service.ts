import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './Dto/create-ninja.dto';
import { UpdateNinjaDto } from './Dto/update-ninja.dto';

@Injectable()
export class NinjaService {
  private ninjas = [
    { name: 'ninja001', id: 1, weapon: 'sword' },
    { name: 'ninja002', id: 2, weapon: 'axe' },
    { name: 'ninja003', id: 3, weapon: 'spear' },
  ];

  getNinjas(weapon?: 'sword' | 'axe' | 'spear') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return toBeRemoved;
  }
}
