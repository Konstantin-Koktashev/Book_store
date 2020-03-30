"use strict";
var gProjects = [
  {
    id: "1",
    name: "MineSweeper",
    title: "My MineSweeper Game",
    desc: "A Modern MineSweeper, Slick Design",
    url: "https://konstantin-koktashev.github.io/MineSwepeer/",
    publishedAt: '18/03/2020',
    labels: ["Matrixes", "keyboard events"]
  },
  {
    id: "2",
    name: "bookstore",
    title: "A Book Store ",
    desc: "Containing Support For Users",
    url: "projs/sokoban",
    publishedAt: `28/03/2020`,
    labels: ["UI", "keyboard events"]
  }
];


function getProjectsForDisplay(){
    //Dont want Someone to able to change the date, sending a copy
    return [...gProjects];
}

function getFormValues() {
  var name = document.querySelector("#form-contact-name").value.trim();
  var email = document.querySelector("#form-contact-email").value.trim();
  var phone = document.querySelector("#form-contact-phone").value.trim();
  var phone = document.querySelector("#form-contact-phone").value.trim();
  var message = document.querySelector("#form-contact-message").value.trim();
  return { name: name, email: email, phone: phone,message:message };
}
