import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  NotFoundException,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './Dto/create-ninja.dto';
import { UpdateNinjaDto } from './Dto/update-ninja.dto';
import { NinjaService } from './ninja.service';

@Controller('ninja')
export class NinjaController {
  constructor(private readonly ninjaService: NinjaService) {}
  // GET/ninjas?type=fast--> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'sword' | 'axe' | 'spear') {
    return this.ninjaService.getNinjas(weapon);
  }

  // GET/ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjaService.getNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  //POST/ninjas
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  //PUT/ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjaService.updateNinja(id, updateNinjaDto);
  }
  //DELETE/ninjas/:id --> { ... }
  @Delete(':id')
  removeNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjaService.removeNinja(id);
  }
}
