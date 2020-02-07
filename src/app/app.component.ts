import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  title: string = "Embarquement des passagers";
  article: any = null;
  constructor (public http: HttpClient) {
  
  }
  ngOnInit () {
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((data) => {
      this.article = data;
    });
  }
}