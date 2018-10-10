import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/router';
import { Observable } from 'rxjs';
import { StateManagerService } from './state-manager.service';
import { Router2Module } from './router2/router2.module';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  constructor (){}

  canActivate() {
    var pasas = localStorage.getItem("conectado")=="true";
    return pasas;
}

}

