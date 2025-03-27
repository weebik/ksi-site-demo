import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    // wysyłka formularza
  };

  return (
    <section
      className="bg-dark-section-primary z-10 pt-24 pb-24 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container mx-auto px-4 mt-20 max-w-250">
        <h2 className="text-sans text-4xl font-bold text-center">
          Skontaktuj się z nami
        </h2>
        <hr className="border-action-dark-blue border-t-3 mt-6 mb-10" />

        {/* Formularz */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Imię */}
            <div>
              <label className="block mb-2">
                Imię<span className="font-bold text-error">*</span>
              </label>
              <input
                {...register("firstName", { required: "Imię jest wymagane" })}
                className="w-full p-3 rounded bg-dark-section-secondary border border-dark-section-primary focus:border-action-blue focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-error text-sm">
                  {errors.firstName.message?.toString()}
                </p>
              )}
            </div>

            {/* Nazwisko */}
            <div>
              <label className="block mb-2">
                Nazwisko<span className="font-bold text-error">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Nazwisko jest wymagane",
                })}
                className="w-full p-3 rounded bg-dark-section-secondary border border-dark-section-primary focus:border-action-blue focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-error text-sm">
                  {errors.lastName.message?.toString()}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block mb-2">
                Email<span className="font-bold text-error">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email jest wymagany",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Podaj poprawny adres email",
                  },
                })}
                className="w-full p-3 rounded bg-dark-section-secondary border border-dark-section-primary focus:border-action-blue focus:outline-none"
              />
              {errors.email && (
                <p className="text-error text-sm">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>

            {/* Numer telefonu */}
            <div className="md:col-span-2">
              <label className="block mb-2">Numer telefonu</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full p-3 rounded bg-dark-section-secondary border border-dark-section-primary focus:border-action-blue focus:outline-none"
              />
            </div>

            {/* Wiadomość */}
            <div className="md:col-span-2">
              <label className="block mb-2">
                Wiadomość<span className="font-bold text-error">*</span>
              </label>
              <textarea
                {...register("message", {
                  required: "Wiadomość jest wymagana",
                })}
                rows={5}
                className="w-full p-3 rounded bg-dark-section-secondary border border-dark-section-primary focus:border-action-blue focus:outline-none"
              />
              {errors.message && (
                <p className="text-error text-sm">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="md:col-span-2 gap-3 flex items-center">
              <input
                type="checkbox"
                {...register("consent", { required: "Zgoda jest wymagana" })}
                className="w-4 h-4 rounded-full cursor-pointer checked:bg-action-blue
                           hover:transition-size duration-300 hover:scale-110"
              />
              <label>
                Zgadzam się, aby Koło Studentów Informatyki kontaktowało się ze
                mną używając wyżej podanych przeze Mnie środków kontaktu
              </label>
            </div>
            {errors.consent && (
              <p className="text-error text-sm md:col-span-2">
                {errors.consent.message?.toString()}
              </p>
            )}

            {/* Przycisk wysyłania */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-action-dark-blue text-white w-full py-3 rounded hover:bg-action-blue-secondary
                           hover:transition-size duration-300 hover:-translate-y-0.5"
              >
                Wyślij formularz
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
