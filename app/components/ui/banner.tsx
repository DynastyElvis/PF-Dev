import React from "react";
import { Box, Button } from "@mui/material";

interface BannerProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, title, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "40px",
        borderRadius: "13px",
        height: {
          xs: "450px", // Height for mobile view
          md: "300px", // Height for web view
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        display: "flex",
        flexDirection: {
          xs: "column", // Stack vertically on mobile
          md: "row", // Align horizontally on web
        },
        alignItems: {
          xs: "center", // Center content vertically on mobile
          md: "flex-start", // Align items to the start on web
        },
        justifyContent: {
          xs: "center", // Center content horizontally on mobile
          md: "flex-start", // Align items to the start on web
        },
        padding: "2rem",
      }}
    >
<Box
  sx={{
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: 1,
    textAlign: {
      xs: "center", // Center text on mobile
      md: "left",   // Left align text on web
    },
    width: "auto",
    height: {
      xs: 'auto',   // Auto height for mobile
      md: 'calc(100% - 2rem)',  // Adjusted height for web (subtracting margin or padding if needed)
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
  }}
>
  <h2 style={{ margin: 0, color: "white", fontWeight: "" }}>
    {title}
  </h2>

  {/* Button below the title */}
</Box>

      <Box
        sx={{
          position: "absolute",
          bottom: {
            xs: "1rem", // Bottom for mobile
            md: "4rem", // Bottom for web
          },
          right: "1rem",
          top: {
            xs: "9rem", // Top margin for mobile
            md: "auto", // No top margin for web
          },
          zIndex: 1,
          textAlign: {
            xs: "center", // Center text on mobile
            md: "right", // Right align text on web
          },
          width: {
            xs: "auto", // Auto width on mobile
            md: "50%", // 50% width on web
          },
        }}
      >
        <p style={{ margin: 0, color: "white" }}>{description}</p>
        <Button
          sx={{
            width: {
              xs: "90%", // Adjust width for mobile
              md: "405px", // Fixed width for web
            },
            mt: {
              xs: "0.6rem", // Margin top for mobile
              md: "2.6rem", // Margin top for web
            },
            backgroundColor: "white",
            borderRadius: {
              xs: "20px", // Smaller radius for mobile
              md: "20px", // Larger radius for web
            },
            justifyContent: "center",
            color: "black",
            textTransform: "none", // Prevent button from making text uppercase
            transition: "background-color 0.4s ease, color 0.9s ease",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <p style={{ margin: 0 }}>Explore Us</p>
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
