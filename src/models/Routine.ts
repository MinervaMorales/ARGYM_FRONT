export class Routine{
    public Id: number;
    public IdRoutineCategoryLevel: number;
    public IdEquipment: number;
    public IdExercise: number;
    public IdMarker: number;
    public Description: string;
    public Repetitions: number;
    public Time: number;
    public Photo: string;
    
    public constructor(data?:any){
        if(data){
            this.Id = data.Id;
            this.IdRoutineCategoryLevel = data.IdRoutineCategoryLevel;
            this.IdEquipment = data.IdEquipment;
            this.IdExercise = data.IdExercise;
            this.IdMarker = data.IdMaker;
            this.Description = data.Description;
            this.Repetitions = data.Repetitions;
            this.Time = data.Time;
            this.Photo = data.Photo;
        }
    }
}