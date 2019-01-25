import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  error: String;
  newPet: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""}
  }
  goHome() {
    this._router.navigate(['/']);
  }
  onSubmit(){
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      if (data['errors']){
        this.error = data['errors'];
      }
      else{
        this.goHome();
      }
    })
  }
}