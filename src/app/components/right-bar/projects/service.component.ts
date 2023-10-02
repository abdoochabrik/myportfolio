import { Component, OnInit } from '@angular/core';
import projectItem from 'src/app/interfaces/projectItemInterface';
import { ProjectsService } from 'src/app/services/projects-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public projects!:projectItem[];

  constructor(private readonly projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects()
  }

}

