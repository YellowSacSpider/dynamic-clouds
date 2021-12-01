const test = document.getElementById("test");
const message = document.getElementById("message");

// Create text paragraph
let isActive;
const tag = document.createElement("p");
tag.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Create list
const mainList = document.createElement("ul");
const elements = ["Element1", "Element2", "Element3", "Element4"];

const createElementList = (penesArr) => {
    elementsArr.forEach((item) => {
        const elementLi = document.createElement("li");
        elementLi.textContent = item;
        mainList.appendChild(elementLi);
    });
};

// Handle elements existence

const toggleElements = () => {
    isActive = !isActive;

    if (isActive) {
        createElementList(elements);

        message.append(mainList, tag);
    } else {
        tag.remove();
        mainList.remove();
    }

    console.log(isActive);
};

// On Load
test.addEventListener("click", toggleElements);
