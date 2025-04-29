import '@aws-sdk/crc64-nvme-crt';

import { processVideo } from "./videoProcessor.js";
import { downloadFromS3 } from "./s3.js";

const main = async () => {
  // Set the bucket name and key for the input video which were passed from SQS processer application
  const bucketName = process.env.VIDEO_BUCKET;
  const inputKey = process.env.VIDEO_KEY;
  const inputFilePath = "/tmp/input.mp4";
  const outputDir = "/tmp/output";
  const targetBucket = "whizstream-videos-output";
  const resolutions = ["360", "480", "720","1080"];

  console.log(`Bucket:${bucketName}, Key:${inputKey}`);

  try {
    await downloadFromS3(bucketName, inputKey, inputFilePath);
    await processVideo(
      inputKey,
      inputFilePath,
      outputDir,
      targetBucket,
      resolutions,
    );
    } catch (error) {
    console.error("Error in main process:", error);
  }
};

main();
