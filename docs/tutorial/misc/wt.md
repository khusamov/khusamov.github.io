Терминал Windows
================

Настройка терминала Windows для разработки
------------------------------------------

Для упрощения разработки можно запускать команду для настройки терминала Windows.

В данном команде будут запущены и серверная часть и клиентская.
А также доступны две вкладки для работы с файлами MO и PO.

https://learn.microsoft.com/ru-ru/windows/terminal/command-line-arguments?tabs=windows

```
wt --maximized ^
	--title "Superset: Серверная часть" -p "Ubuntu" wsl --cd ~/superset docker compose up ; ^
	--title "Superset: Клиентская часть" -p "Ubuntu" wsl --cd ~/superset/frontend npm run dev-server ; ^
	--title "Создание MO-файлов" -p "Command Promt" cmd ; ^
	--title "Конвертация PO-файлов в JSON" -p "Ubuntu" wsl --cd ~/superset
```
