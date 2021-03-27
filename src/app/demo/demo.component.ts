import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  items = ['Luis','Andres','Camilo'];
  
  power = 10;
  
  addItem(){
  
    this.items.push('Nuevo Nombre');
  
  }
  
  eliminarItem(index : number){
  
  this.items.splice(index,1);
  
  }
  

}
