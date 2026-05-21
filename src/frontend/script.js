const buttonToShowNotes = document.getElementsByClassName("button_check_notes");
const textList = document.getElementsByClassName("text_list");


function showTextList() {
  if (textList.style.display == "flex"){
    textList.style.display = "none";
  }
  else {
    textList.style.display = "flex";
  }
}

buttonToShowNotes.addEventListener("click", showTextList);