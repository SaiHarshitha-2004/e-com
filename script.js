var fashion = document.getElementById('fashion');
var beauty = document.getElementById('beauty');
var medical = document.getElementById('medical');
var appliances = document.getElementById('appliances');
 

medical.addEventListener('click' , () =>{
   window.location.href = 'medical.html';
});

fashion.addEventListener('click', function() {
  window.location.href = 'fashion.html';
});

beauty.addEventListener('click', function() {
    window.location.href = 'beauty.html';
  });

  appliances.addEventListener('click' , ()=>{
    window.location.href = 'appliances.html';
  })



