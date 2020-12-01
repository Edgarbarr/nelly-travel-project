const form = document.getElementById("destination-form");
function addToList(e) {
  e.preventDefault();
  const validForm = form.checkValidity();
  if (!validForm) {
    form.reportValidity();
    return false;
  }
  let destinationName = document.getElementById("destination").value;
  let location = document.getElementById("location").value;
  let photo = document.getElementById("photo").value;
  let description = document.getElementById("description").value;
  if (!photo) {
    photo =
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fhawaii-december-EVRYMONTH1019.jpg&q=85";
  }
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = cardHTML(destinationName, location, photo, description);
  document.getElementsByTagName("form")[0].reset();
  document.getElementById("destination-details").children[0].innerHTML =
    "My WishList";
  document.getElementById("card-container").appendChild(newCard);
}

const cardHTML = (destinationName, location, photo, description) => `
<div class="img-container">
  <img class="destination-img" src=${photo}/>
</div>
<div class="card-details">
<h4>${location}</h4>
<h5>${destinationName}</h5>
  <p>${description}</p>
  <button onclick="edit(this.parentElement.parentElement)" class="btn btn-warning float-left">Edit</button>
  <button onclick="removeCard(this.parentElement.parentElement)"class="btn btn-danger float-right">Remove</button>
</div>
`;

const removeCard = (card) => {
  card.remove();
};
const edit = (card) => {
  console.log("hello");
  let destinationName = window.prompt("destination name?");
  let location = prompt("location?");
  let photo = prompt("photo url?");
  let description = prompt("description?");
  if (!photo) {
    photo =
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fhawaii-december-EVRYMONTH1019.jpg&q=85";
  }
  card.getElementsByTagName("h4")[0].innerHTML = location;
  card.getElementsByTagName("h5")[0].innerHTML = destinationName;
  card.getElementsByTagName("p")[0].innerHTML = description;
  card.getElementsByTagName("img")[0].src = photo;
};
