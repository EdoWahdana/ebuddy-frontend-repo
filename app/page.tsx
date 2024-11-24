import Image from "next/image";
import Counter from "./components/Counter";
import { Container, Box, Typography, Button, Stack, Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import WebIcon from '@mui/icons-material/Web';
import PublicIcon from '@mui/icons-material/Public';

export default function Home() {
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
          
          <Counter />

          <Stack spacing={2} sx={{ typography: 'body1', fontFamily: 'var(--font-geist-mono)' }}>
            <Box display="flex" gap={1} alignItems="center">
              <CodeIcon fontSize="small" />
              <Typography>
                Get started by editing{" "}
                <Box component="code" sx={{ 
                  bgcolor: 'action.hover', 
                  px: 1, 
                  py: 0.5, 
                  borderRadius: 1,
                  fontWeight: 600 
                }}>
                  app/page.tsx
                </Box>
              </Typography>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
              <LaunchIcon fontSize="small" />
              <Typography>
                Save and see your changes instantly.
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<WebIcon />}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              size="large"
            >
              Deploy now
            </Button>
            <Button
              variant="outlined"
              startIcon={<MenuBookIcon />}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              size="large"
            >
              Read our docs
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="/login"
              size="large"
            >
              Sign In
            </Button>
          </Stack>
        </Box>

        <Box component="footer" sx={{ mt: 'auto', py: 2 }}>
          <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
            <Link
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              underline="hover"
            >
              <SchoolIcon fontSize="small" />
              Learn
            </Link>
            <Link
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              underline="hover"
            >
              <WebIcon fontSize="small" />
              Examples
            </Link>
            <Link
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              underline="hover"
            >
              <PublicIcon fontSize="small" />
              Go to nextjs.org →
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
