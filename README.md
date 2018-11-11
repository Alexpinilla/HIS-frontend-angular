
# HISFrontendAngular

Actividad didáctica consistente en la creación de un frontend con angular simulando una app de gestión hospitalaria

Para probar la aplicación: 
Administrador: username: Manolo password: 0
Paciente: username: Juan password: 0

## Objetivos

- Creación de una arquitectura avanzada de frontend MVC 
- Gestión de usuarios con distintos roles
- Uso avanzado de servicios siguiendo el principio de responsabilidad única.
- Centralizar el estado de la app en un servicio central (llamado por ejemplo stateManagerService o dataService ) del cuál se nutren todos los componentes y servicios
- Creación de vistas publicas y privadas gestionadas por el router del frontend haciendo uso del evento canActivate de la configuración del router


## Roles

- Doctor
- Patient
- Technical
- Admin (permiso root: puede hacer todo)


## Api

Simular la interacción con un backend mediante un servicio fake (mock) 


### Vistas

/patients lista de pacientes
/histories lista de historiales clínicos
/histories/:id  historial clínico de un paciente
/user/:id  perfil de usuario
/profile  perfil del usuario logeado
/mi-historia  Historía clínica del paciente logeado.

Aplicación realizada con angular, sin frameworks css y reponsive.
