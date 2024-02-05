import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentSchema } from './schema/comments.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
})
export class CommentsModule {}
