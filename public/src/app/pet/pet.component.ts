import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  isLiked: boolean = false;
  pet: any;
  id: any
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.pet = {name:"",
      type:"",
      description:"",
      skills:["","",""]
    }
      this.getPetFromService()
    });
  }
  getPetFromService(){
    let observable = this._httpService.getPet(this.id);
    observable.subscribe(data => {
      this.pet = data;
    })
  }
  like() {
    this.isLiked = true;
    let observable = this._httpService.like(this.id);
    observable.subscribe(data => {
      this.getPetFromService();
    })
  }
  onDelete(){
    let observable = this._httpService.deletePet(this.id);
    observable.subscribe(data => {
      this.goHome();
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
}
