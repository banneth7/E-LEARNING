import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
    UserModule,
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
