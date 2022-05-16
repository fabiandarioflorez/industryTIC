
window.onload = function(){
  // Funcion para utilizar los tooltips
  document.querySelectorAll("[data-bs-toggle='tooltip']").forEach(e => 
    new bootstrap.Tooltip(e, {
      boundary: document.body
    })
    
  )
  //Para las ventanas de eliminar
  var modal = document.getElementById('deleteModal')
  modal.addEventListener('show.bs.modal',function(event){
      var button = event.relatedTarget
      var name =  button.getAttribute('data-bs-name')
      var id =  button.getAttribute('data-bs-id')
      var url = button.getAttribute('data-bs-url')
      modal.querySelector(".modal-title span").innerHTML = name
      modal.querySelector("#deleteProduct").setAttribute("href",url+id)
  })
  
  
  
}
