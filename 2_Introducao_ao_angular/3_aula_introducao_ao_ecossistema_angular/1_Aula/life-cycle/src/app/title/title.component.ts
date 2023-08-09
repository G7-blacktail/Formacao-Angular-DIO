import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome: string = "Gustavo";

  constructor() {
		console.log(`Construtor ${this.nome}`)
	 }

  ngOnInit(): void {
		console.log(`OnInit ${this.nome}`)
		this.nome = `Olá ${this.nome}`
  }

	ngOnChanges(): void {
		console.log(`OnChanges ${this.nome}`)
	}

}
