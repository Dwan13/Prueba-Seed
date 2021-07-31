import { Injectable } from '@angular/core';
import { Benefit } from '../../models/benefit.model';
import { Cart } from '../../models/cart/cart.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../models/urls/urls.model';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {
  
  benefits: Benefit[] =[
    {
      id: '1',
      image: 'assets/images/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description: "Boost your brand recognition with each click. Generic links don't mean a thing, Branded links help instil confidence in your content."
    },
    {
      id: '2',
      image: 'assets/images/icon-detailed-records.svg',
      title: 'Detailed Records',
      description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      id: '3',
      image: 'assets/images/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ];
  constructor(
   private http: HttpClient
  ) { }
  
  createUrl(url: Cart){
    return this.http.get<Urls>(`${environment.url_api}${url.url}`)
  }
  getAllBenefits(){
    return this.benefits
  }
  getBenefit(id: string){
    return this.benefits.find(item => id === item.id);
  }
  
}
