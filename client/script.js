const CREATORS_URL = "http://localhost:3000/creators";

const newElement = (type, attributes = {}) => {
  const element = document.createElement(type);
  for (let [key, value] of Object.entries(attributes)) {
    if (key == "innerText") {
      element.innerText = value;
    } else {
      // console.log(key, value);
      element.setAttribute(key, value);
    }
  }
  return element;
};

const submitCreator = async () => {
  console.log("hey now hey now");
  // TODO validate channel url
  const channelInput = document.querySelector(".channel-input");
  // send to backend
  const response = await fetch(CREATORS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: channelInput.value }),
  });
  // TODO add a spinner / page loader , operation takes too long and page freezes
  console.log(response.status);
  if (response.status === 201) {
    const creator = await response.json();
    console.log(creator);
    // add new creator to container list
    const container = document.querySelector(".container");
    const card = newElement("div", { class: "card" });
    const title = newElement("h4", { innerText: creator.name });
    const img = newElement("img", { src: creator.imgURL });
    card.appendChild(title);
    card.appendChild(img);
    container.appendChild(card);

    // clear input field
    channelInput.value = "";
  }
};

const loadCreators = async () => {
  const response = await fetch(CREATORS_URL);
  const creators = await response.json();
  console.log(creators);
  const container = document.querySelector(".container");

  creators.forEach((creator) => {
    const card = newElement("div", { class: "card" });
    const title = newElement("h4", { innerText: creator.name });
    const img = newElement("img", { src: creator.imgURL });
    card.appendChild(title);
    card.appendChild(img);
    container.appendChild(card);
  });
};

loadCreators();
