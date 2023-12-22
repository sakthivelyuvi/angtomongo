import { Component, OnInit } from '@angular/core';
import { WorkingService } from '../working.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id:string;
  constructor(private ser:WorkingService,private route:Router,private act:ActivatedRoute){}
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id'];
   this.delete();
  }

  delete(){
    this.ser.delete(this.id).subscribe((res)=>{
      this.route.navigate(['']);
    })
  }
}
