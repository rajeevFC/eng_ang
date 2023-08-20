import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { AlbumService } from '../service/album.service';
import { albmModel } from '../schema/albumModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  resultAlbum:albmModel[];
  resultAlbumLimit:albmModel[];
  topList:boolean = false;
  obs: Subscription;
  @Output() valueChnes = new  EventEmitter()
  constructor(private albmService:AlbumService){}

ngOnInit(): void {
  this.getAlbumRecord();
}
getAlbumRecord():void{
 
this.albmService.getAlbumCollection().subscribe((res)=>
  {this.resultAlbum = res; 
   
    console.log("album",this.resultAlbum)})

}

getTopList(){
  this.topList = true;
  if(this.topList){
    this.resultAlbumLimit = this.resultAlbum.slice(0,12);
  this.valueChnes.emit(this.resultAlbumLimit)

  }
}
   
ngOnDestroy(){
  console.log("component destroy"+this.resultAlbum)
  // this.obs.unsubscribe();
}
}
function output() {
  throw new Error('Function not implemented.');
}

