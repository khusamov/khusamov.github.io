Mocha
=====

Пример как настраивать Mocha для TypeScript:

https://github.com/mochajs/mocha-examples/tree/master/packages/typescript

Файл `.mocharc.json`

```json
{
  "extension": ["ts"],
  "spec": "src/**/*.spec.ts",
  "require": "ts-node/register"
}
```

Файл `package.json`

```json
{
  "scripts": {
    "test": "mocha"
  },
  "directories": {
    "test": "./src"
  },
  "devDependencies": {
    "@types/mocha": "latest",
    "mocha": "latest",
    "ts-node": "^9.1.1"
    "typescript": "^4.2.4"
  }
}
```

Проблемы с ts-node
------------------

Эта проблемы проявляется при запуске `mocha` в виде генерации ошибки:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"
```

Пакет `ts-node` не поддерживает ES-модули напрямую (не сразу догадаешься что в этом проблема). 

#### Три способа решения:

Можно исправить файл `package.json`. Это костыльный способ решения проблемы.
Взят отсюда:
https://github.com/mochajs/mocha-examples/tree/master/packages/typescript#es-modules

```json
{
	"scripts": {
		"test": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' mocha"
	}
}
```

Самый актуальный способ. Исправить файл `tsconfig.json`.
Взят отсюда:
https://github.com/TypeStrong/ts-node#commonjs

```json
{
	"ts-node": {
		"compilerOptions": {
			"module": "CommonJS"
		}
	}
}
```

Идеальный (но авторы его считают экспериментальным) способ. Исправить файл `tsconfig.json`.

```json
{
	"ts-node": {
		"compilerOptions": {
			"esm": true
		}
	}
}
```