const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app43",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m0fi11tgg1.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "YOUR_COGNITO_REGION",
    USER_POOL_ID: "us-east-1_SjmlAidDl",
    APP_CLIENT_ID: "27v4hptrg6nd4jfttfc7hj0g22",
    IDENTITY_POOL_ID: "us-east-1:4892c250-294f-4ad5-b7d8-df91d6bf44ff",
  },
};

export default config;
