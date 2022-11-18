import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  //Construtor
	constructor() {
		console.log('Constructor');
	}
  //Mudança de valores via @Input
	ngOnChanges(): void {
		console.log(`OnChange ${this.nome}`);
	}
  //Inicialização
	ngOnInit(): void {
		console.log(`OnInit ${this.nome}`);
		this.nome = `olá ${this.nome}`;
	}
}
