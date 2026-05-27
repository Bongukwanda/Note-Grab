const textList = document.getElementById("note_list");
const textModal = document.getElementById("text-modal")
const btnViewNote = document.getElementById("view_note");
const btnAddNote = document.getElementById("add_note");

let fileNumber = 4;

function viewNotes() {
  if (textList.style.visibility == "visible"){
    textList.style.visibility = "hidden";
  }
  else {
    textList.style.visibility = "visible";
  }
}

function addNote() {
  if (textModal.style.display == "none"){
    textModal.style.display = "flex"
  }
}

btnViewNote.addEventListener("click", viewNotes);
btnAddNote.addEventListener("click", addNote);