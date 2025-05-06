import { Sword1Img, Sword2Img, Sword3Img } from "../assets";

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
  mainImage: Sword1Img,
};

export const AllData = [SwordData];
