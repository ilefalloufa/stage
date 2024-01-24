import { Injectable } from '@angular/core';
import {    HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private http:HttpClient) { }
onSendService(formData:FormData):Observable<any>{
return this.http.post<any>('http://localhost/stage/angular.php',formData)
}
}
