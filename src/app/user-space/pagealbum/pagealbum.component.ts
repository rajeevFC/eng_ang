import { Component, OnInit } from '@angular/core';
import{albmModel} from '../../schema/albumModel'

@Component({
  selector: 'app-pagealbum',
  templateUrl: './pagealbum.component.html',
  styleUrls: ['./pagealbum.component.css']
})
export class PagealbumComponent implements OnInit{
constructor(){}



ngOnInit(): void {
}
fetchNewRecord(event:albmModel){
  console.log("blank--",event);
}
}
