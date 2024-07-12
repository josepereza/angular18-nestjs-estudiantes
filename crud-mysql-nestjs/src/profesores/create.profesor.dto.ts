import { IsOptional, IsString, isEmail } from 'class-validator';

export class CreateProfesorDto {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;
  @IsString()
  email: string;
}
