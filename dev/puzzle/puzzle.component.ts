import {Component} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
          <h2> Game setup </h2>
          Enter your name please:
          <input type="text" #name (keyup)="0">
        </section>
        <section
            [ngClass]="{
             puzzle: true
             solved: switch1.value == switch1Number
             }"
            [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
          <h2>The puzzle</h2>
        <p>Ok, Welcome <span class="name">XXX</span></p>
        <br>
        Switch1:
        <input type="text" #switch1><br>
        Switch2:
        <input type="text" #switch2><br>
        Switch3:
        <input type="text" #switch3><br>
        Switch4:
        <input type="text" #switch4><br>
        </section>
        <h2>Congratulations name, you did it!</h2>
        `
})

export class PuzzleComponent {
    switch1Number:number;
    switch2Number:number;
    switch3Number:number;
    switch4Number:number;
}
