import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss']
})
export class DemoAppComponent {
  dark = false;
  navItems = [
    { name: 'Autocomplete', route: '/autocomplete' },
    { name: 'Badge', route: '/badge' },
    { name: 'Bottom sheet', route: '/bottom-sheet' },
    { name: 'Button Toggle', route: '/button-toggle' },
    { name: 'Button', route: '/button' },
    { name: 'Card', route: '/card' },
    { name: 'Chips', route: '/chips' },
    { name: 'Connected Overlay', route: '/connected-overlay' },
    { name: 'Checkbox', route: '/checkbox' },
    { name: 'Chips', route: '/chips' },
    { name: 'Datepicker', route: '/datepicker' },
    { name: 'Dialog', route: '/dialog' },
    { name: 'Drawer', route: '/drawer' },
    { name: 'Expansion Panel', route: '/expansion' },
    { name: 'Focus Origin', route: '/focus-origin' },
    { name: 'Gestures', route: '/gestures' },
    { name: 'Grid List', route: '/grid-list' },
    { name: 'Icon', route: '/icon' },
    { name: 'Input', route: '/input' },
    { name: 'List', route: '/list' },
    { name: 'Live Announcer', route: '/live-announcer' },
    { name: 'Menu', route: '/menu' },
    { name: 'Overlay', route: '/overlay' },
    { name: 'Platform', route: '/platform' },
    { name: 'Portal', route: '/portal' },
    { name: 'Progress Bar', route: '/progress-bar' },
    { name: 'Progress Spinner', route: '/progress-spinner' },
    { name: 'Radio', route: '/radio' },
    { name: 'Ripple', route: '/ripple' },
    { name: 'Screen Type', route: '/screen-type' },
    { name: 'Select', route: '/select' },
    { name: 'Sidenav', route: '/sidenav' },
    { name: 'Slide Toggle', route: '/slide-toggle' },
    { name: 'Slider', route: '/slider' },
    { name: 'Snack Bar', route: '/snack-bar' },
    { name: 'Stepper', route: '/stepper' },
    { name: 'Table', route: '/table' },
    { name: 'Tabs', route: '/tabs' },
    { name: 'Toolbar', route: '/toolbar' },
    { name: 'Tooltip', route: '/tooltip' },
    { name: 'Tree', route: '/tree' },
    { name: 'Typography', route: '/typography' }
  ];

  constructor(private _element: ElementRef, private _overlayContainer: OverlayContainer) {}

  toggleFullscreen() {
    const elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}

/**
 * Home component for welcome message in DemoApp.
 */
@Component({
  selector: 'app-home',
  template: `
    <p>Welcome to the development demos for Angular Easy forms!</p>
    <p>Open the sidenav to select a demo.</p>
  `
})
export class HomeComponent {}
