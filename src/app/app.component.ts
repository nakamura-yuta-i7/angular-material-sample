import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/admin">Admin</a>
    <a routerLink="/nonexistingroute">Non existing Route</a>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
}

@Component({
  template: `
    <h1>Home</h1>
    <a routerLink="/">Dashboard</a>
    <a routerLink="/users">Users</a>
    <hr />
    <router-outlet></router-outlet>
  `
})
class HomeComponent {}

@Component({
  template: `<h1>Admin</h1>
  `
})
class AdminComponent {}

@Component({
  template: `<h1>Dashboard</h1>
  `
})
class DashboardComponent {}


@Component({
  template: `<h1>Users</h1>
  <a routerLink="user/1" >User 1</a>
  <a routerLink="user/2" >User 2</a>
  <hr />
   <router-outlet></router-outlet>
  `
})
class Users {}


@Component({
  template: `<h1>User {{id}}</h1>
  `
})
class UserdetailComponent {
  id='';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
     this.id = params['id'];
    });
  }
}

@Component({
  template: `<h1>Not found</h1>
  `
})
class NotfoundComponent {}


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: '/admin',
    children: [
       {path: '', component: DashboardComponent},
       {path: 'users', component: Users,
         children: [
           { path: 'user/:id', component: UserdetailComponent }
        ]
       }
     ]
  },
  {
    path: 'admin',
    component : AdminComponent,
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent,AdminComponent,NotfoundComponent, DashboardComponent, Users, UserdetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }