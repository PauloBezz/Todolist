import { View, StyleSheet } from "react-native"

import { PersonalTasks } from "../../components/AllTasks/PersonalTasks";
import { Banner } from "../../components/Banner";
import { CreateTaskButton } from "../../components/CreateTaskButton";

export function Personal() {
  return (
    <View style={styles.container}>
      <Banner name="Personal" />
      <PersonalTasks />
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