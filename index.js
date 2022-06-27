const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('keyup', function(event) {
    const searchQuery = event.target.value.toLowerCase() // the 'event' object refers to the `KeyboardEvent` in this case as the listened event is 'keyup' // the 'target' property returns the HTML element that triggered the event (in this case <input id="usernameInput" type="text">) // 'event.target.value' which in the case of our input box, returns the value the user typed in
    const searchQueryLowercase = searchQuery.toLowerCase() // converting string to lowercase to compare with the names stored in the array
    const allNamesDOMCollection = document.getElementsByClassName('name') // storing all the HTML elements with a 'name' class in an array
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent // storing the content of the HTML elements
        const currentNameLowercase = currentName.toLowerCase() // converting strings to lowercase to compare with the name searched in the input field

        // the `includes` method search if the `searchQueryLowercase` string can be found in the `currentNameLowercase` string
        if (currentNameLowercase.includes(searchQueryLowercase)) {
            allNamesDOMCollection[i].style.display = 'block' // display the HTML element 
        } else {
            allNamesDOMCollection[i].style.display = 'none' // hide the HTML element
        }
        console.log(currentNameLowercase)
    }
})