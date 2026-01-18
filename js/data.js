

const categories = [
    {id: 1,name: "Changyutgichlar", img_url: '../images/kategoriyalar/changyutgichlar.png'},
    {id: 2,name: "Isitgichlar", img_url: '../images/kategoriyalar/isitgichlar.png'},
    {id: 3,name: "Muzlatgichlar", img_url: '../images/kategoriyalar/muzlatgichlar.png'},
    {id: 4, name: "Noutbuklar", img_url: '../images/kategoriyalar/noutbuklar.png'},
    {id: 5,name: "Telefonlar", img_url: '../images/kategoriyalar/telefon.png'},
    {id: 6,name: "Televizorlar", img_url: '../images/kategoriyalar/televizorlar.png'}
]
const products = [
    {
        id: 1,
        name: "Karcher VC 3 Vacuum Cleaner",
        price: 3200000,
        rating: 4.6,
        stock: 12,
        img_url: "../images/changyutgichlar/karcher.png",
        categoryId: 1
    },
    {
        id: 2,
        name: "LG VK76 Vacuum Cleaner",
        price: 2800000,
        rating: 4.4,
        stock: 9,
        img_url: "../images/changyutgichlar/lg.png",
        categoryId: 1
    },
    {
        id: 3,
        name: "Philips PowerPro Compact",
        price: 3500000,
        rating: 4.8,
        stock: 15,
        img_url: "../images/changyutgichlar/philips.png",
        categoryId: 1
    },
    {
        id: 4,
        name: "Samsung Bagless Vacuum Cleaner",
        price: 3000000,
        rating: 4.5,
        stock: 10,
        img_url: "../images/changyutgichlar/samsung.png",
        categoryId: 1
    },
    {
        id: 5,
        name: "Tefal Silence Force Vacuum",
        price: 3700000,
        rating: 4.7,
        stock: 7,
        img_url: "../images/changyutgichlar/tefal.png",
        categoryId: 1
    },
    {
        id: 6,
        name: "Artel Electric Heater 2000W",
        price: 890000,
        rating: 4.2,
        stock: 20,
        img_url: "../images/isitgichlar/artel.png",
        categoryId: 2
    },
    {
        id: 7,
        name: "Avalon Oil Heater",
        price: 1150000,
        rating: 4.3,
        stock: 14,
        img_url: "../images/isitgichlar/avalon.png",
        categoryId: 2
    },
    {
        id: 8,
        name: "Ferre Infrared Heater",
        price: 980000,
        rating: 4.1,
        stock: 18,
        img_url: "../images/isitgichlar/ferre.png",
        categoryId: 2
    },
    {
        id: 9,
        name: "Shivaki Fan Heater",
        price: 760000,
        rating: 4.0,
        stock: 25,
        img_url: "../images/isitgichlar/shivaki.png",
        categoryId: 2
    },
    {
        id: 10,
        name: "Sirius Wall Heater",
        price: 1350000,
        rating: 4.4,
        stock: 11,
        img_url: "../images/isitgichlar/sirius.png",
        categoryId: 2
    },
    {
        id: 11,
        name: "Artel No Frost Refrigerator",
        price: 6500000,
        rating: 4.5,
        stock: 8,
        img_url: "../images/muzlatgichlar/artel.png",
        categoryId: 3
    },
    {
        id: 12,
        name: "Haier Double Door Refrigerator",
        price: 7200000,
        rating: 4.6,
        stock: 6,
        img_url: "../images/muzlatgichlar/haier.png",
        categoryId: 3
    },
    {
        id: 13,
        name: "LG Smart Inverter Refrigerator",
        price: 7800000,
        rating: 4.7,
        stock: 5,
        img_url: "../images/muzlatgichlar/lg.png",
        categoryId: 3
    },
    {
        id: 14,
        name: "Premier Classic Refrigerator",
        price: 5900000,
        rating: 4.3,
        stock: 9,
        img_url: "../images/muzlatgichlar/premier.png",
        categoryId: 3
    },
    {
        id: 15,
        name: "Samsung Digital Inverter Refrigerator",
        price: 8200000,
        rating: 4.8,
        stock: 4,
        img_url: "../images/muzlatgichlar/samsung.png",
        categoryId: 3
    },
    {
        id: 16,
        name: "Acer Aspire 5 Laptop",
        price: 7400000,
        rating: 4.4,
        stock: 13,
        img_url: "../images/noutbuklar/acer.png",
        categoryId: 4
    },
    {
        id: 17,
        name: "Asus VivoBook Laptop",
        price: 7800000,
        rating: 4.5,
        stock: 10,
        img_url: "../images/noutbuklar/asus.png",
        categoryId: 4
    },
    {
        id: 18,
        name: "HP Pavilion Laptop",
        price: 8200000,
        rating: 4.6,
        stock: 8,
        img_url: "../images/noutbuklar/hp.png",
        categoryId: 4
    },
    {
        id: 19,
        name: "Lenovo IdeaPad Laptop",
        price: 7600000,
        rating: 4.4,
        stock: 11,
        img_url: "../images/noutbuklar/lenovo.png",
        categoryId: 4
    },
    {
        id: 20,
        name: "Apple MacBook Air M1",
        price: 12500000,
        rating: 4.9,
        stock: 5,
        img_url: "../images/noutbuklar/macbook.png",
        categoryId: 4
    },
    {
        id: 21,
        name: "Honor X9 Smartphone",
        price: 3800000,
        rating: 4.3,
        stock: 16,
        img_url: "../images/telefonlar/honor.png",
        categoryId: 5
    },
    {
        id: 22,
        name: "Huawei Nova Smartphone",
        price: 4200000,
        rating: 4.4,
        stock: 14,
        img_url: "../images/telefonlar/huawei.png",
        categoryId: 5
    },
    {
        id: 23,
        name: "Infinix Note Smartphone",
        price: 3100000,
        rating: 4.2,
        stock: 20,
        img_url: "../images/telefonlar/infinix.png",
        categoryId: 5
    },
    {
        id: 24,
        name: "Apple iPhone 15 Pro",
        price: 13800000,
        rating: 4.9,
        stock: 7,
        img_url: "../images/telefonlar/iphone17.png",
        categoryId: 5
    },
    {
        id: 25,
        name: "Samsung Galaxy S Series",
        price: 9600000,
        rating: 4.7,
        stock: 9,
        img_url: "../images/telefonlar/samsung.png",
        categoryId: 5
    },
    {
        id: 26,
        name: "Tecno Spark Smartphone",
        price: 2900000,
        rating: 4.1,
        stock: 22,
        img_url: "../images/telefonlar/tecno.png",
        categoryId: 5
    },
    {
        id: 27,
        name: "Xiaomi Redmi Smartphone",
        price: 3400000,
        rating: 4.5,
        stock: 18,
        img_url: "../images/telefonlar/xiamoi.png",
        categoryId: 5
    },
    {
        id: 28,
        name: "Haier Smart LED TV",
        price: 5400000,
        rating: 4.4,
        stock: 6,
        img_url: "../images/televizorlar/haier.png",
        categoryId: 6
    },
    {
        id: 29,
        name: "Hisense UHD Smart TV",
        price: 6200000,
        rating: 4.5,
        stock: 5,
        img_url: "../images/televizorlar/hisense.png",
        categoryId: 6
    },
    {
        id: 30,
        name: "LG OLED Smart TV",
        price: 9800000,
        rating: 4.8,
        stock: 3,
        img_url: "../images/televizorlar/lg.png",
        categoryId: 6
    },
    {
        id: 31,
        name: "Premier HD LED TV",
        price: 4800000,
        rating: 4.2,
        stock: 7,
        img_url: "../images/televizorlar/premeir.png",
        categoryId: 6
    },
    {
        id: 32,
        name: "Samsung QLED Smart TV",
        price: 10500000,
        rating: 4.9,
        stock: 4,
        img_url: "../images/televizorlar/samsung.png",
        categoryId: 6
    }
];


