import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { randomArray } from '../../core/util/index';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PuzzleItemCenterComponent } from '../puzzle-item-center/puzzle-item-center.component';
@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    
  ]
})
export class PuzzleComponent implements OnInit {

  @Input()
  image = '';
  @Input()
  size = 3;

  imageUrl = 'assets/img/3.jpg';
  width = 600;
  height = 500;

  listStyle = {};
  times;
  lists = [];
  items;
  selected = 0;

  @ViewChildren('puzzle') puzzles: QueryList<PuzzleItemCenterComponent>
  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    // this.times = new Array(this.size);
    this.size = 6;
    this.items = new Array(6 * 6)
    this.times = randomArray(this.size); //打乱顺序
    this.init();

  }
  // 初始化
  init(): void {
    let temp = this.times.map((val) => [val, (Math.random() - 0.5) > 0]);
    for (const item of temp) {
      if (item[1] === false) {
        this.lists.push(item[0]);
        this.items[item[0]] = false;
      } else {
        this.items[item[0]] = true;
      }
    }
    console.log(this.items);

    console.log(this.lists);
  }

  /**
   *  拖拽的item的index 与选中的index相同 则去掉
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event);
    console.log('list', this.lists[event.previousIndex]);
    console.log('selected', this.selected);
    // this.times.splice(this.lists[event.previousIndex]-1,1);
    if (this.lists[event.previousIndex] == this.selected) {
      this.lists.splice(event.previousIndex, 1);
      // this.items[this.selected] = true;
      this.puzzles.find((item) => item.boxIndex == this.selected).active = true
      console.log(this.items);
    }




  }
  handleSelected(index: number) {
    this.selected = index;
  }

}
