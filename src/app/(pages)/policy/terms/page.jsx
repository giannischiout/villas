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


const English = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Terms and Conditions of Usage</h1>
                <span>1. Introduction</span>
                <p>{`Welcome to Ionian Island Villas your gateway to experiencing luxurious villa rentals on the beautiful island of Lefkada. These Terms and Conditions of Usage ("Terms") govern your access and use of our website and the information and services provided therein. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.`}</p>

                <span>2. Eligibility</span>
                <p>You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use our website.</p>
                <span>3. Villa Descriptions and Availability</span>
                <p>We strive to provide accurate and up-to-date information about our villas on our website. However, we cannot guarantee the complete accuracy, completeness, or reliability of all information. Villa descriptions and availability are subject to change without prior notice.</p>
                <span>4. Booking Process</span>
                <p>We do not offer an online booking engine on our website. To inquire about booking a villa, please contact us directly through the contact information provided on our website.</p>
                <span>5. Payments and Rates</span>
                <p>
                    Rental rates for each villa are clearly stated on their respective pages and may vary depending on the season, duration of stay, and any additional services requested. Full payment is required upon confirmation of your booking.
                </p>
                <span>  6. Use of the Villa
                </span>
                <p>All guests are expected to behave respectfully and responsibly during their stay. House rules for each villa are provided upon booking and must be adhered to. Violation of house rules may result in termination of your stay without refund.
                </p>
                <span>7. Disclaimer of Liability
                </span>

                <p>We are not responsible for any damages, injuries, or losses that may occur during your stay at one of our villas. You agree to use the villas at your own risk and hold us harmless from any liability arising from your use.</p>
                <span>8. Governing Law and Dispute Resolution</span>
                <p>These Terms shall be governed by and construed in accordance with the laws of Greece. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Greece.</p>
                <span>9. Modifications to Terms</span>
                <p>
                    We reserve the right to modify these Terms at any time without prior notice. Your continued use of our website following any such modification constitutes your acceptance of the modified Terms.
                </p>
                <span>10. Contact Information
                </span>
                <p>If you have any questions about these Terms, please contact us through the information provided on our website.</p>
                <span>GDPR Compliance</span>
                <span>1. Data Collection and Storage
                </span>
                <p>We only collect and store the following personal data from our website visitors:
                    Email addresses
                    Phone numbers
                    We collect this data when you contact us through our website contact form or subscribe to our mailing list (if applicable).
                </p>
                <span>2. Data Use and Processing
                </span>
                <p>We use your personal data for the following purposes:

                    To respond to your inquiries and requests
                    To send you information about our villas and special offers (if you opt-in to our mailing list)
                    We will not share your personal data with any third parties without your consent.
                </p>
                <span>3. Data Retention
                </span>
                <p>We will retain your personal data for a period of one year after your last interaction with us. You may request deletion of your data at any time by contacting us.
                </p>
                <span>4. Your Rights
                </span>
                <p>You have the following rights under the GDPR:

                    Right to access your personal data
                    Right to rectify inaccurate or incomplete data
                    Right to erasure of your data
                    Right to restrict processing of your data
                    Right to data portability
                    Right to object to processing of your data
                    You can exercise these rights by contacting us through the information provided on our website.
                </p>
                <span>5. Cookies</span>

                <p>Our website uses cookies to improve your user experience. You can find more information about our cookie policy on our website.

                    This is a starting point for your terms and conditions and GDPR compliance statement. It is important to note that this is not a substitute for legal advice and you should consult with a lawyer to ensure your terms and conditions are compliant with all applicable laws and regulations.
                </p>


            </div>


        </div>
    )
}

const Greek = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Όροι και Προϋποθέσεις Χρήσης</h1>
                <span>1. Εισαγωγή</span>
                <p>{`Καλώς ήρθατε στις Ionian Island Villas, την πύλη σας για την εμπειρία πολυτελών ενοικιαζόμενων βίλλων στο όμορφο νησί της Λευκάδας. Οι παρόντες Όροι και Προϋποθέσεις Χρήσης ("Όροι") διέπουν την πρόσβασή σας και τη χρήση του ιστότοπου μας και των πληροφοριών και υπηρεσιών που παρέχονται εκεί. Με την πρόσβαση ή τη χρήση του ιστότοπου μας, αναγνωρίζετε ότι έχετε διαβάσει, κατανοήσει και συμφωνήσετε να υποχρεωθείτε από αυτούς τους Όρους.`}</p>

                <span>2. Επιλεξιμότητα</span>
                <p>Πρέπει να είστε τουλάχιστον 18 ετών και να έχετε τη νομική ικανότητα να συνάψετε δεσμευτική συμφωνία για τη χρήση του ιστότοπου μας.</p>

                <span>3. Περιγραφές και Διαθεσιμότητα Βίλλων</span>
                <p>Προσπαθούμε να παρέχουμε ακριβείς και ενημερωμένες πληροφορίες σχετικά με τις βίλλες μας στον ιστότοπό μας. Ωστόσο, δεν μπορούμε να εγγυηθούμε την πλήρη ακρίβεια, πληρότητα ή αξιοπιστία όλων των πληροφοριών. Οι περιγραφές και η διαθεσιμότητα των βίλλων υπόκεινται σε αλλαγές χωρίς προηγούμενη ειδοποίηση.</p>

                <span>4. Διαδικασία Κράτησης</span>
                <p>Δεν προσφέρουμε δυνατότητα online κράτησης στον ιστότοπό μας. Για να ερωτηθείτε για την κράτηση μιας βίλλας, επικοινωνήστε απευθείας μαζί μας μέσω των πληροφοριών επικοινωνίας που παρέχονται στον ιστότοπό μας.</p>

                <span>5. Πληρωμές και Τιμές</span>
                <p>Οι τιμές ενοικίασης για κάθε βίλλα αναφέρονται σαφώς στις αντίστοιχες σελίδες τους και μπορεί να ποικίλουν ανάλογα με την εποχή, τη διάρκεια της παραμονής και τις επιπλέον υπηρεσίες που ζητούνται. Η πλήρης πληρωμή απαιτείται κατά την επιβεβαίωση της κράτησης.</p>

                <span>6. Χρήση της Βίλλας</span>
                <p>Αναμένεται από όλους τους επισκέπτες να συμπεριφέρονται με σεβασμό και ευθύνη κατά τη διάρκεια της παραμονής τους. Οι κανόνες σπιτιού για κάθε βίλλα παρέχονται κατά την κράτηση και πρέπει να τηρούνται. Η παραβίαση των κανόνων του σπιτιού μπορεί να οδηγήσει στη λήξη της παραμονής σας χωρίς επιστροφή χρημάτων.</p>

                <span>7. Αποποίηση Ευθύνης</span>
                <p>Δεν είμαστε υπεύθυνοι για οποιεσδήποτε ζημιές, τραυματισμούς ή απώλειες που ενδέχεται να προκύψουν κατά τη διάρκεια της παραμονής σας σε μια από τις βίλλες μας. Συμφωνείτε να χρησιμοποιείτε τις βίλλες με δική σας ευθύνη και να μας απαλλάσσετε από κάθε ευθύνη που προκύπτει από τη χρήση σας.</p>
                <p>Δεν φέρουμε ευθύνη για οποιεσδήποτε ζημιές, τραυματισμούς ή απώλειες που ενδέχεται να προκύψουν κατά τη διάρκεια της παραμονής σας σε μια από τις βίλλες μας. Συμφωνείτε να χρησιμοποιείτε τις βίλλες με δική σας ευθύνη και να μας απαλλάσσετε από κάθε ευθύνη που προκύπτει από τη χρήση σας.</p>

                <span>8. Εφαρμοστέο Δίκαιο και Επίλυση Διαφορών</span>
                <p>Οι παρόντες Όροι διέπονται και ερμηνεύονται σύμφωνα με τους νόμους της Ελλάδας. Κάθε διαφορά που προκύπτει από ή σχετίζεται με τους παρόντες Όρους υπόκειται στην αποκλειστική δικαιοδοσία των δικαστηρίων της Ελλάδας.</p>

                <span>9. Τροποποιήσεις στους Όρους</span>
                <p>
                    Διατηρούμε το δικαίωμα να τροποποιούμε αυτούς τους Όρους οποτεδήποτε χωρίς προηγούμενη ειδοποίηση. Η συνεχής χρήση του ιστότοπου μας μετά από οποιαδήποτε τέτοια τροποποίηση αποτελεί αποδοχή των τροποποιημένων Όρων.
                </p>

                <span>10. Στοιχεία Επικοινωνίας
                </span>
                <p>Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με αυτούς τους Όρους, παρακαλούμε επικοινωνήστε μαζί μας μέσω των πληροφοριών που παρέχονται στον ιστότοπό μας.</p>

                <span>Συμμόρφωση με το GDPR</span>
                <span>1. Συλλογή και Αποθήκευση Δεδομένων
                </span>
                <p>Συλλέγουμε και αποθηκεύουμε μόνο τα εξής προσωπικά δεδομένα από τους επισκέπτες του ιστότοπού μας:
                    Διευθύνσεις email
                    Αριθμοί τηλεφώνου
                    Συλλέγουμε αυτά τα δεδομένα όταν επικοινωνείτε μαζί μας μέσω της φόρμας επικοινωνίας του ιστότοπού μας ή εγγράφεστε στον κατάλογο αλληλογραφίας μας (εάν είναι εφαρμοστέο).</p>

                <span>2. Χρήση και Επεξεργασία Δεδομένων
                </span>
                <p>Χρησιμοποιούμε τα προσωπικά σας δεδομένα για τους εξής σκοπούς:
                    Να ανταποκριθούμε στις ερωτήσεις και τα αιτήματά σας
                    Να σας στέλνουμε πληροφορίες σχετικά με τις βίλλες μας και ειδικές προσφορές (εάν εγγραφείτε στον κατάλογο αλληλογραφίας μας)
                    Δεν θα μοιραστούμε τα προσωπικά σας δεδομένα με τρίτους χωρίς τη συγκατάθεσή σας.</p>
                <span>3. Διατήρηση Δεδομένων
                </span>
                <p>Θα διατηρήσουμε τα προσωπικά σας δεδομένα για ένα διάστημα ενός έτους μετά την τελευταία σας αλληλεπίδραση μαζί μας. Μπορείτε να ζητήσετε τη διαγραφή των δεδομένων σας οποτεδήποτε επικοινωνώντας μαζί μας.
                </p>

                <span>4. Τα Δικαιώματά Σας
                </span>
                <p>Έχετε τα ακόλουθα δικαιώματα σύμφωνα με τον GDPR:

                    Δικαίωμα πρόσβασης στα προσωπικά σας δεδομένα
                    Δικαίωμα διόρθωσης ανακριβών ή ελλιπών δεδομένων
                    Δικαίωμα διαγραφής των δεδομένων σας
                    Δικαίωμα περιορισμού της επεξεργασίας των δεδομένων σας
                    Δικαίωμα φορητότητας των δεδομένων σας
                    Δικαίωμα αντίρρησης στην επεξεργασία των δεδομένων σας
                    Μπορείτε να ασκήσετε αυτά τα δικαιώματα επικοινωνώντας μαζί μας μέσω των πληροφοριών που παρέχονται στον ιστότοπό μας.
                </p>

                <span>5. Cookies</span>

                <p>Ο ιστότοπός μας χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας χρήστη σας. Μπορείτε να βρείτε περισσότερες πληροφορίες σχετικά με την πολιτική μας για τα cookies στον ιστότοπό μας.

                    Αυτό είναι ένα αφετηριακό σημείο για τους όρους χρήσης και τη συμμόρφωση με το GDPR. Σημειώνεται ότι αυτό δεν αντικαθιστά τη νομική συμβουλή, και συνιστάται η συμβουλή με δικηγόρο για την εξασφάλιση της συμμόρφωσης των όρων χρήσης με όλους τους ισχύοντες νόμους και κανονισμούς.
                </p>
            </div>
        </div>
    )
}


const German = () => {
    return (
        <div className="policy_container">
            <div>
                <h1>Nutzungsbedingungen</h1>
                <span>1. Einleitung</span>
                <p>Willkommen bei Ionian Island Villas, Ihrem Tor zu luxuriösen Villa-Mietobjekten auf der schönen Insel Lefkada. Diese Nutzungsbedingungen ("Bedingungen") regeln Ihren Zugang und Ihre Nutzung unserer Website sowie der darin bereitgestellten Informationen und Dienstleistungen. Durch den Zugriff oder die Nutzung unserer Website erklären Sie sich damit einverstanden, dass Sie diese Bedingungen gelesen, verstanden und akzeptiert haben.</p>

                <span>2. Berechtigung</span>
                <p>Sie müssen mindestens 18 Jahre alt sein und die rechtliche Kapazität haben, um eine bindende Vereinbarung zur Nutzung unserer Website einzugehen.</p>

                <span>3. Beschreibungen und Verfügbarkeit der Villen</span>
                <p>Wir bemühen uns um genaue und aktuelle Informationen zu unseren Villen auf unserer Website. Wir können jedoch nicht die vollständige Genauigkeit, Vollständigkeit oder Zuverlässigkeit aller Informationen garantieren. Villa-Beschreibungen und Verfügbarkeit können ohne vorherige Ankündigung geändert werden.</p>

                <span>4. Buchungsprozess</span>
                <p>Wir bieten keine Online-Buchungsmaschine auf unserer Website an. Für Anfragen zur Buchung einer Villa nehmen Sie bitte direkt Kontakt mit uns auf, wie in den auf unserer Website angegebenen Kontaktdaten.</p>

                <span>5. Zahlungen und Tarife</span>
                <p>
                    Die Mietpreise für jede Villa sind auf ihren jeweiligen Seiten deutlich angegeben und können je nach Saison, Aufenthaltsdauer und angeforderten zusätzlichen Dienstleistungen variieren. Die vollständige Zahlung ist bei Bestätigung Ihrer Buchung erforderlich.
                </p>

                <span>6. Nutzung der Villa</span>
                <p>Alle Gäste werden gebeten, sich während ihres Aufenthalts respektvoll und verantwortungsbewusst zu verhalten. Die Hausregeln für jede Villa werden bei der Buchung zur Verfügung gestellt und müssen eingehalten werden. Verstöße gegen die Hausregeln können zur Beendigung Ihres Aufenthalts ohne Rückerstattung führen.</p>

                <span>7. Haftungsausschluss</span>
                <p>Wir übernehmen keine Verantwortung für Schäden, Verletzungen oder Verluste, die während Ihres Aufenthalts in einer unserer Villen auftreten können. Sie erklären sich damit einverstanden, die Villen auf eigenes Risiko zu nutzen und uns von jeglicher Haftung freizustellen, die sich aus Ihrer Nutzung ergibt.</p>

                <span>8. Recht und Streitbeilegung</span>
                <p>Diese Bedingungen unterliegen dem deutschen Recht und sind in Übereinstimmung damit auszulegen. Etwaige Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte Deutschlands.</p>

                <span>9. Änderungen der Bedingungen</span>
                <p>
                    Wir behalten uns das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu ändern. Ihre fortgesetzte Nutzung unserer Website nach einer solchen Änderung stellt Ihre Zustimmung zu den geänderten Bedingungen dar.
                </p>

                <span>10. Kontaktinformationen</span>
                <p>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte über die auf unserer Website angegebenen Informationen.</p>

                <span>DSGVO-Konformität</span>

                <span>1. Datensammlung und -speicherung</span>
                <p>Wir sammeln und speichern nur die folgenden personenbezogenen Daten von Besuchern unserer Website:
                    E-Mail-Adressen
                    Telefonnummern
                    Diese Daten werden erfasst, wenn Sie uns über das Kontaktformular unserer Website kontaktieren oder sich für unseren Newsletter anmelden (falls zutreffend).
                </p>

                <span>2. Datenverwendung und -verarbeitung</span>
                <p>Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:

                    Beantwortung Ihrer Anfragen und Anfragen
                    Senden von Informationen zu unseren Villen und Sonderangeboten (sofern Sie sich für unseren Newsletter anmelden)
                    Wir werden Ihre personenbezogenen Daten ohne Ihre Zustimmung nicht an Dritte weitergeben.
                </p>

                <span>3. Datenspeicherung</span>
                <p>Wir speichern Ihre personenbezogenen Daten für einen Zeitraum von einem Jahr nach Ihrem letzten Kontakt mit uns. Sie können jederzeit die Löschung Ihrer Daten beantragen, indem Sie uns kontaktieren.
                </p>

                <span>4. Ihre Rechte</span>
                <p>Sie haben nach der DSGVO folgende Rechte:

                    Recht auf Zugang zu Ihren personenbezogenen Daten
                    Recht auf Berichtigung ungenauer oder unvollständiger Daten
                    Recht auf Löschung Ihrer Daten
                    Recht auf Einschränkung der Verarbeitung Ihrer Daten
                    Recht auf Datenübertragbarkeit
                    Recht, der Verarbeitung Ihrer Daten zu widersprechen
                    Sie können diese Rechte ausüben, indem Sie uns über die auf unserer Website angegebenen Informationen kontaktieren.
                </p>

                <span>5. Cookies</span>

                <p>Unsere Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern. Weitere Informationen zu unserer Cookie-Richtlinie finden Sie auf unserer Website.

                    Dies ist ein Ausgangspunkt für Ihre Nutzungsbedingungen und DSGVO-Konformitätserklärung. Es ist wichtig zu beachten, dass dies keinen Ersatz für rechtliche Beratung darstellt und Sie sich mit einem Anwalt in Verbindung setzen sollten, um sicherzustellen, dass Ihre Nutzungsbedingungen den geltenden Gesetzen und Vorschriften entsprechen.
                </p>
            </div>
        </div>

    )
}
export default Page;