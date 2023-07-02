import { Text, View, Pressable, StyleSheet } from "react-native"; 
const PlaceItem = (props) => {
    const place = props.place;
    return (
        <Pressable onPress={props.onSelect}>
            <Image source={{uri: place.imageUri}} />
            <View>
                <Text>place.title</Text>
                <Text>place.address</Text>
            </View>
        </Pressable>
    )
};

export default PlaceItem;
const styles = StyleSheet.create({
    
});

