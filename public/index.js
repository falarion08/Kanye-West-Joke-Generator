const form = document.forms[0];
const buttons = form.querySelectorAll("input");
const img = document.querySelector("img");

buttons[0].addEventListener("mouseenter",kanyeHappy);
buttons[0].addEventListener("mouseleave",kanyeNeutral);
buttons[1].addEventListener("mouseenter",kanyeSad);
buttons[1].addEventListener("mouseleave",kanyeNeutral);

function kanyeHappy(){
 img.src ="upvote_kanye.png";
}
function kanyeNeutral(){
    img.src ="kanye_neutral.png";
}
function kanyeSad(){
    img.src  = "downvote_kanye-1-1.jpg"
}