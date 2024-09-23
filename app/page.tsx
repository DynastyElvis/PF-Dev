"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation"; // Already imported in your code
import Banner from "./components/ui/banner"; // Adjust the import path as needed

// Tabs data
// const tabs = [
//   {
//     title: "PERFOMANCE 1",
//     content: {
//       h4: "Tab 1 Content Title",
//       description: "This is the description for Tab 1.",
//     },
//   },
//   {
//     title: "PERFOMANCE 2",
//     content: {
//       h4: "Tab 2 Content Title",
//       description: "This is the description for Tab 2.",
//     },
//   },
//   {
//     title: "PERFOMANCE 3",
//     content: {
//       h4: "Tab 3 Content Title",
//       description: "This is the description for Tab 3.",
//     },
//   },
//   {
//     title: "PERFOMANCE 4",
//     content: {
//       h4: "Tab 4 Content Title",
//       description: "This is the description for Tab 4.",
//     },
//   },
// ];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter(); // Move this line inside the Home component

  const handleEnrollClick = () => {
    console.log("Enroll button clicked!");
  };

  return (
    <main>
      <Container>
        <h1 style={{ color: "red", margin: "0 auto", textAlign: "center" }}>
          Karibu
        </h1>
        <h6 style={{ margin: "0 auto", textAlign: "center" }}>
          WELCOME TO THE PROVIDENT FUND
        </h6>
        <p style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
          At the Provident Fund, we are committed to safeguarding your financial
          future. Join thousands of your colleagues who have already secured
          their retirement with us. Together, let’s ensure that your golden
          years are truly golden. Enroll in the Provident Fund and take the
          first step towards a secure retirement. Your dedication to the
          aviation industry deserves nothing less.
        </p>

        {/* Add the button with custom width and height */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            label="Login To Members Portal"
            onClick={handleEnrollClick}
            width="200px"
            height="40px"
          />
        </div>
        <p
          style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          <b>Rated </b>(4.9 of 5) <b>By Top Brands</b>{" "}
        </p>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Provident Fund Summary"
              title="Provident Fund Summary"
              width="625px"
              height="196px"
              fadeDuration="0.8s"
            />
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Another Summary"
              title="Another Summary"
              width="300px"
              height="196px"
              fadeDuration="0.8s"
            />
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Yet Another Summary"
              title="Yet Another Summary"
              width="300px"
              height="196px"
              fadeDuration="0.8s"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Another Summary"
              title="Another Summary"
              width="300px"
              height="196px"
              fadeDuration="0.8s"
            />
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Yet Another Summary"
              title="Yet Another Summary"
              width="300px"
              height="196px"
              fadeDuration="0.8s"
            />
            <Card
              imageSrc="/images/navbar/nav-banner-media.png"
              altText="Provident Fund Summary"
              title="Provident Fund Summary"
              width="625px"
              height="196px"
              fadeDuration="0.8s"
            />
          </div>
        </div>

        {/* cards end  */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column", // Stack items vertically on mobile
              sm: "row", // Align items horizontally on larger screens
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "center", // Center items on mobile
              sm: "flex-start", // Align items normally on larger screens
            },
            marginTop: "40px",
            gap: "20px",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: 1,
              minWidth: "300px",
              textAlign: {
                xs: "center", // Center text on mobile
                sm: "inherit", // Inherit text alignment on larger screens
              },
            }}
          >
            <h2 style={{ margin: 0 }}>
              Why Choose <br />
              Our Provident Fund?
            </h2>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center", // Center button on mobile view
                  sm: "flex-start", // Align to the left on larger screens
                },
                marginTop: "15px",
              }}
            >
              <Button
                label="Talk To Us"
                onClick={() => router.push("/contacts")} // Updated to navigate to /contacts
                width="300px"
                height="40px"
              />
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              flex: 1,
              minWidth: "300px",
              textAlign: {
                xs: "center", // Center text on mobile
                sm: "right", // Align text to the right on larger screens
              },
            }}
          >
            <Box sx={{ marginTop: "20px" }}>
              <h4 style={{ margin: 0 }}>Our Mission</h4>
              <p className="vision-text">
                Our mission is to empower the employees with a secure and
                transparent pension plan that fosters financial independence and
                peace of mind, ensuring a comfortable and dignified retirement.
              </p>
              <style jsx>{`
                .vision-text {
                  margin: 0;
                  max-width: 100%; // Default for larger screens
                }
                @media (max-width: 768px) {
                  .vision-text {
                    max-width: 300px; // Adjusted width for mobile view
                  }
                }
              `}</style>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <h4 style={{ margin: 0 }}>Our Vision</h4>
              <p className="vision-text">
                Our vision is to be the leading provider of provident fund
                services in the region, known for our commitment to excellence
                and our ability to meet the evolving needs of our members.
              </p>
              <style jsx>{`
                .vision-text {
                  margin: 0;
                  max-width: 100%; // Default for larger screens
                }
                @media (max-width: 768px) {
                  .vision-text {
                    max-width: 300px; // Adjusted width for mobile view
                  }
                }
              `}</style>
            </Box>
          </Box>
        </Box>

        <Box>
          <Banner
            imageSrc="/images/banner/banner-image-2.jpg"
            title="Your Future, Our Commitment"
            description="At the Provident Fund, we are committed to safeguarding your financial future. Join thousands of your colleagues who have already secured their retirement with us. Together, let’s ensure that your golden years are truly golden."
          />
        </Box>

        {/* <Box sx={{ display: "flex", marginTop: "60px", padding: "20px" }}>
          <Box sx={{ width: "50%", paddingRight: "20px" }}>
            <h6 style={{ color: "red" }}>Fund Performance</h6>
            <h2>Prudent investment strategy, focused on your future</h2>
            <p>
              Our goal is to ensure that your contributions today lead to a
              prosperous tomorrow.
            </p>
          </Box>

          <Box sx={{ width: "50%", paddingLeft: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {tabs.map((tab, index) => (
                <h6
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{
                    color: activeTab === index ? "red" : "black", 
                    padding: "10px",
                    cursor: "pointer",
                    margin: 0, 
                    textDecoration: "none",
                    borderBottom:
                      activeTab === index ? "2px solid black" : "none", 
                    transition: "border-bottom 0.3s ease", 
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.borderBottom = "2px solid black"; 
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.borderBottom = "none"; 
                    }
                  }}
                >
                  {tab.title}
                </h6>
              ))}
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <h4>{tabs[activeTab].content.h4}</h4>
              <p>{tabs[activeTab].content.description}</p>
            </Box>
          </Box>
        </Box> */}
      </Container>
    </main>
  );
}
