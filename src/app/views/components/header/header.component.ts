import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() desc:string="";
  constructor(private router: Router) {}

  ngOnInit(): void {}

  go_to_about_us() {
    this.router.navigate(['/about-us']);
  }
  go_to_expertise() {
    this.router.navigate(['/our-expertise']);
  }
  go_to_services() {
    this.router.navigate(['/our-services']);
  }
  go_to_career() {
    this.router.navigate(['/carreer']);
  }
  go_to_contact_us() {
    this.router.navigate(['/contact-us']);
  }

  go_to_home(){
     this.router.navigate(['/']);
  }

  mobileMenuInactive:boolean = true;
  toggleMenu(){
    this.mobileMenuInactive = !this.mobileMenuInactive;
  }
}
