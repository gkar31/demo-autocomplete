export interface ICar {
  Marque : String,
  Modele : String,
  Serie : String,
  Cylindres : Number,
  Cylindree : Number,
  Puissance_ch : Number,
  Couple_Nm : Number,
  VitesseMax_Kmh : Number,
  acc_0_100 : Number,
  acc_400m_DA : Number,
  acc_0_200 : Number,
  acc_1000m_DA : Number,
  Prix : String,
  Indice_Perf : Number,
  Image: String,
  _id: String,
  gallery: IGallery;
}

export interface IGallery {
  pictures: string[];
  videos: string[];
}