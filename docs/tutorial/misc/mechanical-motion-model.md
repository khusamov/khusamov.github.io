Модель механического движения
=============================

Космический корабль представляет из себя треугольник, 
в основании которого стоят два двигателя перпендикулярно этому основанию.
Если два двигателя включить с одинаковой силой, то корабль будет двигаться вперед.
Если с разной силой, то корабль будет вращаться.

Поступательное движение
-----------------------

Движение материальной точки:

a = F / m

v = v0 + at

s = s0 + vt

Вращательное движение
---------------------

Движение системы из двух точек:

z = F1 / F2

x = r (1 - 2z/(1 - z))

e = x(F1 - F2) / mr^2

w = w0 + et

fi = fi0 + wt

Алгоритм
--------

```typescript
import Vector from './Vector'

// Характеристики космического корабля.

const mass = 1000
const sizeD = 100

// Дискретность времени.

const timeInterval = 1

// Начальные значения физических величин.

const initialPosition = new Vector(0, 0)
const initialAngle = 0
const initialLinearVelocity = new Vector(0, 0)
const initialAngularVelocity = 0

// Текущие значения физических величин.

const time = 0
const position = initialPosition
const angle = initialAngle
const linearVelocity = initialLinearVelocity
const linearAcceleration = new Vector(0, 0)
const angularVelocity = initialAngularVelocity
const angularAcceleration = 0

let endGame = false

while (!endGame) {
	// Ввод векторов силы для двух двигателей космического корабля.

	const force1 = new Vector(0, 0)
	const force2 = new Vector(0, 0)

    // Поступательное движение.

	linearAcceleration = force1.add(force2)
	linearVelocity = initialLinearVelocity + linearAcceleration.scale(time)
	position = initialPosition.add(linearVelocity.scale(time))

    // Вращательное движение.

	const forceRatio = force1.length / force2.length
	const leverArm = sizeD / 2 * (1 - 2 * forceRatio / (1 + forceRatio))
	angularAcceleration = leverArm * (force1.sub(force2)) / mass * leverArm * leverArm
	angularVelocity = initialAngularVelocity + angularAcceleration * time
	angle = initialAngle + angularVelocity * time

    // Рисуем корабль на экране.

	draw(position, angle)

    // Приращение времени.

	time += timeInterval

    // Остановка.

	sleep(timeInterval)
}
```

На самом деле timeInterval не будет выдержан ровно 1 секунду, потому что вычисления между отдельными 
кадрами могут занимать разное время. Поэтому алгоритм следует переписать так, чтобы timeInterval было переменным числом.