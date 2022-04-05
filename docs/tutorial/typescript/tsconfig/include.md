Включение файлов
================


Задает массив имен файлов или шаблонов для включения в программу. 
Эти имена файлов разрешаются относительно каталога, содержащего tsconfig.json файл.

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```

Что будет включать:

```ini
.
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

include и exclude поддерживать подстановочные знаки для создания шаблонов glob:

| Шаблон | Описание |
| ---- | ---- |
| \* | соответствует нулю или более символам (исключая разделители каталогов) |
| ? | соответствует любому одному символу (исключая разделители каталогов) | 
| **/ | соответствует любому каталогу, вложенному в любой уровень | 



Если шаблон glob не включает расширение файла, то включаются только файлы 
с поддерживаемыми расширениями (например .ts, .tsx, и .d.ts по умолчанию, 
с параметром .js и .jsx если allowJs установлено значение true).