import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api') // Cambia a 'api' para crear el endpoint
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('endpoint') // Agrega el nuevo endpoint
  getData() {
    return { message: '¡Hola desde el backend!' }; // Respuesta de ejemplo
  }

  @Get() // Mantén este método si deseas que la ruta raíz siga funcionando
  getHello(): string {
    return this.appService.getHello();
  }
}
