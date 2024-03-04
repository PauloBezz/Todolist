import { View, StyleSheet } from "react-native"
import { Head } from "../../components/Head/"
import { Categories } from "../../components/Categories"
import { CreateTaskButton } from "../../components/CreateTaskButton"
import { AllTasks } from "../../components/AllTasks"

import { First } from '../First/index'
import { Second } from '../Second/index'
import { Three } from '../Three/index'

export function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Head />
            <Categories navigation={navigation} />
            {/* <First/>
            <Second/>
            <Three/> */}
            <AllTasks />
            <CreateTaskButton />
        </View>
    )
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