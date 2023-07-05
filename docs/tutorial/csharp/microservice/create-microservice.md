---
sidebar_position: 20
---

Создание микросервиса
=====================

Допустим вы создаете сервис с именем `MyMicroservice` (имя должно быть набрано в формате `PascalCase`, так как 
оно будет использоваться для создания пространства имен).

В командной строке выполните следующую команду, чтобы создать приложение:

```bash
dotnet new webapi -o MyMicroservice --no-https -f net7.0
```

Затем перейдите в новый каталог, созданный предыдущей командой:

```bash
cd MyMicroservice
```

Что означают эти команды?
-------------------------

Команда `dotnet new webapi` создает новое приложение типа `webapi` (это конечная точка `REST API`).

Параметр `-o MyMicroservice` создает каталог с именем `MyMicroservice` в котором хранится ваше приложение.

Флаг `--no-https` создает приложение, которое будет работать без сертификата HTTPS, чтобы упростить развертывание.

Параметр `-f net7.0` указывает, что вы создаете приложение .NET 7.

Команда `cd MyMicroservice` помещает вас во вновь созданный каталог приложения.

Сгенерированный код
-------------------

В каталоге было создано несколько файлов `MyMicroservice`, чтобы предоставить вам простую службу, готовую к запуску.

`MyMicroservice.csproj` определяет, на какие библиотеки ссылается проект и т. д.

`Program.cs` содержит все настройки и конфигурацию, которые загружаются при запуске приложения.

`Controllers/WeatherForecastController.cs` имеет код для простого `API`, который возвращает прогноз погоды на следующие пять дней.

Файл `launchSettings.json` внутри `Properties` каталога определяет различные параметры профиля для локальной среды разработки. 
Номер порта в диапазоне от 5000 до 5300 автоматически назначается при создании проекта и сохраняется в этом файле.

WeatherForecastController.cs
----------------------------

Следующий код показывает содержимое файла, `WeatherForecastController.cs` расположенного в `Controllers` каталоге:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace MyMicroservice.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
```