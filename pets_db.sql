-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 10 2020 г., 20:02
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `pets_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `pets`
--

CREATE TABLE `pets` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `breed` varchar(100) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `inoculation` varchar(500) DEFAULT NULL,
  `diseases` varchar(500) DEFAULT NULL,
  `peresites` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pets`
--

INSERT INTO `pets` (`id`, `name`, `breed`, `img`, `description`, `age`, `inoculation`, `diseases`, `peresites`) VALUES
(1, 'Шкварка', 'Эстонская грязная', 'cat1.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '2 года', 'Есть', 'Нет', 'Блохи'),
(2, 'Чебупелька', 'Украинская лесная', 'cat2.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '1 год', 'Есть', 'Нет', 'Нет'),
(3, 'Келдышь', 'Фуфлыжная дикарка', 'cat3.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '4 месяца', 'Нет', 'Нет', 'Нет'),
(4, 'Чизик', 'Костяной пушистый', 'dog1.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '5 месяцев', 'Нет', 'Гепес', 'Нет'),
(5, 'Косарь', 'Желтый полосатик', 'dog2.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '7 лет', 'Есть', 'Нет', 'Лямблии'),
(6, 'Тряпка', 'Китайская половая', 'dog3.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '2 месяца', 'Нет ', 'Коронавирус', 'Нет'),
(7, 'Гнида', 'Собака лающая', 'dog4.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '8 лет', 'Нет', 'Хронический лайкоз', 'Все'),
(8, 'Слон', 'Снайперский спаниэль', 'dog5.png', 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quis, voluptates maiores fuga ipsum inventore voluptatibus a sunt vel, fugit quam reiciendis dolorum molestias eveniet distinctio eius atque temporibus officia quae.', '2 месяца', 'Нет', 'Нет', 'Нет');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
