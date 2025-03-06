import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [AdminModule, UsersModule, TeachersModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
