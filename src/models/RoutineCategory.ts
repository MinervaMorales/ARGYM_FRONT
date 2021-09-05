export class RoutineCategory{
    public id: number;
    public name: string;
    public description: string;
    public photo: string;

    public constructor(data?:any){
        if(data){
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.photo = data.photo;
        }
    }
}