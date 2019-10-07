import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sport-store';
//   list = [];
// @Output() buySomething = new EventEmitter();
//   buy(list:any){
//     this.send
//   }
//   // btn(): void {
//   //   alert(this.list);
//   // }

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void{
    // this.dataService.getProducts().subscribe((res: any) => {
    //   this.list = res;
    // });
  }

}
