export class Equipment{

    public Id: number;
    public Name:string;
    public Description: string;
    public Photo: string;

    public constructor(data?:any){
        if(data){
            this.Id = data.Id;
            this.Name = data.Name;
            this.Description = data.Description;
            this.Photo = data.Photo;
        }
    }
}