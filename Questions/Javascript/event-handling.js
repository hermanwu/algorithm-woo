// Suppose we have a page with a button inside a div.
// We then execute the following Javascript. What will the console read after the button is clicked?

$("div").on("click", function() {
    console.log("div clicked");
});

$("button").click(function() {
    console.log("button clicked");
});

/*
Explain event bubbling:
    a. I attach an on-click handler to a DIV element.
    b. That handler sets the DIV to display: none when clicked.
    c. I also attach an on-click event handler to a Button element within the DIV.
    d. That click handler provides a alert with instructions for the page.
    e. What happens when I click the BUTTON element?
    */