Original template: https://github.com/goitacademy/parcel-project-template

Базова конфігурація:

<b>Sass</b>

1. Шрифт (він у нас один) вже підключений та прописаний для body в <b>/layout/common</b>
   Жирність шрифту прохання вказувати як змінну, див. в <b>/utils/variables</b>
   
2. Базові стилі для кнопок вже прописані в <b>/components/buttons</b>
    Є модифікатори для довгої кнопки в модалці (button--popup) та кнопок логіну (button--login)
    
3. Змінні лежать в <b>/utils/variables</b>
Прохання вказувати як змінні:
- жирність шрифту
- базові кольори
- брейкпойнти

4. Змінні для кольорів брати з <b>/sass/color-schemes/_light.scss</b>

5. Для розрахунку flex-basis можна використовувати однойменний міксин (в <b>/utils/mixins</b>)

<b>JavaScript</b>

6. Масив з благодійними фондами лежить в <b>charities.js</b>

7. Рефи пропоную збирати централізовано в <b>refs.js</b> з наступним імпортом у ваш файл:
<code>import getRefs from './js/refs';</code>
<code>const refs = getRefs(); </code>
