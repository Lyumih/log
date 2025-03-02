$log

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
