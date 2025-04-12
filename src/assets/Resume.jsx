import React from "react";

function Resume() {
  return (
    <div>
      <header>
        <img
          src="https://i.postimg.cc/gjFzn9BD/IMG-0007.jpg"
          alt="Ava"
          width="200"
        />
        <h1>Халилов Мухаммед ФР-24</h1>
        <p>Фронтенд-разработчик</p>
        <p>
          Email:{" "}
          <a href="mailto:halilovmuhammed7@gmail.com">
            halilovmuhammed7@gmail.com
          </a>
        </p>
        <p>
          Телефон: <a href="tel:+996502208206">0502-208-206</a>
        </p>
      </header>

      <section>
        <h1>Обо мне</h1>
        <p>Начинающий фронтенд разработчик.</p>
      </section>

      <section>
        <h1>Опыт работы</h1>
        <p>У Канай Агая</p>
      </section>

      <section>
        <h1>Образование</h1>
        <p>УВК ШГ №67 (01.09.2014 - 01.09.2024)</p>
        <p>
          Профессиональный лицей №99 (2024 - настоящее время), Специальность:
          Фронтенд разработчик
        </p>
      </section>

      <section>
        <h1>Навыки</h1>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
