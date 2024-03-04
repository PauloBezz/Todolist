import { View } from "react-native";
import { styles } from "./styles";
import { Sidebar } from "../../Sidebar";
import { useState } from "react";

export function Menu() {

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
            <Sidebar name={"Atila"} isOpen={sidebarOpen} setIsOpen={setSidebarOpen}/>
        </>
    )
}