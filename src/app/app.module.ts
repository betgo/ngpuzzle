import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzleItemComponent } from './puzzle-item/puzzle-item.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollDirective} from '../core/Directive';
import { PuzzleItemCenterComponent } from './puzzle-item-center/puzzle-item-center.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleItemComponent,
    PuzzleComponent,
    ScrollDirective,
    PuzzleItemCenterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
