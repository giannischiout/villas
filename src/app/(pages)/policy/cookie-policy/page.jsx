import Link from 'next/link';
import { cookies } from "next/headers";
const Page = () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en';

    if (locale == 'locale=en') {
        return (
            <English />
        )
    }
    if (locale == 'locale=el') {
        return (
            <Greek />
        )
    }
    if (locale == 'locale=de') {
        return (
            <German />
        )
    }

}


const Greek = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Πολιτική Cookies</h1>
                <span>1. Εισαγωγή</span>
                <p>Η παρούσα Πολιτική Cookies εξηγεί πώς οι Ionian Dream Villas (εμείς, μας ή η εταιρεία μας) χρησιμοποιούν cookies και παρόμοιες τεχνολογίες στον ιστότοπό μας που βρίσκεται στο <Link href="https://ionian-dream-villas.com/el/">https://ionian-dream-villas.com/el/</Link></p>
                <span>2. Τι είναι τα Cookies;</span>
                <p>{"Τα Cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας (υπολογιστής, smartphone, tablet, κ.λπ.) όταν επισκέπτεστε έναν ιστότοπο. Επιτρέπουν στον ιστότοπο να θυμάται τις ενέργειές σας και τις προτιμήσεις σας (όπως σύνδεση, γλώσσα, μέγεθος γραμματοσειράς και άλλες προτιμήσεις εμφάνισης) κατά τη διάρκεια ενός χρονικού διαστήματος, ώστε να μην χρειάζεται να τις εισάγετε ξανά κάθε φορά που επιστρέφετε στον ιστότοπο ή περιηγείστε από μια σελίδα σε μια άλλη."}</p>
                <span>3. Ποια Cookies Χρησιμοποιούμε;</span>
                <p>{"Χρησιμοποιούμε τις ακόλουθες κατηγορίες cookies στον ιστότοπό μας: Απαραίτητα Cookies: Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του ιστότοπου μας. Σας επιτρέπουν να περιηγηθείτε στον ιστότοπο και να χρησιμοποιήσετε τα απαραίτητα χαρακτηριστικά του, όπως η πρόσβαση σε ασφαλείς περιοχές. Χωρίς αυτά τα cookies, ο ιστότοπος μας δεν θα λειτουργούσε σωστά. Cookies Επίδοσης: Αυτά τα cookies συλλέγουν πληροφορίες σχετικά με τον τρόπο χρήσης του ιστότοπου μας, όπως οι σελίδες που επισκέπτεστε και πόσο καιρό παραμένετε σε αυτές. Αυτές οι πληροφορίες μας βοηθούν να βελτιώσουμε την απόδοση του ιστότοπου μας και να τον καταστήσουμε πιο χρήστικο. Χρησιμοποιούμε το Google Analytics για αυτόν τον σκοπό. "}</p>
                <span>4. Πώς να Διαχειρίζεστε τα Cookies</span>
                <p>{`Μπορείτε να ελέγξετε και/ή να διαγράψετε τα cookies κατά τη δική σας διακριτική ευχέρεια. Μπορείτε να μάθετε πώς να το κάνετε αυτό, συμβουλευόμενοι την τεκμηρίωση βοήθειας του προγράμματος περιήγησής σας. Μπορείτε επίσης να απενεργοποιήσετε τα cookies Google Analytics επισκεπτόμενοι τη σελίδα απενεργοποίησης των cookies Google Analytics: [https://tools.google.com/dlpage/gaoptout].
            `}</p>
                <span>5. Αλλαγές σε αυτήν την Πολιτική Cookies</span>
                <p>{`Ενδέχεται να ενημερώσουμε αυτήν την Πολιτική Cookies ανά πάσα στιγμή. Η ενημερωμένη Πολιτική Cookies θα αναρτηθεί στον ιστότοπό μας. 
            Σας συνιστούμε να ελέγχετε αυτήν την Πολιτική Cookies τακτικά για να παραμένετε ενημερωμένοι σχετικά με τον τρόπο που χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες.`}</p>
                <span>6. Επικοινωνήστε Μαζί Μας</span>
                <p>Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με αυτήν την Πολιτική Cookies, παρακαλούμε επικοινωνήστε μαζί μας μέσω των πληροφοριών που παρέχονται στον ιστότοπό μας. Παρακαλούμε σημειώστε ότι αυτή η πολιτική cookies είναι απλώς ένα πρότυπο και πιθανώς να χρειαστεί να το προσαρμόσετε για να ταιριάζει στις συγκεκριμένες σας ανάγκες. Για παράδειγμα, μπορείτε να θέλετε να προσθέσετε περισσότερες πληροφορίες σχετικά με τα συγκεκριμένα cookies που χρησιμοποιείτε και τη διάρκεια αποθήκευσής τους. Πρέπει επίσης να συμβουλευτείτε με ένα δικηγόρο για να εξασφαλίσετε ότι η πολιτική cookies σας συμμορφώνεται με όλους τους ισχύοντες νόμους και κανονισμούς.</p>
            </div>
        </div>
    )
}
const German = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Cookie-Richtlinie</h1>
                <span>1. Einleitung</span>
                <p>Diese Cookie-Richtlinie erklärt, wie Ionian Dream Villas (wir, uns oder unser) Cookies und ähnliche Technologien auf unserer Website unter <Link href="https://ionian-dream-villas.com/de/">https://ionian-dream-villas.com/de/</Link> verwendet.</p>
                <span>2. Was sind Cookies?</span>
                <p>{"Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone, Tablet usw.) gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen (wie Anmeldung, Sprache, Schriftgröße und andere Anzeigeeinstellungen) über einen bestimmten Zeitraum zu speichern, sodass Sie sie nicht jedes Mal erneut eingeben müssen, wenn Sie zur Website zurückkehren oder von einer Seite zur anderen wechseln."}</p>
                <span>3. Welche Cookies verwenden wir?</span>
                <p>{"Wir verwenden die folgenden Arten von Cookies auf unserer Website: Essenzielle Cookies: Diese Cookies sind für den Betrieb unserer Website unbedingt erforderlich. Sie ermöglichen es Ihnen, sich auf der Website zu bewegen und deren wesentliche Funktionen zu nutzen, wie den Zugriff auf sichere Bereiche. Ohne diese Cookies würde unsere Website nicht ordnungsgemäß funktionieren. Performance Cookies: Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen, z. B. welche Seiten Sie besuchen und wie lange Sie auf ihnen verweilen. Diese Informationen helfen uns, die Leistung unserer Website zu verbessern und sie benutzerfreundlicher zu gestalten. Wir verwenden dafür Google Analytics."}</p>
                <span>4. Wie man Cookies verwaltet</span>
                <p>{`Sie können Cookies nach eigenem Ermessen steuern und/oder löschen. Wie Sie dies tun können, erfahren Sie, indem Sie die Hilfe-Dokumentation Ihres Browsers konsultieren. Sie können auch Google Analytics-Cookies deaktivieren, indem Sie die Google Analytics Opt-out-Seite besuchen: [https://tools.google.com/dlpage/gaoptout].
                `}</p>
                <span>5. Änderungen an dieser Cookie-Richtlinie</span>
                <p>{`Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Die aktualisierte Cookie-Richtlinie wird auf unserer Website veröffentlicht. 
                Wir empfehlen Ihnen, diese Cookie-Richtlinie regelmäßig zu überprüfen, um über die Verwendung von Cookies und ähnlichen Technologien auf dem Laufenden zu bleiben.`}</p>
                <span>6. Kontaktieren Sie uns</span>
                <p>Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, kontaktieren Sie uns bitte über die auf unserer Website bereitgestellten Informationen.
                    Beachten Sie, dass diese Cookie-Richtlinie nur eine Vorlage ist und Sie diese möglicherweise anpassen müssen, um Ihren spezifischen Anforderungen gerecht zu werden. Sie sollten auch einen Rechtsanwalt konsultieren, um sicherzustellen, dass Ihre Cookie-Richtlinie den geltenden Gesetzen und Vorschriften entspricht.
                </p>
            </div>
        </div>
    );
};
const English = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Cookie Policy</h1>
                <span>1. Introduction</span>
                <p>This Cookie Policy explains how Ionian Dream Villas (we,us, or our) uses cookies and similar
                    technologies on our website located at <Link href="https://ionian-dream-villas.com/en/">https://ionian-dream-villas.com/en/</Link></p>
                <span>2. What are Cookies?</span>
                <p>{"Cookies are small text files that are stored on your device (computer, smartphone, tablet, etc.) when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another."}</p>
                <span>3. What Cookies Do We Use?</span>
                <p>{"We use the following types of cookies on our websiteEssential Cookies: These cookies are strictly necessary for the operation of our website. They enable you to navigate around the website and use its essential features, such as accessing secure areas. Without these cookies, our website would not function properly.Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit and how long you stay on them. This information helps us to improve the performance of our website and make it more user-friendly. We use Google Analytics for this purpose. "}</p>
                <span>4. How to Manage Cookies</span>
                <p>{`ou can control and/or delete cookies at your own discretion. You can find out how to do this by consulting your browser's help documentation. You can also opt-out of Google Analytics cookies by visiting the Google Analytics opt-out page: [https://tools.google.com/dlpage/gaoptout].
            `}</p>
                <span>5. Changes to this Cookie Policy</span>
                <p>{`We may update this Cookie Policy from time to time. The updated Cookie Policy will be posted on our website. 
            We recommend that you review this Cookie Policy regularly to stay informed about how we use cookies and similar technologies.`}</p>
                <span>6. Contact Us</span>
                <p>If you have any questions about this Cookie Policy, please contact us through the information provided on our website.
                    Please note that this cookie policy is just a template and you may need to modify it to fit your specific needs. For example, you may want to add more information about the specific cookies you use and how long they are stored. You should also consult with a lawyer to ensure your cookie policy is compliant with all applicable laws and regulations.
                </p>
            </div>
        </div>
    )
}


export default Page;