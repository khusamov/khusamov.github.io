Известные ошибки
================

Error: The page component at /links/links doesn't have a default export
--------------------------------------

Возникает во время выполнения команды:

```bash
yarn build
```

Полный текст ошибки:

```
Error:  Docusaurus server-side rendering could not render static page with path /links/links.
Error:  Docu...
[success] [webpackbar] Server: Compiled with some errors in 31.90s

Error: The page component at /links/links doesn't have a default export. 
This makes it impossible to render anything. 
Consider default-exporting a React component.
    at Array.forEach (<anonymous>)
Error: The page component at /my/rep...
```

Решение: Компоненты нужно переместить в директорию `src/components`.

Дело в том, что в директории `src/pages` могут хранится только файлы `index.module.scss` и `index.tsx`. 
Здесь нельзя хранить файлы отдельных компонент и файлы констант и типов. Все это будет восприниматься
движком как страницы, а не как отдельные компоненты.

