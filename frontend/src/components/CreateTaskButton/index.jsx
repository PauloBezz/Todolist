import { View } from "react-native";
import { styles } from "./styles";
import { PlusIcon } from "../../../assets/svg/PlusIcon";
import { useContext } from "react";
import { BottomSheetContext } from "../../contexts/createTask";

export function CreateTaskButton() {
  const { setIsBottomSheetOpen } = useContext(BottomSheetContext);
  const handleOpenModal = () => setIsBottomSheetOpen(true);

  return (
    <View style={styles.container}>
      <View style={styles.addButton} onTouchEnd={handleOpenModal}>
        <PlusIcon />
      </View>
    </View>
  );
}
