import { Component,Input,OnChanges,OnInit, SimpleChange, SimpleChanges,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
@Input() value:string='fruts';
constructor(){
  console.log('Constructor called!')
  // console.log(this.value)
}
ngOnChanges(change:SimpleChanges){
console.log('ngOnChanges called!')
console.log(change)
}
ngOnInit(){
console.log('ngOnInit called!')

}
ngDoCheck(){
  console.log('ngDoCheck called!')
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called!')
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!')
}
ngAfterViewInit(){
  console.log('ngAfterViewInit called!')
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!')
}
ngOnDestroy(){
  console.log('ngOnDestroy called!')
}
}
