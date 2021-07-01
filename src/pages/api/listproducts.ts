import { NextApiResponse, NextApiRequest } from 'next';
const products = [
  {
    "id": "1",
    "title": "RTX 3010",
    "discount": 10,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3010",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 25,
        "title": "RTX 3250",
        "discount": 34,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3250",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 26,
        "title": "RTX 3260",
        "discount": 35,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3260",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 27,
        "title": "RTX 3270",
        "discount": 36,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3010",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 2,
    "title": "RTX 3020",
    "discount": 11,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AME",
      "model": "GRPCRD3020",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 22,
        "title": "RTX 3220",
        "discount": 31,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3220",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 23,
        "title": "RTX 3230",
        "discount": 32,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3230",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 24,
        "title": "RTX 3240",
        "discount": 33,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMD",
          "model": "GRPCRD3240",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 3,
    "title": "RTX 3030",
    "discount": 12,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMF",
      "model": "GRPCRD3030",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 19,
        "title": "RTX 3190",
        "discount": 28,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMW",
          "model": "GRPCRD3190",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 20,
        "title": "RTX 3200",
        "discount": 29,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMY",
          "model": "GRPCRD3200",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 21,
        "title": "RTX 3210",
        "discount": 30,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMZ",
          "model": "GRPCRD3120",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 4,
    "title": "RTX 3040",
    "discount": 13,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMG",
      "model": "GRPCRD3040",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 16,
        "title": "RTX 3160",
        "discount": 25,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMT",
          "model": "GRPCRD3160",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 17,
        "title": "RTX 3170",
        "discount": 26,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMU",
          "model": "GRPCRD3170",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 18,
        "title": "RTX 3180",
        "discount": 27,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMV",
          "model": "GRPCRD3180",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 5,
    "title": "RTX 3050",
    "discount": 14,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMH",
      "model": "GRPCRD3050",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 13,
        "title": "RTX 3130",
        "discount": 22,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMP",
          "model": "GRPCRD3130",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 14,
        "title": "RTX 3140",
        "discount": 23,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMR",
          "model": "GRPCRD3140",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 15,
        "title": "RTX 3150",
        "discount": 24,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMS",
          "model": "GRPCRD3150",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 6,
    "title": "RTX 3060",
    "discount": 15,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMI",
      "model": "GRPCRD3060",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    },
    "relatedProducts": [
      {
        "id": 10,
        "title": "RTX 3100",
        "discount": 19,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMM",
          "model": "GRPCRD3100",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 11,
        "title": "RTX 3110",
        "discount": 20,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMN",
          "model": "GRPCRD3110",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      },
      {
        "id": 12,
        "title": "RTX 3120",
        "discount": 21,
        "description": "Melhor Placa de video do mundo",
        "old_price": 40000,
        "price": 12000,
        "quantity": 1,
        "images": [
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
        ],
        "technicalSpecifications": {
          "brand": "AMO",
          "model": "GRPCRD3120",
          "Clock": 6,
          "Warranty": 1,
          "weight": 100
        }
      }
    ]
  },
  {
    "id": 7,
    "title": "RTX 3070",
    "discount": 16,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMJ",
      "model": "GRPCRD3070",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 8,
    "title": "RTX 3080",
    "discount": 17,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMK",
      "model": "GRPCRD3080",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 9,
    "title": "RTX 3090",
    "discount": 18,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AML",
      "model": "GRPCRD3090",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 10,
    "title": "RTX 3100",
    "discount": 19,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMM",
      "model": "GRPCRD3100",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 11,
    "title": "RTX 3110",
    "discount": 20,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMN",
      "model": "GRPCRD3110",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 12,
    "title": "RTX 3120",
    "discount": 21,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMO",
      "model": "GRPCRD3120",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 13,
    "title": "RTX 3130",
    "discount": 22,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMP",
      "model": "GRPCRD3130",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 14,
    "title": "RTX 3140",
    "discount": 23,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMR",
      "model": "GRPCRD3140",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 15,
    "title": "RTX 3150",
    "discount": 24,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMS",
      "model": "GRPCRD3150",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 16,
    "title": "RTX 3160",
    "discount": 25,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMT",
      "model": "GRPCRD3160",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 17,
    "title": "RTX 3170",
    "discount": 26,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMU",
      "model": "GRPCRD3170",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 18,
    "title": "RTX 3180",
    "discount": 27,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMV",
      "model": "GRPCRD3180",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 19,
    "title": "RTX 3190",
    "discount": 28,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMW",
      "model": "GRPCRD3190",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 20,
    "title": "RTX 3200",
    "discount": 29,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMY",
      "model": "GRPCRD3200",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 21,
    "title": "RTX 3210",
    "discount": 30,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMZ",
      "model": "GRPCRD3120",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 22,
    "title": "RTX 3220",
    "discount": 31,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3220",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 23,
    "title": "RTX 3230",
    "discount": 32,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3230",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 24,
    "title": "RTX 3240",
    "discount": 33,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3240",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 25,
    "title": "RTX 3250",
    "discount": 34,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3250",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 26,
    "title": "RTX 3260",
    "discount": 35,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3260",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  },
  {
    "id": 27,
    "title": "RTX 3270",
    "discount": 36,
    "description": "Melhor Placa de video do mundo",
    "old_price": 40000,
    "price": 12000,
    "quantity": 1,
    "images": [
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420980.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420981.jpg",
      "https://static.bhphoto.com/images/multiple_images/images500x500/1600432458_IMG_1420979.jpg"
    ],
    "technicalSpecifications": {
      "brand": "AMD",
      "model": "GRPCRD3010",
      "Clock": 6,
      "Warranty": 1,
      "weight": 100
    }
  }
]
export default (request: NextApiRequest, response: NextApiResponse) => {
  return response.json(products);
};