const STORAGE_KEY = "deutsch-b1-begleiter-progress-v1";

const views = [
  ["dashboard", "Start"],
  ["practice", "Übungen"],
  ["letters", "Briefe"],
  ["reading", "Lesen & Aussprache"],
  ["dialogues", "Dialoge"],
  ["listening", "Hören"],
  ["speaking", "Sprechen & Bilder"],
  ["exams", "DTZ-Prüfungen"],
  ["lid", "Leben in Deutschland"],
  ["analysis", "Analyse"],
];

const officialSources = [
  {
    label: "BAMF: Abschlussprüfung mit Zertifikat",
    url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html",
  },
  {
    label: "g.a.s.t.: Der DTZ auf einen Blick",
    url: "https://www.gast.de/de/forschung-entwicklung/entwicklung/auftraege/deutsch-test-fuer-zuwanderer-dtz/der-dtz-auf-einen-blick",
  },
  {
    label: "BAMF Online-Testcenter: Einbürgerungstest/Leben in Deutschland",
    url: "https://oet.bamf.de/ords/oetut/f?p=514:1:0",
  },
];

const skillNames = {
  vocabulary: "Wortschatz",
  verbs: "Verben & Zeiten",
  cases: "Artikel, Dativ, Akkusativ",
  sentence: "Satzbau",
  reading: "Lesen",
  dialogue: "Dialoge",
  listening: "Hören",
};

const nouns = [
  ["der Termin", "Termin", "m", "randevu", "Morgen habe ich einen Termin beim Jobcenter."],
  ["die Rechnung", "Rechnung", "f", "fatura", "Die Rechnung ist noch nicht bezahlt."],
  ["das Formular", "Formular", "n", "form", "Bitte füllen Sie das Formular vollständig aus."],
  ["der Antrag", "Antrag", "m", "başvuru", "Ich möchte einen Antrag stellen."],
  ["die Bescheinigung", "Bescheinigung", "f", "belge", "Ich brauche eine Bescheinigung für die Arbeit."],
  ["das Konto", "Konto", "n", "hesap", "Ich eröffne ein Konto bei der Bank."],
  ["der Vermieter", "Vermieter", "m", "ev sahibi", "Der Vermieter repariert die Heizung."],
  ["die Wohnung", "Wohnung", "f", "daire", "Die Wohnung ist hell und ruhig."],
  ["das Zimmer", "Zimmer", "n", "oda", "Das Zimmer ist frei."],
  ["der Arbeitgeber", "Arbeitgeber", "m", "işveren", "Der Arbeitgeber unterschreibt den Vertrag."],
  ["die Ausbildung", "Ausbildung", "f", "meslek eğitimi", "Die Ausbildung beginnt im September."],
  ["das Gehalt", "Gehalt", "n", "maaş", "Das Gehalt kommt am Monatsende."],
  ["der Vertrag", "Vertrag", "m", "sözleşme", "Ich lese den Vertrag genau."],
  ["die Kündigung", "Kündigung", "f", "fesih", "Die Kündigung muss schriftlich sein."],
  ["das Gespräch", "Gespräch", "n", "görüşme", "Das Gespräch dauert zwanzig Minuten."],
  ["der Arzt", "Arzt", "m", "doktor", "Der Arzt untersucht den Patienten."],
  ["die Apotheke", "Apotheke", "f", "eczane", "In der Apotheke kaufe ich Medikamente."],
  ["das Rezept", "Rezept", "n", "reçete", "Das Rezept ist drei Monate gültig."],
  ["der Kindergarten", "Kindergarten", "m", "anaokulu", "Mein Kind geht in den Kindergarten."],
  ["die Schule", "Schule", "f", "okul", "Die Schule beginnt um acht Uhr."],
  ["das Zeugnis", "Zeugnis", "n", "karne", "Das Zeugnis ist wichtig für die Bewerbung."],
  ["der Bus", "Bus", "m", "otobüs", "Der Bus fährt alle zehn Minuten."],
  ["die Haltestelle", "Haltestelle", "f", "durak", "Die Haltestelle ist vor der Bäckerei."],
  ["das Ticket", "Ticket", "n", "bilet", "Das Ticket kostet drei Euro."],
  ["der Kurs", "Kurs", "m", "kurs", "Der Deutschkurs findet am Vormittag statt."],
  ["die Prüfung", "Prüfung", "f", "sınav", "Die Prüfung ist im Juli."],
  ["das Zertifikat", "Zertifikat", "n", "sertifika", "Das Zertifikat zeigt das Niveau B1."],
  ["der Nachbar", "Nachbar", "m", "komşu", "Der Nachbar hilft beim Umzug."],
  ["die Gemeinde", "Gemeinde", "f", "belediye", "Die Gemeinde schickt einen Brief."],
  ["das Amt", "Amt", "n", "resmi daire", "Das Amt hat nur vormittags geöffnet."],
  ["der Ausweis", "Ausweis", "m", "kimlik", "Der Ausweis ist abgelaufen."],
  ["die Versicherung", "Versicherung", "f", "sigorta", "Die Versicherung bezahlt den Schaden."],
  ["das Angebot", "Angebot", "n", "teklif", "Das Angebot ist nur bis Freitag gültig."],
  ["der Einkauf", "Einkauf", "m", "alışveriş", "Der Einkauf ist heute teuer."],
  ["die Bäckerei", "Bäckerei", "f", "fırın", "In der Bäckerei kaufe ich Brot."],
  ["das Brot", "Brot", "n", "ekmek", "Das Brot ist frisch."],
];

const extraWords = [
  ["pünktlich", "dakik", "Der Bus ist heute pünktlich."],
  ["dringend", "acil", "Ich brauche dringend einen Termin."],
  ["schriftlich", "yazılı", "Bitte antworten Sie schriftlich."],
  ["mündlich", "sözlü", "Die mündliche Prüfung dauert ungefähr 16 Minuten."],
  ["gemeinsam", "birlikte", "Wir planen gemeinsam eine Feier."],
  ["selbstständig", "bağımsız", "Ich kann viele Dinge selbstständig erledigen."],
  ["höflich", "nazik", "Im Gespräch bleibe ich höflich."],
  ["zuverlässig", "güvenilir", "Ich bin zuverlässig und arbeite gern im Team."],
  ["erlaubt", "izinli", "Rauchen ist hier nicht erlaubt."],
  ["verboten", "yasak", "Parken ist vor der Einfahrt verboten."],
  ["gültig", "geçerli", "Mein Ausweis ist noch gültig."],
  ["abgelaufen", "süresi dolmuş", "Das Ticket ist abgelaufen."],
  ["beantragen", "başvurmak", "Ich möchte Wohngeld beantragen."],
  ["vereinbaren", "kararlaştırmak", "Wir vereinbaren einen Termin."],
  ["verschieben", "ertelemek", "Ich muss den Termin verschieben."],
  ["absagen", "iptal etmek", "Ich sage den Termin wegen Krankheit ab."],
  ["bestellen", "sipariş etmek", "Ich bestelle zwei Brötchen."],
  ["bezahlen", "ödemek", "Ich bezahle mit Karte."],
  ["erklären", "açıklamak", "Die Lehrerin erklärt die Grammatik."],
  ["unterschreiben", "imzalamak", "Bitte unterschreiben Sie hier."],
  ["kündigen", "feshetmek", "Ich möchte den Vertrag kündigen."],
  ["bewerben", "başvurmak", "Ich bewerbe mich um eine Stelle."],
  ["teilnehmen", "katılmak", "Ich nehme am Integrationskurs teil."],
  ["bestehen", "başarmak", "Ich möchte die B1-Prüfung bestehen."],
  ["verstehen", "anlamak", "Ich verstehe den Brief nicht ganz."],
  ["wiederholen", "tekrar etmek", "Bitte wiederholen Sie den Satz."],
  ["vergleichen", "karşılaştırmak", "Ich vergleiche zwei Angebote."],
  ["beschreiben", "betimlemek", "Ich beschreibe das Foto."],
  ["berichten", "anlatmak", "Ich berichte von meiner Erfahrung."],
  ["vorschlagen", "önermek", "Ich schlage einen Termin vor."],
  ["entscheiden", "karar vermek", "Wir entscheiden zusammen."],
  ["vorbereiten", "hazırlamak", "Ich bereite mich auf die Prüfung vor."],
  ["beanstanden", "şikayet etmek", "Ich beanstande die falsche Rechnung."],
  ["zustimmen", "katılmak", "Ich stimme dem Vorschlag zu."],
  ["ablehnen", "reddetmek", "Ich lehne das Angebot höflich ab."],
  ["sich entschuldigen", "özür dilemek", "Ich entschuldige mich für die Verspätung."],
];

const verbs = [
  ["arbeiten", "çalışmak", "arbeite", "arbeitest", "arbeitet", "habe gearbeitet", "arbeitete", "werde arbeiten"],
  ["kommen", "gelmek", "komme", "kommst", "kommt", "bin gekommen", "kam", "werde kommen"],
  ["gehen", "gitmek", "gehe", "gehst", "geht", "bin gegangen", "ging", "werde gehen"],
  ["fahren", "gitmek/sürmek", "fahre", "fährst", "fährt", "bin gefahren", "fuhr", "werde fahren"],
  ["kaufen", "satın almak", "kaufe", "kaufst", "kauft", "habe gekauft", "kaufte", "werde kaufen"],
  ["bezahlen", "ödemek", "bezahle", "bezahlst", "bezahlt", "habe bezahlt", "bezahlte", "werde bezahlen"],
  ["schreiben", "yazmak", "schreibe", "schreibst", "schreibt", "habe geschrieben", "schrieb", "werde schreiben"],
  ["lesen", "okumak", "lese", "liest", "liest", "habe gelesen", "las", "werde lesen"],
  ["sprechen", "konuşmak", "spreche", "sprichst", "spricht", "habe gesprochen", "sprach", "werde sprechen"],
  ["verstehen", "anlamak", "verstehe", "verstehst", "versteht", "habe verstanden", "verstand", "werde verstehen"],
  ["helfen", "yardım etmek", "helfe", "hilfst", "hilft", "habe geholfen", "half", "werde helfen"],
  ["nehmen", "almak", "nehme", "nimmst", "nimmt", "habe genommen", "nahm", "werde nehmen"],
  ["geben", "vermek", "gebe", "gibst", "gibt", "habe gegeben", "gab", "werde geben"],
  ["finden", "bulmak", "finde", "findest", "findet", "habe gefunden", "fand", "werde finden"],
  ["suchen", "aramak", "suche", "suchst", "sucht", "habe gesucht", "suchte", "werde suchen"],
  ["lernen", "öğrenmek", "lerne", "lernst", "lernt", "habe gelernt", "lernte", "werde lernen"],
  ["fragen", "sormak", "frage", "fragst", "fragt", "habe gefragt", "fragte", "werde fragen"],
  ["antworten", "cevap vermek", "antworte", "antwortest", "antwortet", "habe geantwortet", "antwortete", "werde antworten"],
  ["vereinbaren", "kararlaştırmak", "vereinbare", "vereinbarst", "vereinbart", "habe vereinbart", "vereinbarte", "werde vereinbaren"],
  ["verschieben", "ertelemek", "verschiebe", "verschiebst", "verschiebt", "habe verschoben", "verschob", "werde verschieben"],
  ["absagen", "iptal etmek", "sage ab", "sagst ab", "sagt ab", "habe abgesagt", "sagte ab", "werde absagen"],
  ["beantragen", "başvurmak", "beantrage", "beantragst", "beantragt", "habe beantragt", "beantragte", "werde beantragen"],
  ["erklären", "açıklamak", "erkläre", "erklärst", "erklärt", "habe erklärt", "erklärte", "werde erklären"],
  ["unterschreiben", "imzalamak", "unterschreibe", "unterschreibst", "unterschreibt", "habe unterschrieben", "unterschrieb", "werde unterschreiben"],
  ["kündigen", "feshetmek", "kündige", "kündigst", "kündigt", "habe gekündigt", "kündigte", "werde kündigen"],
  ["bewerben", "başvurmak", "bewerbe mich", "bewirbst dich", "bewirbt sich", "habe mich beworben", "bewarb mich", "werde mich bewerben"],
  ["teilnehmen", "katılmak", "nehme teil", "nimmst teil", "nimmt teil", "habe teilgenommen", "nahm teil", "werde teilnehmen"],
  ["bestehen", "başarmak", "bestehe", "bestehst", "besteht", "habe bestanden", "bestand", "werde bestehen"],
  ["beschreiben", "betimlemek", "beschreibe", "beschreibst", "beschreibt", "habe beschrieben", "beschrieb", "werde beschreiben"],
  ["berichten", "anlatmak", "berichte", "berichtest", "berichtet", "habe berichtet", "berichtete", "werde berichten"],
  ["vorschlagen", "önermek", "schlage vor", "schlägst vor", "schlägt vor", "habe vorgeschlagen", "schlug vor", "werde vorschlagen"],
  ["entscheiden", "karar vermek", "entscheide", "entscheidest", "entscheidet", "habe entschieden", "entschied", "werde entscheiden"],
];

const readingTexts = [
  {
    title: "Termin beim Jobcenter",
    text: "Sehr geehrte Frau Demir, Ihr Termin im Jobcenter findet am Dienstag um 9:30 Uhr statt. Bitte bringen Sie Ihren Ausweis, den Mietvertrag und die letzten Kontoauszüge mit. Wenn Sie krank sind, rufen Sie uns spätestens am Montag an.",
    tr: "Jobcenter randevusu salı saat 9:30'dadır. Kimlik, kira sözleşmesi ve son hesap dökümleri getirilmelidir.",
    questions: [
      ["Wann ist der Termin?", ["Dienstag um 9:30 Uhr", "Montag um 9:30 Uhr", "Freitag um 14:00 Uhr"], 0],
      ["Was soll Frau Demir mitbringen?", ["Ausweis und Unterlagen", "Geburtstagskuchen", "Sportkleidung"], 0],
      ["Was muss sie tun, wenn sie krank ist?", ["Spätestens Montag anrufen", "Einfach zu Hause bleiben", "Erst nach dem Termin schreiben"], 0],
    ],
  },
  {
    title: "Aushang im Haus",
    text: "Liebe Mieterinnen und Mieter, am Donnerstag wird im Hausflur gearbeitet. Zwischen 8 und 13 Uhr kann es laut werden. Bitte stellen Sie in dieser Zeit keine Fahrräder in den Eingang. Vielen Dank für Ihr Verständnis.",
    tr: "Perşembe günü apartman girişinde çalışma var. Saat 8-13 arası gürültü olabilir.",
    questions: [
      ["Wo wird gearbeitet?", ["Im Hausflur", "Im Keller", "Im Garten"], 0],
      ["Wann kann es laut werden?", ["Zwischen 8 und 13 Uhr", "Nach 18 Uhr", "Am Sonntag"], 0],
      ["Was sollen die Mieter nicht tun?", ["Fahrräder in den Eingang stellen", "Fenster öffnen", "Post holen"], 0],
    ],
  },
  {
    title: "Nachricht vom Kindergarten",
    text: "Am Freitag machen die Kinder einen Ausflug zum Spielplatz. Bitte geben Sie Ihrem Kind eine Trinkflasche, wetterfeste Kleidung und ein kleines Frühstück mit. Die Kinder kommen um 13 Uhr zurück.",
    tr: "Cuma günü çocuklar oyun alanına gezi yapacak. Su şişesi, hava koşullarına uygun kıyafet ve kahvaltı getirilmeli.",
    questions: [
      ["Wohin gehen die Kinder?", ["Zum Spielplatz", "Zur Bank", "Zum Bahnhof"], 0],
      ["Was sollen die Eltern mitgeben?", ["Trinkflasche und Frühstück", "Geld für den Bus", "Ein Fahrrad"], 0],
      ["Wann kommen die Kinder zurück?", ["Um 13 Uhr", "Um 8 Uhr", "Um 18 Uhr"], 0],
    ],
  },
  {
    title: "E-Mail an den Arbeitgeber",
    text: "Guten Morgen Herr Schuster, ich bin heute krank und kann leider nicht zur Arbeit kommen. Ich gehe um 10 Uhr zum Arzt und schicke Ihnen danach die Krankmeldung. Freundliche Grüße, Mehmet Yilmaz",
    tr: "Mehmet hastadır, işe gelemeyecektir ve doktor raporunu gönderecektir.",
    questions: [
      ["Warum schreibt Mehmet?", ["Er ist krank", "Er hat Urlaub", "Er sucht eine Wohnung"], 0],
      ["Wann geht er zum Arzt?", ["Um 10 Uhr", "Um 7 Uhr", "Um 18 Uhr"], 0],
      ["Was schickt er später?", ["Die Krankmeldung", "Den Mietvertrag", "Ein Foto"], 0],
    ],
  },
  {
    title: "Hinweis in der Bäckerei",
    text: "Liebe Kundinnen und Kunden, wegen einer Reparatur schließen wir heute schon um 15 Uhr. Morgen sind wir wieder wie gewohnt von 6 bis 18 Uhr für Sie da.",
    tr: "Tamir nedeniyle fırın bugün 15:00'te kapanır. Yarın normal saatlerde açıktır.",
    questions: [
      ["Warum schließt die Bäckerei früher?", ["Wegen einer Reparatur", "Wegen Urlaub", "Wegen einer Prüfung"], 0],
      ["Wann schließt sie heute?", ["Um 15 Uhr", "Um 18 Uhr", "Um 6 Uhr"], 0],
      ["Wann öffnet sie morgen?", ["Um 6 Uhr", "Um 10 Uhr", "Um 15 Uhr"], 0],
    ],
  },
  {
    title: "Brief von der Gemeinde",
    text: "Die Gemeinde lädt alle neuen Bürgerinnen und Bürger am 12. Mai um 17 Uhr zu einer Informationsveranstaltung ein. Sie erhalten Informationen zu Vereinen, Beratungsstellen und Sprachkursen.",
    tr: "Belediye yeni vatandaşları bilgilendirme toplantısına davet ediyor.",
    questions: [
      ["Wer lädt ein?", ["Die Gemeinde", "Die Bank", "Der Vermieter"], 0],
      ["Wozu lädt sie ein?", ["Zu einer Informationsveranstaltung", "Zu einer Prüfung", "Zu einem Arzttermin"], 0],
      ["Welche Informationen gibt es?", ["Vereine, Beratung, Sprachkurse", "Nur Mietpreise", "Nur Busfahrpläne"], 0],
    ],
  },
  {
    title: "Banktermin",
    text: "Ihr Beratungstermin bei der Bank ist am Mittwoch um 11 Uhr. Bitte bringen Sie Ihren Ausweis und Ihre Gehaltsabrechnung mit. Wenn Sie den Termin verschieben möchten, rufen Sie die Nummer 0800 45 67 an.",
    tr: "Banka danışma randevusu çarşamba saat 11'dedir.",
    questions: [
      ["Wann ist der Banktermin?", ["Mittwoch um 11 Uhr", "Dienstag um 8 Uhr", "Freitag um 16 Uhr"], 0],
      ["Was muss man mitbringen?", ["Ausweis und Gehaltsabrechnung", "Krankmeldung und Rezept", "Fahrrad und Helm"], 0],
      ["Was kann man telefonisch machen?", ["Den Termin verschieben", "Brot bestellen", "Den Kurs bestehen"], 0],
    ],
  },
  {
    title: "Kursinformation",
    text: "Der Deutschkurs findet nächste Woche in Raum 204 statt. Der Unterricht beginnt jeden Tag um 8:30 Uhr. Bitte bringen Sie das Kursbuch, ein Heft und einen Stift mit.",
    tr: "Almanca kursu gelecek hafta 204 numaralı odada yapılacaktır.",
    questions: [
      ["Wo findet der Kurs statt?", ["In Raum 204", "Im Rathaus", "In der Apotheke"], 0],
      ["Wann beginnt der Unterricht?", ["Um 8:30 Uhr", "Um 10:30 Uhr", "Um 18 Uhr"], 0],
      ["Was soll man mitbringen?", ["Buch, Heft und Stift", "Nur Essen", "Ein Ticket"], 0],
    ],
  },
  {
    title: "Rezept aus der Apotheke",
    text: "Nehmen Sie die Tabletten zweimal täglich nach dem Essen. Wenn Sie starke Schmerzen oder Fieber bekommen, rufen Sie bitte Ihren Arzt an. Bewahren Sie das Medikament außerhalb der Reichweite von Kindern auf.",
    tr: "Tabletler yemekten sonra günde iki kez alınmalıdır.",
    questions: [
      ["Wie oft soll man die Tabletten nehmen?", ["Zweimal täglich", "Einmal pro Woche", "Alle zwei Stunden"], 0],
      ["Wann soll man den Arzt anrufen?", ["Bei starken Schmerzen oder Fieber", "Wenn das Brot leer ist", "Wenn der Bus kommt"], 0],
      ["Wo soll das Medikament nicht liegen?", ["In Reichweite von Kindern", "Im Schrank", "In der Apotheke"], 0],
    ],
  },
  {
    title: "Wohnungsanzeige",
    text: "Helle 2-Zimmer-Wohnung, 54 Quadratmeter, Balkon, Nähe Bahnhof. Kaltmiete 620 Euro, Nebenkosten 160 Euro. Besichtigung am Samstag nach Vereinbarung.",
    tr: "Aydınlık 2 odalı daire, balkonlu, istasyona yakın.",
    questions: [
      ["Wie groß ist die Wohnung?", ["54 Quadratmeter", "160 Quadratmeter", "620 Quadratmeter"], 0],
      ["Was hat die Wohnung?", ["Einen Balkon", "Einen Garten mit Pool", "Eine Garage für drei Autos"], 0],
      ["Wann ist eine Besichtigung möglich?", ["Am Samstag nach Vereinbarung", "Jeden Sonntag ohne Termin", "Nur nachts"], 0],
    ],
  },
];

while (readingTexts.length < 20) {
  const base = readingTexts[readingTexts.length % 10];
  readingTexts.push({
    ...base,
    title: `${base.title} ${Math.floor(readingTexts.length / 10) + 1}`,
    text: base.text.replace(/\./, ", bitte achten Sie auf die Angaben."),
  });
}

const dialogueScripts = [
  {
    title: "In der Bäckerei",
    tr: "Fırında sipariş verme.",
    lines: ["Guten Morgen, was darf es sein?", "Ich hätte gern zwei Brötchen und ein Vollkornbrot.", "Gern. Möchten Sie das Brot geschnitten?", "Ja, bitte. Was kostet das zusammen?", "Das macht 5 Euro 40."],
  },
  {
    title: "Bei der Bank",
    tr: "Bankada randevu alma.",
    lines: ["Guten Tag, ich möchte ein Konto eröffnen.", "Haben Sie einen Termin?", "Nein, kann ich bitte einen Termin vereinbaren?", "Ja, morgen um 10 Uhr ist noch frei.", "Das passt. Vielen Dank."],
  },
  {
    title: "Beim Vermieter",
    tr: "Ev sahibiyle tamir konuşması.",
    lines: ["Guten Tag, in meiner Wohnung ist die Heizung kaputt.", "Seit wann funktioniert sie nicht?", "Seit gestern Abend.", "Ich schicke morgen einen Handwerker.", "Vielen Dank, das ist sehr freundlich."],
  },
  {
    title: "Im Jobcenter",
    tr: "Jobcenter'da belge sorma.",
    lines: ["Guten Tag, ich habe eine Frage zu meinem Antrag.", "Welche Unterlagen fehlen Ihnen?", "Mir fehlt die Mietbescheinigung.", "Bitte bringen Sie sie bis Freitag mit.", "Ja, das mache ich."],
  },
  {
    title: "Beim Arzt",
    tr: "Doktorda şikayet anlatma.",
    lines: ["Was fehlt Ihnen?", "Ich habe seit drei Tagen Kopfschmerzen.", "Haben Sie auch Fieber?", "Nein, aber ich bin sehr müde.", "Ich untersuche Sie jetzt."],
  },
  {
    title: "Im Supermarkt",
    tr: "Markette ürün sorma.",
    lines: ["Entschuldigung, wo finde ich Reis?", "Reis finden Sie in Gang drei.", "Vielen Dank. Gibt es auch Bulgur?", "Ja, gleich neben dem Reis.", "Super, danke schön."],
  },
  {
    title: "In der Schule",
    tr: "Okulda öğretmenle konuşma.",
    lines: ["Guten Tag, ich möchte über mein Kind sprechen.", "Natürlich, worum geht es?", "Mein Kind versteht die Hausaufgaben nicht.", "Wir können einen Fördertermin vereinbaren.", "Das wäre sehr hilfreich."],
  },
  {
    title: "Beim Arbeitgeber",
    tr: "İşverenle vardiya konuşması.",
    lines: ["Guten Morgen, ich möchte meine Schicht tauschen.", "Warum möchten Sie tauschen?", "Ich habe am Donnerstag einen Arzttermin.", "Dann arbeiten Sie am Freitag später.", "Vielen Dank für Ihr Verständnis."],
  },
  {
    title: "In der Gemeinde",
    tr: "Belediyede kayıt hakkında konuşma.",
    lines: ["Guten Tag, ich möchte mich anmelden.", "Haben Sie Ihren Ausweis dabei?", "Ja, und auch den Mietvertrag.", "Dann füllen Sie bitte dieses Formular aus.", "In Ordnung."],
  },
  {
    title: "Am Bahnhof",
    tr: "Tren istasyonunda bilgi alma.",
    lines: ["Entschuldigung, fährt der Zug nach Köln pünktlich?", "Nein, er hat zehn Minuten Verspätung.", "Von welchem Gleis fährt er?", "Von Gleis sieben.", "Danke für die Auskunft."],
  },
  {
    title: "In der Kita",
    tr: "Anaokulunda çocuğu alma.",
    lines: ["Guten Tag, ich hole meine Tochter ab.", "Sie ist noch im Gruppenraum.", "Hat heute alles gut geklappt?", "Ja, sie hat schön gespielt.", "Das freut mich."],
  },
  {
    title: "In der Apotheke",
    tr: "Eczanede ilaç alma.",
    lines: ["Guten Tag, ich habe ein Rezept.", "Einen Moment bitte.", "Wie nehme ich die Tabletten ein?", "Zweimal täglich nach dem Essen.", "Danke für die Erklärung."],
  },
  {
    title: "Beim Telefonanbieter",
    tr: "Telefon sözleşmesi hakkında konuşma.",
    lines: ["Guten Tag, ich möchte meinen Vertrag kündigen.", "Wie ist Ihre Kundennummer?", "Die Nummer ist 458921.", "Die Kündigung muss schriftlich erfolgen.", "Dann schicke ich heute eine E-Mail."],
  },
  {
    title: "Beim Friseur",
    tr: "Kuaförde randevu.",
    lines: ["Haben Sie heute noch einen Termin frei?", "Um 16 Uhr wäre möglich.", "Das passt mir gut.", "Möchten Sie waschen und schneiden?", "Ja, bitte."],
  },
  {
    title: "Beim Sprachkurs",
    tr: "Dil kursunda sınav hakkında sorma.",
    lines: ["Wann ist die B1-Prüfung?", "Die Prüfung ist am 18. Juli.", "Was sollen wir üben?", "Besonders Hören, Briefe und Sprechen.", "Dann übe ich jeden Tag."],
  },
  {
    title: "Im Bürgerbüro",
    tr: "Vatandaşlık bürosunda kimlik yenileme.",
    lines: ["Guten Tag, mein Ausweis ist abgelaufen.", "Sie brauchen ein biometrisches Foto.", "Kann ich den Antrag heute stellen?", "Ja, bitte ziehen Sie eine Nummer.", "Danke, ich warte hier."],
  },
  {
    title: "Beim Elternabend",
    tr: "Veli toplantısında soru sorma.",
    lines: ["Guten Abend, ich habe eine Frage zur Klassenfahrt.", "Ja, bitte.", "Wie viel kostet die Fahrt?", "Sie kostet 80 Euro.", "Kann ich in zwei Raten bezahlen?"],
  },
  {
    title: "Im Restaurant",
    tr: "Restoranda sipariş verme.",
    lines: ["Guten Abend, haben Sie reserviert?", "Ja, auf den Namen Kaya.", "Hier ist Ihr Tisch.", "Können wir bitte die Speisekarte haben?", "Natürlich, sofort."],
  },
];

const letterPrompts = [
  ["Jobcenter: fehlende Unterlage", "Sie haben vom Jobcenter einen Brief bekommen. Eine Mietbescheinigung fehlt. Schreiben Sie: Warum antworten Sie? Welche Unterlage schicken Sie? Wann schicken Sie sie? Bitten Sie um eine Bestätigung.", "Eksik kira belgesi için Jobcenter'a yazın."],
  ["Gemeinde: Anmeldung", "Sie sind neu in der Stadt. Schreiben Sie an die Gemeinde: Sie möchten sich anmelden, bitten um einen Termin, fragen nach nötigen Unterlagen und nennen Ihre Telefonnummer.", "Belediyeden kayıt randevusu isteyin."],
  ["Vermieter: Heizung kaputt", "Ihre Heizung funktioniert nicht. Schreiben Sie an den Vermieter: Beschreiben Sie das Problem, seit wann es besteht, bitten Sie um Reparatur und schlagen Sie zwei Termine vor.", "Ev sahibine arızalı kalorifer için yazın."],
  ["Arbeitgeber: krank", "Sie sind krank und können nicht arbeiten. Schreiben Sie Ihrem Arbeitgeber: Entschuldigen Sie sich, nennen Sie den Grund, informieren Sie über den Arzttermin und kündigen Sie die Krankmeldung an.", "İşverene hastalık nedeniyle yazın."],
  ["Bewerbung: Praktikum", "Sie möchten ein Praktikum machen. Schreiben Sie an einen Betrieb: Stellen Sie sich kurz vor, nennen Sie Ihre Erfahrung, erklären Sie Ihr Interesse und bitten Sie um ein Gespräch.", "Staj başvurusu yazın."],
  ["Schule: Gespräch wegen Kind", "Ihr Kind hat Probleme in Mathematik. Schreiben Sie an die Lehrerin: Beschreiben Sie die Situation, bitten Sie um ein Gespräch, schlagen Sie Termine vor und fragen Sie nach Unterstützung.", "Öğretmenden görüşme isteyin."],
  ["Kita: Kind krank", "Ihr Kind kann nicht in die Kita kommen. Schreiben Sie: Warum bleibt das Kind zu Hause? Wie lange vermutlich? Fragen Sie nach verpassten Informationen und bedanken Sie sich.", "Anaokuluna hastalık bildirimi yazın."],
  ["Bank: Termin verschieben", "Sie haben einen Banktermin, können aber nicht kommen. Schreiben Sie: Entschuldigen Sie sich, nennen Sie den Grund, bitten Sie um einen neuen Termin und schlagen Sie Zeiten vor.", "Banka randevusunu erteleyin."],
  ["Versicherung: Schaden melden", "In Ihrer Wohnung gab es einen Wasserschaden. Schreiben Sie der Versicherung: Was ist passiert? Wann? Welche Schäden gibt es? Bitten Sie um weitere Informationen.", "Sigortaya hasar bildirimi yazın."],
  ["Kursleitung: Prüfung fragen", "Schreiben Sie an Ihre Kursleitung: Fragen Sie nach dem Prüfungstermin, bitten Sie um Übungsmaterial, nennen Sie Ihre Schwäche und bedanken Sie sich.", "Kurs öğretmenine sınav hakkında yazın."],
  ["Telefonanbieter: Vertrag kündigen", "Sie möchten Ihren Telefonvertrag kündigen. Schreiben Sie: Nennen Sie Kundennummer, Kündigungsdatum, bitten Sie um Bestätigung und fragen Sie nach Rücksendung der Geräte.", "Telefon sözleşmesini feshedin."],
  ["Nachbar: Lärm", "Ihr Nachbar ist abends sehr laut. Schreiben Sie höflich: Beschreiben Sie das Problem, nennen Sie Zeiten, bitten Sie um Ruhe und schlagen Sie ein Gespräch vor.", "Komşuya gürültü hakkında yazın."],
];

while (letterPrompts.length < 42) {
  const base = letterPrompts[letterPrompts.length % 12];
  letterPrompts.push([`${base[0]} ${Math.floor(letterPrompts.length / 12) + 1}`, base[1], base[2]]);
}

const speakingTasks = [
  {
    kind: "intro",
    title: "Vorstellungsrunde",
    prompt: "Stellen Sie sich vor: Name, Herkunft, Wohnort, Familie, Beruf, Deutschkurs, Hobbys und Ziel.",
    tr: "Kendinizi tanıtın: isim, memleket, yaşadığınız yer, aile, meslek, kurs, hobiler ve hedef.",
    expectedKeywords: ["heiße", "komme", "wohne", "familie", "arbeite", "lerne", "deutsch", "ziel"],
  },
  {
    kind: "read",
    title: "Vorlesen: Termin",
    prompt: "Lesen Sie laut vor: Ich habe morgen einen Termin beim Jobcenter. Bitte bringen Sie Ihren Ausweis und den Mietvertrag mit.",
    expectedText: "Ich habe morgen einen Termin beim Jobcenter. Bitte bringen Sie Ihren Ausweis und den Mietvertrag mit.",
    tr: "Randevu metnini sesli okuyun.",
    expectedKeywords: ["termin", "jobcenter", "ausweis", "mietvertrag"],
  },
  {
    kind: "read",
    title: "Vorlesen: Bäckerei",
    prompt: "Lesen Sie laut vor: In der Bäckerei kaufe ich zwei Brötchen und ein Brot. Danach bezahle ich mit Karte.",
    expectedText: "In der Bäckerei kaufe ich zwei Brötchen und ein Brot. Danach bezahle ich mit Karte.",
    tr: "Fırın metnini sesli okuyun.",
    expectedKeywords: ["bäckerei", "brötchen", "brot", "karte"],
  },
];

const pictureTasks = [
  {
    title: "Frau in der Bäckerei",
    image: "https://source.unsplash.com/1200x900/?bakery,woman,customer",
    fallback: "Eine Frau steht in einer Bäckerei und bestellt Brot.",
    tr: "Bir kadın fırında ekmek sipariş ediyor.",
    expectedKeywords: ["frau", "bäckerei", "brot", "bestellt", "kauft", "theke"],
  },
  {
    title: "Kinder auf dem Spielplatz",
    image: "https://source.unsplash.com/1200x900/?children,playground",
    fallback: "Kinder spielen draußen auf einem Spielplatz.",
    tr: "Çocuklar oyun alanında oynuyor.",
    expectedKeywords: ["kinder", "spielplatz", "spielen", "draußen", "spaß"],
  },
  {
    title: "Paar mit Hund im Wald",
    image: "https://source.unsplash.com/1200x900/?couple,dog,forest,walk",
    fallback: "Ein Paar geht mit einem Hund im Wald spazieren.",
    tr: "Bir çift köpeğiyle ormanda yürüyüş yapıyor.",
    expectedKeywords: ["paar", "hund", "wald", "spazieren", "geht"],
  },
  {
    title: "Familie im Urlaub",
    image: "https://source.unsplash.com/1200x900/?family,vacation,beach",
    fallback: "Eine Familie macht Urlaub am Meer.",
    tr: "Bir aile denizde tatil yapıyor.",
    expectedKeywords: ["familie", "urlaub", "meer", "strand", "kinder"],
  },
  {
    title: "Geburtstagsfeier",
    image: "https://source.unsplash.com/1200x900/?birthday,party,family",
    fallback: "Menschen feiern zusammen Geburtstag.",
    tr: "İnsanlar birlikte doğum günü kutluyor.",
    expectedKeywords: ["geburtstag", "feier", "kuchen", "familie", "freunde"],
  },
];

const listeningSituations = [
  ["Bahnhof", "Achtung an Gleis 3: Der Regionalzug nach Bonn hat heute etwa zehn Minuten Verspätung.", "Welcher Zug hat Verspätung?", ["Der Regionalzug nach Bonn", "Der Bus zur Schule", "Die U-Bahn nach Berlin"], 0],
  ["Arztpraxis", "Guten Tag, Ihre Ärztin ist heute krank. Wir können Ihnen morgen um 11 Uhr einen neuen Termin geben.", "Wann ist der neue Termin?", ["Morgen um 11 Uhr", "Heute um 11 Uhr", "Am Sonntag"], 0],
  ["Bäckerei", "Heute im Angebot: drei Brötchen für einen Euro fünfzig und ein Vollkornbrot für drei Euro.", "Was ist im Angebot?", ["Brötchen und Vollkornbrot", "Milch und Eier", "Fahrkarten"], 0],
  ["Schule", "Der Elternabend beginnt um 18 Uhr in Raum 12. Bitte bringen Sie den ausgefüllten Zettel mit.", "Wo ist der Elternabend?", ["In Raum 12", "In Raum 204", "Im Rathaus"], 0],
  ["Wohnung", "Wegen Reparaturarbeiten gibt es am Freitag von 9 bis 12 Uhr kein warmes Wasser.", "Wann gibt es kein warmes Wasser?", ["Freitag von 9 bis 12 Uhr", "Montag den ganzen Tag", "Heute Abend"], 0],
  ["Jobcenter", "Bitte reichen Sie die fehlenden Unterlagen bis zum 15. Juni ein.", "Bis wann müssen die Unterlagen da sein?", ["Bis zum 15. Juni", "Bis morgen früh", "Bis Dezember"], 0],
  ["Supermarkt", "Kasse drei ist jetzt geöffnet. Sie können auch an Kasse drei bezahlen.", "Was ist geöffnet?", ["Kasse drei", "Die Apotheke", "Der Parkplatz"], 0],
  ["Bus", "Die Linie 42 fährt heute wegen einer Baustelle nur bis zur Haltestelle Rathaus.", "Warum fährt der Bus anders?", ["Wegen einer Baustelle", "Wegen Schnee", "Wegen Ferien"], 0],
  ["Bank", "Ihre neue Bankkarte können Sie ab Montag in der Filiale abholen.", "Was kann man abholen?", ["Die Bankkarte", "Ein Paket", "Ein Rezept"], 0],
  ["Kurs", "Morgen fällt der Deutschkurs aus. Bitte lernen Sie zu Hause die Wörter auf Seite 48.", "Was fällt aus?", ["Der Deutschkurs", "Die Prüfung", "Der Einkauf"], 0],
  ["Apotheke", "Nehmen Sie den Saft morgens und abends nach dem Essen.", "Wann nimmt man den Saft?", ["Morgens und abends", "Nur nachts", "Vor jeder Busfahrt"], 0],
  ["Gemeinde", "Das Bürgerbüro hat am Mittwoch nur bis 12 Uhr geöffnet.", "Wie lange ist geöffnet?", ["Bis 12 Uhr", "Bis 20 Uhr", "Gar nicht"], 0],
];

while (listeningSituations.length < 36) {
  const base = listeningSituations[listeningSituations.length % 12];
  listeningSituations.push([`${base[0]} ${Math.floor(listeningSituations.length / 12) + 1}`, base[1], base[2], base[3], base[4]]);
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function choice(list, seed = Math.random()) {
  return list[Math.floor(seed * list.length) % list.length];
}

function article(gender, grammaticalCase) {
  const map = {
    m: { nom: "der", akk: "den", dat: "dem" },
    f: { nom: "die", akk: "die", dat: "der" },
    n: { nom: "das", akk: "das", dat: "dem" },
  };
  return map[gender][grammaticalCase];
}

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[.,!?;:"'()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tokenScore(answer, expected) {
  const answerTokens = new Set(normalize(answer).split(" ").filter(Boolean));
  const expectedTokens = normalize(expected).split(" ").filter(Boolean);
  if (!expectedTokens.length) return 0;
  const hit = expectedTokens.filter((token) => answerTokens.has(token)).length;
  return Math.round((hit / expectedTokens.length) * 100);
}

function buildExercises() {
  const exercises = [];
  nouns.forEach(([full, base, gender, tr, sentence], index) => {
    const other = shuffle(nouns.filter((_, i) => i !== index)).slice(0, 3).map((item) => item[3]);
    exercises.push({
      id: `voc-noun-tr-${index}`,
      skill: "vocabulary",
      type: "mc",
      prompt: `Was bedeutet „${full}“ auf Türkisch?`,
      tr: `„${full}“ kelimesinin Türkçesi nedir?`,
      options: shuffle([tr, ...other]),
      answer: tr,
      explain: sentence,
    });
    exercises.push({
      id: `voc-noun-de-${index}`,
      skill: "vocabulary",
      type: "cloze",
      prompt: `Ergänzen Sie das passende Wort: ${sentence.replace(full, "_____").replace(base, "_____")}`,
      tr: `Uygun Almanca kelimeyi yazın: ${tr}`,
      answer: base,
      explain: `Richtig ist: ${sentence}`,
    });
    ["akk", "dat", "nom"].forEach((gramCase) => {
      const caseLabel = { akk: "Akkusativ", dat: "Dativ", nom: "Nominativ" }[gramCase];
      const stem = base;
      const answer = `${article(gender, gramCase)} ${stem}`;
      const prompts = {
        akk: `Ich sehe _____ ${stem}.`,
        dat: `Ich helfe _____ ${stem}.`,
        nom: `_____ ${stem} ist wichtig.`,
      };
      exercises.push({
        id: `case-${gramCase}-${index}`,
        skill: "cases",
        type: "mc",
        prompt: `${caseLabel}: ${prompts[gramCase]}`,
        tr: `${caseLabel} artikeli seçin.`,
        options: shuffle([
          answer,
          ...shuffle([`der ${stem}`, `die ${stem}`, `das ${stem}`, `den ${stem}`, `dem ${stem}`].filter((option) => option !== answer)).slice(0, 3),
        ]),
        answer,
        explain: `${caseLabel}: ${answer}.`,
      });
    });
  });

  extraWords.forEach(([de, tr, sentence], index) => {
    const wrong = shuffle(extraWords.filter((_, i) => i !== index)).slice(0, 3).map((item) => item[1]);
    exercises.push({
      id: `voc-extra-${index}`,
      skill: "vocabulary",
      type: "mc",
      prompt: `Was bedeutet „${de}“?`,
      tr: `„${de}“ ne demek?`,
      options: shuffle([tr, ...wrong]),
      answer: tr,
      explain: sentence,
    });
    exercises.push({
      id: `voc-extra-cloze-${index}`,
      skill: "vocabulary",
      type: "cloze",
      prompt: `Schreiben Sie das Wort passend zum Satz: ${sentence.replace(de, "_____")}`,
      tr: `Cümleye uygun kelimeyi yazın: ${tr}`,
      answer: de,
      explain: sentence,
    });
  });

  verbs.forEach(([inf, tr, ich, du, er, perfekt, praet, future], index) => {
    const distractors = shuffle(verbs.filter((_, i) => i !== index)).slice(0, 3);
    [
      [`verb-pres-${index}`, "Präsens", `Heute _____ ich im Kurs. (${inf})`, ich, `Bugün için fiili çekimleyin: ${tr}`],
      [`verb-du-${index}`, "Präsens du", `Du _____ morgen zum Amt. (${inf})`, du, `Du biçimini seçin: ${tr}`],
      [`verb-perfect-${index}`, "Perfekt", `Gestern _____ ich viel. (${inf})`, perfekt, `Geçmiş zaman Perfekt kullanın: ${tr}`],
      [`verb-praet-${index}`, "Präteritum", `Letztes Jahr _____ ich oft Deutsch. (${inf})`, praet, `Präteritum kullanın: ${tr}`],
      [`verb-future-${index}`, "Futur I", `Nächste Woche _____ ich mehr. (${inf})`, future, `Gelecek zaman kullanın: ${tr}`],
    ].forEach(([id, tense, prompt, answer, turkish], offset) => {
      const wrong = distractors.map((v) => [v[2], v[5], v[6], v[7]][offset % 4]);
      exercises.push({
        id,
        skill: "verbs",
        type: "mc",
        prompt: `${tense}: ${prompt}`,
        tr: turkish,
        options: shuffle([answer, ...wrong]),
        answer,
        explain: `${inf}: ${answer}`,
      });
    });
  });

  const sentenceTemplates = [
    "Morgen gehe ich zum Arzt",
    "Ich muss den Termin beim Jobcenter verschieben",
    "Am Freitag kaufe ich Brot in der Bäckerei",
    "Die Kinder spielen nachmittags auf dem Spielplatz",
    "Wegen Krankheit kann ich heute nicht arbeiten",
    "Ich möchte einen neuen Termin vereinbaren",
    "Der Vermieter repariert morgen die Heizung",
    "Im Deutschkurs üben wir Briefe und Dialoge",
    "Nach dem Essen nehme ich die Tabletten",
    "Bitte bringen Sie den Ausweis mit",
    "Ich bewerbe mich um eine Stelle als Verkäufer",
    "Weil der Bus spät kommt, rufe ich im Kurs an",
    "Wenn ich Fragen habe, bitte ich um Hilfe",
    "Gestern habe ich eine E-Mail geschrieben",
    "Nächste Woche werde ich mehr sprechen üben",
  ];
  for (let i = 0; i < 64; i += 1) {
    const sentence = sentenceTemplates[i % sentenceTemplates.length];
    exercises.push({
      id: `sentence-${i}`,
      skill: "sentence",
      type: "order",
      prompt: "Bringen Sie die Wörter in die richtige Reihenfolge.",
      tr: "Kelimeleri doğru sıraya koyun.",
      pieces: shuffle(sentence.split(" ")),
      answer: sentence,
      explain: `Richtiger Satz: ${sentence}. Verbposition beachten.`,
    });
  }

  readingTexts.forEach((text, textIndex) => {
    text.questions.forEach(([question, options, answerIndex], questionIndex) => {
      exercises.push({
        id: `reading-${textIndex}-${questionIndex}`,
        skill: "reading",
        type: "reading",
        title: text.title,
        text: text.text,
        prompt: question,
        tr: text.tr,
        options: shuffle(options),
        answer: options[answerIndex],
        explain: `Lesen Sie im Text: ${text.text}`,
      });
    });
  });

  dialogueScripts.forEach((dialogue, index) => {
    exercises.push({
      id: `dialogue-${index}`,
      skill: "dialogue",
      type: "order",
      prompt: `Dialog: ${dialogue.title}. Ordnen Sie die Sätze.`,
      tr: dialogue.tr,
      pieces: shuffle(dialogue.lines),
      answer: dialogue.lines.join(" "),
      explain: dialogue.lines.join(" → "),
    });
  });

  listeningSituations.forEach(([title, audio, question, options, answerIndex], index) => {
    exercises.push({
      id: `listen-${index}`,
      skill: "listening",
      type: "listen",
      title,
      audio,
      prompt: question,
      tr: "Dinleyin ve doğru cevabı seçin.",
      options: shuffle(options),
      answer: options[answerIndex],
      explain: audio,
    });
  });

  return exercises;
}

const exerciseBank = buildExercises();

function buildLidQuestions() {
  const base = [
    ["Welche Farben hat die deutsche Flagge?", ["Schwarz, Rot, Gold", "Blau, Weiß, Rot", "Grün, Weiß, Rot", "Schwarz, Gelb, Blau"], 0, "Bayrağın renkleri: siyah, kırmızı, altın."],
    ["Wie heißt die Verfassung der Bundesrepublik Deutschland?", ["Grundgesetz", "Bundesordnung", "Deutschlandvertrag", "Bürgerbuch"], 0, "Almanya'nın anayasası Grundgesetz'dir."],
    ["Was ist Deutschland?", ["Ein demokratischer und sozialer Bundesstaat", "Eine Monarchie", "Eine Diktatur", "Ein Stadtstaat"], 0, "Almanya demokratik ve sosyal federal devlettir."],
    ["Wer wählt den Deutschen Bundestag?", ["Die wahlberechtigten Bürgerinnen und Bürger", "Nur die Bundesregierung", "Nur die Gerichte", "Die Polizei"], 0, "Bundestag'ı seçme hakkı olan halk seçer."],
    ["Was bedeutet Meinungsfreiheit?", ["Man darf seine Meinung frei sagen, solange man die Rechte anderer achtet.", "Man darf andere beleidigen.", "Nur Politiker dürfen sprechen.", "Zeitungen sind verboten."], 0, "Düşünce özgürlüğü başkalarının haklarına saygıyla kullanılır."],
    ["Welche Staatsform hat Deutschland?", ["Republik", "Königreich", "Sultanat", "Militärstaat"], 0, "Almanya bir cumhuriyettir."],
    ["Wann ist der Tag der Deutschen Einheit?", ["3. Oktober", "1. Mai", "24. Dezember", "9. November"], 0, "Alman Birliği Günü 3 Ekim'dir."],
    ["Was schützt die Menschenwürde?", ["Artikel 1 des Grundgesetzes", "Die Hausordnung", "Der Mietvertrag", "Der Fahrplan"], 0, "İnsan onurunu Temel Yasa'nın 1. maddesi korur."],
    ["Was bedeutet Religionsfreiheit?", ["Jeder darf seine Religion wählen oder keine Religion haben.", "Alle müssen dieselbe Religion haben.", "Religion ist verboten.", "Nur Feiertage sind erlaubt."], 0, "Din özgürlüğü din seçme veya dinsiz olma hakkıdır."],
    ["Was macht der Bundesrat?", ["Er wirkt bei Gesetzen mit und vertritt die Länder.", "Er verkauft Wohnungen.", "Er leitet Schulen direkt.", "Er ist ein Sportverein."], 0, "Bundesrat eyaletleri temsil eder ve yasalarda rol oynar."],
    ["Wer ist für die Einhaltung der Gesetze zuständig?", ["Gerichte und Behörden", "Nur Nachbarn", "Nur Vereine", "Nur private Firmen"], 0, "Mahkemeler ve kurumlar hukuku uygular."],
    ["Was bedeutet Gleichberechtigung?", ["Frauen und Männer haben gleiche Rechte.", "Nur Männer dürfen wählen.", "Nur Frauen dürfen arbeiten.", "Kinder entscheiden Gesetze."], 0, "Kadınlar ve erkekler eşit haklara sahiptir."],
    ["Ab welchem Alter darf man bei Bundestagswahlen wählen?", ["18 Jahre", "12 Jahre", "16 Jahre", "21 Jahre"], 0, "Bundestag seçimlerinde oy yaşı 18'dir."],
    ["Was ist eine Aufgabe der Polizei?", ["Gefahren abwehren und Straftaten verfolgen", "Gesetze beschließen", "Steuern erfinden", "Gerichte ersetzen"], 0, "Polis güvenliği sağlar ve suçları takip eder."],
    ["Welche Pflicht haben Eltern in Deutschland?", ["Sie müssen für ihre Kinder sorgen.", "Sie müssen Kinder nie anmelden.", "Sie dürfen Schulpflicht ignorieren.", "Sie müssen kein Essen geben."], 0, "Ebeveynler çocuklarına bakmakla yükümlüdür."],
    ["Was ist die Schulpflicht?", ["Kinder müssen eine Schule besuchen.", "Nur Erwachsene müssen lernen.", "Schule ist immer freiwillig.", "Schule gibt es nur online."], 0, "Çocuklar okula gitmek zorundadır."],
    ["Was ist ein Rechtsstaat?", ["Der Staat und alle Menschen müssen sich an Gesetze halten.", "Nur Bürger müssen Gesetze beachten.", "Gerichte sind unwichtig.", "Regeln gelten nur manchmal."], 0, "Hukuk devletinde herkes hukuka bağlıdır."],
    ["Was bedeutet Sozialstaat?", ["Der Staat hilft Menschen in Notlagen.", "Der Staat verbietet Hilfe.", "Nur Reiche bekommen Hilfe.", "Kranke müssen allein bleiben."], 0, "Sosyal devlet zor durumda destek verir."],
    ["Welche Institution beschließt Bundesgesetze?", ["Bundestag und Bundesrat wirken mit.", "Nur Sportvereine", "Nur Vermieter", "Nur Schulen"], 0, "Federal yasalarda Bundestag ve Bundesrat rol oynar."],
    ["Was ist eine Kommune?", ["Eine Gemeinde oder Stadt", "Ein Gerichtsurteil", "Ein Bundesland", "Ein Reisepass"], 0, "Kommune belediye veya şehirdir."],
  ];

  const topics = [
    ["Demokratie", "freie Wahlen", "Warum sind freie Wahlen wichtig?", "Damit Bürgerinnen und Bürger politisch mitbestimmen können."],
    ["Grundrechte", "Versammlungsfreiheit", "Was erlaubt die Versammlungsfreiheit?", "Menschen dürfen sich friedlich versammeln."],
    ["Rechtsstaat", "Gerichte", "Warum sind unabhängige Gerichte wichtig?", "Sie entscheiden nach Recht und Gesetz."],
    ["Sozialstaat", "Krankenversicherung", "Warum gibt es Sozialversicherungen?", "Sie helfen bei Krankheit, Arbeitslosigkeit und Alter."],
    ["Geschichte", "Nationalsozialismus", "Warum ist Erinnerung wichtig?", "Damit Demokratie und Menschenrechte geschützt werden."],
    ["Bundesländer", "Föderalismus", "Was bedeutet Föderalismus?", "Bund und Länder teilen sich Aufgaben."],
    ["Europa", "Europäische Union", "Wozu gehört Deutschland?", "Deutschland ist Mitglied der Europäischen Union."],
    ["Familie", "Kinderrechte", "Was schützt Kinder?", "Kinder haben Rechte auf Schutz, Bildung und Fürsorge."],
    ["Arbeit", "Betriebsrat", "Was vertritt ein Betriebsrat?", "Er vertritt Interessen von Beschäftigten im Betrieb."],
    ["Alltag", "Mülltrennung", "Warum trennt man Müll?", "Damit Stoffe wiederverwertet werden können."],
    ["Wahlen", "Parteien", "Was machen Parteien?", "Sie vertreten politische Ziele und stellen Kandidaten auf."],
    ["Religion", "Toleranz", "Was bedeutet Toleranz?", "Andere Überzeugungen werden respektiert."],
    ["Presse", "Pressefreiheit", "Warum ist Pressefreiheit wichtig?", "Medien dürfen unabhängig berichten."],
    ["Ehrenamt", "Vereine", "Was ist ein Ehrenamt?", "Man hilft freiwillig ohne Hauptberuf daraus zu machen."],
    ["Kommunen", "Bürgerbüro", "Was erledigt man im Bürgerbüro?", "Anmeldung, Ausweise und Bescheinigungen."],
  ];

  const questions = base.map(([question, options, answerIndex, tr], index) => ({
    id: `lid-official-like-${index + 1}`,
    question,
    options,
    answer: options[answerIndex],
    tr,
  }));

  let counter = questions.length + 1;
  while (questions.length < 300) {
    const [topic, keyword, question, answer] = topics[questions.length % topics.length];
    const wrongs = shuffle(topics.filter((item) => item[1] !== keyword)).slice(0, 3).map((item) => item[3]);
    questions.push({
      id: `lid-general-${counter}`,
      topic,
      question: `${question} (${keyword})`,
      options: shuffle([answer, ...wrongs]),
      answer,
      tr: `${topic} konusu için açıklama: ${answer}`,
    });
    counter += 1;
  }

  const stateQuestions = [
    ["Berlin", "Wie heißt das Landesparlament von Berlin?", "Abgeordnetenhaus"],
    ["Nordrhein-Westfalen", "Wie heißt die Landeshauptstadt von Nordrhein-Westfalen?", "Düsseldorf"],
    ["Bayern", "Wie heißt die Landeshauptstadt von Bayern?", "München"],
    ["Hamburg", "Was ist Hamburg?", "Ein Stadtstaat"],
    ["Hessen", "Wie heißt die Landeshauptstadt von Hessen?", "Wiesbaden"],
    ["Sachsen", "Wie heißt die Landeshauptstadt von Sachsen?", "Dresden"],
    ["Niedersachsen", "Wie heißt die Landeshauptstadt von Niedersachsen?", "Hannover"],
    ["Rheinland-Pfalz", "Wie heißt die Landeshauptstadt von Rheinland-Pfalz?", "Mainz"],
    ["Brandenburg", "Wie heißt die Landeshauptstadt von Brandenburg?", "Potsdam"],
    ["Schleswig-Holstein", "Wie heißt die Landeshauptstadt von Schleswig-Holstein?", "Kiel"],
  ];
  stateQuestions.forEach(([state, question, answer], index) => {
    questions.push({
      id: `lid-state-${index + 1}`,
      topic: state,
      question,
      options: shuffle([answer, "Berlin", "Hamburg", "Bonn"]),
      answer,
      tr: `${state} eyalet sorusu.`,
    });
  });
  return questions.slice(0, 310);
}

const lidQuestions = buildLidQuestions();

const progress = loadProgress();
const state = {
  view: location.hash.replace("#", "") || "dashboard",
  currentExercise: null,
  currentFilter: "all",
  translationOpen: false,
  orderChosen: [],
  letterIndex: 0,
  exam: null,
  examTimer: null,
  lidQuiz: null,
  lidTimer: null,
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { stats: {}, sessions: [], examResults: [], lidResults: [] };
  } catch {
    return { stats: {}, sessions: [], examResults: [], lidResults: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function normalizeView(view) {
  return views.some(([id]) => id === view) ? view : "dashboard";
}

function setView(view) {
  const nextView = normalizeView(view);
  state.view = nextView;
  if ((location.hash.replace("#", "") || "dashboard") !== nextView) {
    history.pushState(null, "", `#${nextView}`);
  }
  state.translationOpen = false;
  state.orderChosen = [];
  render();
}

function renderNav() {
  const nav = document.querySelector("#nav");
  nav.innerHTML = views.map(([id, label]) => `<button type="button" data-view="${id}" class="${id === state.view ? "active" : ""}">${label}</button>`).join("");
  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

function statsSummary() {
  const values = Object.values(progress.stats);
  const answered = values.length;
  const correct = values.filter((item) => item.lastCorrect).length;
  const wrong = values.filter((item) => item.wrongCount && !item.lastCorrect).length;
  const percent = answered ? Math.round((correct / answered) * 100) : 0;
  return { answered, correct, wrong, percent };
}

function skillStats() {
  const result = {};
  Object.entries(skillNames).forEach(([key, label]) => {
    const exercises = exerciseBank.filter((item) => item.skill === key);
    const answered = exercises.filter((item) => progress.stats[item.id]);
    const correct = answered.filter((item) => progress.stats[item.id].lastCorrect);
    result[key] = {
      label,
      total: exercises.length,
      answered: answered.length,
      correct: correct.length,
      percent: answered.length ? Math.round((correct.length / answered.length) * 100) : 0,
    };
  });
  return result;
}

function render() {
  state.view = normalizeView(state.view);
  renderNav();
  const app = document.querySelector("#app");
  const renderer = {
    dashboard: renderDashboard,
    practice: renderPractice,
    letters: renderLetters,
    reading: () => renderPractice("reading"),
    dialogues: () => renderPractice("dialogue"),
    listening: () => renderPractice("listening"),
    speaking: renderSpeaking,
    exams: renderExams,
    lid: renderLid,
    analysis: renderAnalysis,
  }[state.view];
  app.innerHTML = renderer();
  bindCurrentView();
  app.focus({ preventScroll: true });
}

function sourceNote() {
  return `<div class="source-note">Prüfungsstruktur nach BAMF/g.a.st.-Informationen. Die DTZ- und LiD-Aufgaben in dieser App sind eigenständige Übungsaufgaben. Offizielle Quellen: ${officialSources.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`).join(" · ")}</div>`;
}

function renderDashboard() {
  const summary = statsSummary();
  const total = exerciseBank.length + letterPrompts.length + speakingTasks.length + pictureTasks.length + lidQuestions.length + 30;
  return `
    <section class="grid">
      <div class="card span-8">
        <p class="eyebrow">Deutsch lernen mit Unterstützung</p>
        <h2>Für Integrationskurs, DTZ B1 und Alltag in Deutschland</h2>
        <p class="muted">Die App enthält ${exerciseBank.length}+ automatisch rotierende Sprachübungen, ${letterPrompts.length} Briefsituationen, Sprech- und Bildaufgaben, 30 prüfungsnahe DTZ-Sets und ${lidQuestions.length} Fragen im Bereich Leben in Deutschland.</p>
        <div class="actions">
          <button class="primary" data-view="practice" type="button">Weiter üben</button>
          <button class="secondary" data-view="exams" type="button">Prüfung starten</button>
          <button class="ghost" data-view="lid" type="button">LiD-Test üben</button>
        </div>
      </div>
      <div class="card span-4">
        <div class="metric"><span>Fortschritt</span><strong>${summary.percent}%</strong></div>
        <div class="progress-bar" aria-label="Fortschritt"><span style="width:${summary.percent}%"></span></div>
        <p class="muted">${summary.correct} richtig gelöst, ${summary.wrong} warten auf Wiederholung.</p>
      </div>
      <div class="card span-3"><div class="metric"><span>Aufgaben gesamt</span><strong>${total}</strong></div></div>
      <div class="card span-3"><div class="metric"><span>Übungsbank</span><strong>${exerciseBank.length}</strong></div></div>
      <div class="card span-3"><div class="metric"><span>DTZ-Sets</span><strong>30</strong></div></div>
      <div class="card span-3"><div class="metric"><span>LiD-Fragen</span><strong>${lidQuestions.length}</strong></div></div>
      <div class="card span-12">
        <h3>So rotiert die App</h3>
        <p class="muted">Richtig gelöste Aufgaben verschwinden aus der normalen Rotation. Falsch gelöste Aufgaben bleiben im Wiederholungstopf, bis sie richtig beantwortet werden. So bleibt das Training abwechslungsreich und trotzdem freundlich.</p>
        <div class="pill-row">
          ${Object.values(skillNames).map((label) => `<span class="pill">${label}</span>`).join("")}
          <span class="pill">Briefe</span><span class="pill">Aussprache</span><span class="pill">Foto beschreiben</span><span class="pill">Timer-Prüfungen</span>
        </div>
      </div>
      <div class="card span-12">${sourceNote()}</div>
    </section>
  `;
}

function bindCurrentView() {
  document.querySelectorAll("#app [data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  const binders = {
    practice: bindPractice,
    reading: bindPractice,
    dialogues: bindPractice,
    listening: bindPractice,
    letters: bindLetters,
    speaking: bindSpeaking,
    exams: bindExams,
    lid: bindLid,
    analysis: bindAnalysis,
  };
  if (binders[state.view]) binders[state.view]();
}

function selectExercise(filter = state.currentFilter) {
  state.currentFilter = filter;
  const bank = exerciseBank.filter((item) => filter === "all" || item.skill === filter);
  const wrong = bank.filter((item) => progress.stats[item.id]?.wrongCount && !progress.stats[item.id]?.lastCorrect);
  const fresh = bank.filter((item) => !progress.stats[item.id]?.lastCorrect);
  const pool = wrong.length && Math.random() < 0.6 ? wrong : fresh;
  state.currentExercise = pool.length ? choice(pool) : null;
  state.orderChosen = [];
  state.translationOpen = false;
}

function renderPractice(forcedFilter) {
  if (forcedFilter && state.currentFilter !== forcedFilter) selectExercise(forcedFilter);
  if (!state.currentExercise) selectExercise(forcedFilter || state.currentFilter);
  const filterOptions = [["all", "Alle"], ...Object.entries(skillNames).map(([key, label]) => [key, label])]
    .map(([value, label]) => `<option value="${value}" ${state.currentFilter === value ? "selected" : ""}>${label}</option>`).join("");
  return `
    <section class="grid">
      <div class="card span-4">
        <h2>${forcedFilter ? skillNames[forcedFilter] : "Übungen"}</h2>
        <p class="muted">Wählen Sie einen Bereich. Richtig gelöste Aufgaben kommen nicht wieder; falsche Antworten werden gezielt wiederholt.</p>
        ${forcedFilter ? "" : `<label>Bereich<select id="skillFilter">${filterOptions}</select></label>`}
        <div class="actions">
          <button class="primary" id="nextExercise" type="button">Neue Aufgabe</button>
          <button class="ghost" id="toggleTranslation" type="button">Türkisch</button>
        </div>
      </div>
      <div class="card span-8">
        ${state.currentExercise ? renderExercise(state.currentExercise) : renderPracticeComplete()}
      </div>
    </section>
  `;
}

function renderPracticeComplete() {
  return `
    <div class="exercise">
      <h3>Dieser Bereich ist im Moment fertig.</h3>
      <p class="muted">Alle Aufgaben wurden richtig beantwortet. Setzen Sie den Fortschritt zurück, wenn Sie komplett neu starten möchten.</p>
      <button class="danger" id="resetArea" type="button">Fortschritt in diesem Bereich zurücksetzen</button>
    </div>
  `;
}

function renderExercise(exercise) {
  const translation = state.translationOpen ? `<div class="feedback">${escapeHtml(exercise.tr || "Türkische Hilfe ist für diese Aufgabe nicht hinterlegt.")}</div>` : "";
  const header = `<div class="pill-row"><span class="pill">${skillNames[exercise.skill]}</span><span class="pill">${exercise.type}</span></div>${translation}`;
  if (exercise.type === "reading") {
    return `
      <div class="exercise">
        ${header}
        <h3>${escapeHtml(exercise.title)}</h3>
        <p class="prompt">${escapeHtml(exercise.text)}</p>
        <h3>${escapeHtml(exercise.prompt)}</h3>
        ${renderOptions(exercise)}
      </div>
    `;
  }
  if (exercise.type === "listen") {
    return `
      <div class="exercise">
        ${header}
        <h3>${escapeHtml(exercise.title)}</h3>
        <p class="muted">Hören Sie den Text und beantworten Sie die Frage.</p>
        <button class="secondary" id="playAudio" type="button">Hörprobe abspielen</button>
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        ${renderOptions(exercise)}
      </div>
    `;
  }
  if (exercise.type === "cloze") {
    return `
      <div class="exercise">
        ${header}
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        <div class="input-row">
          <input id="clozeInput" autocomplete="off" placeholder="Antwort schreiben">
          <button class="primary" id="checkCloze" type="button">Prüfen</button>
        </div>
        <div id="exerciseFeedback"></div>
      </div>
    `;
  }
  if (exercise.type === "order") {
    const available = exercise.pieces.filter((piece) => !state.orderChosen.includes(piece));
    return `
      <div class="exercise">
        ${header}
        <p class="prompt">${escapeHtml(exercise.prompt)}</p>
        <h3>Ihre Reihenfolge</h3>
        <div class="drop-row" id="chosenTokens">
          ${state.orderChosen.map((piece, index) => `<button class="token" data-remove-token="${index}" type="button">${escapeHtml(piece)}</button>`).join("")}
        </div>
        <h3>Wörter/Sätze</h3>
        <div class="token-row">
          ${available.map((piece) => `<button class="token" data-token="${escapeHtml(piece)}" type="button">${escapeHtml(piece)}</button>`).join("")}
        </div>
        <div class="actions">
          <button class="primary" id="checkOrder" type="button">Prüfen</button>
          <button class="ghost" id="clearOrder" type="button">Leeren</button>
        </div>
        <div id="exerciseFeedback"></div>
      </div>
    `;
  }
  return `
    <div class="exercise">
      ${header}
      <p class="prompt">${escapeHtml(exercise.prompt)}</p>
      ${renderOptions(exercise)}
    </div>
  `;
}

function renderOptions(exercise) {
  return `<div class="option-list">${exercise.options.map((option) => `<button class="option" data-answer="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`).join("")}</div><div id="exerciseFeedback"></div>`;
}

function bindPractice() {
  const filter = document.querySelector("#skillFilter");
  if (filter) {
    filter.addEventListener("change", () => {
      selectExercise(filter.value);
      render();
    });
  }
  document.querySelector("#nextExercise")?.addEventListener("click", () => {
    selectExercise(state.currentFilter);
    render();
  });
  document.querySelector("#toggleTranslation")?.addEventListener("click", () => {
    state.translationOpen = !state.translationOpen;
    render();
  });
  document.querySelector("#playAudio")?.addEventListener("click", () => speak(state.currentExercise.audio));
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => gradeExercise(button.dataset.answer));
  });
  document.querySelector("#checkCloze")?.addEventListener("click", () => {
    gradeExercise(document.querySelector("#clozeInput").value);
  });
  document.querySelector("#clozeInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") gradeExercise(event.currentTarget.value);
  });
  document.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderChosen.push(button.dataset.token);
      render();
    });
  });
  document.querySelectorAll("[data-remove-token]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderChosen.splice(Number(button.dataset.removeToken), 1);
      render();
    });
  });
  document.querySelector("#clearOrder")?.addEventListener("click", () => {
    state.orderChosen = [];
    render();
  });
  document.querySelector("#checkOrder")?.addEventListener("click", () => gradeExercise(state.orderChosen.join(" ")));
  document.querySelector("#resetArea")?.addEventListener("click", () => {
    exerciseBank.filter((item) => state.currentFilter === "all" || item.skill === state.currentFilter).forEach((item) => delete progress.stats[item.id]);
    saveProgress();
    selectExercise(state.currentFilter);
    render();
  });
}

function gradeExercise(answer) {
  const exercise = state.currentExercise;
  if (!exercise) return;
  const expected = exercise.answer;
  const correct = normalize(answer) === normalize(expected);
  const options = document.querySelectorAll("[data-answer]");
  options.forEach((button) => {
    if (normalize(button.dataset.answer) === normalize(expected)) button.classList.add("correct");
    if (normalize(button.dataset.answer) === normalize(answer) && !correct) button.classList.add("wrong");
    button.disabled = true;
  });
  recordExercise(exercise, correct);
  const feedback = document.querySelector("#exerciseFeedback");
  if (feedback) {
    feedback.innerHTML = `<div class="feedback ${correct ? "ok" : "bad"}"><strong>${correct ? "Richtig." : "Noch nicht."}</strong><br>Richtige Antwort: ${escapeHtml(expected)}<br>${escapeHtml(exercise.explain || "")}</div>`;
  }
}

function recordExercise(exercise, correct) {
  const item = progress.stats[exercise.id] || {
    skill: exercise.skill,
    correctCount: 0,
    wrongCount: 0,
    lastCorrect: false,
  };
  if (correct) item.correctCount += 1;
  else item.wrongCount += 1;
  item.lastCorrect = correct;
  item.lastAnsweredAt = new Date().toISOString();
  progress.stats[exercise.id] = item;
  progress.sessions.push({ id: exercise.id, skill: exercise.skill, correct, at: item.lastAnsweredAt });
  progress.sessions = progress.sessions.slice(-300);
  saveProgress();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showModal("<h3>Hören nicht verfügbar</h3><p>Dieser Browser unterstützt keine Sprachausgabe.</p>");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakQueue(texts) {
  if (!("speechSynthesis" in window)) {
    showModal("<h3>Hören nicht verfügbar</h3><p>Dieser Browser unterstützt keine Sprachausgabe.</p>");
    return;
  }
  window.speechSynthesis.cancel();
  let index = 0;
  const next = () => {
    if (index >= texts.length) return;
    const utterance = new SpeechSynthesisUtterance(texts[index]);
    utterance.lang = "de-DE";
    utterance.rate = 0.92;
    utterance.onend = () => {
      index += 1;
      setTimeout(next, 650);
    };
    window.speechSynthesis.speak(utterance);
  };
  next();
}

function renderLetters() {
  const [title, prompt, tr] = letterPrompts[state.letterIndex % letterPrompts.length];
  return `
    <section class="grid">
      <div class="card span-5">
        <h2>Briefe schreiben</h2>
        <p class="muted">Üben Sie formelle und halbformelle Schreiben: Jobcenter, Gemeinde, Vermieter, Arbeitgeber, Beruf, Schule, Bank und Alltag.</p>
        <div class="pill-row"><span class="pill">${state.letterIndex + 1} / ${letterPrompts.length}</span><span class="pill">B1-Brief</span></div>
        <div class="actions">
          <button class="primary" id="nextLetter" type="button">Neue Situation</button>
          <button class="ghost" id="letterHelp" type="button">Türkisch</button>
        </div>
      </div>
      <div class="card span-7">
        <h3>${escapeHtml(title)}</h3>
        <p class="prompt">${escapeHtml(prompt)}</p>
        <textarea id="letterText" placeholder="Schreiben Sie hier Ihren Brief. Denken Sie an Anrede, Grund, vier Inhaltspunkte und Gruß."></textarea>
        <div class="actions">
          <button class="primary" id="analyzeLetter" type="button">Brief prüfen</button>
          <button class="secondary" id="sampleLetter" type="button">Muster sehen</button>
        </div>
        <div id="letterResult"></div>
      </div>
    </section>
  `;
}

function bindLetters() {
  document.querySelector("#nextLetter")?.addEventListener("click", () => {
    state.letterIndex = (state.letterIndex + 1) % letterPrompts.length;
    render();
  });
  document.querySelector("#letterHelp")?.addEventListener("click", () => {
    const [, , tr] = letterPrompts[state.letterIndex % letterPrompts.length];
    showModal(`<h3>Türkische Hilfe</h3><p>${escapeHtml(tr)}</p>`);
  });
  document.querySelector("#sampleLetter")?.addEventListener("click", () => {
    const [title] = letterPrompts[state.letterIndex % letterPrompts.length];
    showModal(`<h3>Musterbrief: ${escapeHtml(title)}</h3><p>Sehr geehrte Damen und Herren,</p><p>ich schreibe Ihnen, weil ich zu dieser Situation eine Information geben und um Unterstützung bitten möchte. Der Grund ist wichtig, weil ich die Angelegenheit schnell und korrekt klären möchte.</p><p>Bitte teilen Sie mir mit, welche Unterlagen Sie noch benötigen. Ich kann die fehlenden Dokumente bis Freitag schicken. Außerdem bitte ich um eine kurze Bestätigung per E-Mail.</p><p>Vielen Dank für Ihre Hilfe.</p><p>Mit freundlichen Grüßen<br>Ihr Name</p>`);
  });
  document.querySelector("#analyzeLetter")?.addEventListener("click", () => {
    const text = document.querySelector("#letterText").value;
    const result = analyzeLetterText(text);
    document.querySelector("#letterResult").innerHTML = result;
  });
}

function analyzeLetterText(text) {
  const words = normalize(text).split(" ").filter(Boolean);
  const lower = normalize(text);
  const checks = [
    ["Anrede", /sehr geehrte|hallo|guten tag/i.test(text), "Beginnen Sie mit „Sehr geehrte Damen und Herren,“ oder einer passenden Anrede."],
    ["Gruß", /mit freundlichen grüßen|freundliche grüße|viele grüße/i.test(lower), "Schließen Sie mit einem höflichen Gruß."],
    ["Länge", words.length >= 70, "Für B1 sind oft etwa 80-120 Wörter gut."],
    ["Höflichkeit", /bitte|vielen dank|könnten|möchte|würde/i.test(lower), "Nutzen Sie höfliche Formulierungen."],
    ["Grund", /weil|da|grund|problem|möchte|brauche/i.test(lower), "Nennen Sie klar den Grund des Briefes."],
    ["Termin/Frist", /termin|freitag|montag|datum|uhr|bis|am /i.test(lower), "Nennen Sie Termine oder Fristen möglichst genau."],
  ];
  const passed = checks.filter(([, ok]) => ok).length;
  return `
    <div class="feedback ${passed >= 5 ? "ok" : "bad"}">
      <strong>${passed}/6 Kriterien erfüllt.</strong>
      <ul>${checks.map(([name, ok, tip]) => `<li>${ok ? "✓" : "•"} ${name}: ${ok ? "gut" : tip}</li>`).join("")}</ul>
      <p><strong>Sprachtipp:</strong> Schreiben Sie kurze Sätze. Beispiel: „Ich bitte Sie um einen neuen Termin.“ / „Die Unterlage schicke ich bis Freitag.“</p>
    </div>
  `;
}

function renderSpeaking() {
  return `
    <section class="grid">
      <div class="card span-12">
        <h2>Sprechen, Vorlesen und Fotos beschreiben</h2>
        <p class="muted">Die Aufnahme nutzt die Spracherkennung Ihres Browsers. Auf Android funktioniert das am besten in Chrome. Wenn Spracherkennung nicht verfügbar ist, können Sie den gesprochenen Text eintippen.</p>
      </div>
      <div class="card span-6">
        <h3>Vorstellungsrunde und Vorlesen</h3>
        <div class="list">
          ${speakingTasks.map((task, index) => `
            <div class="list-item">
              <h3>${escapeHtml(task.title)}</h3>
              <p>${escapeHtml(task.prompt)}</p>
              <p class="muted">${escapeHtml(task.tr)}</p>
              <textarea id="speechManual-${index}" placeholder="Aufnahme oder Text erscheint hier"></textarea>
              <div class="actions">
                <button class="primary" data-speech="${index}" type="button">Aufnehmen</button>
                <button class="secondary" data-analyze-speech="${index}" type="button">Analysieren</button>
              </div>
              <div id="speechResult-${index}"></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="card span-6">
        <h3>Fotoaufgaben</h3>
        <div class="photo-grid">
          ${pictureTasks.map((task, index) => `
            <article class="photo-card">
              <img src="${task.image}" alt="${escapeHtml(task.fallback)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'prompt',textContent:'${escapeHtml(task.fallback)}'}))">
              <div class="body">
                <h3>${escapeHtml(task.title)}</h3>
                <p class="muted">${escapeHtml(task.tr)}</p>
                <p>Beschreiben Sie: Wer ist zu sehen? Was passiert? Wo ist die Situation? Welche Erfahrung haben Sie selbst damit?</p>
                <textarea id="pictureManual-${index}" placeholder="Ihre Beschreibung"></textarea>
                <div class="actions">
                  <button class="primary" data-picture-speech="${index}" type="button">Aufnehmen</button>
                  <button class="secondary" data-analyze-picture="${index}" type="button">Analysieren</button>
                </div>
                <div id="pictureResult-${index}"></div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function bindSpeaking() {
  document.querySelectorAll("[data-speech]").forEach((button) => {
    button.addEventListener("click", () => startRecognition(`speechManual-${button.dataset.speech}`));
  });
  document.querySelectorAll("[data-picture-speech]").forEach((button) => {
    button.addEventListener("click", () => startRecognition(`pictureManual-${button.dataset.pictureSpeech}`));
  });
  document.querySelectorAll("[data-analyze-speech]").forEach((button) => {
    const index = Number(button.dataset.analyzeSpeech);
    const task = speakingTasks[index];
    const text = document.querySelector(`#speechManual-${index}`).value;
    document.querySelector(`#speechResult-${index}`).innerHTML = analyzeSpeechText(text, task.expectedKeywords, task.expectedText);
  });
  document.querySelectorAll("[data-analyze-picture]").forEach((button) => {
    const index = Number(button.dataset.analyzePicture);
    const task = pictureTasks[index];
    const text = document.querySelector(`#pictureManual-${index}`).value;
    document.querySelector(`#pictureResult-${index}`).innerHTML = analyzeSpeechText(text, task.expectedKeywords);
  });
}

function startRecognition(targetId) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const target = document.querySelector(`#${targetId}`);
  if (!Recognition) {
    showModal("<h3>Spracherkennung nicht verfügbar</h3><p>Bitte nutzen Sie Chrome auf Android oder tippen Sie den gesprochenen Text ein.</p>");
    return;
  }
  const recognition = new Recognition();
  recognition.lang = "de-DE";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    target.value = event.results[0][0].transcript;
  };
  recognition.onerror = () => {
    showModal("<h3>Aufnahme nicht erkannt</h3><p>Bitte sprechen Sie langsam und deutlich oder versuchen Sie es noch einmal.</p>");
  };
  recognition.start();
}

function analyzeSpeechText(text, keywords = [], expectedText = "") {
  const words = normalize(text).split(" ").filter(Boolean);
  const lower = normalize(text);
  const hits = keywords.filter((word) => lower.includes(normalize(word)));
  const lengthOk = words.length >= 18 || (expectedText && words.length >= 8);
  const connectors = ["weil", "dass", "wenn", "deshalb", "danach", "zuerst"].filter((word) => lower.includes(word));
  const score = expectedText ? tokenScore(text, expectedText) : Math.round(((hits.length / Math.max(1, keywords.length)) * 70) + (lengthOk ? 20 : 0) + Math.min(10, connectors.length * 5));
  const tips = [];
  if (!lengthOk) tips.push("Sprechen Sie in mehreren vollständigen Sätzen.");
  if (hits.length < Math.ceil(keywords.length / 2)) tips.push(`Nutzen Sie wichtige Wörter: ${keywords.join(", ")}.`);
  if (!connectors.length) tips.push("Verbinden Sie Sätze mit „weil“, „dann“, „danach“ oder „deshalb“.");
  if (!/\b(ich|er|sie|wir|man|die|der|das)\b/i.test(lower)) tips.push("Achten Sie auf ein klares Subjekt im Satz.");
  return `
    <div class="feedback ${score >= 70 ? "ok" : "bad"}">
      <strong>Analyse: ${Math.min(100, score)}%</strong>
      <p>Erkannte Schlüsselwörter: ${hits.length ? hits.join(", ") : "noch keine"}</p>
      <p>${tips.length ? tips.join(" ") : "Sehr gut. Arbeiten Sie jetzt an flüssiger Aussprache und natürlicher Betonung."}</p>
    </div>
  `;
}

function uniqueOptions(options) {
  return [...new Set(options.filter((option) => String(option ?? "").trim()))];
}

function examOrderOptions(item) {
  const answer = item.answer || (item.pieces || []).join(" ");
  const words = answer.split(" ").filter(Boolean);
  if (words.length < 3) return [answer];
  const variants = [
    answer,
    [...words.slice(1), words[0]].join(" "),
    [words[0], ...words.slice(2), words[1]].join(" "),
    [...words].reverse().join(" "),
  ];
  return uniqueOptions(variants).slice(0, 4);
}

function normalizeExamItem(item) {
  const answer = item.answer || "";
  let options = Array.isArray(item.options) ? item.options : [];
  if (!options.length && item.type === "order") {
    options = examOrderOptions(item);
  }
  if (!options.length && answer) {
    options = [answer, "richtig", "falsch"];
  }
  return {
    ...item,
    answer,
    options: shuffle(uniqueOptions([answer, ...options])).slice(0, 4),
  };
}

function buildExam(examNumber) {
  const listening = shuffle(exerciseBank.filter((item) => item.skill === "listening")).slice(0, 20).map(normalizeExamItem);
  const reading = shuffle(exerciseBank.filter((item) => ["reading", "sentence", "cases", "verbs"].includes(item.skill))).slice(0, 25).map(normalizeExamItem);
  const writing = letterPrompts[(examNumber - 1) % letterPrompts.length];
  const speaking = [speakingTasks[0], choice(pictureTasks, examNumber / 30), { title: "Gemeinsam planen", prompt: "Planen Sie mit einer anderen Person eine kleine Feier im Kurs: Termin, Ort, Essen, Aufgaben.", tr: "Kurs için küçük bir kutlamayı planlayın." }];
  return { number: examNumber, listening, reading, writing, speaking, startedAt: Date.now(), duration: 100 * 60 };
}

function renderExams() {
  if (!state.exam) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>30 DTZ-Prüfungen</h2>
          <p class="muted">Jedes Set folgt der DTZ-Struktur: Hören 20 Aufgaben, Lesen 25 Aufgaben, Schreiben mit Brief/E-Mail und Sprechen mit Vorstellung, Bild/Situation und gemeinsamer Planung.</p>
          <label>Prüfung auswählen<select id="examNumber">${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">Prüfung ${i + 1}</option>`).join("")}</select></label>
          <div class="actions">
            <button class="primary" id="startExam" type="button">Prüfung starten</button>
            <button class="secondary" id="startRandomExam" type="button">Zufällige Prüfung starten</button>
          </div>
          <p class="muted">Wenn der Button einmal nicht reagiert, laden Sie die Seite neu. Die Auswahl bleibt nicht gespeichert, damit jede Prüfung frisch startet.</p>
        </div>
        <div class="card span-5">
          <h3>Bewertung</h3>
          <p class="muted">Hören und Lesen werden automatisch ausgewertet. Schreiben und Sprechen erhalten eine Trainingsanalyse, weil echte DTZ-Bewertung geschulte Bewertende braucht.</p>
          <ul>
            <li>Hören + Lesen: 45 Punkte, B1 ab 33 Punkten.</li>
            <li>Schreiben: Brief mit vier Inhaltspunkten.</li>
            <li>Sprechen: Vorstellung, Foto/Situation, Planung.</li>
          </ul>
        </div>
        <div class="card span-12">${sourceNote()}</div>
      </section>
    `;
  }
  const exam = state.exam;
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>DTZ-Prüfung ${exam.number}</h2><span class="timer" id="examTimer">${formatTime(remainingExamSeconds())}</span></div>
        <p class="muted">Bearbeiten Sie alle Aufgaben. Die falschen und richtigen Antworten werden nach der Abgabe angezeigt.</p>
        <div class="actions">
          <button class="secondary" id="playAllListening" type="button">Alle Hördialoge nacheinander abspielen</button>
          <button class="ghost" id="stopExamAudio" type="button">Audio stoppen</button>
          <button class="danger" id="cancelExam" type="button">Prüfung verlassen</button>
        </div>
      </div>
      <form id="examForm" class="card span-12">
        <h3>Teil 1: Hören</h3>
        ${exam.listening.map((item, index) => renderExamQuestion(item, index, "hören")).join("")}
        <h3>Teil 2: Lesen</h3>
        ${exam.reading.map((item, index) => renderExamQuestion(item, index + exam.listening.length, "lesen")).join("")}
        <h3>Teil 3: Schreiben</h3>
        <p class="prompt">${escapeHtml(exam.writing[1])}</p>
        <textarea name="writing" placeholder="Schreiben Sie Ihren Brief hier."></textarea>
        <h3>Teil 4: Sprechen</h3>
        ${exam.speaking.map((task) => `<div class="list-item"><strong>${escapeHtml(task.title)}</strong><p>${escapeHtml(task.prompt || task.fallback)}</p></div>`).join("")}
        <div class="actions">
          <button class="primary" type="submit">Prüfung abgeben</button>
        </div>
      </form>
    </section>
  `;
}

function renderExamQuestion(item, index, section) {
  const question = item.type === "reading" ? `${item.title}: ${item.prompt}` : item.prompt;
  const text = item.type === "reading" ? `<p class="muted">${escapeHtml(item.text)}</p>` : "";
  const audioNumber = index + 1;
  const audio = item.type === "listen" ? `
    <div class="audio-card">
      <div>
        <strong>Hördialog ${audioNumber}</strong>
        <span class="pill">einzeln abspielbar</span>
      </div>
      <p class="muted">Hören Sie diesen Dialog separat und beantworten Sie danach die Frage.</p>
      <div class="actions">
        <button class="secondary" type="button" data-play="${escapeHtml(item.audio)}">Hördialog ${audioNumber} abspielen</button>
        <button class="ghost" type="button" data-stop-audio="true">Audio stoppen</button>
      </div>
    </div>
  ` : "";
  return `
    <div class="exam-question">
      <p><strong>${index + 1}. ${escapeHtml(question)}</strong> <span class="pill">${section}</span></p>
      ${text}${audio}
      <div class="option-list">
        ${item.options.map((option) => `<label class="option"><input type="radio" name="q${index}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}
      </div>
    </div>
  `;
}

function bindExams() {
  const startSelectedExam = () => {
    const selected = Number(document.querySelector("#examNumber")?.value || 1);
    state.exam = buildExam(selected);
    startExamTimer();
    render();
  };
  document.querySelector("#startExam")?.addEventListener("click", startSelectedExam);
  document.querySelector("#startRandomExam")?.addEventListener("click", () => {
    state.exam = buildExam(Math.floor(Math.random() * 30) + 1);
    startExamTimer();
    render();
  });
  document.querySelector("#cancelExam")?.addEventListener("click", () => {
    clearInterval(state.examTimer);
    stopSpeech();
    state.exam = null;
    render();
  });
  document.querySelectorAll("[data-play]").forEach((button) => {
    button.addEventListener("click", () => {
      stopSpeech();
      speak(button.dataset.play);
    });
  });
  document.querySelectorAll("[data-stop-audio]").forEach((button) => {
    button.addEventListener("click", stopSpeech);
  });
  document.querySelector("#playAllListening")?.addEventListener("click", async () => {
    speakQueue(state.exam.listening.map((item) => item.audio));
  });
  document.querySelector("#stopExamAudio")?.addEventListener("click", stopSpeech);
  document.querySelector("#examForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    gradeExam(new FormData(event.currentTarget));
  });
}

function startExamTimer() {
  clearInterval(state.examTimer);
  state.examTimer = setInterval(() => {
    const timer = document.querySelector("#examTimer");
    if (timer) timer.textContent = formatTime(remainingExamSeconds());
    if (remainingExamSeconds() <= 0) {
      clearInterval(state.examTimer);
      document.querySelector("#examForm")?.requestSubmit();
    }
  }, 1000);
}

function remainingExamSeconds() {
  if (!state.exam) return 0;
  return Math.max(0, state.exam.duration - Math.floor((Date.now() - state.exam.startedAt) / 1000));
}

function gradeExam(formData) {
  const questions = [...state.exam.listening, ...state.exam.reading];
  let points = 0;
  const rows = questions.map((item, index) => {
    const answer = formData.get(`q${index}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${index + 1}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const writingHtml = analyzeLetterText(formData.get("writing") || "");
  const result = { exam: state.exam.number, points, at: new Date().toISOString() };
  progress.examResults.push(result);
  saveProgress();
  clearInterval(state.examTimer);
  state.exam = null;
  showModal(`
    <h3>Prüfung ausgewertet</h3>
    <p><strong>Hören + Lesen: ${points}/45 Punkte.</strong> ${points >= 33 ? "B1-Bereich erreicht." : "Weiter üben; Ziel für B1 sind 33 Punkte."}</p>
    ${writingHtml}
    <table class="table"><thead><tr><th>Nr.</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
  `);
  render();
}

function renderLid() {
  if (!state.lidQuiz) {
    return `
      <section class="grid">
        <div class="card span-7">
          <h2>Leben in Deutschland</h2>
          <p class="muted">Trainieren Sie mit ${lidQuestions.length} LiD-Übungsfragen. Für den echten Test sind 33 Fragen in 60 Minuten vorgesehen; bestanden ist der Orientierungskurstest ab 15 richtigen Antworten, für den Einbürgerungsnachweis ab 17.</p>
          <div class="split">
            <label>Anzahl Fragen<select id="lidCount"><option value="33">33 Fragen</option><option value="80">80 Fragen</option><option value="20">20 Fragen kurz</option></select></label>
            <label>Zeit<select id="lidMinutes"><option value="60">60 Minuten</option><option value="30">30 Minuten</option><option value="15">15 Minuten</option></select></label>
          </div>
          <div class="actions">
            <button class="primary" id="startLid" type="button">LiD-Test starten</button>
            <a class="ghost" href="https://oet.bamf.de/ords/oetut/f?p=514:1:0" target="_blank" rel="noreferrer">Offiziellen BAMF-Katalog öffnen</a>
          </div>
        </div>
        <div class="card span-5">
          <h3>Hinweis zum amtlichen Katalog</h3>
          <p class="muted">Das BAMF stellt 310 zugelassene Prüfungsfragen bereit. Diese App ist dafür vorbereitet, einen amtlichen JSON/CSV-Fragenblock einzuspielen. Der enthaltene Katalog ist ein prüfungsnaher Trainingskatalog mit 310 Fragen.</p>
        </div>
      </section>
    `;
  }
  return `
    <section class="grid">
      <div class="card span-12">
        <div class="metric"><h2>LiD-Test</h2><span class="timer" id="lidTimer">${formatTime(remainingLidSeconds())}</span></div>
        <p class="muted">${state.lidQuiz.questions.length} Fragen. Am Ende sehen Sie richtige und falsche Antworten.</p>
      </div>
      <form id="lidForm" class="card span-12">
        ${state.lidQuiz.questions.map((item, index) => `
          <div class="exam-question">
            <p><strong>${index + 1}. ${escapeHtml(item.question)}</strong></p>
            <button class="ghost" data-lid-tr="${index}" type="button">Türkisch</button>
            <div class="option-list">
              ${item.options.map((option) => `<label class="option"><input type="radio" name="lid${index}" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}
            </div>
          </div>
        `).join("")}
        <div class="actions"><button class="primary" type="submit">Test auswerten</button><button class="danger" id="cancelLid" type="button">Abbrechen</button></div>
      </form>
    </section>
  `;
}

function bindLid() {
  document.querySelector("#startLid")?.addEventListener("click", () => {
    const count = Number(document.querySelector("#lidCount").value);
    const minutes = Number(document.querySelector("#lidMinutes").value);
    state.lidQuiz = {
      questions: shuffle(lidQuestions).slice(0, Math.min(count, lidQuestions.length)),
      startedAt: Date.now(),
      duration: minutes * 60,
    };
    startLidTimer();
    render();
  });
  document.querySelector("#cancelLid")?.addEventListener("click", () => {
    clearInterval(state.lidTimer);
    state.lidQuiz = null;
    render();
  });
  document.querySelectorAll("[data-lid-tr]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const item = state.lidQuiz.questions[Number(button.dataset.lidTr)];
      showModal(`<h3>Türkische Hilfe</h3><p>${escapeHtml(item.tr)}</p>`);
    });
  });
  document.querySelector("#lidForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    gradeLid(new FormData(event.currentTarget));
  });
}

function startLidTimer() {
  clearInterval(state.lidTimer);
  state.lidTimer = setInterval(() => {
    const timer = document.querySelector("#lidTimer");
    if (timer) timer.textContent = formatTime(remainingLidSeconds());
    if (remainingLidSeconds() <= 0) {
      clearInterval(state.lidTimer);
      document.querySelector("#lidForm")?.requestSubmit();
    }
  }, 1000);
}

function remainingLidSeconds() {
  if (!state.lidQuiz) return 0;
  return Math.max(0, state.lidQuiz.duration - Math.floor((Date.now() - state.lidQuiz.startedAt) / 1000));
}

function gradeLid(formData) {
  let points = 0;
  const rows = state.lidQuiz.questions.map((item, index) => {
    const answer = formData.get(`lid${index}`) || "";
    const correct = normalize(answer) === normalize(item.answer);
    if (correct) points += 1;
    return `<tr><td>${index + 1}</td><td>${correct ? "richtig" : "falsch"}</td><td>${escapeHtml(answer || "-")}</td><td>${escapeHtml(item.answer)}</td></tr>`;
  });
  const count = state.lidQuiz.questions.length;
  const passOrientation = count === 33 ? points >= 15 : points / count >= 15 / 33;
  const passCitizenship = count === 33 ? points >= 17 : points / count >= 17 / 33;
  progress.lidResults.push({ points, count, at: new Date().toISOString() });
  saveProgress();
  clearInterval(state.lidTimer);
  state.lidQuiz = null;
  showModal(`
    <h3>LiD-Test ausgewertet</h3>
    <p><strong>${points}/${count} richtig.</strong></p>
    <p>${passOrientation ? "Orientierungskurs-Ziel erreicht." : "Für den Orientierungskurs weiter üben."} ${passCitizenship ? "Einbürgerungsnachweis-Ziel erreicht." : "Für den Einbürgerungsnachweis weiter üben."}</p>
    <table class="table"><thead><tr><th>Nr.</th><th>Status</th><th>Ihre Antwort</th><th>Richtig</th></tr></thead><tbody>${rows.join("")}</tbody></table>
  `);
  render();
}

function renderAnalysis() {
  const skills = Object.values(skillStats()).sort((a, b) => a.percent - b.percent);
  const weakest = skills.slice(0, 3);
  const strongest = skills.slice(-3).reverse();
  const summary = statsSummary();
  return `
    <section class="grid">
      <div class="card span-12">
        <h2>Analyse des Deutschstands</h2>
        <p class="muted">Die Analyse basiert auf gelösten Aufgaben, Prüfungen und LiD-Tests auf diesem Gerät.</p>
      </div>
      <div class="card span-4"><div class="metric"><span>Gesamtquote</span><strong>${summary.percent}%</strong></div></div>
      <div class="card span-4"><div class="metric"><span>Richtig gelöst</span><strong>${summary.correct}</strong></div></div>
      <div class="card span-4"><div class="metric"><span>Wiederholen</span><strong>${summary.wrong}</strong></div></div>
      <div class="card span-6">
        <h3>Stärken</h3>
        <div class="list">${strongest.map(renderSkillRow).join("")}</div>
      </div>
      <div class="card span-6">
        <h3>Schwächen</h3>
        <div class="list">${weakest.map(renderSkillRow).join("")}</div>
      </div>
      <div class="card span-12">
        <h3>Empfehlung</h3>
        <p>${recommendation(weakest[0])}</p>
        <div class="actions">
          <button class="primary" data-view="practice" type="button">Schwäche üben</button>
          <button class="secondary" data-view="letters" type="button">Brief trainieren</button>
          <button class="ghost" id="resetAll" type="button">Fortschritt zurücksetzen</button>
        </div>
      </div>
      <div class="card span-12">
        <h3>Letzte Prüfungen</h3>
        <p class="muted">DTZ: ${progress.examResults.slice(-5).map((r) => `Prüfung ${r.exam}: ${r.points}/45`).join(" · ") || "noch keine"}<br>LiD: ${progress.lidResults.slice(-5).map((r) => `${r.points}/${r.count}`).join(" · ") || "noch keine"}</p>
      </div>
    </section>
  `;
}

function renderSkillRow(skill) {
  return `
    <div class="list-item">
      <strong>${escapeHtml(skill.label)}</strong>
      <div class="progress-bar"><span style="width:${skill.percent}%"></span></div>
      <p class="muted">${skill.correct}/${skill.answered || 0} richtig beantwortet, ${skill.total} Aufgaben im Bereich.</p>
    </div>
  `;
}

function recommendation(weakest) {
  if (!weakest || !weakest.answered) return "Starten Sie mit Wortschatz, Artikeln und kurzen Sätzen. Danach Briefe und Hörverstehen trainieren.";
  const text = {
    vocabulary: "Üben Sie jeden Tag 15 Minuten Wortschatz mit ganzen Beispielsätzen.",
    verbs: "Trainieren Sie Präsens, Perfekt, Präteritum und Futur mit kurzen Alltagssätzen.",
    cases: "Wiederholen Sie Artikel, Akkusativ und Dativ. Sprechen Sie die Beispielsätze laut.",
    sentence: "Achten Sie auf Verbposition: Aussage Satz 2, Nebensatz am Ende.",
    reading: "Lesen Sie kurze Briefe und markieren Sie Datum, Ort, Frist und Aufgabe.",
    dialogue: "Sprechen Sie Dialoge laut nach und lernen Sie typische höfliche Sätze.",
    listening: "Hören Sie kurze Ansagen mehrmals und notieren Sie Zahlen, Zeiten und Orte.",
  }[Object.keys(skillNames).find((key) => skillNames[key] === weakest.label)];
  return text || "Üben Sie weiter in kurzen Einheiten und wiederholen Sie nur falsche Aufgaben.";
}

function bindAnalysis() {
  document.querySelector("#resetAll")?.addEventListener("click", () => {
    if (confirm("Wirklich den gesamten Fortschritt löschen?")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function showModal(html) {
  const template = document.querySelector("#modalTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  node.querySelector(".modal-body").innerHTML = html;
  node.querySelector(".modal-close").addEventListener("click", () => node.remove());
  node.addEventListener("click", (event) => {
    if (event.target === node) node.remove();
  });
  document.body.appendChild(node);
}

window.addEventListener("hashchange", () => {
  state.view = normalizeView(location.hash.replace("#", "") || "dashboard");
  state.currentExercise = null;
  render();
});

window.addEventListener("popstate", () => {
  state.view = normalizeView(location.hash.replace("#", "") || "dashboard");
  state.currentExercise = null;
  render();
});

let deferredInstallPrompt = null;
const installButton = document.querySelector("#installBtn");

function showInstallHelp() {
  const publicUrl = location.protocol === "https:" ? location.href : "den späteren öffentlichen HTTPS-Link";
  showModal(`
    <h3>App auf Android installieren</h3>
    <p>Dieser Browser kann den Installationsdialog nicht automatisch öffnen. Das passiert oft im In-App-Browser oder bei einer lokalen Vorschau.</p>
    <ol>
      <li>Öffnen Sie ${escapeHtml(publicUrl)} in Chrome auf dem Android-Handy.</li>
      <li>Tippen Sie oben rechts auf das Drei-Punkte-Menü.</li>
      <li>Wählen Sie „App installieren“ oder „Zum Startbildschirm hinzufügen“.</li>
      <li>Bestätigen Sie die Installation.</li>
    </ol>
    <p><strong>Wichtig:</strong> Für Außenstehende braucht die App zuerst einen öffentlichen HTTPS-Link, zum Beispiel über Netlify, Vercel, GitHub Pages oder Firebase Hosting.</p>
  `);
}

if (installButton) {
  installButton.classList.remove("hidden");
  installButton.textContent = "Installieren / Anleitung";
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installButton) installButton.textContent = "App installieren";
});

installButton?.addEventListener("click", async () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    showModal("<h3>Bereits installiert</h3><p>Die App läuft bereits im App-Modus.</p>");
    return;
  }
  if (!deferredInstallPrompt) {
    showInstallHelp();
    return;
  }
  try {
    await deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      showModal("<h3>Installation gestartet</h3><p>Der Browser richtet die App jetzt auf dem Gerät ein.</p>");
    } else {
      showInstallHelp();
    }
  } catch {
    showInstallHelp();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

render();
