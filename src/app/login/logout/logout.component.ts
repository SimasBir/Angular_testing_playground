import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  // public returnUrl2: string = '/login';

  constructor(private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
onclickLogout(){
  console.log("logout?")
  localStorage.removeItem('currentUser')
  // this.router.navigate([this.route.snapshot.queryParams.returnUrl || ''])
  location.reload();
}
}
