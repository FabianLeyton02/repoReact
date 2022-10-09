const data = [
  {
    id: 1,
    title: "Iphone 13 Pro Max",
    category: "apple",
    img: "https://ofertas.movistar.com.uy/off/img/20220909122128-Apple-iPhone-13-Pro-Max.webp",
    alt: "Iphone",
  },
  {
    id: 2,
    title: "Samsung A23",
    category: "Samsung",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mlbearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mlbearo-532206854?$650_519_PNG$",
    alt: "Samsung",
  },
  {
    id: 3,
    title: "Huawei Y9",
    category: "Huawei",
    img: "https://http2.mlstatic.com/D_NQ_NP_718162-MLA49024209526_022022-O.jpg",
    alt: "Huawei",
  },
  {
    id: 4,
    title: "Xiamoi 11T Pro",
    category: "Xiamoi",
    img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1631180755.78267171.png",
    alt: "Xiamoi",
  },
  {
    id: 5,
    title: "Motorola G71",
    category: "Motorola",
    img: "https://mxmoto.vtexassets.com/arquivos/ids/165899-800-auto?v=637799328358400000&width=800&height=auto&aspect=true",
    alt: "Motorola",
  },
];

export function getAllPhones() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data, 2000));
  });
}

export function getPhone(idParam) {
  return new Promise((resolve) => {
    let phone = data.find((item) => {
      return item.id === Number(idParam);
    });
    setTimeout(() => resolve(phone), 2000);
  });
}
