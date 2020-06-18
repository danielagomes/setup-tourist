const newElement = (type, attributes = {}) => {
  const element = document.createElement(type);
  for (let [key, value] of Object.entries(attributes)) {
    if (key == "innerText") {
      element.innerText = value;
    } else {
      console.log(key, value);
      element.setAttribute(key, value);
    }
  }
  return element;
};

const onSubmit = () => {
  // TODO validate channel url
  const channelInputValue = docment.querySelector(".channel-input");
  // send to backend
};

const creators = [
  { name: "Code Drip", img: "https://" },
  { name: "Code Drip", img: "https://" },
  { name: "Code Drip", img: "https://" },
];

const container = document.querySelector(".container");

creators.forEach((creator) => {
  const card = newElement("div", { class: "card" });
  const title = newElement("h4", { innerText: creator.name });
  const img = newElement("img", { src: creator.img });
  card.appendChild(title);
  card.appendChild(img);
  container.appendChild(card);
});
