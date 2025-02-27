import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addtravelplan } from './addtravelplan';
import { BuyTinsuranceDto } from './buy-tinsurance-dto';
import { CalTravelInput } from './cal-travel-input';
import { CalTravel } from './calTravel';
import { CalTravelDto } from './calTravelDto';
import { ReturnInsuranceMessage } from './return-insurance-message';
import { TravelInsurance } from './travel-insurance';

// import { HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {
  // calcTravel(calcTravel: () => void) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpClient:HttpClient) { }
  AddTravelPlan(addTPlan:Addtravelplan):Observable<string>
  {
    return this.httpClient.post("http://localhost:9090/travel/registertravelplan",addTPlan,{responseType:'text'})
  }

  addTravelInsurance(buyTDto:BuyTinsuranceDto):Observable<TravelInsurance>{
    return this.httpClient.post<TravelInsurance>("http://localhost:9090/travel/buytravelinsurance",buyTDto)
  }


  // getCalTravel(calTravela:CalTravelInput) {
  //   let data = this.httpClient.get("http://localhost:9090/travel/calculatetravel");
  //   console.log(data)
  //   return data;
  //   }

 getTInsurances(userName:string):Observable<TravelInsurance[]>
  {
    return this.httpClient.get<TravelInsurance[]>("http://localhost:9090/travel/viewallTinsurance?userName="+userName);
  }


  getCalTravel(calTravela:CalTravelInput):Observable<CalTravelDto> {
    let url="http://localhost:9090/travel/calculatetravel";
    // let body =  {vehicleType:"twoWheeler", noOfYears:2, insuranceType:"thirdParty"}
    const headers = { 'content-type': 'application/json' };

    console.log("To send ", calTravela)
    let data = (JSON.stringify(calTravela))
    return this.httpClient.post<CalTravelDto>(url, data,{ 'headers': headers });
    // return this.httpClient.get(url, data);
    // return this.httpClient.get<CalTravelDto>(url)
    }
}
// /add/{id}