export class Users{

    public Id: number;
    public Name: string;
    public Email: string;
    public Password: string;
    public Photo: string;

    public constructor(data?:any){
        if(data){
            this.Id = data.Id;
            this.Name = data.Name;
            this.Email = data.Email;
            this.Password = data.Password;
            this.Photo = data.Photo;
        }
    }
}