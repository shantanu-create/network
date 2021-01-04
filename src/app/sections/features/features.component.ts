import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  name;
  sector;
  design;
  email;
  mobile;
  stage;
  arena;
  pitchdeck;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  } 
  submit(category){
    console.log(this.name, category, this.sector, this.stage);
    const url = "https://api.ecell.in/summit/networking-reg/";
    var body = new FormData();
    body.append('category', category)
    body.append('name', this.name)
    body.append('sector', this.sector)
    body.append('design', this.design)
    body.append('email', this.email)
    body.append('mobile', this.mobile)
    body.append('stage', this.stage)
    body.append('arena', this.arena)
    body.append('pitchdeck', this.pitchdeck)

    
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