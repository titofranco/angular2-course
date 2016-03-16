import {Component} from 'angular2/core'

@Component({
    selector: 'first-component',
    template: `
        <h3>This is the first component made by <span [style.color]="inputElement.value === 'yes' ? 'yellow' : ''"> {{name}} </span>
         <span [class.is-awesome]="inputElement.value === 'yes'"> It is awesome </span> </h3>
        <br>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
        <br>
        <button [disabled]="inputElement.value !== 'yes'"> Only enabled if 'yes' was entered</button>
        `,
    styleUrls: ['src/css/first-component.css']
})

export class FirstComponentComponent {
    name = "Carlos"
}