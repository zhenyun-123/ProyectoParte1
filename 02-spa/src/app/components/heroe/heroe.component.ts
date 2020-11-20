import { Component } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
  })
export class HeroeComponent  {

 heroe:any={};



 constructor( private ActivatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
  ) { 

  this.ActivatedRoute.params.subscribe( params =>{
       console.log(params['id']);
       this.heroe=this._heroesService.getHeroe(params['id']);

  })
}
}