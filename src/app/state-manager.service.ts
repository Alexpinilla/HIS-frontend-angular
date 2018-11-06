import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  constructor(private api: ApiService) { }
  logeado = '';

  state = {
    auth: null,
  }
  estado() {
    return this.state.auth
  }

  loginForm(form: NgForm) {
    console.log('users', this.api.users)
    if (this.api.users.find(item => form.value.usuario === item.username && form.value.pass === item.password)) {
      var itemUsuario = this.api.users.find(item => form.value.usuario === item.username && form.value.pass === item.password)
      localStorage.setItem("nombreusuario", form.value.usuario);
      localStorage.setItem("rol", itemUsuario.role);
      localStorage.setItem("conectado", "true");
      localStorage.setItem("claseUsuario", "user")
      localStorage.setItem("claseImagenUsuario", "assets/userIcon.png")
      localStorage.setItem('uidUser', itemUsuario.uid)
      this.state.auth = form.value.usuario;
      this.logeado = 'logeado';
      var a = document.getElementById("alex")
      var a2 = document.getElementById("alexIcon")
      console.log(this.api.users)
      console.log('función estado () prueba: ' + this.estado())
    }
  }
  registerForm(form: NgForm) {
    var newRol = form.value.role;
    var newUid = form.value.uid;
    var newName = form.value.name;
    var newSurname = form.value.surname;
    var newDni = form.value.dni;
    var newUsername = form.value.usuario;
    var newPassword = form.value.pass;
    var newUser = { role: newRol, uid: newUid, name: newName, surname: newSurname, dni: newDni, username: newUsername, password: newPassword }
    this.api.users.push(newUser);
    console.log(this.api.users)
  }

  getUserProfile() {
    var perfil = localStorage.getItem('nombreusuario')
    var itemUsuario = this.api.users.find(item => perfil === item.username)
    let lista = document.getElementById("lista");
    console.log(itemUsuario.role);
    console.log(lista)
    lista.insertAdjacentHTML(
      "beforeend", "<div class='historiaClinica'>" +
      "<table class='tabla'><tr class='titulosTabla'><td>Name</td><td>Surname</td><td>DNI</td><td>Username</td><td>ROL</td></tr><tr><td>" + itemUsuario.name + "</td><td>" + itemUsuario.surname + "</td><td>" + itemUsuario.dni + "</td><td>" + itemUsuario.username + "</td><td>" + itemUsuario.role + "</td></tr></table>"
    );
  }
  getPatients() {
    let a = this.api.users;
    console.log(this.api.users);
    let lista = document.getElementById("lista");
    for (let i of a) {
      lista.insertAdjacentHTML("beforeend", "<div class='historiaClinica'>" +
        "<table class='tabla'><tr class='titulosTabla'><td>Name</td><td>Surname</td><td>SIP</td><td>Historias</td><td>ROL</td></tr><tr><td>" + i.name + "</td><td>" + i.surname + "</td><td>" + i.sip + "</td><td>" + i.historiesIds + "</td><td>" + i.role + "</td></tr></table>"
      );
    }
  }
  local() {
    return localStorage.getItem('nombreusuario')
  }

  claseLocal() {
    return localStorage.getItem('claseUsuario')
  }
  claseImagenLocal() {
    return localStorage.getItem('claseImagenUsuario')
  }

  login(user) {
    this.state.auth = user;
    this.logeado = 'logeado';
  }

  historiesNav() {
    if (localStorage.getItem("rol") === "doctor" || localStorage.getItem("rol") === "admin" || localStorage.getItem("rol") === "technical") {
      return 'Historias Clínicas';
    }
  }
  patientsNav() {
    if (localStorage.getItem("rol") === "doctor" || localStorage.getItem("rol") === "admin" || localStorage.getItem("rol") === "technical") {
      return 'Pacientes';
    }
  }
  newUserNav() {
    if (localStorage.getItem("rol") === "technical" || localStorage.getItem("rol") === "admin") {
      return 'Nuevo Usuario';
    }
  }
  miHistoria() {
    if (localStorage.getItem("rol") === "patient") {
      return 'Mi historia clínica';
    }
  }
  getMedicalHistories() {
    return this.api.users
  }
  getNameFromUid(uid) {
    return this.api.users.find(user => user.uid === uid)
  }
  getNamesFromUid(uid) {
    return this.api.users.find(user => user.uid === uid).name
  }
  getSipFromUid(uid) {
    return this.api.users.find(user => user.uid === uid).sip
  }
  getHistoriesIds(uid) {
    return this.api.users.find(user => user.uid === uid).historiesIds
  }
  getUserFromUid(uid){
    return this.api.users.find(user => user.uid === uid)
  }
  comprobacionLogeado(){
    if(localStorage.getItem('conectado')=='true'){
      return 'oculto'
    }
    else {
      return 'login'
    }
  }
  bienvenido(){
    if(localStorage.getItem('conectado')=='true'){
      return 'bienvenido'
    }
    else {
      return 'oculto'
    }
  }
  ocultar(){
    return localStorage.getItem('ocultar')
  }

}
