System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n          <h2> Game setup </h2>\n          Enter your name please:\n          <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n            [ngClass]=\"{\n             puzzle: true\n             solved: switch1.value == switch1Number\n             }\"\n            [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n          <h2>The puzzle</h2>\n        <p>Ok, Welcome <span class=\"name\">XXX</span></p>\n        <br>\n        Switch1:\n        <input type=\"text\" #switch1><br>\n        Switch2:\n        <input type=\"text\" #switch2><br>\n        Switch3:\n        <input type=\"text\" #switch3><br>\n        Switch4:\n        <input type=\"text\" #switch4><br>\n        </section>\n        <h2>Congratulations name, you did it!</h2>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUFBO2dCQUtBLENBQUM7Z0JBbkNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxnMEJBeUJMO3FCQUNSLENBQUM7O21DQUFBO2dCQU9GLHNCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCw2Q0FLQyxDQUFBIiwiZmlsZSI6InB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgICAgIDxoMj4gR2FtZSBzZXR1cCA8L2gyPlxuICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgIHB1enpsZTogdHJ1ZVxuICAgICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyXG4gICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiPlxuICAgICAgICAgIDxoMj5UaGUgcHV6emxlPC9oMj5cbiAgICAgICAgPHA+T2ssIFdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+WFhYPC9zcGFuPjwvcD5cbiAgICAgICAgPGJyPlxuICAgICAgICBTd2l0Y2gxOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMT48YnI+XG4gICAgICAgIFN3aXRjaDI6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyPjxicj5cbiAgICAgICAgU3dpdGNoMzpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDM+PGJyPlxuICAgICAgICBTd2l0Y2g0OlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoND48YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyPkNvbmdyYXR1bGF0aW9ucyBuYW1lLCB5b3UgZGlkIGl0ITwvaDI+XG4gICAgICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQge1xuICAgIHN3aXRjaDFOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDJOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6bnVtYmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
