import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseSchema } from './entities/course.entity';
@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}
  async create(createCourseDto: CreateCourseDto) {
    const createCourse = await this.courseModel.create({...createCourseDto})
    return createCourse
  }

  findAll() {
    return this.courseModel.find()
  }

  findOne(id: string) {
    return this.courseModel.findById({_id:id})
  }

  update(_id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.updateOne({_id},{...updateCourseDto})
  }

  remove(id: string) {
    return this.courseModel.findByIdAndDelete({_id:id})
  }
}
