import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule,FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
// export class ListComponent {
//    @Input('carnames') car:string[] =[]
// }
export class ListComponent {
 car:string[] =[]
 carsDataUpdated(carData:string[]){
  this.car = carData
 }
}
