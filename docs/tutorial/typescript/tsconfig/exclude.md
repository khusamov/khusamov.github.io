Исключение файлов
=================

Задает массив имен файлов или шаблонов, которые следует пропускать при разрешении файлов include.

:::info Важно!
Изменяются `exclude` только те файлы, которые включены в результате `include` настройки.
Файл, указанный с помощью, `exclude` все еще может стать частью вашей кодовой базы
из-за `import` оператора в вашем коде, types включения, `/// <reference` директивы или указания в `files` списке.
:::

Это не механизм, который предотвращает включение файла в кодовую базу — 
он просто изменяет то, что `include` находит настройка.