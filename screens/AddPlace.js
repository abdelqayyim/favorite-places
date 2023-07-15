import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = (props) => {
    async function createPlaceHandler(place) {
        await insertPlace(place);
        props.navigation.navigate("AllPlaces");
    }
    return (
        <PlaceForm onCreatePlace={createPlaceHandler } />
    )
};

export default AddPlace;