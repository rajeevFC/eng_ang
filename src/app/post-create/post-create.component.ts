import { Component, OnInit } from '@angular/core';
import { PostModel } from '../schema/prepostModel';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{
constructor(){}
postData:PostModel[];

ngOnInit(): void {
  this.pagepostData();
}

pagepostData(){
  console.log("page post data");
}

}
