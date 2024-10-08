import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity'; // Importamos la entidad User

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Especificamos el tipo de base de datos (PostgreSQL)
      host: 'localhost', // Cambia a la URL de tu base de datos si estás usando un servicio en la nube
      port: 5432, // Puerto por defecto de PostgreSQL
      username: 'postgres', // Coloca tu usuario de PostgreSQL
      password: 'fio', // Coloca la contraseña de tu usuario de PostgreSQL
      database: 'innotrack_db', // Coloca el nombre de tu base de datos
      entities: [User], // Registramos la entidad User
      synchronize: true, // Para desarrollo, sincroniza la base de datos automáticamente (no usar en producción)
    }),
    TypeOrmModule.forFeature([User]), // Agregamos las entidades que usaremos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
