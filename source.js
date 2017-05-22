var cats = [
        {
            name: "Alfred",
            url: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0e09cd9c1a159318?w=1200&h=600&crop=1",
            clicks: 0
        },
        {
            name: "Gable",
            url: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg",
            clicks: 0
        },
        {
            name: "Snuggles",
            url: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
            clicks: 0
        },
        {
            name: "Sanderson",
            url: "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
            clicks: 0
        },
        {
            name: "Brands",
            url: "https://s-media-cache-ak0.pinimg.com/736x/35/8c/57/358c57c204a2fec21fa50b917a0728aa.jpg",
            clicks: 0
        },
    ];

$(document).ready(function() {
    for (var i = 0; i < cats.length; ++i) {
        var cat = cats[i];
        var elem = document.createElement("h2");
        elem.textContent = cat["name"];
        $("#catList").append(elem);
        elem.addEventListener('click', (function(catCopy){
            return function() {
                var catName = '<h1>' + catCopy["name"] + '</h1>';
                var catImg = '<img src="' + catCopy["url"] +'">';
                var catClicks = '<h1 id="numClicks">' + catCopy["clicks"] + '</h1>';
                
                $("#catDiv").html(catName+catImg+catClicks);
                
                $("img").on("click", function(){
                    $("#numClicks").html(++catCopy["clicks"]);
                });
            };
        })(cat));
    }
});

