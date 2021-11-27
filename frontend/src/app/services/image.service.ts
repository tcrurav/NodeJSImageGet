import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = "http://localhost:8080/image";

  constructor(private httpClient: HttpClient) { }

  getImage(){
    return this.httpClient.get(this.url, {responseType: 'blob'});
  }
}
