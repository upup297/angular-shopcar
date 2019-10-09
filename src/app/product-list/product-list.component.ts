import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  template:`
    <input #newHero
      (keyup.enter="addHero(newHero.value)"

      (blur)="addHero(newHero.value); newHero.value=''">
    <button (click)="addHero(newHero.value)">Add</button>
    <ul>
      <li *ngFor="let hero of heroes">{{hero}}</li>
    </ul>
  `,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  heroes = ['Windstorm','Bombasto','magneta','Tornado'];
  addHero(newHero:string){
    if(newHero){
      this.heroes.push(newHero)
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/