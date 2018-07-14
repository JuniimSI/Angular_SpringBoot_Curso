import { MessageService } from 'primeng/components/common/messageservice';

import { VendasService } from './../vendas/vendas.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  clientes: Array<any>;
  produtos: Array<any>;
  item: any;
  venda: any;
  @Output() vendaSalva = new EventEmitter();

  constructor(private vendasService: VendasService,
    private messageService: MessageService) { }

  novaVenda() {
    this.venda = { itens: [], frete:0.0, total: 0.0 };
    this.item = {};
  }

  ngOnInit() {
    this.novaVenda();

    this.vendasService.listarClientes()
    .subscribe(response => this.clientes = response);

    this.vendasService.listarProdutos()
    .subscribe(response => this.produtos = response);
  }

  calcularTotal() {
    const totalItens = this.venda.itens
      .map(i => (i.produto.valor * i.quantidade))
      .reduce((total, v) => total + v, 0);

      this.venda.total = totalItens + this.venda.frete;
  }

  incluirItem()  {
    this.item.total = this.item.produto.valor * this.item.quantidade;
    this.venda.itens.push(this.item);
    this.item = {};
    this.calcularTotal();
  }

  adicionar(frm: FormGroup) {
    this.vendasService.adicionar(this.venda).subscribe(response => {
      frm.reset();
      this.novaVenda();
      this.messageService.add({severity: 'success', detail: 'Adicionada com Sucesso'});
      this.vendaSalva.emit(response);
    });
  }

}
