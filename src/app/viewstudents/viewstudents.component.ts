import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[
  {"name":"ganu","age":19,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"},
  {"name":"sera","age":21,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"},
  {"name":"sam","age":17,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"},
  {"name":"sonu","age":22,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"},
  {"name":"shan","age":16,"photo":"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"}
]
}
