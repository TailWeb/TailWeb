import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site TailWeb - Informations sur la collecte, l'utilisation et la protection des données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <React.Fragment>
      <div className="section-padding">
        <div className="container-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Politique de{" "}
            <span className="text-primary-600 dark:text-primary-400">
              confidentialité
            </span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Collecte des données personnelles
              </h2>
              <p>
                Nous collectons des informations lorsque vous remplissez le
                formulaire de contact ou interagissez avec notre site. Les
                données collectées peuvent inclure votre nom, votre adresse
                e-mail et tout autre renseignement que vous choisissez de
                fournir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Utilisation des données
              </h2>
              <p>
                Les données personnelles collectées sont utilisées uniquement
                pour répondre à vos demandes, améliorer notre site et, si vous y
                consentez, vous envoyer des informations ou des offres relatives
                à nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Partage des données
              </h2>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent
                être partagées uniquement avec nos prestataires techniques pour
                assurer le bon fonctionnement du site, dans le respect de la
                confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sécurité</h2>
              <p>
                Nous mettons en œuvre toutes les mesures nécessaires pour
                protéger vos données personnelles contre tout accès,
                modification, divulgation ou destruction non autorisés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience
                utilisateur et analyser le trafic. Vous pouvez configurer votre
                navigateur pour refuser les cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
              <p>
                Conformément à la législation en vigueur, vous disposez d'un
                droit d'accès, de rectification, de suppression et d'opposition
                concernant vos données personnelles. Pour exercer ces droits,
                contactez-nous à l'adresse suivante :<br />
                <strong>Email :</strong> louis.muscat73610@gmail.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>
                Pour toute question relative à cette politique de
                confidentialité, vous pouvez nous contacter à l'adresse suivante
                :<br />
                <strong>Email :</strong> louis.muscat73610@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
