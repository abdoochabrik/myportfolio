import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  public currentYear:number = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

  contact() {
    window.location.href = 'mailto:abdoo.chbrik@gmail.com';
  }

  openLink(link:string){
    switch(link){
      case 'github':
        console.log('github')
        window.open('https://github.com/abdoochabrik','_blank');
        break;
      case 'twitter':
        console.log('twitter')
        window.open('https://twitter.com/chabrik99', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/chabrik-abdellatif/', '_blank');
        break
    }
  }



}
