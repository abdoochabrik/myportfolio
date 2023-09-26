import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  pdfSrc: string = 'https://drive.google.com/file/d/1TRjffUOoNv2TaI_6xMF3dTGMj9HC3QCX/view?usp=sharing';

  constructor() { }

  ngOnInit(): void {
  }

}
