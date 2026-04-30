import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    /*
    SequelizeModule.forRoot({
      autoLoadModels: true,
      database: 'test_db',
      dialect: 'postgres',
      host: 'postgres',
      password: 'postgres',
      port: 5432,
      synchronize: true,
      username: 'postgres',
    }),
     */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
