
const quantityInput = document.getElementById('quantity');
const priceElement = document.getElementById('product-price-val');
const totalDisplay = document.getElementById('total-price-display');
const productPrice = parseInt(priceElement.getAttribute('data-price')) || 0;


function updateTamTinh()
{
    let soLuong = parseInt(quantityInput.value);

    if (isNaN(soLuong) || soLuong < 1) {
        soLuong = 1;
        quantityInput.value = 1;
    }

    const tamTinh = soLuong * productPrice;
    totalDisplay.innerText = tamTinh.toLocaleString('vi-VN') + ' ₫';
}


function increaseQty()
{
    let currentQty = parseInt(quantityInput.value) || 1;
    quantityInput.value = currentQty + 1;
    updateTamTinh(); 
}


function decreaseQty()
{
    let currentQty = parseInt(quantityInput.value) || 1;
    if (currentQty > 1) {
        quantityInput.value = currentQty - 1;
        updateTamTinh(); 
    }
}


function changeImage(element)
{
    const mainImg = document.getElementById('current-img');
    if (mainImg && element) {
        mainImg.src = element.src;
        document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
        element.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () =>
{
    updateTamTinh();
});
