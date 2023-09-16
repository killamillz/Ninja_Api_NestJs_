import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['sword', 'axe', 'spear'], { message: 'use correct weapon' })
  weapon: 'axe' | 'spear' | 'sword';
}
