import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
@Schema()
export class Course {
    _id: string;
    
    @Prop()
    name: string;
   
    @Prop()
    description: string;
    @Prop()
    semester: string
    @Prop()
    year:string

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    @Prop()
    teacherId:string

    @Prop([String])
    students: string[]

    // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }] })
    // owner: Users[];
}

export const CourseSchema  = SchemaFactory.createForClass(Course);