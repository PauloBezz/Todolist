import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Category } from "./Category";

export function Categories({ navigation }) {
    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
                horizontal={true}
            >
                <Category name="Personal" navigation={navigation}/>
                <Category name="Professional" navigation={navigation}/>
                <Category name="Academic" navigation={navigation}/>
                <Category name="Social" navigation={navigation}/>
            </ScrollView>
        </View>
    )
}