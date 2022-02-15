import React, { useEffect, useState } from 'react';
import CustomTable from '../src/components/CustomTable';
import CustomFilters from '../src/components/CustomFilters';
import { makeStyles } from '@mui/styles';
import { getList } from './api/apiFunctions';
import {
  Container,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
  },
}));

const Index = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState({});
  useEffect(() => {
    getList(filter).then((res) => {
      setList(res.auditLog);
    });
  }, [filter]);
  return (
    <Container maxWidth="xl" className={classes.root}>
      <CustomFilters handleChangeFilter={(filterItem) => setFilter(filterItem)} />
      <CustomTable rows={list} />
    </Container>
  )
}

export default Index;