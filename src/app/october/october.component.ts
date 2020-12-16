import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OctoberService } from '../services/october.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-october',
  templateUrl: './october.component.html',
  styleUrls: ['./october.component.css']
})
export class OctoberComponent implements OnInit {

  constructor(public authservice:AuthService, public fireservice:AngularFirestore, private router:Router, public oct:OctoberService) { }

  public pie;
  public polar;
  public bar;

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [],
        }
    ],
    labels: []
  };

  budget: any;
  Title: string;
  Amount: number;
  message: string;


  ngOnInit(): void {


      this.oct.getbudget().subscribe(data=>
        {

          this.budget= data.map(temp=>
            {
              return{
                id: temp.payload.doc.id,
                isEdit:false,
                title: temp.payload.doc.data()['title'],
                amount: temp.payload.doc.data()['amount'],
                user: temp.payload.doc.data()['user']
              };
            })

          //console.log(this.budget)

          var temp=[]
          for(let i=0;i<this.budget.length;i++)
          {
            if(this.budget[i]['user']==document.cookie)
            {
              temp.push(this.budget[i])
            }
          }
          this.budget=temp
          for (let i=0;i<this.budget.length;i++)
          {
            this.dataSource.datasets[0].data[i]=this.budget[i]['amount'];
            this.dataSource.labels[i]=this.budget[i]['title'];
            this.dataSource.datasets[0].backgroundColor[i]=this.dynamicolors();

          }
          setTimeout(() => {
            this.createchart();
          }, 500);
        })

  }
  createrecord()
  {
    let Value = {};
    Value['title']=this.Title;
    Value['amount']=this.Amount;
    Value['user']=document.cookie;

    this.oct.createbudget(Value).then(res=>{
      this.Title="";
      this.Amount=undefined;

    }).catch(error=>{
      console.log(error);
    })
    this.createchart();
  }
  editrecord(Value)
  {
    Value.isEdit =true;
    Value.edittitle=Value.title;
    Value.editamount=Value.amount;
  }

  updatebudget(updatedata)
  {
    let data={}
    data['title']=updatedata.edittitle;
    data['amount']=updatedata.editamount;
    this.oct.update_data(updatedata.id,data);
    updatedata.isEdit=false;
    this.createchart();
  }

  deleterecord(budget_id)
  {
    this.oct.deletebudget(budget_id);
    location.reload();
  }


  createchart()
  {
      if(this.pie)
      {
        this.pie.destroy();
      }
      if(this.polar)
      {
        this.polar.destroy();
      }
      if(this.bar)
      {
        this.bar.destroy();
      }

      const ctx = document.getElementById('myChart');
      this.pie = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource
      });

      const ctx1=document.getElementById('myChart1');
      this.polar=new Chart(ctx1, {
        data: this.dataSource,
        type: 'polarArea',
    });

    const ctx2=document.getElementById('myChart2');
    this.bar=new Chart(ctx2, {
      data: this.dataSource,
      type: 'bar',
      options:{
        legend: {
          display: false
      },
      layout: {
        padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0
        }
      }
    }
  });


    }

    dynamicolors()
    {
      const r=Math.floor(Math.random()*255);
      const g=Math.floor(Math.random()*255);
      const b=Math.floor(Math.random()*255);

      return 'rgb('+r+','+g+','+b+')';
    }




}
