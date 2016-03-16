System.register(['angular2/core', './template-test.component'], function(exports_1, context_1) {
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
    var core_1, template_test_component_1;
    var FirstComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (template_test_component_1_1) {
                template_test_component_1 = template_test_component_1_1;
            }],
        execute: function() {
            FirstComponentComponent = (function () {
                function FirstComponentComponent() {
                }
                FirstComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Carlos";
                };
                FirstComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'first-component',
                        template: "\n        <h3>This is the first component made by <span [style.color]=\"inputElement.value === 'yes' ? 'yellow' : ''\"> {{name}} </span>\n         <span [class.is-awesome]=\"inputElement.value === 'yes'\"> It is awesome </span> </h3>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br>\n        <button [disabled]=\"inputElement.value !== 'yes'\"> Only enabled if 'yes' was entered</button>\n        <template-test></template-test>\n        ",
                        styleUrls: ['src/css/first-component.css'],
                        directives: [template_test_component_1.TemplateTestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstComponentComponent);
                return FirstComponentComponent;
            }());
            exports_1("FirstComponentComponent", FirstComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIRywwQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO2dCQUN4QixDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSxzZkFTTDt3QkFDTCxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDMUMsVUFBVSxFQUFFLENBQUMsK0NBQXFCLENBQUM7cUJBQ3RDLENBQUM7OzJDQUFBO2dCQVFGLDhCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCw2REFNQyxDQUFBIiwiZmlsZSI6ImZpcnN0LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RlbXBsYXRlVGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZW1wbGF0ZS10ZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlyc3QtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDM+VGhpcyBpcyB0aGUgZmlyc3QgY29tcG9uZW50IG1hZGUgYnkgPHNwYW4gW3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAneWVsbG93JyA6ICcnXCI+IHt7bmFtZX19IDwvc3Bhbj5cbiAgICAgICAgIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcydcIj4gSXQgaXMgYXdlc29tZSA8L3NwYW4+IDwvaDM+XG4gICAgICAgIDxicj5cbiAgICAgICAgSXMgaXQgYXdlc29tZT9cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIj4gT25seSBlbmFibGVkIGlmICd5ZXMnIHdhcyBlbnRlcmVkPC9idXR0b24+XG4gICAgICAgIDx0ZW1wbGF0ZS10ZXN0PjwvdGVtcGxhdGUtdGVzdD5cbiAgICAgICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9maXJzdC1jb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1RlbXBsYXRlVGVzdENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBGaXJzdENvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2FybG9zXCJcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
