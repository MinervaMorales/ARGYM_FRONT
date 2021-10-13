import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from 'src/models/Users';
import { ResponseDTO } from 'src/models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  public async Login( user: Users ): Promise<ResponseDTO>
  {
    return await this.http.post<ResponseDTO>( `${environment.apiURL}/Token`, user, {} ).toPromise();
  }

  public async Insert( user: Users ): Promise<ResponseDTO>
  {
    return await this.http.post<ResponseDTO>( `${environment.apiURL}/Users`, user ).toPromise();
  }

  
  public async Update( user: Users ): Promise<ResponseDTO>
  {
    return await this.http.put<ResponseDTO>( `${environment.apiURL}/Users`, user ).toPromise();
  }

}
