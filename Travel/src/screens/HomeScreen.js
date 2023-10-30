import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { colors } from "../../theme";
import randomImage from "../../assets/image/randomImage";
import EmptyList from "../../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const items = [
  {
    id: 1,
    place: "Almaty",
    country: "Kazakhstan",
  },
  {
    id: 2,
    place: "Washington",
    country: "USA",
  },
  {
    id: 3,
    place: "Los Angeles",
    country: "USA",
  },
  {
    id: 4,
    place: "Astana",
    country: "Kazakhstan",
  },
  {
    id: 5,
    place: "Almaty",
    country: "Kazakhstan",
  },
  {
    id: 6,
    place: "Washington",
    country: "USA",
  },
  {
    id: 7,
    place: "Los Angeles",
    country: "USA",
  },
  {
    id: 8,
    place: "Astana",
    country: "Kazakhstan",
  },
];

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`$(colors.heading) font-bold text-3xl shadow-sm`}>
          Travel
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/image/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`$(colors.heading) font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 430 }}>
        <FlatList
          data={items}
          numColumns={2}
          ListEmptyComponent={
            <EmptyList message={"you haven't got recorded any trips yet"} />
          }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-around",
          }}
          className="mx-1"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("TripExpenses", { ...item })}
                className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
              >
                <View>
                  <Image
                    source={randomImage()}
                    className="w-36 h-36 mb-2"
                  ></Image>
                  <Text className={`$(colors.heading) font-bold`}>
                    {item.place}
                  </Text>
                  <Text className={`$(colors.heading) font-xs`}>
                    {item.country}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
