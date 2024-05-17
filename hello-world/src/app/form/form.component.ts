import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ListComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    cars :string[] = []
    carsName = ""

    addcar(){
      this.cars.push(this.carsName.trim())
      this.carsName = ""
      console.log(this.cars)
    }
}
