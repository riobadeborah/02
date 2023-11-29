// Create a new article element and add it to page 
const mangoes = document.createElement ("article");
mangoes.innerHTML = "I really love mangoes";
document.getElementById("testDOM").appendChild (mangoes);

//// Set the text content and add the CSS class for H1-size font 
const welcomeText = document.getElementById("test");
welcomeText.innerHTML = "Welcome to this Website";
welcomeText.classList.add("h1-size"); // Apply the CSS class

// Add and remove class2
document.getElementById("testDOM").classList.add("class1") 
document.getElementById("testDOM").classList.add("class2") 
document.getElementById("testDOM").classList.remove("class2") 