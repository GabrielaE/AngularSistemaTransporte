import { Component } from '@angular/core';
import { Transporte} from './models/transporte';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  transporteArray: Array<Transporte> = []
  seleccionTransporte: Transporte = new Transporte();
  litros: number = 0;
  galones: number = 0;
  idText: number;
  BtnCrear(){
    if(this.seleccionTransporte.id === 0){
      this.seleccionTransporte.id = this.transporteArray.length +1;
      this.transporteArray = [...this.transporteArray, this.seleccionTransporte]; 
      this.litros += Number(this.seleccionTransporte.CapacidadTanque);
      this.galones = (this.litros * 3.785);
    };
    this.seleccionTransporte = new Transporte();
  }
  BtnEditar(transporte: Transporte){
    if(this.seleccionTransporte.id === 0){
      this.seleccionTransporte.id = this.transporteArray.length +1;
    }
    this.seleccionTransporte = new Transporte();
  }
  seleccionDrop (event:any){
    this.seleccionTransporte.Tipo = event.target.value;
  }
  Consultar(){
    this.seleccionTransporte = this.transporteArray.filter(item => item.id === Number(this.idText))[0];
  }
  
}

