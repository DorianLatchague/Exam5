import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pets: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
  }
  ngOnInit() {
    this.getAuthorsFromService()
  }
  getAuthorsFromService(): void{
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      this.pets = data;
    });
  }
  deleteAuthor(id: String): void{
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      this.getAuthorsFromService();
    })
  }
}
