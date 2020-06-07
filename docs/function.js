$(document).ready(function(){
  
  var $randomnbr = $('.nbr');
  var $timer=0;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["C", "o", "d", "e", "l", "e", "s", "s", " ", "A", "u", "t", "o", "m", "a", "t", "i", "o", "n", " ", "A", "c", "c", "e", "l", "e", "r", "a", "t", "o", "r"];
  
  $randomnbr.each(function(){
      
    change = Math.round(Math.random()*10);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  var selectIndex = 1;

  function select(){
    var num = Math.round(Math.random()*$randomnbr.length+1);
    return num;
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
      var datanum = parseInt($(this).attr('data-number'));
      var datacng = parseInt($(this).attr('data-change'))
        if(datanum > datacng){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  
  value();
    
});