Принцип открытости/закрытости
=============================

Open-Closed Principle; OCP

:::info
Программные сущности должны быть открыты для расширения и закрыты для изменения.
:::

Иными словами, должна иметься возможность расширять поведение программных сущностей без их изменения.

Что имеется ввиду под "закрыты для изменения"? Это значит, что функция или класс написаны и готовы к использованию. 
Больше дописываться они не будут. Их можно только исправлять (если была допущена ошибка). Новые фичи добавлять
категорически нельзя.

Результат применения принципа единственной ответственности:

![image](https://user-images.githubusercontent.com/4146998/159168335-ffe28b5d-b3a5-4da3-8ffa-4dcf7c3011d6.png)

Самое важное, что нужно понять, — в данном примере в создание отчета вовлечены 
две отдельные ответственности: 
1. вычисление данных для отчета 
2. и представление этих данных в форме веб-отчета или распечатанного отчета.

Сделав такое разделение, мы должны организовать зависимости в исходном коде так, 
чтобы изменения в одной из ответственностей не вызывали необходимости изменений в другой.
Кроме того, новая организация должна гарантировать возможность расширения поведения без отмены изменений.








Источники
---------

Мартин Р. Чистая архитектура. Искусство разработки программного обеспечения.