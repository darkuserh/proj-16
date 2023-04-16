import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initProject';

  inputText:string='';
  destroy:boolean=false;
  OnSubmit(inputEl:HTMLInputElement){
this.inputText=inputEl.value;
  }
  DestroyComponent(){
    this.destroy=false;
  }
}
