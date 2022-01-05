import { Component, ElementRef,HostListener,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  constructor(private el:ElementRef, private render:Renderer2){

  }

  @HostListener('click') onclick(){
    alert("clicked")
  }

  @HostListener('mouseover') onmouseover(){
    this.changecolor('red')
  }

  @HostListener('mouseleave') onmouseleave(){
    this.changecolor("black")
  }

  @HostListener('arrowdown') onarraydown(){
    this.changecolor("green")
  }

  changecolor(color:string){
    this.render.setStyle(this.el.nativeElement,'color',color);
  }
  
}



