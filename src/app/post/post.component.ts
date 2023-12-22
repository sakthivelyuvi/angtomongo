import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkingService } from '../working.service';
import { Working } from '../working';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
works= new FormGroup({
  name:new FormControl(),
  fees:new FormControl(),
  place:new FormControl()

});
  constructor(private route:Router,private ser:WorkingService){}
gotoHome(){
  this.route.navigate(['']);
}

posts(){
 const wg= this.works.value as Working;
  this.ser.post(wg).subscribe((res)=>{
    this.route.navigate(['']);
  })
}


}
