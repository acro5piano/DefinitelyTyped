import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class AutocompleteExample extends React.Component<{}> {
    render() {
        return (<GooglePlacesAutocomplete
            query={{
                rankby: 'distance',
                key: 'google-api-key',
            }}
            defaultValue={"Nobhill"}
            renderLeftButton={() => (
                <TouchableOpacity onPress={() => console.log('Hello Im left button')}>
                    <Text>Left button</Text>
                </TouchableOpacity>
            )}
        />);
    }
}
