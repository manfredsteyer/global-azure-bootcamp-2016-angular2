import { Component } from 'angular2/core';
import { Http, URLSearchParams, Headers} from 'angular2/http';
import { IFlug} from './flug';

@Component({
    selector: 'flug-suchen', // <my-app></my-app>
    templateUrl: 'app/flugsuchen.component.html'
})
export class FlugSuchenComponent {
    
    public von: string;
    public nach: string;
    public fluege: Array<IFlug> = [];
    
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    
    search() {
        
        let url = "http://www.angular.at/api/flug";
        
        let search = new URLSearchParams();
        search.set('abflugort', this.von)
        search.set('zielort', this.nach)
        
        let headers = new Headers();
        headers.set('Accept', 'text/json');        
        
        this.http
            .get(url, { search, headers  })
            .map(resp => resp.json())
            .subscribe(
                (fluege) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error(err);
                }
            ); // Observable
        
    }
    
}