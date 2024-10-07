// primeira parte
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links')
    // troca o estado da classe .toggle para active
    menuToggle.classList.toggle('active')
    links.classList.toggle('active')
}