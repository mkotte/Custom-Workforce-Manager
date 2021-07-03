import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function FormSelect() {
    const classes = useStyles();
    const [services, setServices] = useState([])
    const [selectedService, setSelectedService] = useState([]);


    useEffect(() => {
        API.getServices()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                setServices(res.data.forEach(service => services.push(service._id)))
            })
            .catch((err) => console.log(err))
    }, []);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="service-selector-label">Services</InputLabel>
                <Select
                    labelId="service-selector-label"
                    id="service-selector"
                    multiple
                    value={selectedService}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >

                    {console.log(services)}
                    {services.map((service) => (
                        <div>
                            <MenuItem key={service} value={service}>
                                <Checkbox checked={selectedService.indexOf(service) > -1} />
                                <ListItemText primary={service} />
                            </MenuItem>
                        </div>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}