function watch() {
  let name = prompt("what is your name?");
  let email = prompt("What is your email?");
  let genra = prompt("What is you favorite genra?");
  alert("Thank you, " + name + " for join us");
}
{
  let watchButton = document.querySelector(".watch-button");
  watchButton.addEventListener("click", watch);
}
