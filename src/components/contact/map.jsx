import React from "react";
import { config } from "../../helpers/config";

const Map = () => {
  return (
    <iframe
      src={config.contact.mapEmbedURL}
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={config.contact.address}
    ></iframe>
  );
};

export default Map;
