import {
  FemaleBody1Img,
  FemaleBody2Img,
  FemaleBody3Img,
  FemaleBody4Img,
  FemaleBody5Img,
  FemaleBody6Img,
  FemaleBody7Img,
  FemaleBody8Img,
  FemaleBody9Img,
  FemaleClothes1Img,
  FemaleClothes2Img,
  FemaleClothes3Img,
  FemaleClothes4Img,
  FemaleClothes5Img,
  FemaleClothes6Img,
  FemaleClothes7Img,
  FemaleClothes8Img,
  FemaleClothes9Img,
  FemaleClothes10Img,
  FemaleClothes11Img,
  FemaleClothes12Img,
  FemaleClothes13Img,
  FemaleClothes14Img,
  ThreeDFaceModel,
  ThreeDBodyModel,
  ThreeDClothesModel,
} from "../assets";

export const FemaleBody = {
  title: "الجسم",
  images: [
    FemaleBody1Img,
    FemaleBody2Img,
    FemaleBody3Img,
    FemaleBody4Img,
    FemaleBody5Img,
    FemaleBody6Img,
    FemaleBody7Img,
    FemaleBody8Img,
    FemaleBody9Img,
  ],
  model: ThreeDBodyModel,
};

export const FemaleFace = {
  title: "الوجه",
  images: [],
  model: ThreeDFaceModel,
};

export const FemaleHair = {
  title: "الشعر",
  images: [],
};

export const FemaleClothes = {
  title: "الملابس",
  images: [
    FemaleClothes1Img,
    FemaleClothes2Img,
    FemaleClothes3Img,
    FemaleClothes4Img,
    FemaleClothes5Img,
    FemaleClothes6Img,
    FemaleClothes7Img,
    FemaleClothes8Img,
    null,
    FemaleClothes9Img,
    FemaleClothes10Img,
    FemaleClothes11Img,
    FemaleClothes12Img,
    FemaleClothes13Img,
    FemaleClothes14Img,
  ],
  model: ThreeDClothesModel,
};

export const FemaleShoes = {
  title: "الأحذية",
  images: [],
};

export const AllFemaleData = [
  FemaleBody,
  FemaleFace,
  FemaleHair,
  FemaleClothes,
  FemaleShoes,
];

// -------------------------------------------------

export const MaleBody = {
  title: "الجسم",
  images: [],
};

export const MaleFace = {
  title: "الوجه",

  images: [],
};

export const MaleHair = {
  title: "الشعر",
  images: [],
};

export const MaleClothes = {
  title: "الملابس",
  images: [],
};

export const MaleShoes = {
  title: "الأحذية",
  images: [],
};

export const AllMaleData = [
  MaleBody,
  MaleFace,
  MaleHair,
  MaleClothes,
  MaleShoes,
];
