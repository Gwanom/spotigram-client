  const prod = {
    spotigramURL: "http://spotigram-env-1.m2phmu28yw.us-east-2.elasticbeanstalk.com/"
  };
  
  export const environment = process.env.NODE_ENV === "production" ? prod : dev;
  