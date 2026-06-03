import { Feature, GalleryItem, FoodItem, Review, OpeningHour } from "./types";

export const HERO_BACKGROUND = "https://i.ibb.co/CKPfXKhz/65467286-1164653833702867-2830701447442595840-n.jpg";

export const FEATURES: Feature[] = [
  {
    id: "f1",
    iconName: "Fish",
    title: "Raj dla wędkarzy",
    description: "Idealne miejsce do wypoczynku i wędkowania w otoczeniu czystej natury."
  },
  {
    id: "f2",
    iconName: "Trees",
    title: "Blisko natury",
    description: "Rozległe lasy, malownicze jezioro i błoga cisza z dala od miejskiego zgiełku."
  },
  {
    id: "f3",
    iconName: "UtensilsCrossed",
    title: "Świeże ryby",
    description: "Wybitne, tradycyjne dania przygotowywane z najwyższą starannością i pasją."
  },
  {
    id: "f4",
    iconName: "Heart",
    title: "Rodzinna atmosfera",
    description: "Kameralne miejsce prowadzone od serca, z polską tradycyjną gościnnością."
  }
];

export const ABOUT_LODGE_IMAGE = "https://i.ibb.co/hxGgHZFR/710710180-1496282065622550-3460474324729717751-n.jpg";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://i.ibb.co/zTSVBzrb/661665000-1449549206962503-2293386604966861896-n.jpg",
    title: "Letni zachód słońca nad jeziorem przy gościńcu",
    category: "Widok"
  },
  {
    id: "g2",
    url: "https://i.ibb.co/ZpnyPTZK/659832273-1451999870050770-2631261795238170650-n.jpg",
    title: "Nasz drewniany pomost o poranku",
    category: "Otoczenie"
  },
  {
    id: "g3",
    url: "https://i.ibb.co/3YC0rjYR/660541961-1451999910050766-549762837967550212-n.jpg",
    title: "Magiczna mgła unosząca się nad wodą",
    category: "Natura"
  },
  {
    id: "g4",
    url: "https://i.ibb.co/Q7c3qZDc/660513217-1451999956717428-2526803613060807159-n.jpg",
    title: "Przystań dla łodzi rybackich",
    category: "Wędkarstwo"
  },
  {
    id: "g5",
    url: "https://i.ibb.co/GymmwR2/659075575-1452000010050756-6484303644983163104-n.jpg",
    title: "Taras widokowy przy samym brzegu",
    category: "Otoczenie"
  },
  {
    id: "g6",
    url: "https://i.ibb.co/yFYk2bGQ/689045824-1479680537282703-1407407193349070068-n.jpg",
    title: "Rodzinne popołudnie przy jeziorze",
    category: "Klimat"
  },
  {
    id: "g7",
    url: "https://i.ibb.co/GymmwR2/659075575-1452000010050756-6484303644983163104-n.jpg",
    title: "Zielone otoczenie gościńca i strefa relaksu",
    category: "Natura"
  },
  {
    id: "g8",
    url: "https://i.ibb.co/gb3Tnc5m/710424276-1496282275622529-1172432866440583594-n.jpg",
    title: "Klimatyczna strefa odpoczynku na pomoście",
    category: "Klimat"
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: "food1",
    url: "https://i.ibb.co/mVQCjs4N/540581745-1277978847452874-1468961418412089492-n.jpg",
    title: "Chrupiący Smażony Sandacz",
    description: "Złocisty, delikatny sandacz z naszej patelni, podawany z dodatkiem świeżej cytryny i domowych surówek.",
    badge: "Specjalność"
  },
  {
    id: "food2",
    url: "https://i.ibb.co/Q7RbqNnh/542762064-1281281210455971-2272817726148066079-n.jpg",
    title: "Zupa Rybna Sieja",
    description: "Rozgrzewająca, aromatyczna zupa przygotowywana według starej, pilnie strzeżonej receptury z polskich ziół.",
    badge: "Tradycja"
  },
  {
    id: "food3",
    url: "https://i.ibb.co/bh8T6qz/551624065-1295046995746059-2968166653998270910-n.jpg",
    title: "Pstrąg Pieczony w Maśle Czosnkowym",
    description: "Rozpływający się w ustach pstrąg z masłem czosnkowo-ziołowym, pieczony w folii dla zachowania pełni aromatu.",
    badge: "Z grilla"
  },
  {
    id: "food4",
    url: "https://i.ibb.co/p6vHDnJv/703204564-1488670263050397-6751139502218250340-n.jpg",
    title: "Tradycyjna Smażona Sieja",
    description: "Królowa naszych wód – świeżo łowiona, delikatnie panierowana w ziołowej posypce i usmażona na chrupko.",
    badge: "Sezonowa"
  }
];

export const FOOD_CARDS = [
  { iconName: "FishSymbol", title: "Świeże ryby", desc: "Z lokalnego połowu bezpośrednio na Twój talerz" },
  { iconName: "Cookie", title: "Domowa kuchnia", desc: "Tradycyjne polskie smaki przygotowywane z miłością" },
  { iconName: "Flame", title: "Dania przygotowywane na bieżąco", desc: "Nigdy niegrzane wcześniej, zawsze chrupkie i aromatyczne" },
  { iconName: "Leaf", title: "Naturalne składniki", desc: "Zioła z naszego ogródka i regionalne produkty premium" }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Mirosław Wiśniewski",
    rating: 5,
    text: "Pyszna ryba w zacisznym miejscu nad samym brzegiem jeziora. Przyjemny klimat z dala od tłumów i hałasu. Polecam!",
    date: "Maj 2026",
    source: "Opinia z Facebooka"
  },
  {
    id: "r2",
    author: "Katarzyna Grabowska",
    rating: 5,
    text: "Pyszne jedzonko i świeżutkie ryby. Bardzo miła obsługa, będziemy wracać. Polecam!",
    date: "Kwiecień 2026",
    source: "Opinia z Facebooka"
  },
  {
    id: "r3",
    author: "Janusz Kowalczyk",
    rating: 5,
    text: "Super miejscówka. Cisza spokój. Jedzenie przepyszne. Bardzo mili, gościnni właściciele.",
    date: "Maj 2026",
    source: "Opinia z Facebooka"
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Poniedziałek", hours: "10:00 – 22:00" },
  { day: "Wtorek", hours: "10:00 – 22:00" },
  { day: "Środa", hours: "10:00 – 22:00" },
  { day: "Czwartek", hours: "10:00 – 22:00" },
  { day: "Piątek", hours: "10:00 – 22:00" },
  { day: "Sobota", hours: "10:00 – 22:00" },
  { day: "Niedziela", hours: "10:00 – 22:00" }
];

export const CONTACT_INFO = {
  address: "Ługi 30, 66-520 Dobiegniew",
  phone: "516 146 170",
  phoneRaw: "+48516146170",
  email: "gosciniecwedkarskisieja@gmail.com",
  facebookUrl: "https://www.facebook.com/Gosciniecwedkarski/",
  facebookReviewsUrl: "https://www.facebook.com/Gosciniecwedkarski/reviews/?id=100057223129522&sk=reviews",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.157583081409!2d15.690636277125082!3d52.94558750463324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4706ce12085501f5%3A0x5f062b256dc31ecc!2zxYF1Z2kgMzAsIDY2LTUyMCDFgXVnaQ!5e0!3m2!1spl!2spl!4v1780479627766!5m2!1spl!2spl"
};
