import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class CheckListItem extends React.Component {
    constructor(props) {
        super(props);
        state = {
            checked: false,
        };
    };

    render() {
        const { checked } = this.state;
        return (
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: !checked }); }}
            />
        );
    }
}