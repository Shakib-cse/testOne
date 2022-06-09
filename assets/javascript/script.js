

const hidebtn = document.getElementById('hide-head');
const hideitem = document.querySelector('.hide-item');

hidebtn.addEventListener('click', function(){
    if(hideitem.style.maxWidth){
        console.log('hide-item')
        hideitem.style.maxWidth = null;
    }
    else{
        hideitem.style.maxWidth = '150px'
        console.log('show')
    }
})