function search() {
  document.querySelector(".blockpart1").style.display="block";
  document.querySelector(".blockpart2").style.display="block";
  const arr = [
    "Constructive Algorithms",
    "Brute Force",
    "Strings",
    "Data Structures",
    "Math",
    "Inheritance",
  ];
  const input = document.getElementById("search").value.toLowerCase(); // contains the value entered by the user; also case insensitive
  for( let i=0;i<3;i++)
  {
    if(arr[i].toLowerCase()==input)
    document.querySelector(".blockpart2").style.display="none";
  }
  for( let i=3;i<6;i++)
  {
    if(arr[i].toLowerCase()==input)
    document.querySelector(".blockpart1").style.display="none";
  }
}

const btn = document.querySelector("#lighting");
// toggling about the light-mode of the webpage
btn.addEventListener("click", function(e){
    if(document.querySelector("body").className == "light-theme")
    document.querySelector("body").classList.replace("light-theme","dark-theme");
    else
    document.querySelector("body").classList.replace("dark-theme","light-theme");
})
