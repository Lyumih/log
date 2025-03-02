namespace $ {
	/** Декоратор функции. https://www.webdevtutor.net/blog/typescript-log-decorator */
	export function $log(target: any, key: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value

		descriptor.value = function (...args: any[]) {
			const result = originalMethod.apply(this, args)
			console.debug(
				`%c\t${key}\n>>>`,
				'color: lightyellow',
				args,
				'\t',
				JSON.stringify(args),
				'\n<<<',
				result,
				'\t',
				JSON.stringify(result)
			)
			return result
		}

		return descriptor
	}
}
