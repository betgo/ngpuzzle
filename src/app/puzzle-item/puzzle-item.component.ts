import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { CdkDrag, DragRef, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';

export enum mode {
  list = 'list',
  center = 'center'
}

@Component({
  selector: 'app-puzzle-item',
  templateUrl: './puzzle-item.component.html',
  styleUrls: ['./puzzle-item.component.less']
})
export class PuzzleItemComponent implements OnInit, AfterViewInit {

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
  mode: mode = mode.center;
  @Input()
  active = false; //初始不显示
  @Output()
  selectedIndex = new EventEmitter<number>();

  data: {};
  centerStyle = {};
  listStyle = {};
  selected = false;
  @ViewChild('item') puzzle: DragRef;
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
    this.listStyle = {
      width: this.width / this.size + 'px',
      height: this.width / this.size + 'px',
      backgroundImage: `url(${this.imag}) `,
      backgroundPositionX: `${-this.width / this.size * (this.imgIndex % this.size)}px`,
      backgroundPositionY: `${-this.height / this.size * (Math.floor(this.imgIndex / this.size))}px`,
      backgroundSize: `${this.width}px ${this.height}px`,
      zIndex: '1'
    }
  }

  onClick(event: MouseEvent): void {
    // console.log(typeof event);
    // event.target.style.display = event.target.style.display == 'none' ? '' : 'none'
  }
  dragStart(item: CdkDragStart): void {
    item.source.element.nativeElement.style.zIndex = '999';

  }
  dragend(event: CdkDragEnd): void {

    event.source.element.nativeElement.style.zIndex = '0';

  }
  mouseEnter(e: MouseEvent): void {
    if (this.mode === 'center') {
        //  @ts-ignore
      console.log(e.target.dataset.boxindex);
  
      //  @ts-ignore
      this.selectedIndex.emit(Number(e.target.dataset.boxindex))
    }

  }
}
