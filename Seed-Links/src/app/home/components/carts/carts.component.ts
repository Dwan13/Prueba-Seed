import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/core/services/cart/carts.service';
import { Cart } from 'src/app/core/models/cart/cart.model';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    private cartService: CartsService
  ) { }

  ngOnInit(): void {
  }
  crearteUrl(){
    const newUrl: Cart={
      url:'https://www.moonpalacecancun.com/es'
    }
    this.cartService.createUrl(newUrl)
    .subscribe(url=>{
      console.log(url)
    })
  }
}
