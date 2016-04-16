System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var FlugSuchenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FlugSuchenComponent = (function () {
                function FlugSuchenComponent(http) {
                    this.fluege = [];
                    this.http = http;
                }
                FlugSuchenComponent.prototype.search = function () {
                    var _this = this;
                    var url = "http://www.angular.at/api/flug";
                    var search = new http_1.URLSearchParams();
                    search.set('abflugort', this.von);
                    search.set('zielort', this.nach);
                    var headers = new http_1.Headers();
                    headers.set('Accept', 'text/json');
                    this.http
                        .get(url, { search: search, headers: headers })
                        .map(function (resp) { return resp.json(); })
                        .subscribe(function (fluege) {
                        _this.fluege = fluege;
                    }, function (err) {
                        console.error(err);
                    }); // Observable
                };
                FlugSuchenComponent = __decorate([
                    core_1.Component({
                        selector: 'flug-suchen',
                        templateUrl: 'app/flugsuchen.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FlugSuchenComponent);
                return FlugSuchenComponent;
            }());
            exports_1("FlugSuchenComponent", FlugSuchenComponent);
        }
    }
});
//# sourceMappingURL=flugsuchen.component.js.map