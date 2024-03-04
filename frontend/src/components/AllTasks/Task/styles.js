import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPersonal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'rgba(255, 134, 87, 0.3)',
        borderRadius: 5
        
    },
    containerProfessional: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'rgba(49, 140, 231, 0.3)',
        borderRadius: 5
    },
    containerAcademic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'rgba(210, 211, 213, 0.3)',
        borderRadius: 5
    },
    containerSocial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'rgba(251, 212, 116, 0.3)',
        borderRadius: 5
    },
    title: {
        fontSize: 14,
        fontWeight: '500'
    },
    date: {
        fontSize: 10,
        fontWeight: '500',
        opacity: 0.2
    },
    actions: {
        alignItems: 'center',
        flexDirection: 'row',
        gap:40
    }
})