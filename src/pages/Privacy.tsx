import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="section-container">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую ООО «Кавказ Инжиниринг» может получить о пользователе во время использования сайта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                2. Сбор информации
              </h2>
              <p>
                Мы собираем информацию, которую вы предоставляете при заполнении форм на сайте: имя, адрес электронной почты, номер телефона.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                3. Использование информации
              </h2>
              <p>
                Собранная информация используется исключительно для связи с вами по вопросам сертификации и предоставления информации о наших услугах.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                4. Защита информации
              </h2>
              <p>
                Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                5. Контактная информация
              </h2>
              <p>
                По всем вопросам, связанным с политикой конфиденциальности, вы можете обратиться по адресу: osp@kavkaz-ing.ru
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
