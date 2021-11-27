import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const CommonCard = (props) => {
  const {
    isImgReq,
    imgSrc,
    imgAlt,
    isActionReq,
    cardHeader,
    cardContent,
    className,
  } = props;
  return (
    <Card sx={{ minWidth: 300 }} className={className}>
      {isImgReq && (
        <CardMedia component="img" height="140" image={imgSrc} alt={imgAlt} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardHeader}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContent}
        </Typography>
      </CardContent>
      {isActionReq && (
        <CardActions>
          <Button size="small">Cancel</Button>
        </CardActions>
      )}
    </Card>
  );
};

CommonCard.propTypes = {
  isImgReq: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  isActionReq: PropTypes.bool,
  cardHeader: PropTypes.string,
  cardContent: PropTypes.string,
  className: PropTypes.string,
};

export default CommonCard;
