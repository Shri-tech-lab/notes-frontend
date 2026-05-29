const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {

  let inputBox = document.createElement("p");
  let deleteBtn = document.createElement("span");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑️";

  inputBox.appendChild(deleteBtn);
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", function(e){

  if(e.target.classList.contains("delete-btn")){
    e.target.parentElement.remove();
    updateStorage();
  }

  else if(e.target.classList.contains("input-box")){
    let notes = document.querySelectorAll(".input-box");

    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }

});