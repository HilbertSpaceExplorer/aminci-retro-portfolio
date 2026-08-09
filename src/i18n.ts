export type PortfolioLanguage = "en" | "de";

const LANGUAGE_STORAGE_KEY = "aminci-os-language";

const germanText: Record<string, string> = {
  "AMINCI OS / ENGINEERING ARCHIVE": "AMINCI OS / PROJEKTARCHIV",
  "Mechanical Engineering Student": "Maschinenbaustudent",
  "Mechanical Engineering": "Maschinenbau",
  "Robotics · Computer Vision · ML": "Robotik · Computer Vision · ML",
  "Robotics ú Computer Vision ú ML": "Robotik · Computer Vision · ML",
  "Sensing · Control": "Sensorik · Regelungstechnik",
  "Sensing ú Control": "Sensorik · Regelungstechnik",
  Home: "Start",
  "About Me": "Über mich",
  Projects: "Projekte",
  Contact: "Kontakt",
  "BACK TO ARCHIVE": "ZURÜCK ZUM ARCHIV",
  "PREVIOUS FILE": "VORHERIGE AKTE",
  "NEXT FILE": "NÄCHSTE AKTE",
  "PROJECT ARCHIVE": "PROJEKTARCHIV",
  "Back to all projects": "Zurück zu allen Projekten",
  "ABOUT ME": "ÜBER MICH",
  "My work and interests": "Meine Arbeit und Interessen",
  "I'm Aminci Gana, a mechanical engineering student interested in robotics, computer vision, machine learning, sensing, and control.":
    "Ich bin Aminci Gana und studiere Maschinenbau. Besonders interessieren mich Robotik, Computer Vision, maschinelles Lernen, Sensorik und Regelungstechnik.",
  "I’m Aminci Gana, a mechanical engineering student interested in robotics, computer vision, machine learning, sensing, and control.":
    "Ich bin Aminci Gana und studiere Maschinenbau. Besonders interessieren mich Robotik, Computer Vision, maschinelles Lernen, Sensorik und Regelungstechnik.",
  "My projects usually involve building or testing physical systems, collecting measurements, developing models, and comparing their results with experiments.":
    "In meinen Projekten baue oder untersuche ich meist physische Systeme, erfasse Messdaten, entwickle Modelle und vergleiche deren Ergebnisse mit Experimenten.",
  "Current focus": "Aktueller Schwerpunkt",
  "Predicting continuum robot shape under external forces.":
    "Vorhersage der Form eines Kontinuumsroboters unter äußeren Kräften.",
  "PROJECT ARCHIVE / 2025-2026": "PROJEKTARCHIV / 2025-2026",
  "PROJECT ARCHIVE / 2025–2026": "PROJEKTARCHIV / 2025–2026",
  "Selected engineering work": "Ausgewählte technische Projekte",
  "LAB FILE 01": "PROJEKTAKTE 01",
  "LAB FILE 02": "PROJEKTAKTE 02",
  "LAB FILE 03": "PROJEKTAKTE 03",
  "LAB FILE 04": "PROJEKTAKTE 04",
  "LAB FILE 05": "PROJEKTAKTE 05",
  "IN PROGRESS · PUBLIC SUMMARY": "IN ARBEIT · ÖFFENTLICHE ÜBERSICHT",
  "IN PROGRESS ú PUBLIC SUMMARY": "IN ARBEIT · ÖFFENTLICHE ÜBERSICHT",
  "VISION SYSTEM · 2025": "BILDVERARBEITUNG · 2025",
  "VISION SYSTEM ú 2025": "BILDVERARBEITUNG · 2025",
  "CONTROL TEST · 2025": "REGELUNGSTECHNIK · 2025",
  "CONTROL TEST ú 2025": "REGELUNGSTECHNIK · 2025",
  "ML ANALYSIS · 2025": "ML-ANALYSE · 2025",
  "ML ANALYSIS ú 2025": "ML-ANALYSE · 2025",
  "PRIVATE ALPHA · IN DEVELOPMENT": "PRIVATE ALPHA · IN ENTWICKLUNG",
  "PRIVATE ALPHA ú IN DEVELOPMENT": "PRIVATE ALPHA · IN ENTWICKLUNG",
  "PUBLIC SUMMARY": "ÖFFENTLICHE ÜBERSICHT",
  "Continuum Robot Shape Prediction": "Formvorhersage für einen Kontinuumsroboter",
  "ROBOTICS / SENSING / MODEL VALIDATION": "ROBOTIK / SENSORIK / MODELLVALIDIERUNG",
  "An experimental pipeline combining force sensing, stereo vision, marker tracking, and model-based validation to compare predicted robot shapes with measured 3D backbone data.":
    "Ein experimenteller Ablauf, der Kraftmessung, Stereovision, Marker-Tracking und modellbasierte Validierung verbindet. Damit werden vorhergesagte Roboterformen mit gemessenen 3D-Daten der Roboterstruktur verglichen.",
  Robotics: "Robotik",
  "Stereo Vision": "Stereovision",
  "Force Sensing": "Kraftmessung",
  "Public reference examples, not the confidential project hardware.":
    "Öffentliche Referenzbeispiele, nicht die vertrauliche Hardware des Projekts.",
  "Reference image: Grassmann et al. (2024), Figure 7,":
    "Referenzbild: Grassmann et al. (2024), Abbildung 7,",
  "The image shows public reference examples, not the confidential project hardware.":
    "Das Bild zeigt öffentlich dokumentierte Referenzbeispiele und nicht die vertrauliche Hardware dieses Projekts.",
  ". The image shows public reference examples, not the confidential project hardware.":
    ". Das Bild zeigt öffentlich dokumentierte Referenzbeispiele und nicht die vertrauliche Hardware dieses Projekts.",
  "A public overview of an experimental workflow for predicting continuum robot shape under external forces using physical sensing, stereo vision, and model-based validation.":
    "Eine öffentliche Übersicht über einen experimentellen Ablauf zur Vorhersage der Form eines Kontinuumsroboters unter äußeren Kräften. Dafür werden physische Messungen, Stereovision und modellbasierte Validierung kombiniert.",
  "CONFIDENTIALITY NOTE: Specific geometry, datasets, institute equipment, and results are intentionally omitted.":
    "HINWEIS ZUR VERTRAULICHKEIT: Konkrete Geometrien, Datensätze, Institutsaufbauten und Ergebnisse werden bewusst nicht veröffentlicht.",
  "01 / Problem": "01 / Problem",
  "External contact forces deform continuum robots, making shape prediction from actuation information alone difficult.":
    "Äußere Kontaktkräfte verformen Kontinuumsroboter. Dadurch lässt sich ihre Form allein aus den Antriebsgrößen nur schwer zuverlässig vorhersagen.",
  "02 / My contribution": "02 / Mein Beitrag",
  "I developed an experimental workflow connecting force measurements, vision-based shape observations, and model validation.":
    "Ich habe einen experimentellen Ablauf entwickelt, der Kraftmessungen, bildbasierte Formmessungen und die Validierung eines Modells miteinander verbindet.",
  "03 / Technical approach": "03 / Technischer Ansatz",
  "Synchronized sensing and stereo observations are transformed into comparable measurements for evaluating predicted and observed robot shapes.":
    "Synchronisierte Sensor- und Stereodaten werden in vergleichbare Messgrößen überführt, um vorhergesagte und beobachtete Roboterformen auszuwerten.",
  "04 / Current outcome": "04 / Aktueller Stand",
  "The work establishes a repeatable validation pipeline while keeping confidential experimental details outside the public portfolio.":
    "Die Arbeit schafft einen wiederholbaren Validierungsablauf. Vertrauliche Details des Versuchsaufbaus bleiben dabei außerhalb des öffentlichen Portfolios.",
  "Methods and skills": "Methoden und Kenntnisse",
  "Experimental design": "Versuchsplanung",
  "Sensor integration": "Sensorintegration",
  "3D computer vision": "3D-Bildverarbeitung",
  "Physical-system validation": "Validierung physischer Systeme",
  "Scientific computing": "Wissenschaftliches Rechnen",
  "Vision-Based Robot Laptimer": "Bildbasierte Rundenzeitmessung",
  "COMPUTER VISION / MOBILE ROBOTICS": "COMPUTER VISION / MOBILE ROBOTIK",
  "A camera-based timing system that detects robot markers, tracks lap events, filters noisy measurements, and produces performance data for small autonomous robots.":
    "Ein kamerabasiertes Zeitmesssystem, das Marker auf Robotern erkennt, Rundendurchläufe erfasst, verrauschte Messungen filtert und Leistungsdaten für kleine autonome Roboter erzeugt.",
  "Computer Vision": "Computer Vision",
  "ArUco Tracking": "ArUco-Tracking",
  "Mobile Robotics": "Mobile Robotik",
  "ROBOTICS / COMPUTER VISION": "ROBOTIK / COMPUTER VISION",
  "A camera-based stopwatch that tracks two ArUco markers, estimates their 3D separation, and uses successive distance minima to calculate lap intervals.":
    "Eine kamerabasierte Stoppuhr, die zwei ArUco-Marker verfolgt, ihren räumlichen Abstand schätzt und aus aufeinanderfolgenden Abstandsminima die Rundenzeiten berechnet.",
  "Video Processing": "Videoverarbeitung",
  "Manual stopwatch measurements introduce reaction-time errors and make robot configurations harder to compare objectively.":
    "Manuelle Messungen mit einer Stoppuhr enthalten Reaktionszeitfehler und erschweren einen objektiven Vergleich verschiedener Roboterkonfigurationen.",
  "I built a vision-based timing workflow that detects two fiducial markers and derives lap events from their changing spatial relationship.":
    "Ich habe einen bildbasierten Messablauf entwickelt, der zwei Referenzmarker erkennt und die Runden aus ihrem sich ändernden räumlichen Abstand ableitet.",
  "OpenCV detects the markers and estimates their poses. A five-sample moving average filters the 3D distance signal, and successive local minima define the lap intervals.":
    "OpenCV erkennt die Marker und schätzt ihre Posen. Ein gleitender Mittelwert über fünf Messwerte filtert das 3D-Abstandssignal. Aufeinanderfolgende lokale Minima bestimmen die Rundenintervalle.",
  "04 / Result": "04 / Ergebnis",
  "The system provides a more consistent timing method for comparing control settings, robot configurations, and test runs.":
    "Das System liefert eine konsistentere Zeitmessung für den Vergleich von Reglereinstellungen, Roboterkonfigurationen und Testläufen.",
  "Practical computer vision": "Praktische Bildverarbeitung",
  "Automated measurement": "Automatisierte Messtechnik",
  "Robotics testing": "Robotikversuche",
  "Noise filtering": "Rauschfilterung",
  "Performance evaluation": "Leistungsbewertung",
  "PID Response Evaluation": "Auswertung des PID-Regelverhaltens",
  "CONTROL ENGINEERING / EXPERIMENTAL VALIDATION": "REGELUNGSTECHNIK / EXPERIMENTELLE VALIDIERUNG",
  "A camera tracks two markers in 3D, filters their measured separation, and compares the distance response with a target using a saved time trace and RMSE.":
    "Eine Kamera verfolgt zwei Marker im Raum, filtert ihren gemessenen Abstand und vergleicht den zeitlichen Abstandsverlauf mithilfe des RMSE mit einem Sollwert.",
  "Control Engineering": "Regelungstechnik",
  "Data Analysis": "Datenanalyse",
  "CONTROL / VISION / DATA ANALYSIS": "REGELUNGSTECHNIK / BILDVERARBEITUNG / DATENANALYSE",
  "A quantitative workflow for evaluating distance-control behaviour using computer-vision measurements from repeatable robot experiments.":
    "Ein quantitativer Ablauf zur Auswertung einer Abstandsregelung anhand bildbasierter Messungen aus wiederholbaren Roboterversuchen.",
  "PID Control": "PID-Regelung",
  "A controller that performs well under ideal conditions can still become inaccurate or unstable when disturbances and initial conditions change.":
    "Ein Regler, der unter idealen Bedingungen gut funktioniert, kann bei veränderten Störungen oder Anfangsbedingungen ungenau oder instabil werden.",
  "I developed a vision-based evaluation workflow for measuring how a mobile robot responds relative to a target distance.":
    "Ich habe einen bildbasierten Auswertungsablauf entwickelt, der misst, wie sich ein mobiler Roboter auf einen vorgegebenen Abstand einregelt.",
  "Marker poses are estimated from video and converted to a 3D distance signal. The aligned and smoothed response is compared with the target and summarised with RMSE.":
    "Die Markerposen werden aus dem Video geschätzt und in ein räumliches Abstandssignal umgerechnet. Der ausgerichtete und geglättete Verlauf wird mit dem Sollwert verglichen und durch den RMSE zusammengefasst.",
  "The workflow creates a more objective basis for comparing PID behaviour across controlled test conditions.":
    "Der Ablauf schafft eine objektivere Grundlage, um das PID-Regelverhalten unter kontrollierten Versuchsbedingungen zu vergleichen.",
  "Control engineering": "Regelungstechnik",
  "Vision-based measurement": "Bildbasierte Messtechnik",
  "Quantitative evaluation": "Quantitative Auswertung",
  "Response analysis": "Analyse des Regelverlaufs",
  "Experimental validation": "Experimentelle Validierung",
  "Compressed-Air System ML": "Maschinelles Lernen für ein Druckluftsystem",
  "MACHINE LEARNING / SENSOR DATA": "MASCHINELLES LERNEN / SENSORDATEN",
  "Data-driven classification and regression models for understanding compressed-air system behaviour from pressure, volume-flow, and power measurements.":
    "Datenbasierte Klassifikations- und Regressionsmodelle zur Untersuchung eines Druckluftsystems anhand von Druck-, Volumenstrom- und Leistungsmessungen.",
  "Machine Learning": "Maschinelles Lernen",
  "Sensor Data": "Sensordaten",
  Classification: "Klassifikation",
  Regression: "Regression",
  "MACHINE LEARNING / INDUSTRIAL DATA": "MASCHINELLES LERNEN / INDUSTRIEDATEN",
  "A machine-learning workflow for classifying operating states and estimating system power from compressed-air sensor data.":
    "Ein Machine-Learning-Ablauf zur Klassifikation von Betriebszuständen und zur Schätzung der Systemleistung aus Sensordaten eines Druckluftsystems.",
  "DATASET AND QUESTION": "DATENSATZ UND FRAGESTELLUNG",
  "What I analysed": "Was ich untersucht habe",
  "The project uses measured pressure, volume-flow, and system-power logs from a compressed-air system. I treated classification and regression as two separate engineering questions: identifying the current operating state, and estimating mean power at a given measured flow rate.":
    "Das Projekt nutzt gemessene Druck-, Volumenstrom- und Leistungsdaten eines Druckluftsystems. Klassifikation und Regression habe ich als zwei getrennte technische Fragestellungen behandelt: die Erkennung des aktuellen Betriebszustands und die Schätzung der mittleren Leistung bei einem gemessenen Volumenstrom.",
  "The classification data contains four recordings of roughly 15 minutes each: healthy idle, healthy serving, leak idle, and leak serving. The regression data contains eight constant-flow trials with nominal setpoints from 300 to 1000 L/min.":
    "Die Klassifikationsdaten bestehen aus vier jeweils etwa 15-minütigen Aufzeichnungen: intakter Leerlauf, intakter Betrieb, Leckage im Leerlauf und Leckage im Betrieb. Für die Regression stehen acht Versuche mit konstantem Volumenstrom und Sollwerten von 300 bis 1000 L/min zur Verfügung.",
  "01 / Data inspection": "01 / Datenprüfung",
  "I compared the recorded signals across all four states and checked their ranges, time behaviour, missing values, offsets, and sensor artefacts before selecting model inputs.":
    "Ich habe die aufgezeichneten Signale aller vier Zustände verglichen und vor der Auswahl der Modelleingaben Wertebereiche, zeitliches Verhalten, fehlende Werte, Offsets und Sensorartefakte geprüft.",
  "02 / Feature windows": "02 / Merkmalsfenster",
  "Each recording was divided into non-overlapping 19-second windows. This produced 192 usable samples, with 48 windows for each operating state.":
    "Jede Aufzeichnung wurde in nicht überlappende 19-Sekunden-Fenster unterteilt. So entstanden 192 nutzbare Stichproben mit jeweils 48 Fenstern pro Betriebszustand.",
  "03 / Feature choice": "03 / Merkmalsauswahl",
  "Mean flow represents the overall level of air use, while minimum flow indicates whether consumption returns towards zero. Together, these two features separate most of the four operating conditions without an unnecessarily complex model.":
    "Der mittlere Volumenstrom beschreibt den allgemeinen Luftverbrauch. Der minimale Volumenstrom zeigt, ob der Verbrauch wieder gegen null fällt. Gemeinsam trennen diese beiden Merkmale die meisten Betriebszustände, ohne dass ein unnötig komplexes Modell erforderlich ist.",
  "04 / Engineering interpretation": "04 / Technische Einordnung",
  "A leak can create a persistent flow baseline during idle periods. Active serving changes the mean level, although long continuous consumption can resemble a leak and remains an important ambiguity to consider.":
    "Eine Leckage kann im Leerlauf einen dauerhaft erhöhten Volumenstrom verursachen. Aktiver Betrieb verändert den Mittelwert. Langer kontinuierlicher Verbrauch kann jedoch einer Leckage ähneln und bleibt deshalb eine wichtige mögliche Verwechslung.",
  CLASSIFICATION: "KLASSIFIKATION",
  "From features to operating states": "Von Merkmalen zu Betriebszuständen",
  "I used a decision tree because its rules can be inspected and related back to flow thresholds. A stratified 70/30 split kept the four classes represented in both the training and test sets.":
    "Ich habe einen Entscheidungsbaum verwendet, weil seine Regeln nachvollziehbar sind und mit Grenzwerten des Volumenstroms in Verbindung gebracht werden können. Eine stratifizierte 70/30-Aufteilung stellte sicher, dass alle vier Klassen im Trainings- und Testsatz vertreten sind.",
  "Tree depth was varied from 1 to 12. Accuracy improved sharply up to depth 5, then test performance declined while training accuracy approached 100 percent. I therefore used depth 5 for the displayed evaluation instead of selecting the deepest tree.":
    "Die Baumtiefe wurde von 1 bis 12 variiert. Bis Tiefe 5 stieg die Genauigkeit deutlich. Danach nahm die Testleistung ab, während die Trainingsgenauigkeit nahezu 100 Prozent erreichte. Für die dargestellte Auswertung habe ich deshalb Tiefe 5 und nicht den tiefsten Baum verwendet.",
  "CLASSIFICATION RESULT": "ERGEBNIS DER KLASSIFIKATION",
  "What the hold-out test showed": "Ergebnis des zurückgehaltenen Testsatzes",
  "The depth-5 tree classified 57 of 58 held-out windows correctly, corresponding to 98.3 percent accuracy on this split. The single error was a healthy-serving window classified as leak-serving. This result describes this controlled dataset and split; it is not evidence that the same accuracy would hold for every machine or operating environment.":
    "Der Baum mit Tiefe 5 klassifizierte 57 von 58 zurückgehaltenen Fenstern korrekt. Das entspricht bei dieser Aufteilung einer Genauigkeit von 98,3 Prozent. Der einzige Fehler war ein Fenster des intakten Betriebs, das als Leckage im Betrieb eingeordnet wurde. Dieses Ergebnis gilt für den kontrollierten Datensatz und diese Aufteilung. Es belegt nicht, dass dieselbe Genauigkeit bei jeder Maschine oder Betriebsumgebung erreicht wird.",
  "POWER REGRESSION": "LEISTUNGSREGRESSION",
  "Relating measured flow to mean system power": "Zusammenhang zwischen Volumenstrom und mittlerer Systemleistung",
  "For each constant-flow experiment, I calculated the mean measured volume flow and mean system power. I used the measured flow rather than the nominal setpoint because the actual operating point is what determines the recorded power demand.":
    "Für jeden Versuch mit konstantem Volumenstrom habe ich den Mittelwert des gemessenen Volumenstroms und der Systemleistung berechnet. Verwendet wurde der Messwert statt des Sollwerts, da der tatsächliche Betriebspunkt den aufgezeichneten Leistungsbedarf bestimmt.",
  "05 / Regression fit": "05 / Regressionsanpassung",
  "Across the eight constant-flow trials, the linear relation between mean measured flow and mean power had an in-sample R² of 0.991.":
    "Über die acht Versuche mit konstantem Volumenstrom erreichte der lineare Zusammenhang zwischen mittlerem gemessenem Volumenstrom und mittlerer Leistung ein R² von 0,991 innerhalb der Stichprobe.",
  "Across the eight constant-flow trials, the linear relation between mean measured flow and mean power had an in-sample Rý of 0.991.":
    "Über die acht Versuche mit konstantem Volumenstrom erreichte der lineare Zusammenhang zwischen mittlerem gemessenem Volumenstrom und mittlerer Leistung ein R² von 0,991 innerhalb der Stichprobe.",
  "06 / Validation": "06 / Validierung",
  "Leave-one-experiment-out validation produced an RMSE of 0.213 kW and an R² of 0.985. Every trial was predicted once by a model fitted without that trial.":
    "Die Leave-one-experiment-out-Validierung ergab einen RMSE von 0,213 kW und ein R² von 0,985. Jeder Versuch wurde einmal durch ein Modell vorhergesagt, das ohne diesen Versuch trainiert worden war.",
  "Leave-one-experiment-out validation produced an RMSE of 0.213 kW and an Rý of 0.985. Every trial was predicted once by a model fitted without that trial.":
    "Die Leave-one-experiment-out-Validierung ergab einen RMSE von 0,213 kW und ein R² von 0,985. Jeder Versuch wurde einmal durch ein Modell vorhergesagt, das ohne diesen Versuch trainiert worden war.",
  "07 / Limitation": "07 / Einschränkung",
  "Eight controlled operating points are enough to examine the trend, but not enough to establish behaviour outside the tested flow range or under different equipment conditions.":
    "Acht kontrollierte Betriebspunkte reichen aus, um den Trend zu untersuchen. Sie reichen jedoch nicht aus, um das Verhalten außerhalb des getesteten Volumenstrombereichs oder unter anderen Anlagenbedingungen zu beurteilen.",
  "08 / Next step": "08 / Nächster Schritt",
  "A stronger validation would use new recordings collected on a different day, additional transient states, and repeated trials at each operating point.":
    "Eine aussagekräftigere Validierung würde neue Aufzeichnungen von einem anderen Tag, zusätzliche transiente Zustände und wiederholte Versuche an jedem Betriebspunkt einbeziehen.",
  "Machine learning": "Maschinelles Lernen",
  "Industrial data analysis": "Analyse industrieller Daten",
  "Sensor-based monitoring": "Sensorbasierte Zustandsüberwachung",
  "Classification and regression": "Klassifikation und Regression",
  "Engineering interpretation": "Technische Einordnung",
  "PERSONAL AI / MOBILE SYSTEMS / PRODUCT DESIGN": "PERSÖNLICHE KI / MOBILE SYSTEME / PRODUKTDESIGN",
  "A mobile application I am developing to explore how AI can help organise goals, compare priorities, and prepare realistic schedules while keeping the user in control of every change.":
    "Eine mobile Anwendung, mit der ich untersuche, wie KI beim Strukturieren von Zielen, beim Abwägen von Prioritäten und bei der Erstellung realistischer Zeitpläne helfen kann. Jede Änderung bleibt unter der Kontrolle des Nutzers.",
  "AI Systems": "KI-Systeme",
  "Local-First Data": "Local-First-Daten",
  "Product Design": "Produktdesign",
  "PERSONAL AI / MOBILE SYSTEMS": "PERSÖNLICHE KI / MOBILE SYSTEME",
  "A mobile application exploring how AI can support goal planning, scheduling, coaching, and tutoring. Schedule changes are proposed by the system and reviewed by the user before being applied.":
    "Eine mobile Anwendung, die untersucht, wie KI bei Zielplanung, Terminplanung, Coaching und Lernen unterstützen kann. Änderungen am Zeitplan werden vom System vorgeschlagen und vor der Übernahme vom Nutzer geprüft.",
  "Human-in-the-Loop AI": "Human-in-the-Loop-KI",
  "DEVELOPMENT NOTE: This is a selective public overview. Source code, agent logic, internal data structures, and the commercial roadmap remain private. The screens shown use non-sensitive demo data.":
    "HINWEIS ZUR ENTWICKLUNG: Dies ist eine bewusst begrenzte öffentliche Übersicht. Quellcode, Agentenlogik, interne Datenstrukturen und die kommerzielle Planung bleiben privat. Die gezeigten Ansichten verwenden unkritische Demodaten.",
  "PROJECT MOTIVATION": "MOTIVATION FÜR DAS PROJEKT",
  "Why I started building it": "Warum ich mit der Entwicklung begonnen habe",
  "I often work on several projects and personal goals at the same time. I do not always prioritise the most important task, and poor planning can leave me thinking about the entire backlog instead of starting one task. That is usually when I procrastinate.":
    "Ich arbeite häufig gleichzeitig an mehreren Projekten und persönlichen Zielen. Dabei priorisiere ich nicht immer die wichtigste Aufgabe. Wenn die Planung fehlt, denke ich eher über den gesamten Rückstand nach, statt mit einer einzelnen Aufgabe anzufangen. Genau dann schiebe ich Dinge oft auf.",
  "I started Life OS to explore whether an AI system could help me break goals into manageable steps, compare priorities, and create realistic schedules. The underlying issue is common: work, study, personal responsibilities, and longer-term goals compete for the same limited time, while plans also need to change when circumstances do.":
    "Ich habe Life OS begonnen, um zu untersuchen, ob ein KI-System Ziele in überschaubare Schritte zerlegen, Prioritäten vergleichbar machen und realistische Zeitpläne erstellen kann. Das zugrunde liegende Problem ist weit verbreitet: Arbeit, Studium, persönliche Verpflichtungen und langfristige Ziele konkurrieren um dieselbe begrenzte Zeit. Gleichzeitig müssen Pläne anpassbar bleiben, wenn sich die Umstände ändern.",
  "Managing goals involves more than recording tasks. It also requires deciding priorities, estimating time, accounting for fixed commitments, and adjusting when work takes longer than expected.":
    "Ziele zu verwalten bedeutet mehr, als Aufgaben aufzuschreiben. Man muss Prioritäten festlegen, Zeitaufwände schätzen, feste Verpflichtungen berücksichtigen und den Plan anpassen, wenn etwas länger dauert als erwartet.",
  "02 / Design constraint": "02 / Gestaltungsanforderung",
  "AI assistance needs clear boundaries. The system proposes tasks, schedules, reminders, and adjustments, but the user must accept, modify, or reject them before they are saved.":
    "KI-Unterstützung braucht klare Grenzen. Das System schlägt Aufgaben, Zeitpläne, Erinnerungen und Anpassungen vor. Bevor etwas gespeichert wird, muss der Nutzer den Vorschlag annehmen, verändern oder ablehnen.",
  "03 / Current build": "03 / Aktueller Entwicklungsstand",
  "The private alpha includes AI-assisted goal breakdown, scheduling and replanning, contextual coaching, tutoring, and local storage for personal information.":
    "Die private Alpha-Version umfasst KI-gestützte Zielzerlegung, Terminplanung und Neuplanung, kontextbezogenes Coaching, Lernunterstützung und lokale Speicherung persönlicher Informationen.",
  "04 / System approach": "04 / Systemansatz",
  "A mobile interface and local-first data layer connect to a secured cloud AI gateway, balancing useful context with clear user approval and privacy boundaries.":
    "Eine mobile Oberfläche und eine Local-First-Datenschicht sind mit einem abgesicherten Cloud-KI-Gateway verbunden. So werden nützlicher Kontext, klare Nutzerfreigaben und Datenschutzgrenzen miteinander in Einklang gebracht.",
  "05 / Technical skills": "05 / Technische Kenntnisse",
  "The project requires mobile development with React Native and TypeScript, SQLite data management, API integration, LLM orchestration, input validation, and privacy and security design.":
    "Das Projekt erfordert mobile Entwicklung mit React Native und TypeScript, Datenverwaltung mit SQLite, API-Integration, LLM-Orchestrierung, Eingabevalidierung sowie Datenschutz- und Sicherheitskonzepte.",
  "06 / Non-technical skills": "06 / Überfachliche Kompetenzen",
  "It also involves translating a personal workflow problem into requirements, prioritising features, designing understandable approval flows, testing assumptions, and evaluating AI output critically.":
    "Dazu gehört auch, ein persönliches Arbeitsproblem in Anforderungen zu übersetzen, Funktionen zu priorisieren, verständliche Freigabeabläufe zu gestalten, Annahmen zu testen und KI-Ausgaben kritisch zu bewerten.",
  "Skills involved": "Erforderliche Kenntnisse",
  "Mobile development": "Mobile Entwicklung",
  "AI integration": "KI-Integration",
  "Data architecture": "Datenarchitektur",
  "Product scoping": "Festlegung des Produktumfangs",
  "User-centred design": "Nutzerzentrierte Gestaltung",
  "Privacy and security thinking": "Datenschutz- und Sicherheitskonzeption",
  CONTACT: "KONTAKT",
  "Contact me": "Kontakt aufnehmen",
  "Email is the best way to contact me.": "Am besten erreichst du mich per E-Mail.",
  "Copy email": "E-Mail kopieren",
  "Open email app": "E-Mail-App öffnen",
  "Email copied to clipboard.": "E-Mail-Adresse wurde kopiert.",
  "Portfolio content and customization by Aminci Gana.":
    "Inhalte und Anpassungen des Portfolios von Aminci Gana.",
  "Based on": "Basiert auf",
  "by Ed Hinrichsen, used under the": "von Ed Hinrichsen, verwendet unter der",
  "Computer design inspired by the Commodore PET 8296.":
    "Das Computerdesign ist vom Commodore PET 8296 inspiriert.",
  "MIT License": "MIT-Lizenz",
  "Booting project archive.": "Projektarchiv wird gestartet.",
  "Booting project archive…": "Projektarchiv wird gestartet…",
  "Starting.": "Startet.",
  "Starting…": "Startet…",
};

const germanAttributes: Record<string, string> = {
  "Interactive Aminci OS retro computer": "Interaktiver Retro-Computer von Aminci OS",
  "Primary navigation": "Hauptnavigation",
  "Back to project archive": "Zurück zum Projektarchiv",
  "Project navigation": "Projektnavigation",
  "Toggle navigation": "Navigation öffnen oder schließen",
  "Social links": "Links zu sozialen Netzwerken",
  Language: "Sprache",
  "Aminci Gana on LinkedIn": "Aminci Gana auf LinkedIn",
  "Aminci Gana on GitHub": "Aminci Gana auf GitHub",
  "Open details for Continuum Robot Shape Prediction":
    "Details zur Formvorhersage für einen Kontinuumsroboter öffnen",
  "Open details for Vision-Based Robot Laptimer":
    "Details zur bildbasierten Rundenzeitmessung öffnen",
  "Open details for PID Response Evaluation":
    "Details zur Auswertung des PID-Regelverhaltens öffnen",
  "Open details for Compressed-Air System ML":
    "Details zum Machine-Learning-Projekt für das Druckluftsystem öffnen",
  "Open details for AI Life OS": "Details zu AI Life OS öffnen",
  "View the continuum-robot reference image at full size":
    "Referenzbild der Kontinuumsroboter in voller Größe anzeigen",
  "Public reference image showing planar tendon-driven, spatial tendon-driven, and concentric-tube continuum robot prototypes":
    "Öffentliches Referenzbild mit planaren seilgetriebenen, räumlichen seilgetriebenen und konzentrischen Kontinuumsroboter-Prototypen",
  "View the lap-timer experiment screenshot at full size":
    "Screenshot des Rundenzeitversuchs in voller Größe anzeigen",
  "Recorded lap-timer test running in VS Code":
    "Aufgezeichneter Test der Rundenzeitmessung in VS Code",
  "View the PID response plot at full size":
    "Diagramm des PID-Regelverlaufs in voller Größe anzeigen",
  "Illustrative PID distance response with target, error, and RMSE":
    "Beispielhafter PID-Abstandsverlauf mit Sollwert, Fehler und RMSE",
  "View the compressed-air feature-space plot at full size":
    "Merkmalsraum des Druckluftprojekts in voller Größe anzeigen",
  "Feature-space plot calculated from compressed-air sensor data":
    "Aus Sensordaten des Druckluftsystems berechneter Merkmalsraum",
  "View the Life OS Today screen at full size":
    "Heute-Ansicht von Life OS in voller Größe anzeigen",
  "Actual Life OS Today screen with demo data":
    "Tatsächliche Heute-Ansicht von Life OS mit Demodaten",
  "Actual Life OS interactive Tutor screen with demo data":
    "Tatsächliche interaktive Tutor-Ansicht von Life OS mit Demodaten",
  "Illustrative marker-distance signal with detected local minima":
    "Beispielhaftes Marker-Abstandssignal mit erkannten lokalen Minima",
  "Measured flow traces for four compressed-air operating states":
    "Gemessene Volumenstromverläufe für vier Betriebszustände des Druckluftsystems",
  "Measured flow divided into 19-second windows with mean and minimum features":
    "In 19-Sekunden-Fenster aufgeteilter Volumenstrom mit Mittelwert und Minimum",
  "Training and test accuracy plotted against decision-tree depth":
    "Trainings- und Testgenauigkeit in Abhängigkeit von der Tiefe des Entscheidungsbaums",
  "Decision regions and confusion matrix for the four-state classifier":
    "Entscheidungsbereiche und Konfusionsmatrix des Klassifikators mit vier Zuständen",
  "Measured flow and power traces from the 300 and 1000 L/min trials":
    "Gemessene Volumenstrom- und Leistungsverläufe der Versuche bei 300 und 1000 L/min",
  "Measured compressor power plotted against mean measured volume flow":
    "Gemessene Kompressorleistung über dem mittleren gemessenen Volumenstrom",
  "Leave-one-experiment-out predictions and residuals for the power model":
    "Leave-one-experiment-out-Vorhersagen und Residuen des Leistungsmodells",
  "Close project details": "Projektdetails schließen",
  "Full-size project image": "Projektbild in voller Größe",
  "Close full-size image": "Bildansicht schließen",
  "Aminci OS terminal input": "Terminaleingabe für Aminci OS",
};

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();

let activeLanguage: PortfolioLanguage = "en";

function normaliseText(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function translateActionText(key: string) {
  if (key.startsWith("VIEW FULL SIZE")) return "IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE PLOT")) return "DIAGRAMM IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE SIGNAL COMPARISON")) return "SIGNALVERGLEICH IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE FEATURE PLOT")) return "MERKMALSDIAGRAMM IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE MODEL-SELECTION PLOT")) return "MODELLAUSWAHL IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE CLASSIFICATION RESULTS")) return "KLASSIFIKATIONSERGEBNISSE IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE TRIAL COMPARISON")) return "VERSUCHSVERGLEICH IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE POWER REGRESSION")) return "LEISTUNGSREGRESSION IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE REGRESSION VALIDATION")) return "REGRESSIONSVALIDIERUNG IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN FULL-SIZE SCREENSHOT")) return "SCREENSHOT IN VOLLER GRÖSSE ↗";
  if (key.startsWith("OPEN ORIGINAL")) return "ORIGINAL ÖFFNEN ↗";
  if (key.startsWith("OPEN FILE")) return "AKTE ÖFFNEN";
  if (key.startsWith("Open email app")) return "E-MAIL-APP ÖFFNEN ↗";
  if (key.startsWith("BACK TO ARCHIVE")) return "ZUM ARCHIV";
  if (key.startsWith("CLOSE")) return "SCHLIESSEN ×";
  if (key.startsWith("Scroll")) return "SCROLLEN ↓";
  return undefined;
}

function translatedText(key: string) {
  return germanText[key] ?? translateActionText(key);
}

function replaceTextNode(node: Text, language: PortfolioLanguage) {
  if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue ?? "");
  const original = textOriginals.get(node) ?? "";

  if (language === "en") {
    node.nodeValue = original;
    return;
  }

  const key = normaliseText(original);
  const translation = translatedText(key);
  if (!translation) {
    node.nodeValue = original;
    return;
  }

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${translation}${trailing}`;
}

function translateBody(language: PortfolioLanguage) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, .language-toggle")) {
        return NodeFilter.FILTER_REJECT;
      }
      return normaliseText(node.nodeValue ?? "")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    replaceTextNode(current as Text, language);
    current = walker.nextNode();
  }
}

function translateAttributes(language: PortfolioLanguage) {
  const elements = document.querySelectorAll<HTMLElement>(
    "[aria-label], [title], img[alt]",
  );

  elements.forEach((element) => {
    let originals = attributeOriginals.get(element);
    if (!originals) {
      originals = new Map<string, string>();
      attributeOriginals.set(element, originals);
    }

    ["aria-label", "title", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value !== null && !originals?.has(attribute)) {
        originals?.set(attribute, value);
      }

      const original = originals?.get(attribute);
      if (original === undefined) return;

      element.setAttribute(
        attribute,
        language === "de" ? germanAttributes[original] ?? original : original,
      );
    });
  });
}

function setMetaContent(selector: string, english: string, german: string, language: PortfolioLanguage) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute("content", language === "de" ? german : english);
}

function translateMetadata(language: PortfolioLanguage) {
  const englishTitle = "Aminci OS | Robotics & Engineering Portfolio";
  const germanTitle = "Aminci OS | Portfolio für Robotik und Maschinenbau";
  document.title = language === "de" ? germanTitle : englishTitle;

  setMetaContent(
    'meta[name="description"]',
    "Aminci Gana is a mechanical engineering student building robotics, computer vision, machine learning, sensing, and control systems.",
    "Aminci Gana ist Maschinenbaustudent und arbeitet an Projekten aus Robotik, Computer Vision, maschinellem Lernen, Sensorik und Regelungstechnik.",
    language,
  );
  setMetaContent('meta[property="og:title"]', englishTitle, germanTitle, language);
  setMetaContent('meta[name="twitter:title"]', englishTitle, germanTitle, language);
  setMetaContent(
    'meta[property="og:description"]',
    "Robotics, computer vision, machine learning, AI systems, sensing, and control projects by Aminci Gana.",
    "Projekte von Aminci Gana aus Robotik, Computer Vision, maschinellem Lernen, KI-Systemen, Sensorik und Regelungstechnik.",
    language,
  );
  setMetaContent(
    'meta[name="twitter:description"]',
    "Robotics, computer vision, machine learning, AI systems, sensing, and control projects by Aminci Gana.",
    "Projekte von Aminci Gana aus Robotik, Computer Vision, maschinellem Lernen, KI-Systemen, Sensorik und Regelungstechnik.",
    language,
  );
}

function updateLanguageControls(language: PortfolioLanguage) {
  document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach((button) => {
    const buttonLanguage = button.dataset.language as PortfolioLanguage;
    button.setAttribute("aria-pressed", String(buttonLanguage === language));
    button.setAttribute(
      "aria-label",
      buttonLanguage === "de" ? "Deutsch" : "English",
    );
    button.title = buttonLanguage === "de" ? "Deutsch" : "English";
  });
}

export function getInitialLanguage(): PortfolioLanguage {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "de" || stored === "en") return stored;
  } catch {
    // Storage may be unavailable in privacy-focused browsing modes.
  }

  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

export function getCurrentLanguage() {
  return activeLanguage;
}

export function applyPortfolioLanguage(language: PortfolioLanguage) {
  activeLanguage = language;
  document.documentElement.lang = language;
  translateBody(language);
  translateAttributes(language);
  translateMetadata(language);
  updateLanguageControls(language);
}

export function initialiseLanguage() {
  const initialLanguage = getInitialLanguage();
  applyPortfolioLanguage(initialLanguage);

  document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language as PortfolioLanguage;
      if (language !== "en" && language !== "de") return;
      if (language === activeLanguage) return;

      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      } catch {
        // The page still switches language for the current visit.
      }

      applyPortfolioLanguage(language);
    });
  });

  return initialLanguage;
}
