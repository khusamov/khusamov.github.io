Не работает moment.locale() в react-router-dom
==============================================

В модуле react-router-dom можно использовать ленивую загрузку компонент. Например

```typescript jsx
const DashboardList = lazy(() => import('src/views/CRUD/dashboard/DashboardList'))
const ExplorePage = lazy(() => import('src/explore/ExplorePage'))

export const routes: Routes = [{
	path: '/explore/',
	Component: ExplorePage,
}, {
	path: '/dashboard/list/',
	Component: DashboardList,
}]

const App = () => (
	<Router>
		{routes.map(
			({ path, Component, props = {}, Fallback = Loading }) => (
				<Route path={path} key={path}>
					<Suspense fallback={<Fallback />}>
						<Component {...props} />
					</Suspense>
				</Route>
			),
		)}
	</Router>
)
```

И если в компонентах внутри `<Route>` (то есть в `DashboardList` и `ExplorePage`) использовать `moment`, 
то она будет работать только с локалью по умолчанию (`en`).
То есть следующая инструкция никак не повляет на `moment` находящиеся в компонентах маршрутов:

```typescript
moment.locale('ru')
```

Для решения этой проблемы была примена хитрость. Вместо одного вызова `moment.locale()` в корне проекта,
делаем его вызов каждый раз после загрузки компонента. 
Для этого была создана своя версия функции `lazy()` (а точнее фабрика).


```typescript jsx
import React, {lazy} from 'react';
import moment from 'moment';

type TReactLazy = typeof lazy;

interface ICreateLazyParams {
	/**
	 * Функция, которая будет вызываться после загрузки компонента маршрута.
	 */
	afterLoadProcess: () => void
}

/**
 * По неизвестной пока причине, но moment.locale() не работает для компонент,
 * которые загружаются при помощи React.lazy(). Пришлось пойти на хитрость 
 * и сделать свой lazy(), который ничем не отличается от штатного React.lazy() 
 * кроме того, что добавляет вызов функции afterLoadProcess после загрузки компонента.
 */
export const createSpecialLazy = (
	({afterLoadProcess}: ICreateLazyParams): TReactLazy => (
		factory => (
			lazy(
				async () => {
					const result = await factory()
					afterLoadProcess()
					return result
				}
			)
		)
	)
)
```

Или попроще вариант:

```typescript jsx
import React, {ComponentType, LazyExoticComponent, lazy} from 'react';
import moment from 'moment';

interface ICreateLazyParams {
	afterLoadProcess: () => void
}

export function createSpecialLazy({afterLoadProcess}: {afterLoadProcess: () => void}) {
	return (
		function specialLazy<T extends ComponentType<any>>(
			factory: () => Promise<{default: T}>
		): LazyExoticComponent<T> {
			return lazy(
				async () => {
					const result = await factory()
					afterLoadProcess()
					return result
				}
			)
		}
	)
}
```