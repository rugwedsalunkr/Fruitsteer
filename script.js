function toggleIngredients(ingredientId) {
    const ingredientsDiv = document.getElementById(ingredientId);
    
    ingredientsDiv.style.display = ingredientsDiv.style.display === 'none' || ingredientsDiv.style.display === '' ? 'block' : 'none';
    
 
    if (ingredientsDiv.style.display === 'block') {
        const passwordInput = ingredientsDiv.querySelector('input[type="password"]');
        if (passwordInput) {
            passwordInput.value = ''; 
        }
    }
}

function checkPassword(smoothie) {
    const passwordInput = document.getElementById(`${smoothie}-password`).value;
    const ingredientList = document.getElementById(`${smoothie}-list`);
    const correctPassword = "ORGANIC"; 

    if (passwordInput === correctPassword) {
        ingredientList.style.display = 'block'; // Show the ingredients
    } else {
        alert('Incorrect password. Please try again.');
