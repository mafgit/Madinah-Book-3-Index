const $ = (el) => document.querySelector(el)

const clearLessons = () => {
  const div = $('.lessons')
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

const showLessons = (lessons, searched) => {
  let arr = Object.keys(lessons)
  clearLessons()

  if (arr.length === 0) {
    $('.not-found').style.display = 'block'
    return
  }
  $('.not-found').style.display = 'none'
  arr.forEach((i) => {
    const lesson = document.createElement('div')
    lesson.classList.add('lesson')

    const lessonNo = document.createElement('div')
    lessonNo.classList.add('lesson-no')

    const span = document.createElement('span')
    span.textContent = i

    lessonNo.appendChild(span)
    lesson.appendChild(lessonNo)

    for (let j of lessons[i]) {
      const topic = document.createElement('div')
      topic.classList.add('topic')

      const diamondSpan = document.createElement('span')
      diamondSpan.classList.add('diamond')

      topic.append(diamondSpan, j)
      if (searched && j.includes(searched)) topic.classList.add('searched')

      lesson.appendChild(topic)
    }
    $('.lessons').appendChild(lesson)
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
  }, 650)
})

// TODO: add the remaining lessons
if (!localStorage.getItem('not-first')) {
  alert('More lessons shall be added  إِنْ شَاءَ ٱللَّٰهُ')
  localStorage.setItem('not-first', 'true')
}
