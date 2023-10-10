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
export const featured={
        id:1,
        title:"Recommended for you",
        restaurants:[
            {
                id:1,
                name:"Gi ven KotaLifestyle",
                image:require("../assets/images/deliveryGuy.png"),
                description:"All kinds of kota",
                lng:28.118081,
                lat:-25.976990,
                address:"454 second street",
                stars:4,
                reviews:"3.5k",
                category:"Fast food",
                dishes:[
                    {
                        id:1,
                        name:"King Kota",
                        min_price:73,
                        max_price:100,
                        image:require("../assets/images/pizza.png")
                    },
                    {
                        id:2,
                        name:"Prince Kota",
                        min_price:73,
                        max_price:100,
                        image:require("../assets/images/sushi.png")
                    }
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
                reviews:"5k",
                category:"Fast food",
                dishes:[
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
                stars:4,
                reviews:"2.5k",
                category:"Fast healthish food",
                dishes:[
                    {
                        id:1,
                        name:"burgers!",
                        min_price:73,
                        max_price:100,
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
                        image:require("../assets/images/kfc.png")
                    }
                ]
            },
        ]
    }


      
        