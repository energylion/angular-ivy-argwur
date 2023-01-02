import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  elementi = [
    { immagine: 'aaa', descrizione: 'bbb', prezzo: '123' },
    { immagine: 'ccc', descrizione: 'ddd', prezzo: '456' },
  ];

pippo = false

  constructor() {}

  ngOnInit() {}
}
