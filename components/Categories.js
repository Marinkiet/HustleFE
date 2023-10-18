import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

// Data from catagories
import { categories } from "../constants";
import { themeColors } from "../theme";

//highligh the category presses/activev
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {/* map throught each category and apply this */}
        {categories.map((catagory, index) => {
          //capture set the active true catergory if activeCaterory == category.id else false
          let isActive = catagory.id == activeCategory; //initially null

          //capture the background color to be used based on if btn is Active
          let btnClass = isActive 
            ? "bg-blue-600" 
            : "bg-white";

          //capture the text style color to be used based on if btn is Active
          let textClass = isActive
            ? "font-bold text-white"
            : "text-blue-600";



          return (
            <View
              key={index}
              className="flex justify-center items-center mr-6 pb-3"
            >
              <TouchableOpacity
                // when user clicks on category run for state setActiveCategory
                // and pass category id to identify it
                onPress={() => setActiveCategory(catagory.id)}
                // use {} to append the dynamic btnclass !add space after last class used
                style={{color:themeColors.bgColor(0.5),borderColor:themeColors.bgColor(1)}}
                className={"p-3 rounded-full  bg-gray-200 " + btnClass}
              >
                <Text
                // use {} to append the dynamic btnclass
                className={"text-semibold text-blue-700" + textClass}
              >
                {catagory.name}
              </Text>
              </TouchableOpacity>
              
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
