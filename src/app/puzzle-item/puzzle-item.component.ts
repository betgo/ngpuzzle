import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-puzzle-item',
  templateUrl: './puzzle-item.component.html',
  styleUrls: ['./puzzle-item.component.less']
})
export class PuzzleItemComponent implements OnInit, AfterViewInit {

  @Input()
  imag = '';
  @Input()
  id = null;

  @ViewChild('item') puzzle: ElementRef;
  constructor() {

  }

  ngOnInit(): void {
    // this.puzzle.style.backgroundImage = this.imag
    // console.log(this.imag);
    // console.log(this.puzzle);

  }
  ngAfterViewInit() {
    // console.log(this.puzzle);
    // console.log(this.imag);
    this.puzzle.nativeElement.style.backgroundPositionX = -133 * (this.id % 3) + 'px';
    this.puzzle.nativeElement.style.backgroundPositionY = -106 * (Math.floor(this.id / 3)) + 'px';
    this.puzzle.nativeElement.style.backgroundImage = 'url(' + this.imag + ')';
  }

  onClick(event: MouseEvent) {
    console.log(typeof event);
    event.target.style.display = event.target.style.display == 'none' ? '' : 'none'
  }
}
