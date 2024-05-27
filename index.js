const search = document.getElementById('text');
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
    const searchValue = search.value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    const targetElement = document.getElementById(searchValue);

    if (targetElement) {
        resultDiv.innerHTML = targetElement.innerHTML;
    } else {
        resultDiv.innerHTML = '<p>Monument not found. Please try another name.</p>';
    }
});