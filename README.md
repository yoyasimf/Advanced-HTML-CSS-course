# Advanced-HTML-CSS-course
* [Занятие 1](#lesson1)
* [Занятие 2](#lesson2)

<a name="lesson1"></a>
## Занятие 1 (Подключение шрифтов и сетка)
### Подключение шрифтов
> Правило @font-face позволяет определить настройки шрифтов, а также загрузить специфичный шрифт на компьютер пользователя.

Синтаксис: 
```css
@font-face { свойства шрифта }
```
Пример, добавление шрифта `Raleway`
```css
@font-face {
  font-family: "Raleway";  /*Название шрифта*/
  src: url('../fonts/raleway-thin.eot'); /*Путь к формату .eot шрифта, для IE */
  /* Остальные пути к шрифтам */
  src:  url('../fonts/raleway-thin.eot?#iefix') format('embedded-opentype'), 
        url('../fonts/raleway-thin.woff') format('woff'), 
        url('../fonts/raleway-thin.ttf') format('truetype'), 
        url('../fonts/raleway-thin.svg#ralewaythin') format('svg');
  /* Насыщинность шрифта, соответствующая загружаемому шрифту
  ( в примере загружается тонкое начертание raleway-thin) */
  font-weight: 100; 
  font-style: normal; /* Стиль шрифта */
}
```
После подключения шрифт можно использовать например для body с помощью:
```css
body{
  font-family: "Raleway"
}
```
Так же шрифты моно подключить из сторонних ресурсов, напрмер [GoogleFonts](https://fonts.google.com/)
### Сетка или Grid
Для того, что бы быстро расположить элементы на странице, удобно пользоваться css сеткой.
Принцип: 

1. Создаем `div` с классом `container` и задаем ему ширину, соответствущую ширине нашего контента.
```css
.container{
  width: 1170px;
}
```

2. Наши колнонки будем распологать в строках. Строки обозначим дивом с классом `.row`
```css
  /*Добавим после каждого дива с классом row так называемый clearfix. Это позволит нам избежать
  ситуации, когда следующие за нашими колонками элементы будут пытаться обтикать их, так как
  у них установлено свойство fload:left. Данный хак не позволит элементам следующим за `row` обтикать его.*/
  .row:after{
    display: block;
    content:".";
    height: 0;
    visibility: hidden;
    clear: both;
  }
```

3. Делим контейнер на колонки и отступы между колонками в соответствии с дизайном. И создаем `css` свойства для классов, определяющих ширину в зависимости от количества колонок.

Для примера, у нас 12 колонок. Вычислим ширину одной колонки: 
```javascript
//(ширина конейнера - (количество отступов)*(размер отступа))/(количество колонок)
(1170 - 11*30)/12 = 70
```

Соответственно ширина 2 колонок будет равна 2 колонкам и отступу между ними, то есть `70 + 70 + 30 = 170px`
Таким образом мы можем вычислить ширину для всех колонок от 1 до 12.
Так же укажем нашим колонкам обтекание слева (`float:left`) и соответсвующий отступ в 30px.

```css
  .span1 {width: 70px; float:left; display: inline; margin-right: 30px;}
  .span2 {width: 170px; float:left; display: inline; margin-right: 30px;}
  .span3 {width: 270px; float:left; display: inline; margin-right: 30px;}
  .span4 {width: 370px; float:left; display: inline; margin-right: 30px;}
  .span5 {width: 470px; float:left; display: inline; margin-right: 30px;}
  .span6 {width: 570px; float:left; display: inline; margin-right: 30px;}
  .span7 {width: 670px; float:left; display: inline; margin-right: 30px;}
  .span8 {width: 770px; float:left; display: inline; margin-right: 30px;}
  .span9 {width: 870px; float:left; display: inline; margin-right: 30px;}
  .span10{width: 970px; float:left; display: inline; margin-right: 30px;}
  .span11{width: 1070px; float:left; display: inline; margin-right: 30px;}
  .span12{width: 1170px; float:left; display: inline; margin-right: 30px;}
```

Так же, в соответствии с дизайном можно заметить, что у последней колонки отступа справа нет, поэтому запишем следующие свойства для наших колонок, если они являются последними в ряду.

```css
  .span1:last-child{margin-right: 0}
  .span2:last-child{margin-right: 0}
  .span3:last-child{margin-right: 0}
  .span4:last-child{margin-right: 0}
  .span5:last-child{margin-right: 0}
  .span6:last-child{margin-right: 0}
  .span7:last-child{margin-right: 0}
  .span8:last-child{margin-right: 0}
  .span9:last-child{margin-right: 0}
  .span10:last-child{margin-right: 0}
  .span11:last-child{margin-right: 0}
  .span12:last-child{margin-right: 0}
```

4. Не забываем добавить свойство `box-sizing: border-box` для `body` либо для контейнера, в зависимости от ситуации.
Подробнее о свойстве `box-sizing` тут: https://webref.ru/css/box-sizing
```css
body{
  box-sizing: border-box;
}
```


<a name="lesson2"></a>
## Занятие 2 (Git)
### Система управления версиями Git

Подробно почитать про Git можно здесь: https://git-scm.com/book/ru/v2

Для использования git мы используем сервис [GitHub](https://github.com)

**Установка Git**

Информацию по установке git можно найти перейдя по данной [ссылке](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git)

**Использование Git**

Для работы с git используется командная строка и соотвествующие команды.

```
  $ git --version //выводит версию установленного git.
  git version 2.7.4 (Apple Git-66)
```

После уствноки `git` необходимо указать ваше имя и адрес электронной почты. Это важно, потому что каждый коммит в Git’е содержит эту информацию, и она включена в коммиты, передаваемые вами, и не может быть далее изменена

```
  $ git config --global user.name "John Doe"
  $ git config --global user.email johndoe@example.com
```

После этого вы можете проверить, привильно ли вы ввели имя воспользовавшись командой

```
  $ git config user.name
  John Doe
```

После установки вы можете либо создать новый репозиторий, либо клонировать существующий репозиторий.

Подробнее об этом можно прочитать [здесь](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Git-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F)

И еще раз несколько наиболее часто использующихся команд:

```
  git status// Показывает какие файлы в каком состоянии находятся
  
  git add название_файла // добавляет файлы в индекс гита, для отправки на удаленный репозиторий
  
  git add . // Добавит все файлы, которых не было в индексе
  
  git commit -m "Сообщение коммита" // фиксирует изменения файлов и папок для отправки на удаленный репозиторий
  
  git remote -v // Выведет список адресов репозиториев для чтения и записи.
  
  git remote add название_адреса адрес_репозитория //Для добавления нового репозитория
  
  git pull название_адреса название_ветки // Стянуть изменения с соответствующего репозитория и соответствующей ветки
  
  git push название_адреса название_ветки // Залить изменения на соответствующий репозиторий и соответствующюю ветку
  
  git branch // Показывает список веток на локальном репозитории
  
  git checkout название_ветки // Переводит на соответствующую ветку
  
  git checkout -b название_ветки // Создает ветку, если ее не существует и переводит на нее
  
```

Подробнее о командах работы с удаленными репозиториями [здесь](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D0%BC%D0%B8)

