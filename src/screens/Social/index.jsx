import { View, StyleSheet } from "react-native"

import { Banner } from "../../components/Banner";
import { SocialTasks } from "../../components/AllTasks/SocialTasks";
import { CreateTaskButton } from "../../components/CreateTaskButton";

export function Social() {
  return (
    <View style={styles.container}>
      <Banner name="Social" />
      <SocialTasks />
      <CreateTaskButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 90,
    paddingHorizontal: 35,
    gap: 40
  },
});