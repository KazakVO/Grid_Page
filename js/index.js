window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.add('header__burger-nav-active')
    document.querySelector('#menu-close').classList.add('active')
  })
  document.querySelector('#menu-close').addEventListener('click', function(){
    document.querySelector('#menu').classList.remove('header__burger-nav-active')
    document.querySelector('#menu-close').classList.remove('active')
  })
})

