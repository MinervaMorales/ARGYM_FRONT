export class Photo{
    public FileName: string;
    public FilePath: string;
    public Base64: string;
    
    public constructor(data?:any){
        if(data){
            this.FileName = data.FileName;
            this.FilePath = data.FilePath;
            this.Base64 = data.Base64;
        }
    }
}