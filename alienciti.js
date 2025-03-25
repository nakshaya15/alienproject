document.addEventListener("DOMContentLoaded", function () {
    var alienForm = document.getElementById("alienForm");
    var translateButton = document.getElementById("translateButton");
    var dancePartyButton = document.getElementById("danceParty");
    var mysteryScene = document.getElementById("mysteryScene");
    var fakeCrash = document.getElementById("fakeCrash");
    var alienLaugh = document.getElementById("alienLaugh");
    alienForm.addEventListener("submit", function (Event) {
        Event.preventDefault();
        var alienName = document.getElementById("alienName").value;
        var reason = document.getElementById("reason").value;
        var captcha = document.getElementById("captcha").value;
        if (alienName.length < 5) {
            alert("Alien name must be atleast 5 characters long!");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully! Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", function () {
        alert("Alien Translator Activated! Beep Boop!");
    });
    dancePartyButton.addEventListener("click", function () {
        alert("alien DJ Mode On..! Its time to Alien party!!");
        alienLaugh.play();
    });
    document.querySelectorAll("input[name = 'relation']").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var selectedRelations = Array.from(document.querySelectorAll("input[name = 'relation']:checked"));
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", function () {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(function () {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
