import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private lastScrollPosition = 0;
  public isScrolledUp = false;
  isNavbarCollapsed = true;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    this.isScrolledUp = currentScrollPosition < this.lastScrollPosition;

    this.lastScrollPosition = currentScrollPosition;
  }

  getNavbarClasses() {
    return {
      'navbar-fixed-top': this.isScrolledUp,
      'navbar-static-top': !this.isScrolledUp
    };
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  goToPM(){
    const pmElement = document.getElementById('pm');
    if (pmElement) {
      pmElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToMeglio(){
    const meglioElement = document.getElementById('meglio');
    if (meglioElement) {
      meglioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToFocus(){
    const focus = document.getElementById("focus");
    if(focus){
      focus.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}

