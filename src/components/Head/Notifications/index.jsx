import { View } from "react-native"
import { styles } from "./styles"

import { BellICon } from "../../../../assets/svg/BellIcon"
export function Notifications() {
    return (
        <>
            <BellICon />

            <View style={styles.circle}/>
        </>
    )
}