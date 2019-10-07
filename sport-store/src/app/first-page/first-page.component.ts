import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  list = [];
  @Output() buySomething = new EventEmitter();
  // buy(list:any){
  //   this.send
  // }
  // btn(): void {
  //   alert(this.list);
  // }
  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.dataService.getProducts().subscribe((res: any) => {
      this.list = res;
    });
  }

}
