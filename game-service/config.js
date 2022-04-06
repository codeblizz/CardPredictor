const config = {
    MYSQL: {
      HOST: "",
      USERNAME: "",
      PASSWORD: "",
      PORT: "",
      DATABASE: "",
      CONNECTION_LIMIT: 0,
    },
    MYSQL_READ_ONLY: {
      HOST: "",
      USERNAME: "",
      PASSWORD: "",
      PORT: 4000,
      DATABASE: "",
      CONNECTION_LIMIT: 0,
    },
    SMTP: {
      HOST: "",
      PORT: 003,
      USERNAME: "",
      PASSWORD: "",
      SECURE_CONNECTION: true,
    },
    SENDGRID: {
      APIKEY: "",
    },
    NODEJS: {
      PORT: 4000,
    },
    CLIENT: {
      PREFIX: "/",
      NODE_URL: "http://localhost:4000",
      DEV_TOOLS: false,
    },
    FEATURES: {
      DEVELOPMENT: true,
    },
    DEBUG: {
      LOG_STAT: true,
    },
  };
  
  module.exports = config;
  
