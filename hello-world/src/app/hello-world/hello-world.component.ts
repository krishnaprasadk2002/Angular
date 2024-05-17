import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  //  Title = "kpk works"
  //  firstName = "Sachin"
  //  lastName = "Tendulkar"
  //  team = "Mumbai Indians"
  //  name = "krishnaprasad"
  //  getName(){
  //   return this.name
  //  }

  //  checking = "this is working"
  //  isDisabled = false

  //  clickCounted = 0
  //  count = 0
  //  getCount(){
  //   this.clickCounted++
  //  }

  // value = ""
  // value1 = ""
  // handleInput(event:any){
  //   this.value = (event.target as HTMLInputElement).value
  //   // this.value = event.target.value
  // }


  // Title = "list of movies"

  // movies= [
  //   "zootpia",
  //   "Batman vs superman",
  //   "herry ptter",
  //   "x - men",
  //   "final destination"
  // ]

//  moviesWithDirectors = [
//     { title: "Zootopia", director: "Byron Howard, Rich Moore" },
//     { title: "Batman vs Superman", director: "Zack Snyder" },
//     { title: "Harry Potter", director: "Chris Columbus" },
//     { title: "X-Men", director: "Bryan Singer" },
//     { title: "Final Destination", director: "James Wong" }
//   ];

// num = 0;

// isEmbeded = true
// isbig = true

// status:string = "error"


//pipe

// toDate = new Date()

// message = "Welcome To Angular"

price = 125
}
