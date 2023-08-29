import React from 'react';
import Grid from '@mui/material/Grid';

function Loader() {
  return (
    <Grid container spacing={2} minHeight={160}>
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <div className={'customLoader'}></div>
      </Grid>
    </Grid>
  );
}
export default Loader;
