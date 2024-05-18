import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output () carAdded:EventEmitter<string[]> = new EventEmitter
    cars :string[] = []
    carsName = ""

    addcar(){
      this.cars.push(this.carsName.trim())
      this.carsName = ""
      console.log(this.cars)
      this.carAdded.emit(this.cars)
    }
}
