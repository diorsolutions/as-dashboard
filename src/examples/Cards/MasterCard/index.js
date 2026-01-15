/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import billingCard from "assets/images/billing-background-card.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import PropTypes from "prop-types";
import { RiMastercardFill } from "react-icons/ri";

function MasterCard({ number, valid, cvv }) {
  console.log("MasterCard number prop received:", number);

  // Ensure number is a string, defaulting to "0000000000000000" if it's null, undefined, or an empty string.
  const rawNumberString = (number === null || number === undefined || number === "")
    ? "0000000000000000"
    : String(number);

  console.log("MasterCard rawNumberString (after initial conversion):", rawNumberString);

  // Remove non-digit characters and ensure it's exactly 16 digits long
  let safeNumberString = rawNumberString.replace(/\D/g, ''); // Remove non-digits
  if (safeNumberString.length < 16) {
    safeNumberString = safeNumberString.padEnd(16, '0'); // Pad with '0' if too short
    console.warn("MasterCard: 'number' prop was too short, padded with zeros:", safeNumberString);
  } else if (safeNumberString.length > 16) {
    safeNumberString = safeNumberString.substring(0, 16); // Truncate if too long
    console.warn("MasterCard: 'number' prop was too long, truncated:", safeNumberString);
  }

  console.log("MasterCard final safeNumberString (16 digits):", safeNumberString);

  const num1 = safeNumberString.slice(0, 4);
  const num2 = safeNumberString.slice(4, 8);
  const num3 = safeNumberString.slice(8, 12);
  const num4 = safeNumberString.slice(12, 16);

  return (
    <Card sx={{ background: `url('${billingCard}')`, backdropfilter: "blur(31px)" }}>
      <VuiBox p={2} pt={0}>
        <VuiBox
          color="white"
          lineHeight={0}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          sx={{ width: "100%" }}
        >
          <VuiTypography color="white" variant="lg" fontWeight="bold" mr="auto">
            Vision UI
          </VuiTypography>
          <RiMastercardFill size="48px" color="white" />
        </VuiBox>
        <VuiTypography
          variant="h4"
          color="white"
          mt="auto"
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            mt: 8,
            pb: 1,
            [breakpoints.only("sm")]: {
              fontSize: "22px",
            },
          })}
        >
          {num1}&nbsp;&nbsp;&nbsp;{num2}&nbsp;&nbsp;&nbsp;{num3}&nbsp;&nbsp;&nbsp;{num4}
        </VuiTypography>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center">
          <VuiBox display="flex" alignItems="center">
            <VuiBox mr={3} lineHeight={1}>
              <VuiTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                VALID THRU
              </VuiTypography>
              <VuiTypography
                variant="h6"
                color="white"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {valid}
              </VuiTypography>
            </VuiBox>
            <VuiBox lineHeight={1}>
              <VuiTypography variant="xxs" color="white" fontWeight="medium" opacity={0.8}>
                CVV
              </VuiTypography>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                {cvv}
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MasterCard
MasterCard.defaultProps = {
  color: "dark",
  number: "0000000000000000", // Default to a 16-digit string
};

// Typechecking props for the MasterCard
MasterCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "text",
  ]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow string or number
  valid: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
};

export default MasterCard;