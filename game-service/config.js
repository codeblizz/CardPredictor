const config = {
    MYSQL: {
      HOST: "192.168.10.187",
      USERNAME: "localphp7",
      PASSWORD: "jydvdyfgsv#$%",
      PORT: 3306,
      DATABASE: "dev_omanair",
      CONNECTION_LIMIT: 30,
    },
    MYSQL_READ_ONLY: {
      HOST: "192.168.10.187",
      USERNAME: "localphp7",
      PASSWORD: "jydvdyfgsv#$%",
      PORT: 3306,
      DATABASE: "dev_omanair",
      CONNECTION_LIMIT: 30,
    },
    SMTP: {
      HOST: "smtp.gmail.com",
      PORT: 465,
      USERNAME: "support@tpconnects.com",
      PASSWORD: "itaggregator@670tpc",
      SECURE_CONNECTION: true,
    },
    SENDGRID: {
      APIKEY: "",
    },
    NODEJS: {
      PORT: 5005,
    },
    CLIENT: {
      PREFIX: "/",
      NODE_URL: "http://localhost:5005",
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
  