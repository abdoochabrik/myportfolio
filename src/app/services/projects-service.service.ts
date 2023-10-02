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
      description:"Développement de la plateforme web Ziwig qui permet la gestion des identités des patients dans plusieurs hôpitaux.",
      image : "assets/ziwig.png"
      },
    {
    name:"Endocoach",
    context:"stage de fin d'étude",
    description:"Endocoach est une application mobile multiOs de nouvelle génération qui améliore la prise en charge de l’endométriose",
    link:"https://play.google.com/store/apps/details?id=com.ziwig.moncoach.endoziwig",
    image : "assets/ziwig.png"
    },
    {
      name:"Immobilier-vente-achat",
      context:"Stage technique",
      description:"Développement d’une plateforme en ligne et d’une application mobile de gestion de la vente et de la location de biens immobiliers, avec la carte de localisation et la visite virtuelle.",
      link:"https://github.com/ElMehdiEchchad/Immobilier-vente-achat",
      image:"assets/immobilier.png"
    },
    {
      name:"ODCO",
      context:"stage d'ouverture",
      description:"Mise en place d’une plateforme d’assistance et d’accompagnement économique et juridique des coopératives",
      image:"assets/odco.png"
    },
    {
      name:"Site Web personnel",
      context:"Projet personnel",
      description:"J'ai developpé ce site pour présenter mon profile,mon parcours académique,mes expériences et mes projets ",
      image:"assets/presentation.jpg"
    },
    {
      name:"Online library",
      context:"Projet personnel",
      description:"Développement d'une plateforme digitale pour garantir la taraçabilité au sein des bibliothéques contenant des livres historiques",
      image:"assets/library.png",
      link:"https://github.com/abdoochabrik/clean-server-app"
    },
    {
      name:"FreelanceEasy",
      context:"Projet personnel",
      description:"Développement d'une solution special aux freelancers pour etre notifié par les nouveaux oppurtunitées",
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
