## Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:

- пользователя
  Пользователю, в первую очередь, важно что бы интерфейс был удобен, был приятный шрифт и отступы где это нужно, что бы отдельные элементы не оттягивали на себя внимание, скорость работы интерфейса
- менеджера проекта
  Ему важно что бы весь функционал был выполнен строго по ТЗ и главное в срок
- дизайнера
  Для дизайнера хорошая верстка это та, которая pixel perfect с его макетом
- верстальщика
  все элементы должны иметь возможность переиспользоваться
- клиентского программиста
- серверного программиста
  для них хорошая верстка та, которая не ломается при любых обстоятельствах

### Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов, какие методологии, инструменты и технологии вы применяли на практике.

  В больших проектах нужно придерживаться единых стандартов внутри команды (стайлгайды, методологии, системы контроля версий). Разработчикам надо использовать проверенные методики и инструменты. В любом случае, тут важно всем работать в команде.
  Для этих целей я использовал наименование классов по методологии БЭМ, сборщик gulp, css-препроцессоры sass, less, git

### Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

В этом случае стоит быть внимательными с медиа выражениями, иметь разные разрешения изображений для retina и обычных дисплеев, пользоваться автопрефиксером для одинакового отображения страниц на разных устройствах и смотреть на поддержку технологий в разных браузерах, можно пользоваться полифиллами.

### Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

  Пользуюсь препроцессорами для css с миксинами, переменными и вложенностью, для ускорения процесса верстки могут пригодиться pug или bootstrap. Код проверяю с помощью линтеров, встроенные в сборку (gulp). В javascript очень нравится библиотека react.

### Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

  Сподобным не сталкивался, но знаю как действую в таких случаях. Помогают виртуальные машины и специальные сервисы которые тестируют проект на множестве устройств, например BrowserStack

## Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

  Найти дизайнера и попросить доделать

### Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

  Habr, learn.javascript.ru, mdn. В последнее время начал решать задачки на codewars. Наиболее интересно мне программирование, но это не значит что визуализация не интересна. CSS тоже хорош), помимо фронтенда интересна психология.

### Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

  Меня зовут Костя. Мне 32 года. Вредных привычек нет. Изучаю React, занимаюсь каждый день, вот мои некоторые работы по верстке:
  https://github.com/k-solovev/floristry
  https://github.com/k-solovev/sedona
  https://github.com/k-solovev/cat-energy

  кое что на реакт:
  https://github.com/k-solovev/react-table
