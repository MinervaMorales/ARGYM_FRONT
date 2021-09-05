import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private http: HttpClient) { }

  public async PredictImage( image: any ): Promise<any>
  {
    return await this.http.post<any>( `${environment.apiNeural}/image`, image).toPromise();
  }
}
