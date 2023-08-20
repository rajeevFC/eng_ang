import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { albmModel } from '../schema/albumModel';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
apiUrl='https://jsonplaceholder.typicode.com/albums';
  constructor( private http:HttpClient) { }


  getAlbumCollection():Observable<albmModel[]>{
    return this.http.get<albmModel[]>(this.apiUrl,{ headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})})
  }
}
