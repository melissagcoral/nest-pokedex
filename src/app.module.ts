import { join } from 'path'; //Esto viene de Node y usualmente los paquetes de node van al inicio
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemonDB'
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {
  constructor() {
    // console.log(process.env)
  }
}
