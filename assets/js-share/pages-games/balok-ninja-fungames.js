// share wa
var element = document.getElementById("Whatsapp");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://wa.me/?text=Balok Ninja FunGames : https://fungames.vercel.app/Pages-Games/Balok-Ninja/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share wa

// share telegram
var element = document.getElementById("Telegram");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://telegram.me/share/url?text=Balok Ninja FunGames FunGames : Image&url=https://fungames.vercel.app/Pages-Games/Balok-Ninja/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share telegram

/* Gmail *
var element = document.getElementById("Gmail");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://mail.google.com/mail/?view=cm&to=%7Bemail_address%7D&su=Download%20Design%20BCA%20Mobile%20%7C%20Stack%20Image&body=https://www.stackimage.my.id/File/Download-Design/Design-Bca-Mobile/&bcc=%7Bemail_address%7D&cc=%7Bemail_address%7D';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
/* Gmail */

copy.onclick = () => {
  input.select(); //select input value
  if (document.execCommand("copy")) { //if the selected text copy
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(() => {
      window.getSelection().removeAllRanges(); //remove selection from document
      field.classList.remove("active");
      copy.innerText = "Copy";
    }, 3000);
  }
}