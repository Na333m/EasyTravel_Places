import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Place } from '../model/places';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private url=`${base_url}/places`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Place[]>(this.url);
  }
}
