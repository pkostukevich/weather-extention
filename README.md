# React Chrome Weather Extension

Расширение для Chrome, работающее на новостном сайте https://www.npr.org.

## Описание

На popup-странице расширения пользователь может выбрать один из 3 городов для отображения погоды. В каждой новостной карточке, занимающей больше половины страницы, рядом с заголовком находится иконка, отражающая состояние погоды в выбранном ранее городе. При нажатии на иконку появляется окно с информацией о температуре в выбранном городе. 

![image](https://github.com/user-attachments/assets/ac543f00-de41-40ff-b017-0bb9fcbccffc)
![image](https://github.com/user-attachments/assets/1b8a6ec6-24e1-441c-912e-4980b1a907b1)

## Технологии

- React.js
- TypeScript
- Webpack
- Chrome Extension Manifest Version 3
- Chrome Extensions API
- Weather API - https://openweathermap.org/api


## Добавление расширения в браузер

1. Склонировать репозиторий;
2. Установить зависимости
```sh
npm install
```
3. Запустить команду 
```sh
npm run build
```
4. Открыть в браузере Google Chrome - chrome://extensions/;
5. В правом верхнем углу включить режим разработчика;
6. Найти кнопку "Загрузить распакованное расширение";
7. Выбрать папку /dist.




