import { View, StyleSheet } from "react-native"

import { Banner } from "../../components/Banner";
import { ProfessionalTasks } from "../../components/AllTasks/ProfessionalTasks";
import { CreateTaskButton } from "../../components/CreateTaskButton";

export function Professional() {
  return (
    <View style={styles.container}>
      <Banner name="Professional" />
      <ProfessionalTasks />
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