---
sidebar_position: 10
---

Инкапсулируйте то, что меняется
===============================

Конспект на основе книги "Погружение в паттерны проектирования", Александр Швец.

Принцип заключается в отделении части кода программы, которая будет часто изменяться.

Целью отделения является сделать независимым постоянной части кода от последствий изменений.

Пример инкапсуляции на уровне функции
-------------------------------------

Рассмотрим функцию вычисления стоимости заказа. Программист в ней соединил две части кода, постоянную и изменяемую.
Вычисление стоимости на основе цены за единицу и количества никогда не поменяется.
А вот вычисление налога в будущем обязательно поменяется, так зависит от факторов, 
которые будут меняться (страна, город, политика и т.п.).

```typescript
/**
 * Получить общую стоимость заказа.
 * @param order
 */
function getOrderTotal(order) {
	const total = 0
	
	for (const item of order.items) {
		total += item.price * item.quantity
	}

	if (order.country === 'Russia') {
		total += total * 0.04
	}
	if (order.country === 'Ukraine') {
		total += total * 0.11
	}

	return total
}
```

Ту часть кода, которая будет изменяться следует отделить:

```typescript
/**
 * Получить общую стоимость заказа.
 * @param order
 * @returns {number}
 */
function getOrderTotal(order) {
	const total = 0
	
	for (const item of order.items) {
		total += item.price * item.quantity
	}

	total += total * getTaxAmount(order.country)

	return total
}

/**
 * Получить величину налога в зависимости от страны.
 * @param country
 * @returns {number}
 */
function getTaxAmount(country) {
	if (order.country === 'Russia') {
		return 0.04
	}

	if (order.country === 'Ukraine') {
		return 0.11
	}

	return 0
}
```
