Пример зависимости
==================

Зависимости плохи тем, что снижают переиспользование.

Как зависимости могут навредить, наиболее хорошо показывает пример: представьте, 
что у Вас есть класс CalendarReader, который может читать события календаря из XML-файла. 

Реализация CalendarReader приведена ниже:

```csharp
public class CalendarReader {
    public List readCalendarEvents(File calendarEventFile){
        //open InputStream from File and read calendar events.
    }
}
```

Метод readCalendarEvents получает объект типа File в качестве параметра. 
Поэтому, этот метод зависит от класса File. 

Зависимость от класса File означает, что CalendarReader способен на чтение событий календаря 
только из локальных файлов в файловой системе. 
Он не может читать события календаря из сетевого соединения, базы данных, или из ресурсов. 
Можно сказать, что CalendarReader тесно связан c классом File и локальной файловой системой.

Заменим File на InputStream
---------------------------

Менее связанной реализацией будет замена параметра типа File параметром типа InputStream, 
как в коде ниже:

```csharp
public class CalendarReader {
    public List readCalendarEvents(InputStream calendarEventFile){
        //read calendar events from InputStream
    }
}
```

Как Вы можете знать, InputStream может быть получен из
- объекта типа File, 
- сетевого Socket, 
- класса URLConnection, 
- объекта Class (Class.getResourceAsStream(String name)), 
- колонки из БД через JDBC и т.п. 

Теперь CalendarReader больше не завязан на локальную файловую систему. 
Он может читать файлы событий календаря из многих источников.

Класс CalendarReader повысил возможности переиспользования.

Зависимость от InputStream более гибка, чем зависимость от класса File, 
но не означает, что CalendarReader на 100% может быть переиспользован. 
Он все еще не может читать данные из канала NIO, например.


Источник:
https://habr.com/ru/post/349836/