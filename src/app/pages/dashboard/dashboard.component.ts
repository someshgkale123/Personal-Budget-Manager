import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CrudService } from '../../crud.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public month=0;


  constructor(public au:AngularFireAuth,public authservice:AuthService, private router:Router, public crudservice:CrudService) { }


  ngOnInit()
  {

    var txt;
    setTimeout(() => {
      if (confirm("Your Session is about to expire in 20 seconds")) {
        txt = "Your session is refreshed";
        location.reload();
      } else {
        txt = "Your session will expire soon";
        setTimeout(() => {
          this.authservice.signout();
        }, 20000);
      }
    }, 40000);
  }
  clickjan()
  {
    this.month=0;
  }
  clickfeb()
  {
    this.month=1;
  }
  clickmar()
  {
    this.month=2;
  }
  clickapril()
  {
    this.month=3;
  }
  clickmay()
  {
    this.month=4;
  }
  clickjune()
  {
    this.month=5;
  }
  clickjuly()
  {
    this.month=6;
  }
  clickaug()
  {
    this.month=7;
  }
  clicksept()
  {
    this.month=8;
  }
  clickoct()
  {
    this.month=9;
  }
  clicknov()
  {
    this.month=10;
  }
  clickdec()
  {
    this.month=11;
  }
  }
