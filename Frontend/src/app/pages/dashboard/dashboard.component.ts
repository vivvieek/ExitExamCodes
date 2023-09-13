import { Component,OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  todo={
    todolist:'',
    status:''
  };

  todos:any;

  iscompleted=false;
  isongoing=false;
  isall=true;

  constructor(public serv:TodoService){}

  ngOnInit(): void {
    this.fetchdata();
  }

  submit(){
    this.serv.addtodo(this.todo).subscribe(res=>{
      alert('To do Added');
      this.todo={
        todolist:'',
        status:''
      }
      this.fetchdata();
    })
  }

  deltodo(id:any){
    this.serv.deltodo(id).subscribe(data=>console.log(data));
    alert('To do Deleted');
    this.fetchdata();
  }

  fetchdata():void{
    this.serv.viewtodo().subscribe(data=>{
      this.todos=data;
      console.log(this.todos);
    })
  }

  all(){
    this.isall=true;
    this.iscompleted=false;
    this.isongoing=false;
  }

  completed(){
    this.iscompleted=true;
    this.isall=false;
    this.isongoing=false;
  }

  ongoing(){
    this.isongoing=true;
    this.isall=false;
    this.iscompleted=false;
  }

}
