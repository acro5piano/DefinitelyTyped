// Type definitions for react-native-google-places-autocomplete 1.3
// Project: https://github.com/FaridSafi/react-native-google-places-autocomplete
// Definitions by: Kazuya Gosho <https://github.com/acro5piano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ImageStyle, StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

// @see https://developers.google.com/maps/faq#languagesupport
export type Language =
| 'ar'
| 'be'
| 'bg'
| 'bn'
| 'ca'
| 'cs'
| 'da'
| 'de'
| 'el'
| 'en'
| 'en-Au'
| 'en-GB'
| 'es'
| 'eu'
| 'fa'
| 'fi'
| 'fil'
| 'fr'
| 'gl'
| 'gu'
| 'hi'
| 'hr'
| 'hu'
| 'id'
| 'it'
| 'iw'
| 'ja'
| 'kk'
| 'kn'
| 'ko'
| 'ky'
| 'lt'
| 'lv'
| 'mk'
| 'ml'
| 'mr'
| 'my'
| 'nl'
| 'no'
| 'pa'
| 'pl'
| 'pt'
| 'pt-BR'
| 'pt-PT'
| 'ro'
| 'ru'
| 'sk'
| 'sl'
| 'sq'
| 'sr'
| 'sv'
| 'ta'
| 'te'
| 'th'
| 'tl'
| 'tr'
| 'uk'
| 'uz'
| 'vi'
| 'zh-CN'
| 'zh-TW';

export type SearchType =
| 'accounting'
| 'airport'
| 'amusement_park'
| 'aquarium'
| 'art_gallery'
| 'atm'
| 'bakery'
| 'bank'
| 'bar'
| 'beauty_salon'
| 'bicycle_store'
| 'book_store'
| 'bowling_alley'
| 'bus_station'
| 'cafe'
| 'campground'
| 'car_dealer'
| 'car_rental'
| 'car_repair'
| 'car_wash'
| 'casino'
| 'cemetery'
| 'church'
| 'city_hall'
| 'clothing_store'
| 'convenience_store'
| 'courthouse'
| 'dentist'
| 'department_store'
| 'doctor'
| 'electrician'
| 'electronics_store'
| 'embassy'
| 'fire_station'
| 'florist'
| 'funeral_home'
| 'furniture_store'
| 'gas_station'
| 'gym'
| 'hair_care'
| 'hardware_store'
| 'hindu_temple'
| 'home_goods_store'
| 'hospital'
| 'insurance_agency'
| 'jewelry_store'
| 'laundry'
| 'lawyer'
| 'library'
| 'liquor_store'
| 'local_government_office'
| 'locksmith'
| 'lodging'
| 'meal_delivery'
| 'meal_takeaway'
| 'mosque'
| 'movie_rental'
| 'movie_theater'
| 'moving_company'
| 'museum'
| 'night_club'
| 'painter'
| 'park'
| 'parking'
| 'pet_store'
| 'pharmacy'
| 'physiotherapist'
| 'plumber'
| 'police'
| 'post_office'
| 'real_estate_agency'
| 'restaurant'
| 'roofing_contractor'
| 'rv_park'
| 'school'
| 'shoe_store'
| 'shopping_mall'
| 'spa'
| 'stadium'
| 'storage'
| 'store'
| 'subway_station'
| 'supermarket'
| 'synagogue'
| 'taxi_stand'
| 'train_station'
| 'transit_station'
| 'travel_agency'
| 'veterinary_care'
| 'zoo';

export type PlaceType =
| 'administrative_area_level_1'
| 'administrative_area_level_2'
| 'administrative_area_level_3'
| 'administrative_area_level_4'
| 'administrative_area_level_5'
| 'colloquial_area'
| 'country'
| 'establishment'
| 'finance'
| 'floor'
| 'food'
| 'general_contractor'
| 'geocode'
| 'health'
| 'intersection'
| 'locality'
| 'natural_feature'
| 'neighborhood'
| 'place_of_worship'
| 'political'
| 'point_of_interest'
| 'post_box'
| 'postal_code'
| 'postal_code_prefix'
| 'postal_code_suffix'
| 'postal_town'
| 'premise'
| 'room'
| 'route'
| 'street_address'
| 'street_number'
| 'sublocality'
| 'sublocality_level_4'
| 'sublocality_level_5'
| 'sublocality_level_3'
| 'sublocality_level_2'
| 'sublocality_level_1'
| 'subpremise';

export type AutocompleteRequestType = '(regions)' | '(cities)' | 'geocode' | 'address' | 'establishment';

export interface DescriptionRow {
    description: string;
    id: string;
    matched_substrings: MatchedSubString[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: PlaceType[];
}

export interface MatchedSubString {
    length: number;
    offset: number;
}

export interface Term {
    offset: number;
    value: string;
}

export interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: object[][];
    secondary_text: string;
    secondary_text_matched_substrings: object[][];
    terms: Term[];
    types: PlaceType[];
}

export interface GooglePlaceData {
    description: string;
    id: string;
    matched_substrings: MatchedSubString[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
}

export interface Point {
    lat: number;
    lng: number;
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: PlaceType[];
}

export interface Geometry {
    location: Point;
    viewport: {
        northeast: Point
        southwest: Point
    };
}

export interface GooglePlaceDetail {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    id: string;
    name: string;
    place_id: string;
    reference: string;
    scope: 'GOOGLE';
    types: PlaceType;
    url: string;
    utc_offset: number;
    vicinity: string;
}

// @see https://developers.google.com/places/web-service/autocomplete
export interface Query<T = AutocompleteRequestType> {
    key: string;
    sessiontoken?: string;
    offset?: number;
    location?: {
        latitude: number
        longitude: number
    };
    radius?: number;
    language?: Language;
    components?: string;
    rankby?: string;
    type?: T;
    // deprecated. see https://github.com/FaridSafi/react-native-google-places-autocomplete/pull/384
    types?: T;
}

export interface Styles {
    container: StyleProp<ViewStyle>;
    description: StyleProp<TextStyle>;
    textInputContainer: StyleProp<ViewStyle>;
    textInput: StyleProp<TextStyle>;
    loader: StyleProp<ViewStyle>;
    listView: StyleProp<ViewStyle>;
    predefinedPlacesDescription: StyleProp<TextStyle>;
    poweredContainer: StyleProp<ViewStyle>;
    powered: StyleProp<ImageStyle>;
    separator: StyleProp<ViewStyle>;
    row: StyleProp<ViewStyle>;
}

export interface Place {
    description: string;
    geometry: { location: Point };
}

export interface GooglePlacesAutocompleteProps extends TextInputProps {
    minLength?: number; // minimum length of text to search
    listViewDisplayed?: 'auto' | boolean;
    fetchDetails?: boolean;
    renderDescription?: (description: DescriptionRow) => string;
    onPress?: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void;
    query: Query;
    getDefaultValue?: () => string;
    styles?: Partial<Styles>;

    // Will add a 'Current location' button at the top of the predefined places list
    currentLocation?: boolean;
    currentLocationLabel?: string;

    // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    nearbyPlacesAPI?: 'GoogleReverseGeocoding' | 'GooglePlacesSearch';

    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    GoogleReverseGeocodingQuery?: {
        bounds?: number
        language?: Language
        region?: string
        components?: string
    };

    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
    GooglePlacesSearchQuery?: Partial<Query<SearchType>>;

    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
    GooglePlacesDetailsQuery?: Partial<Query> & { fields?: string };

    // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
    filterReverseGeocodingByTypes?: PlaceType[];
    predefinedPlaces?: Place[];

    // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    debounce?: number;

    renderLeftButton?: React.ComponentType<{}>;
    renderRightButton?: React.ComponentType<{}>;
}

export class GooglePlacesAutocomplete extends React.Component<GooglePlacesAutocompleteProps> {}
