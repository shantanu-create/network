import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  name;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  } 
  submit(){
    console.log(this.name);
    const url = "https://api.ecell.in/summit/networking-reg/";
    var body = new FormData();
    body.append('name', this.name)

    
    // These are names to use
      // "name": "",
      // "email": "",
      // "category": "",
      // "mobile": "",
      // "arena": "",
      // "sector": "",
      // "stage": "",
      // "pitchdeck": "",
      // "design": ""
    
    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        alert('registered')
      }
    )
  }
}