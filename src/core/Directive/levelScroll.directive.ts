import { Directive, EmbeddedViewRef, ElementRef, HostListener, AfterViewInit, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, takeUntil, concatAll, withLatestFrom, startWith, filter, reduce } from 'rxjs/operators';

@Directive({ selector: '[applevelScroll]' })
export class ScrollDirective implements AfterViewInit {
    el: HTMLElement = this.elementRef.nativeElement;
    constructor(private elementRef: ElementRef) {

    }

    // @HostListener('mousedown', ['$event'])
    // onmouseDown(event): void {
    //     console.log(event);
    // }
    // @HostListener('mouseup', ['$event'])
    // onmouseUP(event): void {
    //     console.log(event);
    // }
    ngAfterViewInit() {
        let memo = {
            x: 0,
            latest: 0
        }
        const mouseDown = fromEvent(this.el, 'mousedown');
        const mouseUp = fromEvent(document, 'mouseup');
        const mouseMove = fromEvent(document, 'mousemove');
        const mouseLeave = fromEvent(this.el, 'mouseleave');
        mouseDown.subscribe((r) => {
            console.log(memo);
            // console.log(r);
            // @ts-ignore
            memo.x = r.clientX;
        });
        const source = mouseDown.pipe(
            map(event => mouseMove
                .pipe(
                    takeUntil(mouseUp),
                )
            ),
            concatAll()
        )
        source.pipe(
            map((event) => {
                return {
                    // @ts-ignore
                    x: event.pageX
                }
            })
        )
            .subscribe(
                (e) => {
                    // console.log(e.x)
                    // console.log(memo.x);
                    // console.log(this.el.style);

                    // console.log(Number(e.x) - Number(memo.x))
                    let n = e.x - memo.x + memo.latest
                    this.el.style.transform = `translate(${n}px, 0px)`;
                    // this.el.style.backgroundColor = 'red'
                }
            )
    }
}