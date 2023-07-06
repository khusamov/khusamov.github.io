---
sidebar_position: 20
---

Программируйте на уровне интерфейса
===================================

https://metanit.com/sharp/patterns/5.5.php

Что значит программировать на уровне интерфейса?
- Код должен зависеть от абстракций, а не конкретных классов.
- Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те и другие должны зависеть от абстракций.
- Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
- Сначала напишите интерфейсы, а потом классы и функции.

Гибкость архитектуры выражается в том, что её можно было бы расширять, не ломая существующий код.

По сути это принцип "Принцип инверсии зависимости" из SOLID.

Итак, пример:

```typescript
// Заказчик: Нужны книги, текст которых можно печатать в консоль.

class ConsolePrinter {
	public print(text: string) {
		console.log(text)
	}
}

class Book {
	public text: string
	public printer: ConsolePrinter
	
	public print(): void {
		this.printer.print(text)
	}
}

const book = new Book
book.printer = new ConsolePrinter
book.print()

// Заказчик: Нужно еще печатать книги на странице сайта.
// Упс... Это ж придется все исправлять/переписывать((
```

Проблемы:
1. Класс Book зависит от класса ConsolePrinter.
2. Печать книгу можно только на консоли с помощью класса ConsolePrinter.

Все это является нарушением принципа инверсии зависимостей.

```typescript
interface ITextPrinter {
	print(text: string): void
}

class Book {
	public text: string
	public printer: ITextPrinter

	public print(): void {
		this.printer.print(text)
	}
}

class ConsolePrinter implements ITextPrinter {
	public print(text: string) {
		console.log(text)
	}
}

// Заказчик: Нужно еще печатать книги на странице сайта.
// Не вопрос. Мы можешь просто написать еще один класс для этого. Ничего переписывать не нужно))

class HtmlPrinter implements ITextPrinter {
	public print(text: string) {
		const bodyElement = document.getElementsByName('body')
		const paragraphElement = document.createElement('p')
		paragraphElement.innerText = text
		bodyElement.appendChild(paragraphElement)
	}
}
```

Внимание, этот пример хоть и соблюдает базовый принцип проектирования "Программируйте на уровне интерфейса", 
но в нем нарушены другие принципы. Это сделано для упрощения понимания. Если привести идеальный пример, 
то сложно будет понять. 

Например заказчик может сказать: Нужно чтобы книги состояли из заголовка и текста, которые надо по разному печатать.

Вот как будет выглядеть на самом деле этот пример без нарушения принципов проектирования:

```typescript
// https://github.com/khusamov/solid-examples

/**
 * Книги состоят из частей разного типа. TBookPartType указывает какого типа может быть
 * часть книги. Например заголовок (header) или параграф (paragraph).
 */
type TBookPartType = string

/**
 * Часть книги.
 */
interface IBookPart {
	/**
	 * Тип части книг. Например заголовок или параграф.
	 */
	readonly type: TBookPartType
}

/**
 * Книга.
 */
interface IBook<T extends IBookPart> {
	/**
	 * Книга состоит из множества частей.
	 */
	readonly parts: T[]
}

/**
 * Результат печати книги.
 */
interface IBookPrinterResult {
	/**
	 * Пропущенные части книги. Это те части, для которых не был настроен принтер (не найден был IBookPartPrinter).
	 */
	missingBookParts: TBookPart[]
}

/**
 * Принтер для печати книг.
 */
interface IBookPrinter {
	/**
	 * Принтеры частей книг.
	 */
	bookPartPrinters: IBookPartPrinter[]

	/**
	 * Печать книги.
	 * @param {IBook} book
	 */
	print(book: IBook): IBookPrinterResult
}

/**
 * Результат печати части книги. Результаты использует принтер книги.
 */
interface IBookPartPrinterResult {
}

/**
 * Принтер части книги.
 */
interface IBookPartPrinter {
	/**
	 * Тип части книги, на которую рассчитан данный принтер.
	 */
	readonly bookPartType: TBookPartType

	print(bookPart: IBookPart): IBookPartPrinterResult
}

/**
 * Заголовок книги как ее часть.
 */
interface ITitleBookPart extends IBookPart {
	type: 'title'
	title: string
}

/**
 * Абзац книги как ее часть.
 */
interface IParagraphBookPart extends IBookPart {
	type: 'paragraph'
	paragraph: string
}

abstract class BookPrinter implements IBookPrinter {
	private bookPartPrinters: IBookPartPrinter[]

	public constructor(...bookPartPrinters: IBookPartPrinter[]) {
		this.bookPartPrinters = bookPartPrinters
	}
	
	public print(book: IBook): IBookPrinterResult {
		const missingBookParts = []
		const bookPartPrinterResults = []
		for (const bookPart of book.parts) {
			const bookPartPrinter = this.bookPartPrinters.find(printer => printer.bookPartType === bookPart.type)
			if (!bookPartPrinter) {
				missingBookParts.push(bookPart)
				continue
			}
			bookPartPrinterResults.push(
				bookPartPrinter.print(bookPart)
			)
		}
		this.printBookPartPrinterResults(bookPartPrinterResults)
		return {
			missingBookParts
		}
	}

	protected abstract printBookPartPrinterResults(bookPartPrinterResults: IBookPartPrinterResult[]): void
}

/**
 * Результат печати заголовков книг для HTML-печати.
 */
interface IHtmlBookPartPrinterResult extends IBookPartPrinterResult {
	element: HTMLElement
}

/**
 * Принтер заголовков книг для HTML-печати.
 */
class TitleHtmlBookPartPrinter implements IBookPartPrinter {
	public bookPartType = 'title'

	public print(bookPart: ITitleBookPart): IHtmlBookPartPrinterResult {
		const title = bookPart.title
		const headerElement = document.createElement('h1')
		headerElement.innerText = title
		return {
			element: headerElement
		}
	}
}

/**
 * HTML-печать книг.
 */
class HtmlBookPrinter extends BookPrinter {
	protected printBookPartPrinterResults(bookPartPrinterResults: IBookPartPrinterResult[]): void {
		const bodyElement = document.getElementsByName('body')
		for (const bookPartPrinterResult of book.bookPartPrinterResults) {
			bodyElement.appendChild(bookPartPrinterResult.element)
		}
	}
}

/**
 * Собственно книга.
 */
class Book<T extends IBookPart> implements IBook<T> {
	public parts: T[]

	public constructor(...parts: T[]) {
		this.parts = parts
	}
}

// Пример использования классов:
const htmlBookPrinter = new HtmlBookPrinter(new TitleHtmlBookPartPrinter)
const book = new Book<ITitleBookPart | IParagraphBookPart>(
	{
		type: 'title',
		title: 'Заголовок книги'
	},
	{
		type: 'paragraph',
		paragraph: 'Азбац книги'
	}
)
htmlBookPrinter.print(book)

```

В итоге получилось следующие хорошие вещи:
1. Учтено то, что книга может состоять из разных частей. Например заголовок книги и текст.
2. Разные части книги могут печататься по разному. Поэтому появился IBookPartPrinter.
3. Можно создавать разные по структуре книги.
4. Можно создавать разные принтеры: принтеры книг и принтеры частей книг.














