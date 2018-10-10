import { Injectable } from '@angular/core';
import { User } from './models/user.interface'
import { Patient } from './models/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {

      for (let i of this.users){
        if (i.role === 'patient'){
          this.patients.push(i)
        }
      }
      console.log(this.patients)
    
   }
  users: Array<User> = [
    { role: 'admin', uid: "1", name: "Manolo", surname: "Fernandez", dni: "123456789K", username: "Manolo", password: "0",historiesIds: [] },
    { role: 'patient', uid: "2", name: "Juan", surname: "Lopez", dni: "123456789J", username: "Juan", password: "0",sip: "6364532", historiesIds:['10/11/17 : Patología cervicolumbar'] },
    { role: 'doctor', uid: "3", name: "Cristian", surname: "Martinez", dni: "123456789M", username: "Cristian", password: "0",historiesIds: [] },
    { role: 'technical', uid: "4", name: "Javi", surname: "Guerra", dni: "123456789N", username: "Javi", password: "0",historiesIds: [] },
    { role: 'patient', uid: "5", name: "Marc", surname: "García", dni: "123456789B", username: "Marc", password: "0", sip: "06225999", historiesIds: ['14/02/2003 : Atrapamiento nervio cubital', '9/08/2005 : Desgarro tendón bicipital'] },
    { role: 'patient', uid: "6", name: "Alberto", surname: "Gonzalez", dni: "12345549C", username: "Alberto", password: "0", sip: "9231532", historiesIds:['15/8/2014 : Síndrome del tuner carpiano', '8/12/2017 : Fractura tercio distal del húmero'] },
    { role: 'patient', uid: "7", name: "Luis", surname: "Perez", dni: "12964549C", username: "Luis", password: "0", sip: "102231532", historiesIds:['10/02/2014 : Fractura de Colles', '11/09/2016 : Rotura Ligamento Colateral Externo de Rodilla'] }
  ];
  patients: Array<User>=[]

}
