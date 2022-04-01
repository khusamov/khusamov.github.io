Базовый tsconfig.json
=====================

https://www.typescriptlang.org/tsconfig

```json title='tsconfig.json'
{
	"compilerOptions": {
		"baseUrl": "src",
		"outDir": "dist",
		"module": "esnext",
		"moduleResolution": "node",
		"declaration": true,
		"sourceMap": true,
		"removeComments": true,
		"allowJs": false,
		"strict": true,
		"skipLibCheck": true,
		"resolveJsonModule": true,
		"allowSyntheticDefaultImports": true,
		"esModuleInterop": true,
		"experimentalDecorators": true
	}
}
```