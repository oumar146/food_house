import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

const Newsletter = () => {
  return (
    <section id="newsletter" className=" mt-5 relative isolate overflow-hidden bg-black py-16 sm:py-6 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="font-semibold tracking-tight text-white text-lg sm:text-xl">Restez informé de nos derniers plats !</h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              Abonnez-vous à notre newsletter et recevez les dernières informations sur nos nouveaux plats, offres spéciales et événements.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Entrez votre e-mail"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                S'abonner
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white text-sm sm:text-base">Mises à jour exclusives du menu</dt>
              <dd className="mt-2 text-gray-400 text-sm sm:text-base">
                Soyez le premier à savoir quand nous introduisons de nouveaux plats et des offres saisonnières.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white text-sm sm:text-base">Pas de spam</dt>
              <dd className="mt-2 text-gray-400 text-sm sm:text-base">
                Nous promettons de garder nos e-mails pertinents et utiles — pas de spam indésirable !
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </section>
  );
};

export default Newsletter;
