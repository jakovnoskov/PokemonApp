# PokemonApp

## тестовое задание 

#### Установка:
$ npm install
$ pod install


## О приложении "список покемонов"

Выводим список покемонов в ленте. Просто некий прямоугольник с именем покемона
Подгружаем по 15 покемонов за раз. Когда доскроливаемся до каждого 10-го покемона, инициируем подгрузку следующих 15 покемонов (так, чтобы процедура подгрузки казалась "невидимой", классический бесконечный скролл). Если покемоны не успели подгрузиться, показываем какой-нибудь скролл-крутилку

Добавляем возможность "провалится" внутрь карточки покемона. Внутри необходимо отрисовать страницу с аватаркой покемена и какой-нибудь дополнительной информацией. На самом деле не сильно принципиально, какой именно. Можно взять просто 5 первых попавшихся

При возвращении с экрана покемона в общий список, позиция скролла должна сохраняться
Если информация о профиле покемона уже загружалось, то данные должны закешироваться, повторной загрузки быть не должно 