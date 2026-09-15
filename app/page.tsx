export default function Home() {
  const instagram = "https://www.instagram.com/keratin__ch/";
  const telegram = "https://t.me/ALENACHELYSHEVA";
  const phone = "tel:+79086707959";

  return (
    <main className="min-h-screen bg-[#f6f2ee] text-[#302925]">
     {/* ================= HEADER ================= */}
<header className="sticky top-0 z-50 border-b border-[#302925]/10 bg-[#f6f2ee]/90 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">

    {/* LOGO */}
    <div className="flex min-w-0 flex-col">
      <div className="text-base font-medium tracking-wide leading-tight md:text-lg">
        KERATIN_CH
      </div>

      <div className="mt-1 max-w-[180px] text-[8px] uppercase leading-tight tracking-[0.18em] text-[#9a8172] md:max-w-none md:text-[10px] md:tracking-[0.25em]">
        Кератин · Ботокс · Холодное восстановление
      </div>
    </div>

    {/* NAVIGATION — только на компьютере */}
    <nav className="hidden items-center gap-8 text-sm text-[#6f625b] md:flex">
      <a href="#about" className="transition hover:text-[#302925]">
        О мастере
      </a>

      <a href="#results" className="transition hover:text-[#302925]">
        Работы
      </a>

      <a href="#services" className="transition hover:text-[#302925]">
        Услуги
      </a>

      <a href="#reviews" className="transition hover:text-[#302925]">
        Отзывы
      </a>
    </nav>

    {/* CONTACTS */}
    <details className="relative">
      <summary className="cursor-pointer list-none rounded-full bg-[#302925] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#4b403a] md:px-5 md:py-3">
        Контакты
      </summary>

      <div className="absolute right-0 top-12 flex w-48 flex-col gap-2 rounded-2xl border border-[#302925]/10 bg-[#f6f2ee] p-3 shadow-lg">

        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-3 text-sm text-[#302925] transition hover:bg-[#ebe3dd]"
        >
          Instagram
        </a>

        <a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-3 text-sm text-[#302925] transition hover:bg-[#ebe3dd]"
        >
          Telegram
        </a>

        <a
          href="tel:+79086707959"
          className="rounded-xl px-4 py-3 text-sm text-[#302925] transition hover:bg-[#ebe3dd]"
        >
          Позвонить
        </a>

      </div>
    </details>

  </div>
</header>

      {/* ================= HERO ================= */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Текст */}
          <div className="max-w-3xl text-center">
  <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#9a8172]">
    Профессиональная реконструкция волос
  </p>

  <h1 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-6.8xl">
    ВОЛОСЫ, КОТОРЫЕ
    <br />
    ХОЧЕТСЯ ТРОГАТЬ.
  </h1>

  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-[#302925] px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-[#4b403a]"
    >
      Записаться
    </a>

    <a
      href="#results"
      className="rounded-full border border-[#302925]/20 px-8 py-4 text-center text-sm font-medium transition hover:bg-white"
    >
      Посмотреть работы
    </a>
  </div>

  <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-[#7d6d64]">
    <span>● Работаю с 2020 года</span>
    <span>● Премиальные составы</span>
    <span>● Индивидуальный подход</span>
  </div>
</div>

          {/* Визуальный блок */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#ddd2ca]">
              <img
                src="/Для шапки.png"
                alt="Результат работы с волосами"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl shadow-black/5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                keratin_ch
              </p>

              <p className="mt-2 text-lg font-medium">
                Красота начинается
                <br />
                со здоровья волос
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-[#302925]/10 bg-[#302925] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbbb0]">
            Мой подход
          </p>

          <h2 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Не просто красивый результат.
            <br />
            Здоровые волосы в долгосрочной перспективе.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#d8cec8]">
            Я не работаю по принципу «одна процедура подходит всем».
            Сначала оцениваю состояние волос, а затем подбираю уход,
            который действительно нужен именно вам.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          
          <div className="overflow-hidden rounded-[2.5rem] bg-[#ddd2ca]">
            <img
              src="/Мастер1.jpeg"
              alt="Алёна — специалист по реконструкции волос"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
              О мастере
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
              Меня зовут Алёна.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[#6f625b]">
              <p>
                Я занимаюсь реконструкцией волос с 2020 года и
                специализируюсь на бережном восстановлении и уходе.
              </p>

              <p>
                Я работаю только с премиальными составами и внимательно
                отношусь к тому, что использую в работе. Для меня качество
                продукта — не то, на чём можно экономить.
              </p>

              <p>
                Перед каждой процедурой я оцениваю состояние волос и
                подбираю подходящий вариант ухода. Если процедура вам
                не подходит, я честно об этом скажу.
              </p>

              <p>
                Мне важно, чтобы результат радовал вас не только сразу
                после процедуры, но и спустя недели и месяцы.
              </p>
            </div>

            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full bg-[#302925] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4b403a]"
            >
              Познакомиться ближе
            </a>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#ebe3dd] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
              Почему я
            </p>

            <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
              Красота без компромиссов
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-[#302925]/10 md:grid-cols-3">
            <div className="bg-[#f6f2ee] p-8 md:p-10">
              <span className="text-sm text-[#9a8172]">01</span>

              <h3 className="mt-8 text-xl font-medium">
                Индивидуальный подход
              </h3>

              <p className="mt-4 leading-7 text-[#6f625b]">
                Состояние волос у каждого человека разное.
                Поэтому процедура подбирается индивидуально.
              </p>
            </div>

            <div className="bg-[#f6f2ee] p-8 md:p-10">
              <span className="text-sm text-[#9a8172]">02</span>

              <h3 className="mt-8 text-xl font-medium">
                Качество составов
              </h3>

              <p className="mt-4 leading-7 text-[#6f625b]">
                Использую профессиональные средства и не экономлю
                на качестве продуктов.
              </p>
            </div>

            <div className="bg-[#f6f2ee] p-8 md:p-10">
              <span className="text-sm text-[#9a8172]">03</span>

              <h3 className="mt-8 text-xl font-medium">
                Забота о волосах
              </h3>

              <p className="mt-4 leading-7 text-[#6f625b]">
                Цель — не только визуальный эффект, но и максимально
                бережное отношение к волосам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section id="results" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
                Результат
              </p>

              <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
                До / После
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#6f625b]">
              Результат каждой процедуры зависит от исходного состояния
              волос, поэтому я всегда подбираю уход индивидуально.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img
                src="/Блонд.jpg"
                alt="Волосы до процедуры"
                className="aspect-square w-full object-cover"
              />

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                  До
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  Исходное состояние
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img
                src="/BeforeAfter.png"
                alt="Волосы после процедуры"
                className="aspect-square w-full object-cover"
              />

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                  После
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  Гладкость и ухоженный вид
                </h3>
              </div>
            </div>
          </div>

          {/* Видео */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <video
                src="/Видео После 2.mov"
                controls
                playsInline
                className="w-full h-auto object-contain"
              />

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                  Результат
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  Работа с волосами
                </h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <video
                src="/Видео После.mov"
                controls
                playsInline
                className="w-full h-auto object-contain"
              />

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                  Результат
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  После процедуры
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-[#302925]/20 px-8 py-4 text-sm font-medium transition hover:bg-white"
            >
              Смотреть больше работ →
            </a>
          </div>
        </div>
      </section>


{/* ================= SERVICES ================= */}
<section id="services" className="bg-[#302925] px-6 py-28 text-white">
  <div className="mx-auto max-w-6xl">

    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.35em] text-[#cdbbb0]">
        Услуги
      </p>

      <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
        Подберём процедуру
        <br />
        именно для ваших волос
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-[#d8cec8]">
        Каждая процедура решает свою задачу. Поэтому перед работой
        я оцениваю состояние волос и помогаю выбрать подходящий вариант.
      </p>
    </div>
    <div className="mt-14 divide-y divide-white/10 border-y border-white/10">

      {/* 01 — Кератин */}
      <details className="group py-8 md:py-10">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
          <div className="flex gap-6 md:gap-12">
            <span className="pt-1 text-sm text-[#9a8172]">
              01
            </span>

            <div>
              <h3 className="text-2xl font-medium md:text-3xl">
                Кератиновое выпрямление
              </h3>

              <p className="mt-2 text-sm text-[#9a8172]">
                Идеальная гладкость • до 6 месяцев
              </p>
            </div>
          </div>

          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="ml-12 mt-8 max-w-4xl md:ml-[5.25rem]">
          <div className="grid gap-8 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Что делает
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Кондиционирует волосы. Обволакивает каждый волос
                защитной плёнкой, заполняет пустоты, разглаживает
                кутикулу и выпрямляет.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Тебе подходит, если
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Волосы пушатся, вьются, жёсткие и плохо поддаются
                укладке. Ты хочешь идеальную гладкость без утюжка.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Эффект
              </p>

              <p className="mt-3 text-2xl font-medium">
                До 6 месяцев
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Стоимость
              </p>

              <p className="mt-2 text-2xl font-medium">
                от 5 000 ₽
              </p>
            </div>

          </div>
        </div>
      </details>

      {/* 02 — Ботокс */}
      <details className="group py-8 md:py-10">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
          <div className="flex gap-6 md:gap-12">
            <span className="pt-1 text-sm text-[#9a8172]">
              02
            </span>

            <div>
              <h3 className="text-2xl font-medium md:text-3xl">
                Ботокс для волос
              </h3>

              <p className="mt-2 text-sm text-[#9a8172]">
                Питание • плотность • гладкость
              </p>
            </div>
          </div>

          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="ml-12 mt-8 max-w-4xl md:ml-[5.25rem]">
          <div className="grid gap-8 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Что делает
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Кондиционирует и питает. Наполняет волосы влагой,
                маслами и витаминами, делает их плотнее и послушнее.
                Даёт лёгкую гладкость без полного выпрямления.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Тебе подходит, если
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Волосы тонкие, сухие, ломкие, но не сильно вьющиеся.
                Ты хочешь гладкость, плотность и ухоженный вид.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Эффект
              </p>

              <p className="mt-3 text-2xl font-medium">
                2–4 месяца
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Стоимость
              </p>

              <p className="mt-2 text-2xl font-medium">
                от 5 000 ₽
              </p>
            </div>

          </div>
        </div>
      </details>

      {/* 03 — Холодное восстановление */}
      <details className="group py-8 md:py-10">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
          <div className="flex gap-6 md:gap-12">
            <span className="pt-1 text-sm text-[#9a8172]">
              03
            </span>

            <div>
              <h3 className="text-2xl font-medium md:text-3xl">
                Холодное восстановление
              </h3>

              <p className="mt-2 text-sm text-[#9a8172]">
                Восстановление • укрепление • здоровье волос
              </p>
            </div>
          </div>

          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="ml-12 mt-8 max-w-4xl md:ml-[5.25rem]">
          <div className="grid gap-8 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Что делает
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Восстанавливает структуру волоса изнутри. Без нагрева
                утюжком, состав активируется холодным способом.
                Наполняет волос белками и аминокислотами, укрепляет
                и помогает восстановить повреждения.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Тебе подходит, если
              </p>

              <p className="mt-3 leading-7 text-[#d8cec8]">
                Волосы повреждённые, ослабленные или пережжённые
                после окрашивания и частых укладок. Ты хочешь
                вернуть волосам здоровье, а не изменить их форму.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Эффект
              </p>

              <p className="mt-3 text-2xl font-medium">
                1–3 месяца
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#9a8172]">
                Стоимость
              </p>

              <p className="mt-2 text-2xl font-medium">
                от 3 000 ₽
              </p>
            </div>

          </div>
        </div>
      </details>

    </div>

    {/* CTA */}
    <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-xl text-sm leading-7 text-[#a99b93]">
        Не знаете, какая процедура подойдёт именно вам?
        Напишите мне — я помогу определить оптимальный вариант
        после оценки состояния волос.
      </p>

      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-[#302925] transition hover:bg-[#eee8e4]"
      >
        Подобрать процедуру
      </a>
    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section id="faq" className="px-6 py-28">
  <div className="mx-auto max-w-5xl">

    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
        FAQ
      </p>

      <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
        Часто задаваемые
        <br />
        вопросы
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-[#6f625b]">
        Собрала ответы на вопросы, которые чаще всего возникают
        перед процедурой.
      </p>
    </div>

    <div className="mt-14 divide-y divide-[#302925]/10 border-y border-[#302925]/10">

      {/* Вопрос 1 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
          <h3 className="text-lg font-medium sm:text-xl">
            Выпрямление волос — это безопасно?
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#302925]/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-5 max-w-3xl pr-12 leading-8 text-[#6f625b]">
          Да, процедуры по выпрямлению волос в руках опытного мастера
          при правильном подборе состава и соблюдении технологии не принесут
          волосам никакого вреда. При этом они помогают получить красивые
          и ухоженные волосы без постоянной укладки и использования
          утюжка — эффект может сохраняться до 6 месяцев.
        </div>
      </details>

      {/* Вопрос 2 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
          <h3 className="text-lg font-medium sm:text-xl">
            Какую процедуру выбрать?
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#302925]/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-5 max-w-3xl pr-12 leading-8 text-[#6f625b]">
          Это зависит от желаемого результата и состояния волос.
          Перед процедурой я провожу диагностику состояния волос,
          учитываю их структуру, повреждения и ваши пожелания,
          после чего подбираю наиболее подходящую процедуру и состав.
        </div>
      </details>

      {/* Вопрос 3 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
          <h3 className="text-lg font-medium sm:text-xl">
            Сколько держится результат?
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#302925]/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-5 max-w-3xl pr-12 leading-8 text-[#6f625b]">
          Всё индивидуально и зависит от выбранной процедуры,
          исходного состояния волос и последующего домашнего ухода.

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between gap-6 border-b border-[#302925]/10 pb-3">
              <span>Кератиновое выпрямление</span>
              <span className="font-medium whitespace-nowrap">
                3–6 месяцев
              </span>
            </div>

            <div className="flex items-center justify-between gap-6 border-b border-[#302925]/10 pb-3">
              <span>Ботокс для волос</span>
              <span className="font-medium whitespace-nowrap">
                3–4 месяца
              </span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <span>Холодное восстановление</span>
              <span className="font-medium whitespace-nowrap">
                4–6 недель
              </span>
            </div>
          </div>
        </div>
      </details>

      {/* Вопрос 4 */}
      <details className="group py-7">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
          <h3 className="text-lg font-medium sm:text-xl">
            Обязательно ли пользоваться бессульфатным шампунем после процедуры?
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#302925]/20 text-xl font-light transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <div className="mt-5 max-w-3xl pr-12 leading-8 text-[#6f625b]">
          Нет, использование бессульфатного шампуня не обязательно.
          Шампунь лучше подбирать в первую очередь по типу и состоянию
          кожи головы, а не только по наличию или отсутствию сульфатов.
        </div>
      </details>

    </div>

    <div className="mt-12 rounded-[2rem] bg-[#ebe3dd] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#9a8172]">
          Остались вопросы?
        </p>

        <h3 className="mt-3 text-2xl font-medium">
          Напишите мне перед записью
        </h3>

        <p className="mt-3 max-w-xl leading-7 text-[#6f625b]">
          Расскажите о своих волосах и желаемом результате —
          я помогу с выбором процедуры.
        </p>
      </div>

      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block shrink-0 rounded-full bg-[#302925] px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-[#4b403a] md:mt-0"
      >
        Задать вопрос
      </a>
    </div>

  </div>
</section>


      {/* ================= REVIEWS ================= */}
      <section id="reviews" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
              Отзывы
            </p>

            <h2 className="mt-4 text-4xl font-medium sm:text-5xl">
              Мне доверяют
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-xl tracking-widest">★★★★★</div>

              <p className="mt-6 leading-8 text-[#6f625b]">
                «Волосы стали намного мягче и выглядят очень ухоженными.
                Обязательно вернусь снова!»
              </p>

              <p className="mt-8 text-sm font-semibold">
                Мария
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-xl tracking-widest">★★★★★</div>

              <p className="mt-6 leading-8 text-[#6f625b]">
                «Очень понравился результат. Волосы буквально
                преобразились после процедуры.»
              </p>

              <p className="mt-8 text-sm font-semibold">
                Екатерина
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="text-xl tracking-widest">★★★★★</div>

              <p className="mt-6 leading-8 text-[#6f625b]">
                «Приятная атмосфера, внимательный мастер и отличный
                результат. Спасибо!»
              </p>

              <p className="mt-8 text-sm font-semibold">
                Анна
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#ebe3dd] px-6 py-20 text-center md:px-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9a8172]">
            Запись
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
            Давайте подберём уход,
            <br />
            который нужен именно вашим волосам.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#6f625b]">
            Напишите мне, расскажите о состоянии волос и желаемом
            результате. Вместе подберём подходящую процедуру.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#302925] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#4b403a]"
            >
              Написать в Instagram
            </a>

            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#302925]/20 bg-white px-8 py-4 text-sm font-medium transition hover:bg-[#f5f1ee]"
            >
              Написать в Telegram
            </a>
          </div>

          <div className="mt-10 text-sm text-[#7d6d64]">
            <p>Новороссийск, Россия</p>

            <a
              href={phone}
              className="mt-2 inline-block transition hover:text-[#302925]"
            >
              +79086707959
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#302925]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#7d6d64] md:flex-row">
          <p>© 2026 Hair Reconstruction</p>

          <div className="flex items-center gap-6">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#302925]"
            >
              Instagram
            </a>

            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#302925]"
            >
              Telegram
            </a>

            <a
              href={phone}
              className="transition hover:text-[#302925]"
            >
              +79086707959
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
