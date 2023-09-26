import { Component, Input, OnInit } from '@angular/core';
import projectItem from 'src/app/interfaces/projectItemInterface';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() projectDetails:projectItem = {
    name:'project1',
    context:'context',
    description:'description',
    link:'#',
    image:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
