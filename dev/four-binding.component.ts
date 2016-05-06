import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'four-binding',
    template: `
       (Event binding)
        <input type="text" #inputElement (keyup)="key_up_func(inputElement.value)" > (String interpolation) values are {{values}}
        <br>
        (Property Binding)
        <button [disabled]="inputElement.value !== 'yes'"> Only enabled if 'yes' was entered</button>
        <br><br>
        2 way data binding:
        <p> Your name: {{name}} </p>
        <input type="text" [(ngModel)]="name">
        `
})

export class FourBindingComponent implements OnInit{
    name: string;
    values = '';

    ngOnInit():any {
        this.name = "Carlos"
    }

    key_up_func(value: string) {
        this.values += value + ' | '
    }
}