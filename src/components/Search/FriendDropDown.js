import React from 'react'
import {filter} from '../Search/utils'
import Autocomplete from '@material-ui/lab/Autocomplete';

function FriendDropDown() {
    return (
        <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
/>

    )
}

export default FriendDropDown;
