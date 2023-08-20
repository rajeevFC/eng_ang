import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { commentModel } from '../schema/commentModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  commentResult:commentModel[];
constructor(private commentService:CommentService){}

ngOnInit(): void {
  this.getCoomentList();
}

getCoomentList(){
  this.commentService.getComments().subscribe((res)=>{
    this.commentResult= res;
    console.log(this.commentResult);
  })
  
}
}
