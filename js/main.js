const $ = document.querySelector.bind(document);

const btnClose = $('.header__search-history-icon')
const headerSearchInput = $('.header__search-input');
const headerSearchHistory = $('.header__search-history');
console.log(btnClose)

console.log(headerSearchHistory)
console.log(headerSearchInput)
headerSearchInput.onclick = function(e){
    headerSearchHistory.classList.remove('inactive')
    headerSearchHistory.classList.add('active');
}

btnClose.onclick = function(e){
    e.stopPropagation();
    headerSearchHistory.classList.remove('active');
    headerSearchHistory.classList.add('inactive');

}

headerSearchHistory.onclick = function(e){
    e.preventDefault();
}

headerSearchInput.addEventListener('blur', function(e){
    e.stopPropagation();
    headerSearchHistory.classList.remove('active');
    headerSearchHistory.classList.add('inactive');
})