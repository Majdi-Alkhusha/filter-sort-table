import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Button,
} from '@mui/material';

const CustomFilters = (props) => {
    const {
        handleChangeFilter,
    } = props;

    const [filter, setFilter] = useState({});

    const handleChange = (e) => {
        console.log(e.target.name);
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <TextField id="outlined-basic" label="Employee Name" variant="outlined" name="employeeName" value={filter.employeeName} onChange={handleChange} />
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Action Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.actionType}
                        label="action Type"
                        name="actionType"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Type 1</MenuItem>
                        <MenuItem value={2}>Type 1</MenuItem>
                        <MenuItem value={3}>Type 1</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Application Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.applicationType}
                        label="Application Type"
                        name="applicationType"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Type 1</MenuItem>
                        <MenuItem value={2}>Type 1</MenuItem>
                        <MenuItem value={3}>Type 1</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <TextField
                    name="fromDate"
                    label="From Date"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    name="fromDate"
                    defaultValue={filter.fromDate}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                    name="toDate"
                    label="To Date"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    defaultValue={filter.toDate}
                    name="toDate"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                    id="outlined-basic"
                    label="Application ID"
                    placeholder="eg 135135/2021"
                    variant="outlined"
                    value={filter.applicationId}
                    name="applicationId"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={() => handleChangeFilter(filter)}>Search Logger</Button>
            </Grid>
        </Grid>
    );

};

export default CustomFilters;