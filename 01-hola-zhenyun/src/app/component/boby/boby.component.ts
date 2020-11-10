import { Component } from '@angular/core';


@Component({ 
    selector:'app-boby',

    templateUrl: `./boby.component.html`
})
export class BobyComponent {
    mostrar = true;

    frase: any = {
        mensaje: 'Aunque nadie puede volver atrás y hacer un nuevo comienzo,cualquiera puede comenzar a partir de ahora y crear un nuevo final.',
        autor: ' Carl Bard'
    };

    
    personajes: string[] =['ling','long','yun','jun'];

}