import { Component, OnInit } from '@angular/core';
import { PageService } from './service/page.service';
// import { commentModel } from './schema/commentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app_answer';
  // comments: commentModel[]=[]
  constructor(private pageService:PageService){}
ngOnInit(): void {
  this.getCommentData()
}
  getCommentData():void{
  
    // this.pageService.getComment().subscribe(comments=>
      // {this.comments = comments
      // let value  = JSON.stringify(this.comments)
      
     

      // console.log(this.comments)
      // }
      
    // )  
  }

}
