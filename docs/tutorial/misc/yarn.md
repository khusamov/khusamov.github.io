Yarn
====

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

Разное
------

```yaml
enableMessageNames: false
plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs
    spec: "@yarnpkg/plugin-workspace-tools"
  - path: .yarn/plugins/@yarnpkg/plugin-typescript.cjs
    spec: "@yarnpkg/plugin-typescript"
```