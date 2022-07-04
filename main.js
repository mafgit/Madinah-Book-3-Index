const $ = (el) => document.querySelector(el)

const lessons = {
  '١': [
    'الإعراب والبناء في الأسماء والأفعال المعرب والمبني',
    'علامات الإعراب الأصلية والفرعية',
    'الأسماء الخمسة',
    'الإعراب التقديري',
    'المقصور المنقوص',
    'العلامات الظاهرة والمقدرة',
    'المرفوعات والمنصوبات و المجرورات من الأسماء',
    'التوابع',
    'الأفعال الخمسة',
  ],
  '٢': [
    'واو الحال',
    'واو القسم',
    'لعل',
    'اسم الفعل : آمين، إليك',
    'جمع شيء أشياء ( ممنوع من الصرف )',
    'الدعاء',
    'من الزائدة',
    'لدى',
    '"وصل" و"وصل إلى"',
    'معنی (ج: معان على وزن مفاعل)',
  ],
  '٣': [
    'الفعل المبني للمجھول',
    'نائب الفاعل',
    'حذف "ال" من العلم عند النداء',
    'النسب',
    'أخر',
    '"صلى ب"',
    'إما وإما',
    'اسم الجنس الجمعي',
    'الشهور العربية',
  ],
  '٤': ['اسم الفاعل', 'اسم المفعول', 'ما الحجازية', 'أسماء أجزاء اليد'],
  '٥': [
    'بناء المجهول من المثال',
    'اسم المفعول واسم الفاعل من الفعل غير السالم',
  ],
  '٦': ['اسما الزمان والمكان'],
  '٧': ['اسم الآلة'],
  '٨': ['النكرة والمعرفة'],
  '٩': [
    'تعال',
    'حذف النون من جمع المذكر السالم و المثنى عند الإضافة',
    'ذانك  وتانك',
    'كلا',
    'هاهوذا ومثناه',
    'لقاء همزة بهمزة أخرى',
    'الياء المفتوحة',
  ],
  '١٠': ['الجملة الاسمية و الجملة الفعلية', 'المصدر', 'أفعال الشروع'],
  '١١': ['المبتدأ والخبر'],
  '١٢': ['الظرف / المفعول فیه', 'لو'],
  '١٣': ['لام الأمر', 'جوازم المضارع', 'الجزم بالطلب . لا الناهية', 'الندبة'],
  '١٤': [
    'إذا',
    'الفاء في جواب الشرط',
    'حذف التاء عند النسب',
    'وذر يذر وودع يدع معناهما ترك يترك لا يستعمل ماضيهما',
  ],
  '١٥': [
    'إن',
    'أدوات الشرط',
    'حذف النون من المجزوم من أكون، نكون، تكون، يكون',
    'كم',
    'حتى',
    'ها اسم فاعل : هاء، هاء، هاؤم، هاؤن',
    'اسم التصغير',
    'دخول الفاء في جواب الشرط',
  ],
  '١٦': [
    'الفعل الثلاثي والفعل الرباعي',
    'الفعل المزيد و الفعل المجرد',
    'باب فعّل يفعل',
    'المصادر إما سماعية و إما قياسية',
  ],
  '١٧': [
    'أعطى',
    'ولو',
    'أصبح',
    'أوشك',
    'باب أفعل',
    'ابن',
    'لام الإلتداء',
    'ما النمرة التمة المبهمة',
  ],
  '١٨': [
    'أمسى',
    'التكثير والمبالغة',
    'الفعل المتعدي والفعل اللازم',
    'إنما',
    'المفعول غير الصريح',
    'أرى',
    '"إياك و"',
    'لقد',
    'جمع الجمع',
    'التضعيف',
    'همزة التعدية',
    'الوزن للأمراض فُعال',
    'وزن للمصدر فَعال',
    'القسم',
  ],
  '١٩': [
    'اللام المزحلقة',
    'قد',
    'باب فاعل',
    'ذو، ذوو',
    'أولو',
    'لكن',
    'ذلكم',
    'منتهى الجموع',
    'تصرف كاف الخطاب',
    'وزن للمصدر فِعالة',
    '"ذوو القربى"',
    'جمع خطيئة خطايا',
    'المصدر من مضى مُضيّ',
  ],
  '٢٠': [
    'باب تفعل',
    'حذف إخظى التاءين من المضارع',
    'المطاوعة',
    'لما الحيمية',
    'الإختصاص',
  ],
  '٢١': [
    'باب تفاعل',
    'المشاركة',
    'إظهار ما ليس في الباطن',
    'ليت',
    'الفاء السببية',
    'لا النافية للجنس',
    'الأخرف المشبهة بالفعل',
    'حذف حرف الجر قبل المصدر مؤول',
    'أوزان للعيوب والأولان',
    'المصدران للمثال',
    'وزن فُعلة وجمعه فُعُلات',
    'البدل',
  ],
  '٢٢': [
    'باب انفعل',
    'مطاوعا فعل و فعّل',
    'حذف همزة الوصل عند دخول همزة الاستفهام',
    'الجملة مضافا إليه',
    'لولا',
    '"هذا" نعتا',
    'هاء السكت',
    'التغليب',
  ],
  '٢٣': [
    'باب افتعل',
    'تغيير بعض الحروف إلى أخرى في هذا الباب',
    'إذا الفجائية',
    'ظن',
    '"في" بعد دخل',
    'صيغ مبالغة اسم الفاعل',
    '"لا بد"',
  ],
  '۲۹': [
    'المفعول له / لأجله',
    'هلا',
    'أحرف للتحضيض',
    '"دأبي وديدني"',
    'لا العاطفة',
  ],
}

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
      }"><span class="diamond">⯁</span> ${j}</span>`
    }
    $('.lessons').innerHTML += '<div class="lesson">' + data + '</div>'
  })
}

showLessons(lessons)

let timeout
$('.search input').addEventListener('keyup', (e) => {
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
  }, 1000)
})
