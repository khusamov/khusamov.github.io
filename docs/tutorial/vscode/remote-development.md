Удаленная разработка при помощи Visual Studio Code
==================================================

Cloud IDE ala Visual Studio Code
--------------------------------

Второй вариант это использовать облачные варианты Visual Studio Code:
1. [Code Server][code-server] Run VS Code on any machine anywhere and access it in the browser.
2. [Eclipse Theia][theia] Cloud & Desktop IDE Framework

Кстати, для этих IDE нужно ставить на локальном компьютере шрифт FiraCode.

Github Codespaces
-----------------

Любопытный вариант удаленной разработки это [облачная IDE Codespaces для Github][codespaces].

Удаленная разработка при помощи IntelliJ IDEA
---------------------------------------------

Оказывается любое приложение Java + Swing можно открывать через браузер как сайт. 
И по этой причине можно IntelliJ IDEA запускать удаленно.
Для этого IntelliJ IDEA установить надо на удаленном сервере при помощи специальной 
утилиты [Projector][projector] и заходить как на сайт.

Вот статья об этом на Хабре [Работаем в IntelliJ IDEA на слабом железе][projector-article].

Если это действительно так и хорошо работает, то можно писать приложения на Java под браузер! 
А это весьма неплохо.

[remote]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh
[remote-article]: https://www.digitalocean.com/community/tutorials/how-to-use-visual-studio-code-for-remote-development-via-the-remote-ssh-plugin-ru
[code-server]: https://github.com/cdr/code-server
[theia]: https://github.com/eclipse-theia/theia
[gitpod]: https://gitpod.io/
[codespaces]: https://github.com/features/codespaces

[projector-article]: https://habr.com/ru/post/510210/
[projector]: https://github.com/JetBrains?q=Projector&type=&language=