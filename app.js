var btn = document.querySelector('#btn'),
	btn1 = document.querySelector('#btn2'),
    out = document.querySelector('#out'),
    Count = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    Count = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
	Dat = document.querySelector('#Date'),
    bwP = 7,
    clP = 3500


  // Basic function  
btn.onclick = function(){
  if (Count.value != '' && vol.value != '' && Dat.value != '') {
      if (load.checked){ 
          load.value = 10; }
        else 
        {
          load.value = 0;
      }
      if (del.checked){ 
          del.value = 1; }
        else 
        {
          del.value = 0;
      }
      if (frag.checked){ 
          frag.value = 0.5; }
        else 
        {
          frag.value = 1;
      }
 
var sum = (Count.value * bwP) + + Number(load.value) + Number(del.value);
var fsum = sum * Number(frag.value);
      out.innerHTML = fsum;
	btn1.onclick = function(){
          alert('ИТОГО: ' + fsum + ' руб\n' +
                'Формат: ' + vol.value + '\n' +
                'На дату: ' + Dat.value + '\n' +
                'Код Заказа: ' + Math.random().toString(36).substring(2, 10));
	}
  }else{
alert('Введите данные!');
}
}
