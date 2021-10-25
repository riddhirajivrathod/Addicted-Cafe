import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navshow: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationStart) { 
        console.log(event.url) 
        if (event.url == '/' || event.url == '/shop') { 
          this.navshow = 'menu' 
        } 
        else { 
          this.navshow = 'back' 
        } 
      } 
    })
  }

}
