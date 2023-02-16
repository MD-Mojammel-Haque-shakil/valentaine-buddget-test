// chocolate part
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    // const kitkatQuantity = document.getElementById("kitkat-quantity").value ;
    const kitkatQuantity = getInputValue('kitkat-quantity')
    const kitkatCost = kitkatQuantity * 200;
   
    //get chocklet total price element by id
    //document.getElementById('chocolate').innerText = kitkatCost;
    setInnerText('chocolate', kitkatCost);
    total()
    
})
//rose part
document.getElementById('rose-buy-btn').addEventListener('click', function(){
    // const roseQuantity = document.getElementById("rose-quantity").value ;
    const roseQuantity = getInputValue('rose-quantity')
    const roseCost = roseQuantity * 100;
   
    //get rose total price element by id
    //document.getElementById('rose').innerText =roseCost;
    setInnerText('rose', roseCost);
    total()
})
//diary part
document.getElementById('diary-buy-btn').addEventListener('click', function(){
    // const diaryQuantity = document.getElementById("diary-quantity").value ;
     const diaryQuantity =getInputValue('diary-quantity');
    const diaryCost = diaryQuantity * 100;
   
    //get diary total price element by id
    //document.getElementById('diary').innerText = diaryCost;
    setInnerText('diary', diaryCost);
    total()
    
})
//promocode apply part 
document.getElementById('promo-code-btn').addEventListener('click', function(){
    const promocode = getInputValue('promo-code');
    if (promocode==101){
        const total = getInnerText('total');
        const calculateDiscount = total - parseInt(total) * 0.1;
        setInnerText('all-total', calculateDiscount);
    }
    else{
        alert('wrong promo code you applied try again with valid code')
    }
})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}
function getInnerText(id){
   const value = document.getElementById(id).innerText;
   return parseInt(value);
}
function total(){
    const chocolate = getInnerText('chocolate');
    const rose = getInnerText('rose');
    const diary = getInnerText('diary');
    // const chocolate = document.getElementById('chocolate').innerText;
    // const rose = document.getElementById('rose').innerText;
    // const diary = document.getElementById('diary').innerText;

    const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    // document.getElementById('total').innerText = totalSum;
    setInnerText('total', totalSum);
}