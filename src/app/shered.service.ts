import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SheredService {
  constructor() {}

  voitures: any[] = [
    {
      buttonText: 'jaime',
      Marque: 'Peugeot',
      Model: '3008',
      Image: 'https://com-auto.fr/public/vehicles/2913/ubi-2913-886665-1.jpg',
      Color: 'caramel',
      Prix: 120,
      date: new Date(),
      like: 10,
      commentaire: '',
    },
    {
      buttonText: 'jaime',
      Marque: 'Renault',
      Model: 'Clio RS-Line',
      Image:
        'https://www.uk-car-discount.co.uk/img/news/2019/nov/R.S.LINE_FRONT.jpg',
      Color: 'blue',
      Prix: 60,
      date: new Date(),
      like: 20,
      commentaire: '',
    },
    {
      buttonText: 'jaime',
      Marque: 'Toyota',
      Model: 'Yaris hybrid',
      Image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGdvadey858fONfQzdPaAgRpb4npeeUxJVZitcyBysT41cdTvIgs6J7NN4kVNHth9WgnQkvegdLk2ZtATgZ832R7BBnqDCpmEbGrLOp6aBvRT4_hMwpJd8PF3eS9_zoWY-GHNRfpyvNAa9/s1600/toyota-yaris-premiere-rouge-fusion-red.jpg',
      Color: 'red',
      Prix: 100,
      date: new Date(),
      like: 30,
      commentaire: '',
    },
    {
      buttonText: 'jaime',
      Marque: 'Volkswagen',
      Model: 'Golf GTE 5',
      Image:
        'https://www.caranddriving.com/cdwebsite/image169.ashx?url=https://ssl.caranddriving.com/f2/images/New/big/volkswagengolfgte0824.jpg',
      Color: 'white',
      Prix: 110,
      date: new Date(),
      like: 40,
      commentaire: '',
    },
    {
      buttonText: 'jaime',
      Marque: 'BMW',
      Model: 'X5',
      Image:
        'https://file.kelleybluebookimages.com/kbb/base/evox/CP/14404/2020-BMW-X5%20M-front_14404_032_2400x1800_A96.png',
      Color: 'white',
      Prix: 200,
      date: new Date(),
      like: 70,
      commentaire: '',
    },
    {
      buttonText: 'jaime',
      Marque: 'mercedes',
      Model: 'g class',
      Image:
        'https://cloud.leparking.fr/2023/05/06/18/28/mercedes-g-class-2019-mercedes-benz-g-class-amg-g-63-black_8791824455.jpg',
      Color: 'white',
      Prix: 250,
      date: new Date(),
      like: 90,
      commentaire: '',
    },
  ];
}
