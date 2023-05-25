export class CreateCourseDto {
   
    name: string;
    
    description: string;
    
    semester: string
   
    year:string

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    
    teacherId:string
}
