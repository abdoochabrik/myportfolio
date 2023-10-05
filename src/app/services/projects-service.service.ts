import { Injectable } from '@angular/core';
import projectItem from '../interfaces/projectItemInterface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects:projectItem[] =  [
    {
      name:"Identity Management Service",
      context:"CDI",
      description:"Development of the Ziwig web platform, which allows for the management of patient identities in multiple domains (hospitals)",
      image : "assets/ziwig.png"
      },
    {
    name:"Endocoach",
    context:"End-of-study internship",
    description:"Endocoach is a next-generation multi-OS mobile application that improves the management of endometriosis.",
    link:"https://play.google.com/store/apps/details?id=com.ziwig.moncoach.endoziwig",
    image : "assets/ziwig.png"
    },
    {
      name:"Real estate sales and purchases.",
      context:"Technical internship",
      description:"Développement d’une plateforme en ligne et d’une application mobile de gestion de la vente et de la location de biens immobiliers, avec la carte de localisation et la visite virtuelle.",
      link:"https://github.com/ElMehdiEchchad/Immobilier-vente-achat",
      image:"assets/immobilier.png"
    },
    {
      name:"ODCO",
      context:"Internship",
      description:"Establishment of a platform for economic and legal support and assistance to cooperatives.",
      image:"assets/odco.png"
    },
    {
      name:"Site Web personnel",
      context:"Personal project",
      description:"J'ai developpé ce site pour présenter mon profile,mon parcours académique,mes expériences et mes projets ",
      image:"assets/presentation.jpg"
    },
    {
      name:"Online library",
      context:"Personal project",
      description:"Development of a digital platform to ensure traceability within libraries containing historical and golden books.",
      image:"assets/library.png",
      link:"https://github.com/abdoochabrik/clean-server-app"
    },
    {
      name:"FreelanceEasy",
      context:"Personal project",
      description:"Development of a specialized solution for freelancers to be notified of new opportunities.",
      image:"assets/easy.jpg"
    },
  ]

  constructor() { }

  public getProjects():projectItem[] {
    return this.projects
  }

  publicProjectByName(name:string) {

  }

}
