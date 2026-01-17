import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="section-container">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Пользовательское соглашение
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                1. Общие положения
              </h2>
              <p>
                Настоящее Пользовательское соглашение регулирует отношения между ООО «Кавказ Инжиниринг» (далее — Компания) и пользователем данного сайта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                2. Предмет соглашения
              </h2>
              <p>
                Компания предоставляет пользователю доступ к информации о сертификации пассажирских подвесных канатных дорог и связанных услугах.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                3. Права и обязанности сторон
              </h2>
              <p>
                Пользователь обязуется не использовать материалы сайта в коммерческих целях без письменного согласия Компании. Компания обязуется предоставлять актуальную информацию о своих услугах.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                4. Ответственность
              </h2>
              <p>
                Компания не несёт ответственности за временную недоступность сайта, вызванную техническими причинами.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                5. Изменение соглашения
              </h2>
              <p>
                Компания оставляет за собой право вносить изменения в настоящее Соглашение. Актуальная версия всегда доступна на данной странице.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
