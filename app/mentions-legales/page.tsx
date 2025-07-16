import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site TailWeb - Informations légales et conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
  return (
    <React.Fragment>
      <div className="section-padding">
        <div className="container-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Mentions{" "}
            <span className="text-primary-600 dark:text-primary-400">
              légales
            </span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
              <p>
                <strong>Nom :</strong> Louis Muscat
                <br />
                <strong>Statut :</strong> Auto-entrepreneur
                <br />
                <strong>Email :</strong> louis.muscat73610@gmail.com
                <br />
                <strong>Pays :</strong> France
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                États-Unis
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l'année, mais peut toutefois contenir des inexactitudes ou des
                omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un
                dysfonctionnement, merci de bien vouloir le signaler par email,
                à l'adresse louis.muscat73610@gmail.com, en décrivant le
                problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
              <p>
                Les sites internet peuvent proposer des liens vers d'autres
                sites internet ou d'autres ressources disponibles sur Internet.
                TailWeb ne dispose d'aucun moyen pour contrôler les sites en
                connexion avec ses sites internet.
              </p>
              <p>
                TailWeb ne répond pas de la disponibilité de tels sites et
                sources externes, ni ne la garantit. Elle ne peut être tenue
                pour responsable de tout dommage, de quelque nature que ce soit,
                résultant du contenu de ces sites ou sources externes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
              <p>
                Tant le présent site que les modalités et conditions de son
                utilisation sont régis par le droit français, quel que soit le
                lieu d'utilisation. En cas de contestation éventuelle, et après
                l'échec de toute tentative de recherche d'une solution amiable,
                les tribunaux français seront seuls compétents pour connaître de
                ce litige.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales,
                vous pouvez nous contacter à l'adresse suivante :<br />
                <strong>Email :</strong> louis.muscat73610@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
