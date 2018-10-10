import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateManagerService } from './state-manager.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor (private stateManager: StateManagerService, private api: ApiService){}
getPatients() // doctor, admin
{
return [];
}

getPatient(uid) // doctor, admin, patient
{
  
}

getMedicalHistories() // doctor, admin
{
  let a = this.api.users;
  let lista = document.getElementById("lista");
  for (let i of a){
    lista.insertAdjacentHTML(
      "beforeend","<div class='historiaClinica'>"+
      "<strong><p class='nombre'>"+i.name+" "+i.surname+"&nbsp"+"</p></strong>"+
      "<div class='detalle'>"+"<strong>"+"NOMBRE: "+"</strong>"+i.name+"&nbsp"+"</div>"+
      "<div class='detalle'>"+"<strong>"+"APELLIDO: "+"</strong>"+i.surname+"</div>"+
      "<div class='detalle'>"+"<strong>"+"DNI: "+"</strong>"+i.dni+"&nbsp"+"</div>"+
      "<div class='detalle'>"+"<strong>"+"ROL: "+"</strong>"+i.role+"&nbsp"+"</div>"+
      "<div class='detalle'>"+"<strong>"+"UID: "+"</strong>"+i.uid+"&nbsp"+"</div>"+
      "<div class='detalle'>"+"<strong>"+"USERNAME: "+"</strong>"+i.username+"&nbsp"+"</div></div>"+
      "<br>");
  }
}

getMedicalHistory(id) // doctor, admin, patient
{
  
}

postMedicalHistory(medicalHistory) // doctor
{
  
}

postDoctor(doctor) // technical
{
  
}

postPatient(patient) // technical
{
  
}

postTechnical(technical) // technical
{
  
}
}
