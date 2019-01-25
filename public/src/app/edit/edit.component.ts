import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  error: String;
  id : String;
  pet: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.id = params['id'];
    });
    this.pet = {name:"", type:"", description:"", skill1:"", skill2:"", skill3:""};
    this.getPetFromService();
  }
  getPetFromService(){
    let observable = this._httpService.getPet(this.id);
    observable.subscribe(data => {
      this.pet = {name: data['name'],
                type: data['type'],
                description: data['description'],
                skill1: data['skills'][0],
                skill2: data['skills'][1],
                skill3: data['skills'][2],
      };
    });
  }
  goBack(){
    this._router.navigate(['/'+this.id]);
  }
  editPet(){
    let observable = this._httpService.editPet(this.id, this.pet);
    observable.subscribe(data => {
      console.log("oh oh", data);
      if (data['errors']){
        this.error = data['errors'];
      }
      else{
        this.goBack();
      }
    })
  }
}