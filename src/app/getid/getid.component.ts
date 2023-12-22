import { Component, OnInit } from '@angular/core';
import { WorkingService } from '../working.service';
import { ActivatedRoute } from '@angular/router';
import { Working } from '../working';

@Component({
  selector: 'app-getid',
  templateUrl: './getid.component.html',
  styleUrls: ['./getid.component.css']
})
export class GetidComponent implements OnInit {

  id:string;

  wor:Working=new Working();
  constructor(private ser:WorkingService,private act:ActivatedRoute){}
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id'];
   this.getids();
  }


  getids(){
    this.ser.getbyId(this.id).subscribe((res)=>{
      
      this.wor=res;
    })
  }
}
