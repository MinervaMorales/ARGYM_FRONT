export class Marker{
    public Id: number;
    public Photo: string;
 
    public constructor(data?:any){
        if(data){
            this.Id = data.Id;
            this.Photo = data.Photo;
        }
    }
}