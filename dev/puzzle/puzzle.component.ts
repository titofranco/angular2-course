import {Component} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
          <h2> Game setup </h2>
          Enter your name please:
          <input type="text">
        </section>
        <section>
          <h2>The puzzle</h2>
        <p>Ok, Welcome <span class="name">XXX</span></p>
        <br>
        Switch1:
        <input type="text"><br>
        Switch2:
        <input type="text"><br>
        Switch3:
        <input type="text"><br>
        Switch4:
        <input type="text"><br>
        </section>
        <h2>Congratulations name, you did it!</h2>
        `
})

export class PuzzleComponent {

}
