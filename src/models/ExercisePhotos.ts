export class ExercisePhotos{

    public id:number;
    public idExercise:string;
    public photo:string;

    public constructor(data?:any){
        if(data){
            this.id = data.id;
            this.idExercise = data.idExercise;
            this.photo = data.photo;
        }
    }
}