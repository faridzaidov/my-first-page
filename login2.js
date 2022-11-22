document.querySelector('.form').querySelector('input, textarea').addEventListener('keyup blur focus', function (e) {
  
    var $this = document.querySelector(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.value === '') {
            label.classList.remove('active highlight');
          } else {
            label.classList.add('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.value === '' ) {
              label.classList.remove('active highlight'); 
              } else {
              label.classList.remove('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.value === '' ) {
              label.classList.remove('highlight'); 
              } 
        else if( $this.value !== '' ) {
              label.classList.add('highlight');
              }
      }
  
  });
  
  document.querySelector('.tab a').addEventListener('click', function (e) {
    
    e.preventDefault();
    
    document.querySelector(this).parent().classList.add('active');
    document.querySelector(this).parent().siblings().classList.remove('active');
    
    target = document.querySelector(this).attr('href');
  
    document.querySelector('.tab-content > div').not(target).hide();
    
    document.querySelector(target).fadeIn(600);
    
  });