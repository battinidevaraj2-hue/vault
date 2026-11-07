// Request donation item
function requestItem(item) {
    alert("You selected " + item +
          ". Please contact the donor to arrange collection.");
}

// Search donation items
document.getElementById("search")
.addEventListener("input", function() {

    let searchValue = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let itemName = card.innerText.toLowerCase();

        if (itemName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});

// Submit donation form
document.getElementById("donationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("itemName").value;
    let category = document.getElementById("category").value;
    let condition = document.getElementById("condition").value;
    let description = document.getElementById("description").value;

    let newCard = document.createElement("div");

    newCard.className = "card";

    newCard.innerHTML = `
        <h3>${escapeHTML(category)}</h3>
        <p>${escapeHTML(name)}</p>
        <p>Condition: ${escapeHTML(condition)}</p>
        <p>${escapeHTML(description)}</p>
        <button type="button">Donation Listed</button>
    `;

    document.getElementById("itemList")
        .appendChild(newCard);

    document.getElementById("message").innerText =
        "Your donation has been successfully added!";

    this.reset();

});

// Prevent HTML injection from form input
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
