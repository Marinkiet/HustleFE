export const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Products",
    },
    {
      id: 3,
      name: "Services",
    },
    {
      id: 4,
      name: "Events",
    },
  ];
export const recommended={
        id:1,
        title:"Recommended for you",
        restaurants:[
            {
                id:1,
                name:"CornerFruits",
                image:require("../assets/images/bananas.jpg"),
                profile_image:require("../assets/images/deliveryGuy.png"),
                description:"All kinds of kota",
                lng:28.118081,
                lat:-25.976990,
                address:"454 second street",
                area:"Jumbo Creek Street",
                stars:4,
                reviews:"149",
                category:"Fruits",
                hustler:"Peter Banker",
                distance_car:2,
                distance_walk:6,
                time:"08:00 - 18:00 Mon-Sat",
                price:15,
                reviews_message:"Freshest fruts I've ever had.",
                    
                ahusteitem:[
                    {
                        id:1,
                        name:"Coconuts",
                        isAvailable:true,
                        min_price:7,
                        max_price:20,
                        image:require("../assets/images/coconut.jpg")
                    },
                    {
                        id:2,
                        name:"Guavas",
                        isAvailable:true,
                        min_price:3,
                        max_price:25,
                        image:require("../assets/images/guava.jpeg")
                    }
                ],
              
            },
            {
                id:2,
                name:"OnlyReds",
                image:require("../assets/images/tomatoes.jpg"),
                profile_image:require("../assets/images/tomatoes.jpg"),
                description:"All kinds of tomatoes",
                lng:28.118081,
                lat:-25.976990,
                hustler:"Mary Mathobeni",
                
                address:"039 first street",
                stars:5,
                reviews:"90",
                distance_car:3,
                distance_walk:9,
                price:10,
                category:"Vegetables",
                ahusteitem:[
                    {
                        id:1,
                        name:"tomatoes",
                        min_price:10,
                        max_price:30,
                        image:require("../assets/images/tomatoes2.jpeg")
                    }
                ]
            },
            {
                id:3,
                name:"Betty's Flowers",
                image:require("../assets/images/flowers.jpg"),
                description:"All kinds of Flowers",
                lng:28.118081,
                lat:-25.976990,
                address:"454 second street",
                area:"Jumbo Creek Street",
                stars:4,
                time:"09:00 - 16:00",
                hustler:"Mama Betty",
                distance_car:3,
                distance_walk:10,
                price:75,
                reviews:"2.5k",
                category:"I love her flowers!!",
                ahusteitem:[
                    {
                        id:1,
                        name:"Daisy",
                        min_price:73,
                        max_price:100,
                        isAvailable:true,
                        image:require("../assets/images/daisy.jpeg")
                    },
                    {
                        id:2,
                        name:"Roses",
                        min_price:55,
                        max_price:270,
                        image:require("../assets/images/roses.jpeg")
                    },
                
                ]
            },
        ]
    }


      
    export const yourArea={
        id:1,
        title:"Palms Estate",
        restaurants:[
            {
                id:1,
                name:"Corn2Stick",
                image:require("../assets/images/corn.jpg"),
                description:"All kinds of kota",
                lng:28.118081,
                lat:-25.976990,
                address:"454 second street",
                area:"Palms Estate",
                stars:4.4,
                distance_walk:0,
                distance_car:0,
                reviews:"3.5k",
                category:"Fast food",
                price:35,
                ahusteitem:[
                    {
                        id:1,
                        name:"Just Corn",
                        isAvailable:true,
                        min_price:10,
                        max_price:10,
                        image:require("../assets/images/corn.jpg")
                    },

                ]
            },
            {
                id:2,
                name:"Chicken on toast",
                image:require("../assets/images/sushi.png"),
                description:"All kinds of toast",
                lng:28.118081,
                lat:-25.976990,
                address:"09 first street",
                stars:4,
                distance_car:5,
                distance_walk:1,
                reviews:"5k",
                category:"Fast food",
                ahusteitem:[
                    {
                        id:1,
                        name:"chicken",
                        price:23,
                        image:require("../assets/images/kfc.png")
                    }
                ]
            },
            {
                id:3,
                name:"Burger King",
                image:require("../assets/images/sushi.png"),
                description:"All kinds of burger",
                lng:28.118081,
                lat:-25.976990,
                address:"668 second street",
                area:"Seattle",
                stars:4,
                distance_car:5,
                distance_walk:1,
                price:35,
                reviews:"2.5k",
                category:"Fast healthish food",
                ahusteitem:[
                    {
                        id:1,
                        name:"burgers!",
                        min_price:73,
                        max_price:100,
                        isAvailable:true,
                        image:require("../assets/images/kfc.png")
                    },
                    {
                        id:2,
                        name:"Cake!",
                        price:23,
                        image:require("../assets/images/kfc.png")
                    },
                    {
                        id:3,
                        name:"Ice scream!",
                        min_price:73,
                        max_price:100,
                        isAvailable:true,
                        image:require("../assets/images/kfc.png")
                    }
                ]
            },
        ]
    }
    export const aroundyou={
        id:1,
        title:"Vodaworld",
        restaurants:[
            {
                id:1,
                name:"ReadsOn",
                image:require("../assets/images/books.jpg"),
                description:"All kinds of books",
                lng:28.118081,
                lat:-25.976990,
                address:"454 second street",
                hustler:"Yahu Nareen",
                distance_car:5,
                distance_walk:1,
                area:"Seattle Creek",
                stars:4,
                reviews:"3.5k",
                time:"08:00 - 17:00",
                category:"Education",
                price:55,
                ahusteitem:[
                    {
                        id:1,
                        name:"King Kota",
                        isAvailable:true,
                        min_price:73,
                        max_price:100,
                        image:require("../assets/images/pizza.png")
                    },
                    {
                        id:2,
                        name:"Prince Kota",
                        isAvailable:true,
                        min_price:73,
                        max_price:100,
                        image:require("../assets/images/sushi.png")
                    }
                ]
            },
            {
                id:2,
                name:"Standard bank 2023 Hackathon",
                image:require("../assets/images/hack.jpeg"),
                description:"All kinds of toast",
                lng:28.118081,
                lat:-25.976990,
                address:"Sandridge Square",
                time:"08:00 - 18:00 14/10/2023 - 16/10/2023",
                distance_car:10,
                distance_walk:36,
                price:"Free",
                stars:4,
                reviews:"2k",
                category:"Competition",
               
            },
            {
                id:3,
                name:"Burger King",
                image:require("../assets/images/sushi.png"),
                description:"All kinds of burger",
                lng:28.118081,
                lat:-25.976990,
                address:"668 second street",
                area:"Seattle",
                distance_car:5,
                distance_walk:1,
                stars:4,
                price:35,
                reviews:"2.5k",
                category:"Fast healthish food",
                ahusteitem:[
                    {
                        id:1,
                        name:"burgers!",
                        min_price:73,
                        max_price:100,
                        isAvailable:true,
                        image:require("../assets/images/kfc.png")
                    },
                    {
                        id:2,
                        name:"Cake!",
                        price:23,
                        image:require("../assets/images/kfc.png")
                    },
                    {
                        id:3,
                        name:"Ice scream!",
                        min_price:73,
                        max_price:100,
                        isAvailable:true,
                        image:require("../assets/images/kfc.png")
                    }
                ]
            },
        ]
    }
