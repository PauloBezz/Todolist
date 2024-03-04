import { View, Modal, ActivityIndicator } from "react-native";
import { Logo } from '../../../assets/svg/Logo'
import { styles } from './style'

export default function Loading({visible}) {
    return (
        <Modal transparent visible={visible}>
        <View style={styles.container}> 
            <Logo/>
            <ActivityIndicator 
            size={"large"}
            color={'purple'}
            animating={true}
            style={styles.load}/>
        </View>
        </Modal>
    );
}