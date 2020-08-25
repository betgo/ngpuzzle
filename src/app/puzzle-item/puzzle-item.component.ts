import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CdkDrag, DragRef, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';


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

  itemStyle = {};
  @ViewChild('item') puzzle: DragRef;
  constructor() {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.itemStyle = {
      width: this.width / this.size + 'px',
      height: this.width / this.size + 'px',
      left: this.width / this.size * (this.boxIndex % this.size) + 'px',
      top: this.height / this.size * (Math.floor(this.boxIndex / this.size)) + 'px',
      backgroundImage: `url(${this.imag}) `,
      backgroundPositionX: `${-this.width / this.size * (this.imgIndex % this.size)}px`,
      backgroundPositionY: `${-this.height / this.size * (Math.floor(this.imgIndex / this.size))}px`,
      backgroundSize: `${this.width}px ${this.height}px`
    }
    // this.puzzle.nativeElement.style.backgroundPositionX = -133 * (this.id % 3) + 'px';
    // this.puzzle.nativeElement.style.backgroundPositionY = -106 * (Math.floor(this.id / 3)) + 'px';
    // this.puzzle.nativeElement.style.backgroundImage = 'url(' + this.imag + ')';
  }

  onClick(event: MouseEvent): void {
    // console.log(typeof event);
    // event.target.style.display = event.target.style.display == 'none' ? '' : 'none'
  }
  dragStart(item: CdkDragStart) {
    // console.log(1);
    console.log(item);
    console.log(item.source.element.nativeElement.style.zIndex);
    item.source.element.nativeElement.style.zIndex = '999'

    // item.reset()
  }
  dragend(event: CdkDragEnd) {
    console.log(2);
    console.log(event);
    event.source._dragRef.reset()
    event.source.element.nativeElement.style.zIndex = '0'
  }
}
