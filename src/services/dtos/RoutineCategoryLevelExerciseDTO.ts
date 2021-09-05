export class RoutineCategoryLevelExerciseDTO{
    public id: number;
    public idRoutineCategoryLevel: number;
    public idEquipment: number;
    public idExcercise: number;
    public idMark: number;
    public description: string;
    public repetitions: number;
    public time: number;
    public photo: string;
    public model3D: string;
    public marker: string;
    public exercise: string;
    
    public constructor(data?:any){
        if(data){
            this.id = data.id;
            this.idRoutineCategoryLevel = data.idRoutineCategoryLevel;
            this.idEquipment = data.idEquipment;
            this.idExcercise = data.idExcercise;
            this.idMark = data.idMark;
            this.description = data.iescription;
            this.repetitions = data.repetitions;
            this.time = data.time;
            this.photo = data.photo;
            this.model3D = data.model3D;
            this.marker = data.marker;
            this.exercise = data.exercise;
        }
    }
}