import { Component, OnInit } from '@angular/core';
import { Working } from '../working';
import { WorkingService } from '../working.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {




  work:Working[];
  constructor(private ser:WorkingService,private route:Router){}
  ngOnInit(): void {
    this.ser.getall().subscribe((res)=>{
      this.work=res;
      console.log(res);
      
    })
  }

  deleteName(id:string) {
    this.route.navigate(['delete',id]);
    }

  gotoPost(){
    this.route.navigate(['addnew']);
  }

  gotoGet(id:string){
    this.route.navigate(['getid',id])
  }

  

}
