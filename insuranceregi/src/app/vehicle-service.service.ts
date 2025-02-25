import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyVInsuranceDto } from './buy-vinsurance-dto';
import { Observable, ObservableInput } from 'rxjs';
import { VehicleInsurancePlan } from './vehicle-insurance-plan';
import { AdminVerifyClaimComponent } from './admin-verify-claim/admin-verify-claim.component';
// import { Observable } from 'rxjs';
import { AddVehiclePlan } from './add-vehicle-plan';
import { VehicleInsurance } from './vehicle-insurance';
import { ViewAlldto } from './view-alldto';
import { CalVehicleInput } from './cal-vehicle-input';
import { CalVehicleDto } from './calVehicleDto';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {


  constructor(private httpClient:HttpClient) { }

  addVehicleInsurance(buyDto:BuyVInsuranceDto):Observable<VehicleInsurance>{
    return this.httpClient.post<VehicleInsurance>("http://localhost:9090/vehicles/buyvehicleinsurance",buyDto)
  }

  getvehiclePlan(planId:number):Observable<VehicleInsurancePlan>{

    
    return this.httpClient.get<VehicleInsurancePlan>("http://localhost:9090/vehicles/calTravel?planId=8081");
    // return this.httpClient.get<VehicleInsurancePlan>("http://localhost:9191/vehicles/calTravel/"+vehiclePlanId);  users[0].name=Alice&users[0].age=26&users[1].name=Bob&users[1].age=16
  }



  AddVehiclePlan(addVplan:AddVehiclePlan):Observable<string>
  {
    return this.httpClient.post("http://localhost:9090/vehicles/registervehicleplan",addVplan,{responseType:'text'})
  }
  getInsurances(userName:string):Observable<VehicleInsurance[]>
  {
    return this.httpClient.get<VehicleInsurance[]>("http://localhost:9090/vehicles/viewallinsurance?userName="+userName);
  }







  getCalVehicle(calVehiclea:CalVehicleInput):Observable<CalVehicleDto> {
    let url="http://localhost:9090/vehicles/calculatevehicle";
    // let body =  {vehicleType:"twoWheeler", noOfYears:2, insuranceType:"thirdParty"}
    const headers = { 'content-type': 'application/json' };

    console.log("To send ", calVehiclea)
    let data = (JSON.stringify(calVehiclea))
    return this.httpClient.post<CalVehicleDto>(url, data,{ 'headers': headers });
    
    }

  getVInsuranceId(userName:string):Observable<number[]>
  {
    return this.httpClient.get<number[]>("http://localhost:9090/vehicles/viewallinsuranceid?userName="+userName);
  }
}
