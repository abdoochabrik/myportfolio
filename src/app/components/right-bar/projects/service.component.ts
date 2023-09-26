import { Component, OnInit } from '@angular/core';
import projectItem from 'src/app/interfaces/projectItemInterface';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public projects!:projectItem[];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        name:"Identity Management Service",
        context:"CDI",
        description:"Développement de la plateforme web Ziwig qui permet la gestion des identités des patients dans plusieurs hôpitaux.",
        link:"",
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
        link:"#",
        image:"assets/odco.png"
      },
  ]
  }

}
