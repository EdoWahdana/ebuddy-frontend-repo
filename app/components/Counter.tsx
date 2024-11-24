'use client';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement } from '../store/features/counterSlice';
import { Box, Typography, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Counter: {count}
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(decrement())}
            startIcon={<RemoveIcon />}
            size="large"
          >
            Decrease
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(increment())}
            startIcon={<AddIcon />}
            size="large"
          >
            Increase
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
