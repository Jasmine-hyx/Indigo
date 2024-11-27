document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("search-button").addEventListener("click", function() {
        const searchText = document.getElementById("search-input").value.toLowerCase().trim();

        const allFigures = document.querySelectorAll(".grid-container figure");
        allFigures.forEach(figure => figure.style.display = "none");

        const categoryKeywords = {
            "discarded-objects-and-waste": ['cup','cups', 'coffee','coffee cups','waste', 'waste coffee cups','old tire','tire','tires', 'bottle cap', 'bottle caps','water bottles','water bottle','waste water bottles', 'glass', 'cigarette butts','cigarette butt', 'old cigarette butts','tape','tapes'],
            "human-interaction-imprints": ['benches', 'poster', 'hand imprints', 'watercolor', 'torn posters', 'tree engraved', 'old posters','colorful benches','colorful','colorful bench','broken','broken posters'],
            "wear-and-tear-in-public-spaces": ['wear', 'tear', 'walls', 'old walls', 'broken glass', 'floors', 'bricks', 'peel','peeling walls','peeling walls','wears','tears','wears and tears']
        };

        let matchFound = false;
        for (const [category, keywords] of Object.entries(categoryKeywords)) {
            if (matchesCategory(searchText, keywords)) {
                document.querySelector(`.${category}`).style.display = "block";
                matchFound = true;
            }
        }

        if (!matchFound) {
            alert("No matching category found.");
        }
    });

     document.getElementById("show-all-button").addEventListener("click", function() {
        const allFigures = document.querySelectorAll(".grid-container figure");
        allFigures.forEach(figure => figure.style.display = "block");
    });

    function matchesCategory(searchText, keywords) {
        return keywords.some(keyword => searchText.includes(keyword));
    }
});
