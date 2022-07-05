const fs = require('fs')

fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) throw err
  data = data.split('\n').filter((i) => i !== '')
  const dataObj = {}
  for (let lesson of data) {
    let lessonSplit = lesson.split('-').map((i) => i.trim())
    const lessonNo = lessonSplit[0].slice(1, lessonSplit[0].length - 1)
    lessonSplit = lessonSplit.slice(1, lessonSplit.length)
    dataObj[lessonNo] = lessonSplit
  }
  fs.writeFile(
    '../frontend/lessons.js',
    'const lessons = ' + JSON.stringify(dataObj),
    'utf-8',
    (err) => {
      if (err) throw err
    }
  )
})
