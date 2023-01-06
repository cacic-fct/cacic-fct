import { Component } from '@angular/core';

@Component({
  selector: 'app-page-link-tree',
  templateUrl: './page-link-tree.page.html',
  styleUrls: ['./page-link-tree.page.scss'],
})
export class PageLinkTreePage {
  cardList: CardList[];
  eventList: ListType[];

  constructor() {
    /* Example
    this.exampleList = [
      {
        title: 'Plenária do MUP – Inscrições',
        icon: 'document-text',
        url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
        content:
          '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
      },
    ];

    this.cardList = [
      {
        title: 'Movimento estudantil',
        content: this.movEstList,
      },
    ];
  */

    this.eventList = [
      {
        title: 'Minicurso: Javascript - Do básico ao avançado',
        icon: 'globe-outline',
        url: 'https://fct-pp.web.app/calendario/evento/sBMPXH05M8DRuZkR2rGE',
        content: 'Faça a sua inscrição!',
      },
    ];

    this.cardList = [
      {
        title: 'Eventos',
        content: this.eventList,
      },
    ];
  }
}

interface ListType {
  title: string;
  icon: string;
  url: string;
  content: string;
}

interface CardList {
  title: string;
  content: ListType[];
}
