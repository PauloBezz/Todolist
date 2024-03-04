import { View } from "react-native";
import { styles } from "./styles";
import { Sidebar } from "../../Sidebar";
import { useState } from "react";

export function Menu({navigation}) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <View style={styles.menuContainer} onTouchEnd={() => setSidebarOpen(true)}>
                <View style={styles.squareContainer}>
                    <View style={styles.menuSquares}></View>
                    <View style={styles.menuSquares}></View>
                </View>

                <View style={styles.squareContainer}>
                    <View style={styles.menuSquares}></View>
                    <View style={styles.menuSquares}></View>
                </View>

            </View>
            <Sidebar navigation={navigation} name={"Atila"} isOpen={sidebarOpen} setIsOpen={setSidebarOpen}/>
        </>
    )
}