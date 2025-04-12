import React from "react";

function Resume() {
  return (
    <div className="resume-container">
      <header>
        <h1>Muhammed Halilov</h1>
        <p>Frontend - Разработчик</p>
        <p>
          Email:{" "}
          <a href="mailto:halilovmuhammed7@gmail.com">
            halilovmuhammed7@gmail.com
          </a>{" "}
          | Телефон: <a href="tel:+996502208206">+996 502 208 206</a>
        </p>

        <div className="contact-links">
          <a
            href="https://t.me/muhwx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
            />
          </a>
          <a
            href="https://instagram.com/halilov.mm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://wa.me/996502208206"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
          </a>
        </div>
      </header>

      <section>
        <h2>Обо мне</h2>
        <p>Начинающий фронтенд разработчик .</p>
      </section>

      <section>
        <h2>Опыт работы</h2>
        <h3>Компания BayTash</h3>
        <p>Должность: Frontend Developer</p>
        <p>Период работы: 2024 – настоящее время</p>
      </section>

      <section>
        <h2>Образование</h2>
        <h3>УВК ШГ №67 2014 - 2024</h3>
        <h4>
          Профессиональный лицей при Президенте №99 2024 - Настоящее время
        </h4>
        <p>Специальность: Фронтенд разработчик</p>
      </section>

      <section>
        <h2>Навыки</h2>
        <ul className="skills-list">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt="React"
            />
            React
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript"
            />
            JavaScript
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="HTML/CSS"
            />
            HTML/CSS
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
              alt="Git"
            />
            Git
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
