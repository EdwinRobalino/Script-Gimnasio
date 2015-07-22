var personaArray = [];
var usuarioArray = [];
var admnistradorArray = [];
var claseArray = [];
var datos;


window.onload = function(){
    var datosSistema = '{"clases":[{"id":"10","nombre":"Bailoterapia","cupos":5,"descripcion":"Los bailes realizados brindan una serie de movimientos dinámicos y coordinados, comenzando desde la cabeza hasta los pies, hacen que los músculos tomen fuerza, aumentando el tono muscular y la resistencia aeróbica. Permiten aumentar la intensidad y elevar las pulsaciones.","horarios":[{"dia":"lunes","hora":"11:30","tiempo":"45","inscritos":[]},{"dia":"martes","hora":"11:30","tiempo":"45","inscritos":[]},{"dia":"miércoles","hora":"11:30","tiempo":"45","inscritos":[]},{"dia":"jueves","hora":"11:30","tiempo":"45","inscritos":[]}],"instructor":"0989898760"},{"id":"20","nombre":"Jiu jitsu","cupos":5,"descripcion":"Arte marcial japonés clásico o koryū budō que abarca una variedad amplia de sistemas de combate modernos basados en la defensa sin armas de uno o más agresores tanto armados como desarmados.","horarios":[{"dia":"lunes","hora":"12:30","tiempo":"45","inscritos":["1036464747","12876876556"]},{"dia":"miércoles","hora":"12:30","tiempo":"45","inscritos":[]},{"dia":"viernes","hora":"12:30","tiempo":"45","inscritos":[]}],"instructor":"0987654321"}],"instructores":[{"nombre":"Daria","apellido":"Velez","edad":"35","cedula":"0989898760"},{"nombre":"Luis","apellido":"Paredes","edad":"42","cedula":"0987654321"}],"usuarios":[{"cedula":"1036464747","nombre":"Pablo","apellido":"Arias","edad":"22","pago":"anual","usuario":"user1","clave":"pass1"},{"cedula":"12876876556","nombre":"Patricia","apellido":"Perez","edad":"18","pago":"mensual","usuario":"user2","clave":"pass2"}],"administradores":[{"cedula":"2374698329","nombre":"María","apellido":"Mera","edad":"28","usuario":"user3","clave":"pass3"}]}'

    datos = JSON.parse(datosSistema);
    
    //PERSONA
    for(i = 0; i<datos.instructores.length; i++){
        personaTemp = new Persona(datos.instructores[i].nombre, datos.instructores[i].apellido, datos.instructores[i].edad, datos.instructores[i].cedula);
        personaArray.push(personaTemp);
    }
    
    //CLASES
    for (i = 0; i<datos.clases.length; i++){
        claseTemp = new Clase(datos.clases[i].id, datos.clases[i].nombre, datos.clases[i].cupos, datos.clases[i].descripcion, datos.clases[i].horarios, datos.clases[i].instructor)
        claseArray.push(claseTemp);
    }
    
    //USUARIO
    for (i = 0; i<datos.usuarios.length; i++){
        usuarioTemp = new Usuario(datos.usuarios[i].nombre, datos.usuarios[i].apellido, datos.usuarios[i].edad, datos.usuarios[i].cedula, datos.usuarios[i].clave, datos.usuarios[i].pago);
        usuarioArray.push(usuarioTemp);
    }
    
    //ADMINISTRADOR
    for (i = 0; i<datos.administradores.length; i++){
        adminTemp = new Administrador(datos.administradores[i].nombre, datos.administradores[i].apellido, datos.administradores[i].edad, datos.administradores[i].cedula, datos.administradores[i].usuario, datos.administradores[i].clave);
        admnistradorArray.push(adminTemp);
    }
    
    
    
    
    // *********************CONSTRUCTORES**************************
    
    function Persona(nombre,apellido,edad,cedula){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
    }
    
    function Usuario(nombre, apellido, edad, cedula, usuario, clave, pago){
        Persona.call(this, nombre, apellido, edad, cedula);
        this.usuario = usuario;
        this.clave = clave;
        this.pago = pago;
    }
    
    function Administrador(nombre, apellido, edad, cedula, usuario, clave){
        Persona.call(this, nombre, apellido, edad, cedula);
        this.usuario = usuario;
        this.clave = clave;
    }
    
    function Clase(id, nombre, cupos, descripcion, horarios, instructor){
        this.id = id;
        this.nombre = nombre;
        this.cupos = cupos;
        this.descripcion = descripcion;
        this.horarios = horarios;
        this.instructor = instructor;
    }
    
    function Horario(dia, hora, tiempo, inscritos){
        this.dia = dia;
        this.hora = hora;
        this.tiempo = tiempo;
        this.inscritos = inscritos;
    }
    
    function Calendario(dia){
        this.dia = dia;
    }
    
    function Dia(slot, fecha){
        this.slot = slot;
        this.fecha = fecha;
    }
    
    function Slot(clase, estado, hora){
        this.clase = clase;
        this.estado = estado;
        this.hora = hora;
    }
    // ------------------------------------------------------------------
    
    

}