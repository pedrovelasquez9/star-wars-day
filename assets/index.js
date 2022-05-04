const ligthJedi = document.getElementById("light-jedi");
const ligthSith = document.getElementById("light-sith");

const openLightsaber = (type) => {
  type === "jedi" ? toggleLightsaber(ligthJedi) : toggleLightsaber(ligthSith);
};

const toggleLightsaber = (lightsaberElem) => {
  lightsaberElem.classList.contains("close-lightsaber")
    ? lightsaberElem.classList.replace("close-lightsaber", "open-lightsaber")
    : lightsaberElem.classList.replace("open-lightsaber", "close-lightsaber");
};
