'use client';
import Image from "next/image";
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { clearUser } from './store/features/authSlice';
import { useRouter } from 'next/navigation';

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    dispatch(clearUser());
    router.push('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', py: 4 }}>
      <Box display="flex" flexDirection="column" gap={6} alignItems="center" my={4}>
        <Box component="main" display="flex" flexDirection="column" gap={4} alignItems="center">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          {user ? (
            <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 400, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Welcome back!
              </Typography>
              <Typography>
                {user.name || 'User'}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {user.email}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={handleSignOut}
                sx={{ mt: 2 }}
              >
                Sign Out
              </Button>
            </Paper>
          ) : (
            <Button
              variant="contained"
              color="primary"
              href="/login"
              size="large"
            >
              Sign In
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}
