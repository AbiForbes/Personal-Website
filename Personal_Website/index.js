const navBarItems = document.getElementsByClassName("nav_bar_item_landing");
const navIntro = navBarItems[0];
const navEdu = navBarItems[1];
const navWorkHistory = navBarItems[2];
const photoOnLandingPage = document.getElementById("Headshot_Landing");
const menuButton = document.getElementById("Left_nav_button");
const menuDiv = document.getElementById("Menu_Space");

const menuSpace = navIntro.addEventListener("mouseover", () => {
  navIntro.style.backgroundColor = "black";
  navEdu.style.opacity = "0.25";
  navWorkHistory.style.opacity = "0.25";
});

navIntro.addEventListener("mouseout", () => {
  navIntro.style.backgroundColor = "#111225";
  navEdu.style.opacity = "1";
  navWorkHistory.style.opacity = "1";
});

navEdu.addEventListener("mouseover", () => {
  navEdu.style.backgroundColor = "black";
  navIntro.style.opacity = "0.25";
  navWorkHistory.style.opacity = "0.25";
});

navEdu.addEventListener("mouseout", () => {
  navEdu.style.backgroundColor = "#111225";
  navIntro.style.opacity = "1";
  navWorkHistory.style.opacity = "1";
});

navWorkHistory.addEventListener("mouseover", () => {
  navWorkHistory.style.backgroundColor = "black";
  navIntro.style.opacity = "0.25";
  navEdu.style.opacity = "0.25";
});

navWorkHistory.addEventListener("mouseout", () => {
  navWorkHistory.style.backgroundColor = "#111225";
  navIntro.style.opacity = "1";
  navEdu.style.opacity = "1";
});

const enlargeLandingPhoto = () => {
  photoOnLandingPage.style.minWidth = "350px";
};

const shrinkLandingPhoto = () => {
  photoOnLandingPage.style.minWidth = "275px";
};

const showMenu = () => {
  menuDiv.style.visibility = "visible";
  menuButton.removeEventListener("mouseover", showMenu);
};

const hideMenu = () => {
  menuDiv.style.visibility = "hidden";
};

const showMenuAndContinueToShow = () => {
  menuDiv.style.visibility = "visible";
  menuDiv.addEventListener("mouseover", showMenu);
  menuButton.addEventListener("mouseover", showMenu);
  menuButton.addEventListener("mouseout", hideMenu);
};

photoOnLandingPage.addEventListener("mouseover", enlargeLandingPhoto);
photoOnLandingPage.addEventListener("mouseout", shrinkLandingPhoto);

menuButton.addEventListener("click", showMenuAndContinueToShow);
menuDiv.addEventListener("mouseout", hideMenu);

navIntro.addEventListener("click", () => {
  window.location.href = "Introduction.html";
});

navEdu.addEventListener("click", () => {
  window.location.href = "Education.html";
});

navWorkHistory.addEventListener("click", () => {
  window.location.href = "Work_History.html";
});
