const $ = document.querySelector.bind(document);

const btnClose = $('.header__search-history-icon')
const headerSearchInput = $('.header__search-input');
const headerSearchHistory = $('.header__search-history');
console.log(btnClose)

console.log(headerSearchHistory)
console.log(headerSearchInput)
headerSearchInput.onclick = function(e){
    console.log('xin chao')
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

// headerSearchInput.addEventListener('blur', function(e){
//     e.stopPropagation();
//     headerSearchHistory.classList.remove('active');
//     headerSearchHistory.classList.add('inactive');
// })

// Show address form

const showAddressFormBtn = document.querySelector('.js-show-header__address');
const modal = document.querySelector('.modal');
const closeAddressFormBtn = document.querySelector('.js-modal-close-address-form');
console.log(showAddressFormBtn);
console.log(closeAddressFormBtn);

function showAddressForm(e){
    e.stopPropagation();
    e.preventDefault();
    modal.classList.add('open');
}
   
function closeAddressForm(e){
    e.stopPropagation();
    e.preventDefault();
    modal.classList.remove('open');
}
showAddressFormBtn.addEventListener('click', showAddressForm);
closeAddressFormBtn.addEventListener('click', closeAddressForm);