import { StyleSheet, Image, Platform, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Explore</Text>
        
      </View>
      <Text>Explore tab content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
