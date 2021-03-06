import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'home' },
    { title: 'Transparência', url: '/transparencia', icon: 'folder-open' },
    { title: 'Árvore de links', url: '/links', icon: 'list' },
  ];
  constructor() {}
}
