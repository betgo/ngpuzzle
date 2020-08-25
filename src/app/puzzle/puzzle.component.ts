import { Component, OnInit, Input } from '@angular/core';
import {randomArray} from '../../core/util/index';
@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {

  @Input()
  image = '';
  @Input()
  size = 3 ;

  times;
  constructor() {
   }

  ngOnInit(): void {
    // this.times = new Array(this.size);
    this.size = 6 
    this.times = randomArray(this.size);
  }

}
