import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const Map = (props) => {
    const region = {
        latitude: 37.68,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    return (
        <MapView style={styles.map} initialRegion={region}></MapView>
    )
};

export default Map;
const styles = StyleSheet.create({
    map: {
        flex: 1
    }
}); 