import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getPets(){
    return this._http.get('/pets');
  }
  getPet(id: String){
    return this._http.get('/pets/'+id)
  }
  addPet(newtask: any){
    return this._http.post('/pets/new', newtask)
  }
  like(pet_id: String){
    return this._http.get('/pets/like/'+pet_id);
  }
  deletePet(id: String){
    return this._http.delete('/pets/delete/'+id);
  }
  editPet(id: String, edit: any){
    return this._http.put('/pets/edit/'+id, edit);
  }
}
