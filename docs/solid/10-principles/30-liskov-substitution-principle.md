Принцип подстановки Барбары Лисков
==================================

Liskov Substitution Principle; LSP



![image](https://user-images.githubusercontent.com/4146998/159174747-3a8e4535-21cc-4930-98f2-356e17a91f5a.png)

Пример хорошего кода
--------------------

```typescript
interface ILicense {
	calcFee(): number
}

class PersonalLicense implements ILicense {
	calcFee(): number {}
}

class BusinessLicense implements ILicense {
	calcFee(): number {}
}

class Billing {
	constructor(license: ILicense) {}
}
```

Этот дизайн соответствует принципу подстановки Барбары Лисков, потому что поведение 
приложения Billing не зависит от использования того или иного подтипа. 
Оба подтипа могут служить заменой для типа License.


Пример плохого кода
-------------------

```typescript
class Bird {
	// ...
	getSpeed(): number {
		switch (type) {
			case EUROPEAN:
				return getBaseSpeed();
			case AFRICAN:
				return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;
			case NORWEGIAN_BLUE:
				return (isNailed) ? 0 : getBaseSpeed(voltage);
		}
		throw new Error("Should be unreachable");
	}
}
```

Решение:

```typescript
abstract class Bird {
	// ...
	abstract getSpeed(): number;
}

class European extends Bird {
	getSpeed(): number {
		return getBaseSpeed();
	}
}
class African extends Bird {
	getSpeed(): number {
		return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;
	}
}
class NorwegianBlue extends Bird {
	getSpeed(): number {
		return (isNailed) ? 0 : getBaseSpeed(voltage);
	}
}

// Somewhere in client code
let speed = bird.getSpeed();
```


Ссылки
------

[Видео от Сергея Немчинского](https://www.youtube.com/watch?v=NqvwYcjrwdw)  
[Метанит: Принцип подстановки Лисков](https://metanit.com/sharp/patterns/5.3.php)  