//clase para los datos
//lo idel sería tener una clase de pasaje y otra de datos de usuario
class Reserva{
    constructor(origen, destino, fecha, horario, pasajes, nombre, apellido, DNI, metodoPago){
    this.origen=origen
    this.destino=destino
    this.fecha=fecha
    this.horario=horario
    this.pasajes=pasajes
    this.nombre=nombre
    this.apellido=apellido
    this.DNI=DNI
    this.metodoPago=metodoPago
}}


class UI{
    
    static addPasajes(pasajesStored){
        const list=document.querySelector("#datos-pasajeros")
        const datos=document.createElement('div')
        datos.innerHTML=`
        <p><b>Nombre:</b> ${pasajesStored.nombre}</p>
        <p><b>Apellido:</b> ${pasajesStored.apellido}</p>
        <p><b>DNI:</b> ${pasajesStored.DNI}</p>
        <p><b>Medio de pago:</b> ${pasajesStored.metodoPago}</p>
        <p><b>Origen: </b> ${pasajesStored.origen}</p>
        <p><b>Destino:</b> ${pasajesStored.destino}</p>
        <p><b>Fecha:</b> ${pasajesStored.fecha}</p>
        <p><b>Horario: </b> ${pasajesStored.horario}</p>
        <p><b>Cantidad de Pasajes:</b> ${pasajesStored.pasajes}</p>        
        `
        list.appendChild(datos)
        list.style.display='flex'
    }
    static showAlert(message, type){
        const alerta=document.querySelector('#alerta')
        alerta.className=`${type}`
        alerta.innerHTML=`<h2>${message}</h2>`
        alerta.style.display='block'
        setTimeout(()=>document.querySelector('#alerta').style.display='none', 2000)
    }
    static clearFields(){
        document.getElementById('nombre').value=''
        document.getElementById('apellido').value=''
        document.getElementById('DNI').value=''
        document.getElementById('mediosPago').value=''
        document.getElementById('origen').value=''
        document.getElementById('destino').value=''
        document.getElementById('fecha').value=''
        document.getElementById('horario').value=''
        document.getElementById('pasajes').value=''
    }
    static hideForm(){
        const formulario=document.querySelector('#form-data')
        formulario.style.display='none'
    }
}

//add Pasaje
document.querySelector('#form-data').addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const DNI=document.getElementById('DNI').value
    const metodoPago=document.getElementById('mediosPago').value
    const origen=document.getElementById('origen').value
    const destino=document.getElementById('destino').value
    const fecha=document.getElementById('fecha').value
    const horario=document.getElementById('horario').value
    const pasajes=document.getElementById('pasajes').value
    //validate
    
    if( nombre === '' || apellido === '' || 
    DNI === '' || metodoPago === '' || 
    origen==='' || destino===''||
    fecha===''|| horario===''|| pasajes===''
    ){
        UI.showAlert('Los campos no pueden estar vacios', 'danger')
        
        
    }else if (origen === destino){
        UI.showAlert('El origen y el destino no pueden ser el mismo', 'danger')
    }else{
        const reserva= new Reserva(origen, destino, fecha, horario, pasajes, nombre, apellido, DNI, metodoPago)
        UI.addPasajes(reserva)
        UI.clearFields()
        UI.showAlert('Exito', 'success')
        UI.hideForm()
    }
    document.documentElement.scrollTop = 0
    
})