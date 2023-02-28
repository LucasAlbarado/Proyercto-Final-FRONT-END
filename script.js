window.onscroll = function() {
    efectoHabilidades()
};
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("c#").classList.add("barra-progreso3");
        document.getElementById("sql").classList.add("barra-progreso4");
        document.getElementById("ps").classList.add("barra-progreso5");
        document.getElementById("micros").classList.add("barra-progreso6");
        document.getElementById("scrum").classList.add("barra-progreso7");
        document.getElementById("equipo").classList.add("barra-progreso8");
        document.getElementById("presentacion").classList.add("barra-progreso9");
        document.getElementById("comunicacion").classList.add("barra-progreso10");
        document.getElementById("honesto").classList.add("barra-progreso11");
        document.getElementById("predis").classList.add("barra-progreso12");

    }
}