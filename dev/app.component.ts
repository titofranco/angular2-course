import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {FirstComponentComponent} from './first-component.component';
import {FourBindingComponent} from './four-binding.component';

@Component({
    selector: 'my-app',
    template: `
      <four-binding></four-binding>
    `,
    directives: [PuzzleComponent, FirstComponentComponent, FourBindingComponent]
})

export class AppComponent {

}
