const $ = (el) => document.querySelector(el)

const showLessons = (lessons, searched) => {
  let arr = Object.keys(lessons)
  if (arr.length === 0) {
    $('.not-found').style.display = 'block'
    $('.lessons').innerHTML = ''
    return
  }
  $('.not-found').style.display = 'none'
  $('.lessons').innerHTML = ''
  arr.forEach((i) => {
    let data = `<div class="lesson-no"><span>${i}</span></div>`
    for (let j of lessons[i]) {
      data += `<span class="topic${
        searched && j.includes(searched) ? ' searched' : ''
      }"><span class="diamond"></span> ${j}</span>`
    }
    $('.lessons').innerHTML += '<div class="lesson">' + data + '</div>'
  })
}

showLessons(lessons)

let timeout
$('.top input').addEventListener('keyup', (e) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    const { value } = e.target
    let lessons2 = {}
    let flag

    Object.keys(lessons).forEach((i) => {
      flag = false
      for (let j of lessons[i]) {
        if (j.includes(value)) flag = true
      }
      if (flag === true) lessons2[i] = lessons[i]
      showLessons(lessons2, value)
    })
  }, 850)
})

// TODO: add the remaining lessons
alert('More lessons shall be added  إِنْ شَاءَ ٱللَّٰهُ')
