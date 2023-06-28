Работа с Git
===========

Инсталяция
----------

Windows: https://git-for-windows.github.io/  
Mac OS: не требуется, предустановлен.  
Linux: `apt-get install git`.  

Первое, что вам следует сделать после установки Git'а, — указать ваше имя и адрес электронной почты. 
Это важно, потому что каждый коммит в Git'е содержит эту информацию, и она включена в коммиты, 
передаваемые вами, и не может быть далее изменена:

```bash
git config --global user.name "Khusamov Sukhrob"
git config --global user.email khusamov@yandex.ru
```

Подробнее по ссылке: http://git-scm.com/book/ru/ch1-5.html

Инсталяции Git Flow на Маке
---------------------------

На Windows устанавливать отдельно не нужно.

А вот на мак требуется. Лучше установить эту версию:

https://github.com/petervanderdoes/gitflow-avh

Так как она имеет обновления вплоть до 2018 года.

```bash
brew install git-flow-avh
```

Проблема с окончанием строк в текстовых файлах
----------------------------------------------

Сборщик проекта может выдавать ошибку, связанную с тем, как заканчиваются строки в файлах (CRLF или LF).
И если сборщик ожидает LF, а в файлах окончания строк CRLF, то собраться такой проект не сможет.
Эта проблема актуальна в основном для `Windows`. Для решения этой проблемы нужно клонировать
репозиторий с отключенной опцией `core.autocrlf`:

```
git clone -c core.autocrlf=false <Адрес репо>
```

В среде IDEA следует для проекта установить опцию `File / Settings / Editor / Code Style / Line separator`
в значение `Unix and macOS (/n)`, чтобы новые файлы создавались с правильными окончаниями строк.

Возможно эту проблему решит настройка файла `.gitattributes` (но это надо проверять.):
https://docs.github.com/ru/get-started/getting-started-with-git/configuring-git-to-handle-line-endings

Ссылки
------
[Работа в команде](https://www.blend4web.com/doc/ru/git_short_manual.html)  
[Модель ветвления для командной работы](http://habrahabr.ru/post/106912/)  
