const textList = document.getElementById("note_list");
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
  let myTestFile = `Test ${this.fileNumber}.pdf`;
  myTestFile += 1;
  textList.append(`<hr>\n\n<div role='listitem'>${myTestFile}</div>`);
}

btnViewNote.addEventListener("click", viewNotes);
btnAddNote.addEventListener("click", addNote);