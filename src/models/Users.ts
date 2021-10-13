export class Users{

    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public photo: string;
    public photoBase64: string;

    public constructor(data?:any){
        if(data){
            this.id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.password = data.password;
            this.photo = data.photo;
            this.photoBase64 = data.photoBase64;
        }
    }
}