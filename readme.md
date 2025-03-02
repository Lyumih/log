# $log
### Добавляйте пожелания к функциям и присоединяйтесь к проекту
- [GitHub Repo](https://github.com/Lyumih/log)
- [Чат для обсуждения]()

Функция логирует метод в консоль и делает вывод входящих аргументов и результата в виде JS-объектов и JSON строки для наглядности

Пример использования:
```js
@$log
@$mol_mem
description(next?: string) {
	return next ?? ''
}
```

Вывод в консоли
```js
	function name
>>> {args}	JSON(args)
<<< {result}	JSON(result)
```

Что можно сделать:
- Добавить в [$mol_demo](https://mol.hyoo.ru/#!section=demos) данные функции
- Функция $log_in - только аргументы
- Функция $log_out - только результат
