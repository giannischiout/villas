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

const German = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Haftungsausschluss</h1>
                <span>Haftung für Inhalte</span>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                <span>Haftung für Links</span>
                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                <span>Urheberrecht</span>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
        </div>
    )
}


const English = () => {
    return (
        <div className="policy_container">
        <div>
            <h1>Disclaimer</h1>
            <span>Liability for content
            </span>
            <p>As a service provider, we are responsible for our own content on these pages in accordance with general laws in accordance with Section 7 Paragraph 1 TMG. However, according to Sections 8 to 10 TMG, as a service provider we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
            <p>Obligations to remove or block the use of information in accordance with general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of any corresponding legal violations, we will immediately remove this content.</p>
            <span>Liability for links</span>
            <p>Our offer contains links to external third-party websites over whose content we have no influence. We therefore cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not apparent at the time of linking.</p>
            <p>
                However, permanent control of the content of the linked pages is unreasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will immediately remove such links.
            </p>
            <span>copyright</span>
            <p>The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.
            </p>
            <p>If the content on this site was not created by the operator, the copyrights of third parties are respected. In particular contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, we ask that you notify us accordingly. If we become aware of any legal violations, we will immediately remove such content.
            </p>
        </div>
    </div>
    )
}


const Greek = () => {
    return (
        <div className="policy_container">
        <div>
            <h1>Αποποίηση Ευθύνης</h1>
            <span>Ευθύνη για το περιεχόμενο</span>
            <p>Ως πάροχος υπηρεσιών, είμαστε υπεύθυνοι για το δικό μας περιεχόμενο σε αυτές τις σελίδες σύμφωνα με τους γενικούς νόμους σύμφωνα με το άρθρο 7 παράγραφος 1 του TMG. Ωστόσο, σύμφωνα με τα άρθρα 8 έως 10 του TMG, ως πάροχοι υπηρεσιών δεν υποχρεούμαστε να παρακολουθούμε μεταδιδόμενες ή αποθηκευμένες πληροφορίες τρίτων ή να ερευνούμε περιστάσεις που υποδεικνύουν παράνομη δραστηριότητα.</p>
            <p>Οι υποχρεώσεις για την αφαίρεση ή τον περιορισμό της χρήσης πληροφοριών σύμφωνα με τον γενικό νόμο παραμένουν ανέπαφες. Ωστόσο, η ευθύνη σε αυτό το πλαίσιο είναι δυνατή μόνο από τη στιγμή της γνώσης μιας συγκεκριμένης νομικής παραβίασης. Εάν γνωρίζουμε για οποιαδήποτε αντίστοιχη νομική παραβίαση, θα αφαιρέσουμε αμέσως αυτό το περιεχόμενο.</p>
            <span>Ευθύνη για συνδέσεις</span>
            <p>Η προσφορά μας περιλαμβάνει συνδέσεις προς εξωτερικούς ιστότοπους τρίτων, όσον αφορά των περιεχομένων των οποίων δεν έχουμε επιρροή. Δεν μπορούμε, επομένως, να αναλάβουμε καμία ευθύνη για αυτό το εξωτερικό περιεχόμενο. Ο αντίστοιχος πάροχος ή διαχειριστής των σελίδων είναι πάντα υπεύθυνος για το περιεχόμενο των συνδεδεμένων σελίδων. Οι συνδεδεμένες σελίδες ελέγχθηκαν για πιθανές νομικές παραβάσεις την στιγμή του συνδέσμου. Παράνομο περιεχόμενο δεν ήταν εμφανές τη στιγμή του συνδέσμου.</p>
            <p>Ωστόσο, ο μόνιμος έλεγχος του περιεχομένου των συνδεδεμένων σελίδων είναι αδικαιολόγητος χωρίς συγκεκριμένα στοιχεία για μια νομική παραβίαση. Εάν μάθουμε για οποιαδήποτε νομική παραβίαση, θα αφαιρέσουμε αμέσως τις αντίστοιχες συνδέσεις.</p>
            <span>Πνευματικά δικαιώματα</span>
            <p>Τα περιεχόμενα και τα έργα σε αυτές τις σελίδες που δημιουργήθηκαν από τους χειριστές του ιστότοπου υπόκεινται στο γερμανικό νόμο περί πνευματικών δικαιωμάτων. Η αναπαραγωγή, επεξεργασία, διανομή και κάθε είδους εκμετάλλευση εκτός των ορίων του πνευματικού δικαιώματος απαιτούν τη γραπτή συγκατάθεση του αντίστοιχου συγγραφέα ή δημιουργού. Οι λήψεις και οι αντίγραφα αυτής της σελίδας επιτρέπονται μόνο για ιδιωτική, μη εμπορική χρήση.</p>
            <p>Εάν το περιεχόμενο σε αυτήν τη σελίδα δεν δημιουργήθηκε από τον χειριστή, τα πνευματικά δικαιώματα τρίτων σεβάστηκαν. Ειδικότερα, τα περιεχόμενα τρίτων σημειώνονται ως τέτοια. Αν παρόλα αυτά διαπιστώσετε κάποια παραβίαση πνευματικών δικαιωμάτων, σας παρακαλούμε να μας ενημερώσετε ανάλογα. Εάν μάθουμε για οποιαδήποτε νομική παραβίαση, θα αφαιρέσουμε αμέσως το αντίστοιχο περιεχόμενο.</p>
        </div>
    </div> 
    )
}

export default Page;