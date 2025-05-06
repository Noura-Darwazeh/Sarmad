import {
  BedouinEnvironmentImg1,
  BedouinEnvironmentImg2,
  BedouinEnvironmentImg3,
  BedouinEnvironmentMainImg,
  BedouinMan1Img,
  BedouinMan2Img,
  BedouinMan3Img,
  BedouinManMainImg,
  Dagger1Img,
  Dagger2Img,
  Dagger3Img,
  DaggerMainImg,
  EgyptionEnvironmentImg,
  EgyptionEnvironmentImg2,
  EgyptionEnvironmentImg3,
  JoranianGirlImg,
  JoranianGirlImg2,
  JoranianGirlImg3,
  Sword1Img,
  Sword2Img,
  Sword3Img,
} from "../assets";

export const SwordData = {
  title: "سيف ذو الفقار",
  details: "تفاصيل السيف",
  description:
    "تم تصميم سيف ذو الفقار على مايا كما يتناسب مع سيفه رضي الله عنه وكي يمثل السيوف الدينية الحربية",
  image: [
    {
      src: Sword1Img,
      alt: "Sword 1",
    },
    {
      src: Sword2Img,
      alt: "Sword 2",
    },
    {
      src: Sword3Img,
      alt: "Sword 3",
    },
  ],
  mainImage: null,
};

export const JoranianGirlData = {
  title: "شخصية الفتاة الأردنية",
  details: "تفاصيل الشخصية :",
  description:
    "تم تصميم الفتاة اللأردنية على برنامج مايا بحيث تتناسب مع البيئة الأردنية الأصيلة وثمثل الفتيات الأردنيات",
  image: [
    {
      src: JoranianGirlImg,
      alt: "JordanianGirl",
    },
    {
      src: JoranianGirlImg2,
      alt: "JordanianGirl2",
    },
    {
      src: JoranianGirlImg3,
      alt: "JordanianGirl3",
    },
  ],
  mainImage: null,
};

export const EgyptionEnvironmentData = {
  title: "البيئة المصرية",
  details: "تفاصيل البيئة:",
  description:
    "تم تصميم البيئة المصرية على برنامج مايا بحيث تتناسب مع الحضارة المصرية الأصيلة وتمثل الاهرامات ونهر النيل الموجود في مصر",
  image: [
    {
      src: EgyptionEnvironmentImg,
      alt: "EgyptianEnvironment",
    },
    {
      src: EgyptionEnvironmentImg2,
      alt: "EgyptianEnvironment2",
    },
    {
      src: EgyptionEnvironmentImg3,
      alt: "EgyptianEnvironment3",
    },
  ],
  mainImage: null,
};

export const BedouinEnvironmentData = {
  title: "البيئة البدوية",
  details: "تفاصيل الالة :",
  description:
    "تم تصميم البيئة البدوية بما يتناسب مع طبيعتها الصحراوية و خيمها و عاداتها .",
  image: [
    {
      src: BedouinEnvironmentImg1,
      alt: "BedouinEnvironment1",
    },
    {
      src: BedouinEnvironmentImg2,
      alt: "BedouinEnvironment2",
    },
    {
      src: BedouinEnvironmentImg3,
      alt: "BedouinEnvironment3",
    },
  ],
  mainImage: BedouinEnvironmentMainImg,
};

export const DaggerData = {
  title: "الخنجر الأثري",
  details: "تفاصيل الالة :",
  description:
    "تم تصميم الخنجر الأثري بطريقة تتناسب مع اعتناء بعض الشعوب بالتصاميم الفريدة",
  image: [
    {
      src: Dagger1Img,
      alt: "Dagger1",
    },
    {
      src: Dagger2Img,
      alt: "Dagger2",
    },
    {
      src: Dagger3Img,
      alt: "Dagger3",
    },
  ],
  mainImage: DaggerMainImg,
};

export const BedouinManData = {
  title: "شخصية الرجل البدوي",
  details: "تفاصيل الشخصية :",
  description:
    "يتميّز بالشهامة، الكرم، والصلابة، صاحب مروءة وعزّة نفس، وفيٌ لعاداته، ويحمل روح القيادة وحبّ الصحراء والحرية.",
  image: [
    {
      src: BedouinMan1Img,
      alt: "BedouinMan1",
    },
    {
      src: BedouinMan2Img,
      alt: "BedouinMan2",
    },
    {
      src: BedouinMan3Img,
      alt: "BedouinMan3",
    },
  ],
  mainImage: BedouinManMainImg,
};

export const AllData = [
  SwordData,
  JoranianGirlData,
  EgyptionEnvironmentData,
  BedouinEnvironmentData,
  DaggerData,
  BedouinManData,
];
