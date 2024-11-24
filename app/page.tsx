"use client";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { clearUser } from "./store/features/authSlice";
import { useRouter } from "next/navigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSignOut = () => {
    dispatch(clearUser());
    router.push("/login");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)"
            : "linear-gradient(145deg, #f0f0f0 0%, #ffffff 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "200%",
            height: "100%",
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(0,0,0,0) 70%)"
                : "radial-gradient(circle, rgba(25,118,210,0.05) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0,
          },
        }}
      >
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ transform: "scale(1.2)", mb: 4 }}>
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              style={{
                filter:
                  theme.palette.mode === "dark"
                    ? "drop-shadow(0 0 0.5rem rgba(255,255,255,0.2))"
                    : "none",
              }}
            />
          </Box>

          {user ? (
            <Paper
              elevation={6}
              sx={{
                p: 4,
                width: "100%",
                maxWidth: 450,
                textAlign: "center",
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 32px rgba(0,0,0,0.3)"
                    : "0 8px 32px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Welcome back!
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {user.name || "User"}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                {user.email}
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={handleSignOut}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                Sign Out
              </Button>
            </Paper>
          ) : (
            <Paper
              elevation={6}
              sx={{
                p: 4,
                width: "100%",
                maxWidth: 450,
                textAlign: "center",
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 32px rgba(0,0,0,0.3)"
                    : "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Welcome to Next.js App
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Please sign in to continue
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="/login"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                Sign In
              </Button>
            </Paper>
          )}
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <IconButton href="https://github.com" icon={<GitHubIcon />} />
          <IconButton href="https://linkedin.com" icon={<LinkedInIcon />} />
        </Box>
      </Box>
    </Container>
  );
}

const IconButton = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Button
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      minWidth: "auto",
      width: 45,
      height: 45,
      borderRadius: "50%",
      color: "text.secondary",
      "&:hover": {
        color: "primary.main",
        backgroundColor: "action.hover",
      },
    }}
  >
    {icon}
  </Button>
);
