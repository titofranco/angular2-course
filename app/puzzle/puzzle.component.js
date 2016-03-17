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
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number);
                    console.log(this.switch2Number);
                    console.log(this.switch3Number);
                    console.log(this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n          <h2> Game setup </h2>\n          Enter your name please:\n          <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n            [ngClass]=\"{\n             puzzle: true,\n             solved: switch1.value == switch1Number && switch2.value == switch2Number\n             }\"\n            [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n        <h2>The puzzle | {{(switch1.value == switch1Number && switch2.value == switch2Number) ? 'SOLVED' : 'NOT SOLVED' }}</h2>\n        <p>Ok, Welcome <span class=\"name\">{{name.value}}</span></p>\n        <br>\n        Switch1:\n        <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n        Switch2:\n        <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n        Switch3:\n        <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n        Switch4:\n        <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number\">Congratulations {{name.value}}, you did it!</h2>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQVZHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkE3Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGdtQ0F5Qkw7cUJBQ1IsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgICA8aDI+IEdhbWUgc2V0dXAgPC9oMj5cbiAgICAgICAgICBFbnRlciB5b3VyIG5hbWUgcGxlYXNlOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyXG4gICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiPlxuICAgICAgICA8aDI+VGhlIHB1enpsZSB8IHt7KHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIpID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCcgfX08L2gyPlxuICAgICAgICA8cD5PaywgV2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgIDxicj5cbiAgICAgICAgU3dpdGNoMTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIFN3aXRjaDI6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICBTd2l0Y2gzOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgU3dpdGNoNDpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8IHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bWJlclwiPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuICAgICAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHN3aXRjaDFOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDJOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6bnVtYmVyO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMk51bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoM051bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoNE51bWJlcik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
