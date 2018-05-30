var topics = ["hat", "mat", "bat", "rat", "fat"];
$("#hat").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=hat"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", "surf image");
        $("#images").prepend(image);
    });
});
$("#mat").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=mat"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", "fly image");
        $("#images").prepend(image);
    });
});
$("#bat").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=bat"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", "beach image");
        $("#images").prepend(image);
    });
});
$("#rat").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=rat"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", "bike image");
        $("#images").prepend(image);
    });
});
$("#fat").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=fat"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", "fire image");
        $("#images").prepend(image);
    });
});