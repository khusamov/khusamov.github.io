Создание меток (тегов)
======================

Создать метку с аннотацией:  
`git tag -a МЕТКА -m "Комментарий к метке"`

Удалить метки:  
`git tag -d МЕТКА`

Переместить метку:  
`git tag -f МЕТКА`

Опубликовать метку на удаленном репозитории:  
`git push МЕТКА`

Опубликовать все метки на удаленном репозитории:  
`git push --tags`

Удалить метку на удаленном репозитории:  
`git push -d origin tag МЕТКА` https://toster.ru/q/535029  
`git push :refs/tags/МЕТКА`  
`git push origin :refs/tags/МЕТКА`  

Операции на удаленном репозитории с указанием его имени:  
`git push origin МЕТКА`  
`git push origin --tags`  
`git push origin :refs/tags/МЕТКА`  

Простые метки
-------------

Git использует два основных типа меток: легковесные и аннотированные. 
Легковесная метка — это что-то весьма похожее на ветку, которая не меняется — это просто указатель на определённый коммит.

Создать простую метку:  
`git tag МЕТКА`

Подробности:  
https://git-scm.com/book/ru/ch2-6.html

Аннотированные метки
-------------------

А вот аннотированные метки хранятся в базе данных Git'а как полноценные объекты. 
Они имеют контрольную сумму, содержат имя поставившего метку, e-mail и дату, 
имеют комментарий и могут быть подписаны и проверены с помощью GNU Privacy Guard (GPG). 
Обычно рекомендуется создавать аннотированные метки, чтобы иметь всю перечисленную информацию; 
но если вы хотите сделать временную метку или по какой-то причине не хотите сохранять остальную 
информацию, то для этого годятся и легковесные метки.
