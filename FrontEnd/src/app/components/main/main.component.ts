import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserReceived } from '../../Models/UsersReceived';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  token: Observable<boolean> = this.auth.isAuthenticated();
  id: any = localStorage.getItem('user-id');
  data: UserReceived[];
  headElements = [
    'ID',
    'First',
    'Last',
    'Username',
    'Hobby',
    'Country',
    'City',
    'PhoneNumber',
  ];

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token.subscribe((isAuth) => {
      if (isAuth) {
        this.auth
          .getAllUsers()
          .pipe(take(1))
          .subscribe((res: UserReceived[]) => {
            this.data = res;
            console.log(this.data);
          });
      } else {
        this.router.navigate(['register']);
      }
    });
  }
}