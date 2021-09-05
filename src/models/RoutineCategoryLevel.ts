export class RoutineCategoryLevel{
    
    public id: number;
    public name: string;
    public description: string;
    public photo: string;
    public idRoutineCategory: number;
    
    public constructor(data?:any){
        if(data){
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.photo = data.photo;
            this.idRoutineCategory = data.idRoutineCategory;
        }
    }
}