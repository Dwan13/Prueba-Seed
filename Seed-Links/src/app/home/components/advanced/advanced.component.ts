import { Component, OnInit } from '@angular/core';
import { BenefitsService } from 'src/app/core/services/benefits/benefits.service';
import { Cart } from 'src/app/core/models/cart/cart.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  benefits;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(
    private benefitsService: BenefitsService    
  ) { }

  ngOnInit(): void {
    this.benefits=this.benefitsService.getAllBenefits();
  }
  crearteUrl(){
    const newUrl: Cart={
      url:'https://www.moonpalacecancun.com/es'
    }

    this.benefitsService.createUrl(newUrl)
    .subscribe(url=>{
      console.log(url)
    })
  }
}
