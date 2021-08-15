export class ResponseDTO{
    
    public status: number;
    public description: string;
    public objModel: any;

    public constructor(data?:any){

        if(data){
            this.status = data.status;
            this.description = data.description;
            this.objModel = data.objModel;
        }
    }
}