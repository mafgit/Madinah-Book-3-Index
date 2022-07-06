const $ = (el) => document.querySelector(el)
const perPage = 8

const clearLessons = () => {
  const div = $('.lessons')
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

const clearBtns = () => {
  const div = $('.nav-btns')
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

const calcPgs = (lessons) => Math.ceil(Object.keys(lessons).length / perPage)

const showNavBtns = (lessons, searched) => {
  clearBtns()
  let pgs = calcPgs(lessons)
  if (pgs < 2) return
  for (let i = 1; i <= pgs; i++) {
    const btn = document.createElement('button')
    btn.textContent = i
    if (i === 1) btn.classList.add('btn-on')
    btn.onclick = (e) => {
      let start = (i - 1) * perPage
      let end = start + perPage
      document.querySelectorAll('.nav-btns button').forEach((i) => {
        i.classList.remove('btn-on')
        i.disabled = false
      })
      e.target.classList.add('btn-on')
      e.target.disabled = true
      showLessons(lessons, searched, start, end)
    }

    $('.nav-btns').appendChild(btn)
  }
}

const showLessons = (lessons, searched, start, end) => {
  let arr = Object.keys(lessons)

  clearLessons()
  if (arr.length === 0) {
    $('.not-found').style.display = 'block'
    return
  }

  $('.not-found').style.display = 'none'

  arr.slice(start, end).forEach((i) => {
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

window.onload = () => {
  showLessons(lessons, '', 0, perPage)
  showNavBtns(lessons, '')

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
        showLessons(lessons2, value, 0, perPage)
        showNavBtns(lessons2, value)
      })
    }, 650)
  })
}
