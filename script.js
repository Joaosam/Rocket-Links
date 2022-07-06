addEventListener(onclick, 'verifyTheme')

function verifyTheme() {
  if (document.body.classList.contains('lightBlue')) {
    changeLightBlue()
  } else if (document.body.classList.contains('darkPink')) {
    changeDarkPink()
  } else if (document.body.classList.contains('lightPink')) {
    changeLightPink()
  } else {
    changeDarkBlue()
  }
}
verifyTheme()

function changeLightBlue() {
  document.body.classList.remove('lightBlue')
  document.body.classList.add('darkPink')
}
function changeDarkPink() {
  document.body.classList.remove('darkPink')
  document.body.classList.add('lightPink')
}
function changeLightPink() {
  document.body.classList.remove('lightPink')
  document.body.classList.add('darkBlue')
}
function changeDarkBlue() {
  document.body.classList.remove('darkBlue')
  document.body.classList.add('lightBlue')
}
