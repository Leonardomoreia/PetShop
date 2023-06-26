import { Component } from '@angular/core';
//import{HttpClient, HttpHeaders} from ''

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados: any = {};
  pet = {
    Cachorro: '',
    Nome: '',
    idade: '',
  }
  constructor() {}

gerar(){

}
consultaApi(){
  const header ={
    //headers: new HttpHeaders().set('Content-Type','application/json'),
  };

  return
}

}
