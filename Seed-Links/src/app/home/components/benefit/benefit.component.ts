import { Component, OnInit, Input, } from '@angular/core';
import { Benefit } from 'src/app/core/models/benefit.model';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss']
})
export class BenefitComponent implements OnInit {
  
  @Input() benefit: Benefit;

  constructor() { }

  ngOnInit(): void {
    
  }

}
