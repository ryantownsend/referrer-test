(function() {

  var el = document.createElement('p')
  el.innerText = 'referrer.js saw the referrer as: ' + document.referrer
  document.body.appendChild(el)

})()
