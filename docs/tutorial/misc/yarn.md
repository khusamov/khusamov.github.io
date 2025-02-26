Yarn
====

Установка Yarn
--------------

Node.js больше или равно 16.10

```
corepack enable
```

Node.js меньше 16.10

```
npm i -g corepack
```

Обновление Yarn
---------------

```
yarn set version stable
```

Обновление зависимостей
-----------------------

```
yarn up @docusaurus/*
```

Также же можно через пробел перечислять зависимости.

.yarnrc.yml
-----------

```yaml
enableMessageNames: false
nodeLinker: node-modules
plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs
    spec: "@yarnpkg/plugin-workspace-tools"
  - path: .yarn/plugins/@yarnpkg/plugin-typescript.cjs
    spec: "@yarnpkg/plugin-typescript"
```

Файла `.yarnrc.yml` недостаточно. Мало того, он даже мешает. В нем приходится удалять информацию о плагинах
и заново их устанавливать. Отсюда вывод, что файл `.yarnrc.yml` по идее нельзя хранить в репозитории.
Это очень странно, потому что в нем есть опции, которые надо хранить в репозитории (например `nodeLinker: node-modules`).

В общем, нужно в файле `.yarnrc.yml` удалить раздел `plugins` и выполнить команды:

```
yarn plugin import typescript & yarn plugin import workspace-tools
```