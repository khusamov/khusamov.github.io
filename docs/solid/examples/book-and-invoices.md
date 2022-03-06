Выставление счета на книги
==========================

Источник:
https://techrocks.ru/2020/08/26/solid-principles-in-plain-russian/

```typescript title='Код нарушил принцип единственной ответственности'
class Book {
	constructor(
		public price: number,
        public name: string
    ) {}
}

class Invoice {
	constructor(
		private book: Book,
		private quantity: number
	) {
	}

	public get total() {
        return this.book.price * this.quantity
	}
	
	public print() {
		console.log(`${this.book.name} = ${this.book.price} руб.`)
        console.log(`Стоимость: ${this.total} руб.`)
    }
    
    public saveToFile(filename: string) {}
}
```

Класс Invoice cодержит три функции:
1. Вычисление total
2. Печать в консоль
3. Сохранение в файле

Разделяем:

```typescript title='Исправленный код'
class Book {
	constructor(
		public price: number,
		public name: string
	) {}
}

class Invoice {
	constructor(
		public book: Book,
		public quantity: number
	) {
	}

	public get total() {
		return this.book.price * this.quantity
	}
}

class InvoicePrinter {
	constructor(private invoice: Invoice) {}
    
    public print() {
		console.log(`${this.invoice.book.name} = ${this.invoice.book.price} руб.`)
		console.log(`Стоимость: ${this.invoice.total} руб.`)
    }
}

class InvoicePersistence {
	constructor(private invoice: Invoice) {}
	public saveToFile(filename: string) {}
}
```
