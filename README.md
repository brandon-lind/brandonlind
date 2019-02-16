# Brandon Lind

The source for the personal brand of Brandon Lind. 
I've generalized this README so that I can repurpose these instructions on multiple projects.

Technologies include:

- React 16.x
- AWS S3
- AWS Cloudfront
- AWS Lambda (node 8.10) + AWS API Gateway for API infrastructure
  - Deployed using the serverless framework [serverless framework](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
- AWS SES

## Prerequisites

### AWS Account & CLI

The AWS CLI should be installed and configured on your local machine.

- Create a profile in the credentials file ~/.aws/credentials

  ```bash
    [default]
    aws_access_key_id = <YOUR_ACCESS_KEY_ID_FOR_THIS_PROJECT>
    aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY_FOR_THIS_PROJECT>
  ```

### Node

This project assumes at least node version 8.10 is installed and configured on your local machine.

## Setup

- Make a copy of the env.default.yml named env.yml
  - Replace the blank values in env.yml with real values for all of the environments you are targeting
- Create S3 website buckets for both the bare domain and the www variant
  - Set the www bucket to redirect to the bare domain
- Create Cloudfront distributions for both the bare and the www websites 
- Install the project dependencies with `npm i`

## Run & Deploy

Once setup is complete, you can either run this project locally, or deploy it to a hosted environment.

- To run the entire project locally: `npm start`
  - To run just the website: `npm run start-web`
  - To run just the API service: `npm run start-svc`
- To deploy the entire project to production: `npm run deploy`
  - To deploy just the website: `npm run deploy-web`
  - To deploy just the API service: `npm run deploy-svc`
