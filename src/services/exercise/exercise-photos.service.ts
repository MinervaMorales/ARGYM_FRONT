import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from 'src/models/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class ExercisePhotosService {

  
  constructor(private http: HttpClient) { }

  public async GetByIdExercise( id: number ): Promise<ResponseDTO>
  {
    return await this.http.get<ResponseDTO>( `${environment.apiURL}/ExercisePhotos/exercise/${id}` ).toPromise();
  }
}
