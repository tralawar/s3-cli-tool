#!/usr/bin/env node

const AWS = require('./node_modules/aws-sdk');
const yargs = require('./node_modules/yargs');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new AWS.S3();

const argv = yargs
  .command('list', 'List objects in S3 bucket', {
    bucket: {
      description: 'The name of the S3 bucket',
      alias: 'b',
      type: 'string',
    },
  })
  .command('view', 'View object details in S3 bucket', {
    bucket: {
      description: 'The name of the S3 bucket',
      alias: 'b',
      type: 'string',
    },
    key: {
      description: 'The key of the object',
      alias: 'k',
      type: 'string',
    },
  })
  .command('download', 'Download object from S3 bucket', {
    bucket: {
      description: 'The name of the S3 bucket',
      alias: 'b',
      type: 'string',
    },
    key: {
      description: 'The key of the object',
      alias: 'k',
      type: 'string',
    },
    output: {
      description: 'The output file path',
      alias: 'o',
      type: 'string',
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const command = argv._[0];

bucket = argv.bucket;

switch (command) {
  case 'list':
    listObjects(bucket);
    break;
  case 'view':
    viewObjectDetails(bucket, argv.key);
    break;
  case 'download':
    downloadObject(bucket, argv.key, argv.output);
    break;
  default:
    console.log('Invalid command');
    yargs.showHelp();
    break;
}

async function listObjects(bucket) {
  try {
    const data = await s3.listObjectsV2({ Bucket: bucket }).promise();
    data.Contents.forEach((object) => {
      console.log(object.Key);
    });
  } catch (error) {
    console.error('Error listing objects:', error.message);
  }
}

async function viewObjectDetails(bucket, key) {
  try {
    const data = await s3.headObject({ Bucket: bucket, Key: key }).promise();
    console.log('Object details:', data);
  } catch (error) {
    console.error('Error viewing object details:', error.message);
  }
}

async function downloadObject(bucket, key, outputPath) {
  console.log(`Output path: ${outputPath}`); // Add this line
  try {
    const data = await s3.getObject({ Bucket: bucket, Key: key }).promise();
    fs.writeFileSync(outputPath, data.Body);
    console.log(`Downloaded object to ${outputPath}`);
  } catch (error) {
    console.error('Error downloading object:', error.message);
  }
}



