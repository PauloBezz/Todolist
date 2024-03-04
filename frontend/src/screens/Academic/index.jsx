import { View, StyleSheet } from "react-native"

import { Banner } from "../../components/Banner";
import { AcademicTasks } from "../../components/AllTasks/AcademicTasks";
import { CreateTaskButton } from "../../components/CreateTaskButton";

export function Academic() {
  return (
    <View style={styles.container}>
      <Banner name="Academic" />
      <AcademicTasks />
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