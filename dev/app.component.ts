import {Component} from 'angular2/core';
import {FirstComponentComponent} from './first-component.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <h2>Hola mundo!</h2>
        <p>Hello World!</p>
        <first-component></first-component>
    `,
    directives: [FirstComponentComponent]
})
export class AppComponent {

}
