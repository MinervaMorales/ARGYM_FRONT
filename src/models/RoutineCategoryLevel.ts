export class RoutineCategoryLevel{
    
    public Id: number;
    public Name: string;
    public Description: string;
    public Photo: string;
    public IdRoutineCategory: number;
    
    public constructor(data?:any){
        if(data){
            this.Id = data.Id;
            this.Name = data.Name;
            this.Description = data.Description;
            this.Photo = data.Photo;
            this.IdRoutineCategory = data.IdRoutineCategory;
        }
    }
}