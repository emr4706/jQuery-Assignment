// Make the project great again with jQuery ..

// 1.Delete buttons should remove the topics (li elements).

$(document).on("click", ".delete", function (e) {

    e.preventDefault();

    $(this).closest("li").remove(); // closest: select the first parent.
    // another way -> // $("li").eq(0).remove(); // eq syntax $(selector).eq(index). what want you do.
    var muzik= new Audio( "audio/Cave.mp3");
    muzik.play();
});

// 2. Add button should add a topic (an li element inside 2 span elements).

$("button").on("click", function (e) { 

    e.preventDefault();
    let newList = $("#add-list").val();

    if(newList !== " ") {
     
        $("ul").append("<li><span class='name'> " + newList+ "</span><span class='delete'>delete</span></li>");
        $("#add-list").val(" "); // click ettikten sonra texti sifirlarlamyi saglar.
    };
    
});

// 3. There is a checkbox under the topics. It should hide all topics when checked, unhide when unchecked. 
// (hide all ul elements)

$("#hide").click(function (e) { 

    $("ul").toggle();

});

// 4. There is search field above. It should filter the topics (filter li elements). It should be case-insensitive.

$("#searchInput").on("keyup", function() {
    var searchList = $(this).val().toLowerCase();
    $("li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchList) > -1)
    });
  });  // ?????????

