import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import projectItem from 'src/app/interfaces/projectItemInterface';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  providers: [MessageService]
})
export class ProjectItemComponent implements OnInit {

  @Input() projectDetails:projectItem = {
    name:'project1',
    context:'context',
    description:'description',
    link:'#',
    image:''
  }

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  openProject(){
    if(this.projectDetails.link){
      window.open(this.projectDetails.link,'_blank');
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'le code source de ce projet est privé' });
    }
  }

}
