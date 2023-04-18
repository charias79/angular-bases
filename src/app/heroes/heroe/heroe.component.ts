import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  public name:string='iroman';
  public age:number=45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name} - ${this.age}`; //` ` backtick key
  }

  changeHeroe():void{
    this.name='Spiderman'
  }

  changeAge():void{
    this.age=32;
  }

  resetForm():void{
    this.name='iroman';
    this.age=45;
  }
}