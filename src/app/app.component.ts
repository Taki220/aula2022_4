import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Adivinhar', url: '/page/advinhar', icon: 'help-circle' },
    { title: 'WikiMine', url: 'wikiminecraft', icon: 'game-controller' },
    { title: 'Livre1', url: '/livre1', icon: 'archive' },
    { title: 'Livre2', url: '/livre2', icon: 'trash' },

  ];
  public labels = [];
  constructor() {}
}
