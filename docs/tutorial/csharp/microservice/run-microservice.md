---
sidebar_position: 30
---

Запуск микросервиса
===================

В командной строке выполните следующую команду:

```bash
dotnet run
```

Вы должны увидеть вывод, подобный следующему:

```bash
Building...
info: Microsoft.Hosting.Lifetime[14]
Now listening on: http://localhost:5020
info: Microsoft.Hosting.Lifetime[0]
Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
Content root path: C:\Users\Ana\MyMicroservice\
```

Подождите, пока приложение отобразит, что оно прослушивает `http://localhost:<номер порта>`, 
а затем откройте браузер и перейдите по адресу `http://localhost:<номер порта>/WeatherForecast`.

В этом примере показано, что прослушивается порт 5020, поэтому на следующем изображении 
показан URL-адрес http://localhost:5020/WeatherForecast.

![run](run-microservice.png)

