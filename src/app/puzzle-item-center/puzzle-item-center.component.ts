import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-puzzle-item-center',
  templateUrl: './puzzle-item-center.component.html',
  styleUrls: ['./puzzle-item-center.component.less']
})
export class PuzzleItemCenterComponent implements OnInit {

  @Input()
  imag = '';
  @Input()
  boxIndex = null; // 格子位置
  @Input()
  imgIndex = null;   // 图片位置
  @Input()
  width = 500;
  @Input()
  height = 500;
  @Input()
  size = 3;
  @Input()
  active = false; //初始不显示
  @Output()
  selectedIndex = new EventEmitter<number>();

  data: {};
  centerStyle = {};
  listStyle = {};
  selected = false;

  constructor() {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.centerStyle = {
      width: this.width / this.size + 'px',
      height: this.width / this.size + 'px',
      left: this.width / this.size * (this.boxIndex % this.size) + 'px',
      top: this.height / this.size * (Math.floor(this.boxIndex / this.size)) + 'px',
      backgroundImage: `url(${this.imag}) `,
      backgroundPositionX: `${-this.width / this.size * (this.boxIndex % this.size)}px`,
      backgroundPositionY: `${-this.height / this.size * (Math.floor(this.boxIndex / this.size))}px`,
      backgroundSize: `${this.width}px ${this.height}px`,
      zIndex: '1',
      position: 'absolute'
    };
  }


  mouseEnter(e: MouseEvent): void {

        //  @ts-ignore
      console.log(e.target.dataset.boxindex);
      //  @ts-ignore
      this.selectedIndex.emit(Number(e.target.dataset.boxindex))

  }
}
