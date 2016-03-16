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
    var FirstComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FirstComponentComponent = (function () {
                function FirstComponentComponent() {
                    this.name = "Carlos";
                }
                FirstComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'first-component',
                        template: "\n        <h3>This is the first component made by <span [style.color]=\"inputElement.value === 'yes' ? 'yellow' : ''\"> {{name}} </span>\n         <span [class.is-awesome]=\"inputElement.value === 'yes'\"> It is awesome </span> </h3>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br>\n        <button [disabled]=\"inputElement.value !== 'yes'\"> Only enabled if 'yes' was entered</button>\n        ",
                        styleUrls: ['src/css/first-component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstComponentComponent);
                return FirstComponentComponent;
            }());
            exports_1("FirstComponentComponent", FirstComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLFFBQVEsQ0FBQTtnQkFDbkIsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsNmNBUUw7d0JBQ0wsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7cUJBQzdDLENBQUM7OzJDQUFBO2dCQUlGLDhCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2REFFQyxDQUFBIiwiZmlsZSI6ImZpcnN0LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaXJzdC1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMz5UaGlzIGlzIHRoZSBmaXJzdCBjb21wb25lbnQgbWFkZSBieSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICd5ZWxsb3cnIDogJydcIj4ge3tuYW1lfX0gPC9zcGFuPlxuICAgICAgICAgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPiBJdCBpcyBhd2Vzb21lIDwvc3Bhbj4gPC9oMz5cbiAgICAgICAgPGJyPlxuICAgICAgICBJcyBpdCBhd2Vzb21lP1xuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPiBPbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICAgICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9maXJzdC1jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGaXJzdENvbXBvbmVudENvbXBvbmVudCB7XG4gICAgbmFtZSA9IFwiQ2FybG9zXCJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
