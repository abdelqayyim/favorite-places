import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

const AllPlaces = (props) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => { 
        async function loadPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }

        if (isFocused) {
            loadPlaces();
            // setLoadedPlaces(curPlaces => [...curPlaces, props.route.params.place]);
        }
    }, [isFocused]);
    console.log(loadedPlaces);

    return (
        <PlacesList places={loadedPlaces}/>
    )
};

export default AllPlaces;