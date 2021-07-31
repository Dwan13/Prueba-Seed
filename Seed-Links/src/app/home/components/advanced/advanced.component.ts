import { Component, OnInit } from '@angular/core';
import { BenefitsService } from 'src/app/core/services/benefits/benefits.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Urls } from 'src/app/core/models/urls/urls.model';
import { MyValidators } from 'src/app/urils/validators';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  urlS:Urls;
  listUrl:Urls[]=[];
  benefits;
  toggle = true;
  status = 'Copy'; 
  data;
  urlFormControl:FormGroup

  constructor(
    private benefitsService: BenefitsService,
    private formBuilder: FormBuilder,
    private clipboard: Clipboard,  // Servicio para usar el portapapeles

  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.benefits = this.benefitsService.getAllBenefits();
    this.data = JSON.parse(localStorage.getItem('Links'));
    this.listUrl=this.data
  }
  private buildForm(){
    this.urlFormControl= this.formBuilder.group({
      url:['',[
        Validators.required,
        MyValidators.isUrlValid
      ]]
    });
  }
  crearteUrl(event: Event) { 
    event.preventDefault();
    if(this.urlFormControl.valid){
      this.benefitsService.createUrl(this.urlFormControl.value)
      .subscribe(url => {
        if(url=== null){
          alert('Url no valida');
        }else{
          this.urlS = url;        
          this.listUrl.push(url); 
                  
        }
        localStorage.setItem('Links',JSON.stringify(this.listUrl));
        
      })
    }    
  }
  copyLink(element){
    this.clipboard.copy(element);
    this.status='Copied!';
    this.toggle = false;
  }
 
}
