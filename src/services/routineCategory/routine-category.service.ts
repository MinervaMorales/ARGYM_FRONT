import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from 'src/models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class RoutineCategoryService {

  constructor(private http: HttpClient) { }

  
  public async Get(): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}/RoutineCategory`).toPromise();
  }

  public async GetWithLevels(): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}/RoutineCategory/levels`).toPromise();
  }

  public async GetById( id: number ): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}​/RoutineCategory/${id}` ).toPromise();
  }

  public async GetByMachine( id: number ): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}​/RoutineCategory​/byMachine​/${id}` ).toPromise();
  }

  
  public async GetByMachineWithString( id: string ): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}​/RoutineCategory​/byMachineWithString?id=${id}`).toPromise();
  }

  public async GetByMachineAndRoutineCategory( idEquipment: number, idRoutineCategory ): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}​/RoutineCategory/byMachineAndRoutineCategory/${idEquipment},${idRoutineCategory}`).toPromise();
  }

  public async GetByRoutineCategoryLevel( idRoutineCategoryLevel: number ): Promise<ResponseDTO>
  {
    console.log(idRoutineCategoryLevel);
    return await this.http.get<ResponseDTO>( `${environment.apiURL}/RoutineCategory/byRoutineCategoryLevel/${idRoutineCategoryLevel}`).toPromise();
  }
}
