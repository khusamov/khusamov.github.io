Принцип разделения интерфейсов
==============================

Interface Segregation Principle; ISP

:::info
Клиенты не должны зависеть от методов (или интерфейсов), которые они не используют.
:::

Пример плохого кода
-------------------

```typescript
interface IShape {
	drawCircle()
	drawSquare()
	drawRectangle()
}

class Circle implements IShape {
	drawCircle() {}
	drawSquare() {}
	drawRectangle() {}
}
class Square implements IShape {
	drawCircle() {}
	drawSquare() {}
	drawRectangle() {}
}
class Rectangle implements IShape {
	drawCircle() {}
	drawSquare() {}
	drawRectangle() {}
}
```

Решение
-------

```typescript
interface ICircle {
    drawCircle();
}
interface ISquare {
    drawSquare();
}
interface IRectangle {
    drawRectangle();
}
class Circle implements ICircle {
    drawCircle() {}
}
class Square implements ISquare {
    drawSquare() {}
}
class Rectangle implements IRectangle {
    drawRectangle() {}    
}
```

Размышления
-----------

По всей видимости этот принцип связан с принципом инверсии зависимостей и вот как.
Если в модуле нужен какой-то конкретный класс и будет использоваться только его часть,
то нужно создать интерфейс, в котором следует описать часть этого класса. 
И модуль должен требовать на входе объект этого интерфейса.


Ссылки
------

[Видео от Сергея Немчинского](https://www.youtube.com/watch?v=d9RJqf2o_Sw)  