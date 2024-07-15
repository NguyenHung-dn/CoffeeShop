const products = [
  {
    id: "1",
    title: "Red Love Cup",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6173ece01a_trent-erwin-570303-unsplash.jpg",
    category: "COFFEE MUGS",
    disc: "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",
    price: {
      old: 37,
      sale: 25,
    },
    detail:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 56,
      height: 30,
      width: 12,
      weight: 12,
    },
  },
  {
    id: "2",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg",
    title: "Golden Designers Mug",
    category: "PREMIUM",
    disc: "The most versatile furniture system ever created. Designed to fit your life. The most versatile furniture system ever created. Designed to fit your life.",
    price: {
      old: 69,
      sale: 50,
    },
    detail:
      "Y'all ready for this? Get your 30oz powder coated tumblers laser etched with our limited edition designs! Stainless Steel Tumblers retain Heat & Cold - not like those junk plastic ones you see elsewhere. The tumbler is double wall vacuum insulated with a 24 hour retention ratingHolds a MASSIVE 30 ounces of hot or cold liquids! Tumbler and Lid are BPA Free - Drink in good health!",
    dimensions: {
      lenght: 12,
      height: 10,
      width: 20,
      weight: 23,
    },
  },
  {
    id: "3",
    title: "Basic White Mug",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a615decdfc4_coffee-mug-in-means-top_4460x4460.jpg",
    category: "COFFEE MUGS",
    disc: "Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto.",
    price: {
      old: 15,
      sale: null,
    },
    detail:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 30,
      height: 30,
      width: 30,
      weight: 24,
    },
  },
  {
    id: "4",
    title: "Aroma Art Coffee Mug",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a7f6becdfb1_aroma-art-beautiful-544113.jpg",
    category: "COFFEE MUGS",
    disc: `Three local "Czech" style brews available - a lager, a dark and a red (which is a mixture of the other two). The red was my pick of the three.`,
    price: {
      old: 39,
      sale: null,
    },
    detail:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 15,
      height: 13,
      width: 12,
      weight: 8,
    },
  },
  {
    id: "5",
    title: "B&W Essentials Mug",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg",
    category: "OTHERS",
    disc: `Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.`,
    price: {
      old: 19,
      sale: null,
    },
    detail:
      "Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 300,
      height: 300,
      width: 200,
      weight: 40,
    },
  },
  {
    id: "6",
    title: "Winter Style Mug",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6d09ece015_rocknwool-690694-unsplash.jpg",
    category: "OTHERS",
    disc: `Ducimus est ut neque sunt eum iusto. Consequatur quia.`,
    price: {
      old: 25,
      sale: null,
    },
    detail:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 10,
      height: 10,
      width: 10,
      weight: 5,
    },
  },
  {
    id: "7",
    title: "No Handle Bar Cup",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg",
    category: "OTHERS",
    disc: `Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.`,
    price: {
      old: 34,
      sale: null,
    },
    detail:
      " Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 12,
      height: 13,
      width: 25,
      weight: 100,
    },
  },
  {
    id: "8",
    title: "Espresso Cup by Mugs.co",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a1db2ece009_natanja-grun-600152-unsplash.jpg",
    category: "OTHERS",
    disc: `A et quia qui quia. Sunt tempore est sit facilis.`,
    price: {
      old: 25,
      sale: null,
    },
    detail:
      "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 10,
      height: 10,
      width: 10,
      weight: 3,
    },
  },
  {
    id: "9",
    title: "Summer Designer Cup",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a81a6ecdfe7_levi-guzman-1077850-unsplash.jpg",
    category: "OTHERS",
    disc: `Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.`,
    price: {
      old: 29,
      sale: null,
    },
    detail:
      "Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 8,
      height: 6,
      width: 5,
      weight: 2,
    },
  },
  {
    id: "10",
    title: "White Mug Essential",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ab61eece017_isaac-benhesed-249427-unsplash.jpg",
    category: "OTHERS",
    disc: `Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.`,
    price: {
      old: 19,
      sale: null,
    },
    detail:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 14,
      height: 13,
      width: 20,
      weight: 26,
    },
  },
  {
    id: "11",
    title: " Pink Premium Ceramic",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg",
    category: "PREMIUM",
    disc: `A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.`,
    price: {
      old: 19,
      sale: null,
    },
    detail:
      "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 45,
      height: 98,
      width: 56,
      weight: 200,
    },
  },
  {
    id: "12",
    title: "Blue Premium Mug",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a3f15ecdf9a_annie-spratt-76930-unsplash.jpg",
    category: "PREMIUM",
    disc: `Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.`,
    price: {
      old: 99,
      sale: null,
    },
    detail:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 99,
      height: 88,
      width: 90,
      weight: 523,
    },
  },
  {
    id: "13",
    title: "Black Tea Cup",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a0c09ece01c_steve-harvey-523112-unsplash.jpg",
    category: "TEA MUGS",
    disc: `Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.`,
    price: {
      old: 29,
      sale: 15,
    },
    detail:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 20,
      height: 40,
      width: 30,
      weight: 500,
    },
  },
  {
    id: "14",
    title: "Ceramic Tea",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg",
    category: "TEA MUGS",
    disc: `Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.`,
    price: {
      old: 46,
      sale: null,
    },
    detail:
      "Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 20,
      height: 30,
      width: 25,
      weight: 10,
    },
  },
  {
    id: "15",
    title: "White Ceramic",
    image:
      "https://assets.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ab74eece013_erol-ahmed-305920-unsplash.jpg",
    category: "TEA MUGS",
    disc: `Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.`,
    price: {
      old: 29,
      sale: null,
    },
    detail:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    dimensions: {
      lenght: 7,
      height: 8,
      width: 9,
      weight: 25,
    },
  },
];
export default products;
