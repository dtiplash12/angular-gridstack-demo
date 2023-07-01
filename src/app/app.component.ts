import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any; // JQuery
declare var GridStack: any; // JQuery

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  
 ngOnInit() {
      // var options = {
      //     cell_height: 80,
      //     vertical_margin: 10
      // };
      // $('.grid-stack').gridstack(options);
      // var grid = GridStack.init();
      // var grid = GridStack.init({ disableResize: true, cellHeight: 160, verticalMargin: 10, column: 8, maxRow: 9, minRow: 9 });
  }

   ngAfterViewInit(): void {
     setTimeout(()=>{
var grid = GridStack.init({ disableResize: true, cellHeight: 160, verticalMargin: 10, column: 8, maxRow: 9, minRow: 9 });
     }, 3000)
  }
}
