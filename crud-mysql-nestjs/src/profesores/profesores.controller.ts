import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto } from './create.profesor.dto';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Get()
  findAll(): Promise<Profesor[]> {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Profesor> {
    return this.profesoresService.findOne(+id);
  }

  @Post()
  create(@Body() profesor: CreateProfesorDto) {
    return this.profesoresService.create(profesor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateProfesor: Profesor): Promise<Profesor> {
    return this.profesoresService.update(id, updateProfesor);
  }


  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.profesoresService.remove(+id);
  }
}
