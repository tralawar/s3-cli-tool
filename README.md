# CLI-S3 Tool

CLI-S3 is a simple command-line interface tool for interacting with Amazon S3, a popular cloud storage service provided by Amazon Web Services (AWS). With this tool, you can list objects, view object details, and download objects from an S3 bucket. Amazon S3 provides secure, durable, and highly-scalable object storage, making it a perfect choice for storing and retrieving any amount of data at any time.
---

## Installation
To install the CLI-S3 tool, you can clone the repository or download it as a ZIP file. Then, navigate to the project directory and run the following command:

```
npm i s3-cli-tool -g
```

Alternatively, you can clone the repository or download it as a ZIP file. Then, navigate to the project directory and run the following command:

```
npm install -g .
```

This command installs the CLI-S3 tool as a global package, allowing you to use it from any location on your computer.

Make sure the tool's location is included in your system's PATH environment variable for convenient access.

### On macOS or Linux
Check the global npm installation location by running:

```
npm config get prefix
```

Ensure the global npm installation location is in your PATH. To check your current PATH, run:

```
echo $PATH
```
If the global npm installation location is not in your PATH, you can add it by modifying the `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc` file (depending on your shell). Add the following line to the appropriate file:

```
export PATH=$PATH:/path/to/global/npm/installation
```
Replace `/path/to/global/npm/installation` with the output from step 1.

Save the file, and then restart your terminal or run `source ~/.bashrc`, `source ~/.bash_profile`, or `source ~/.zshrc` to apply the changes.

### On Windows:
Check the global npm installation location by running:

```
npm config get prefix
```

Press the Windows key, type "Environment Variables," and select "Edit the system environment variables."

Click on the "Environment Variables" button near the bottom of the "System Properties" window.

In the "System variables" section, find the "Path" variable, and click on "Edit."

Click on "New" and add the global npm installation location obtained in step 1. Be sure to include the \bin subfolder, like this:

```
C:\path\to\global\npm\installation\bin
```
Replace `C:\path\to\global\npm\installation` with the output from step 1.

Click "OK" to save your changes, and then close all the remaining windows.

## Setup
Before you can use the CLI-S3 tool, you need to set up your AWS credentials. Create a `.env` file in the project directory using the provided `.env.example` file as a template. Fill in the necessary information, such as your AWS access key ID, secret access key, and the desired AWS region.

```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_aws_region
```

Note: Remember to never share your AWS credentials or include them in your version control system. Add the .env file to your .gitignore file if you plan to push your project to a remote repository.

## Usage
The CLI-S3 tool provides three main commands: list, view, and download.

### List objects in an S3 bucket
To list the objects in an S3 bucket, run the following command:

```
cliS3 list -b bucket_name
```

Replace bucket_name with the name of the desired S3 bucket.

### View object details in an S3 bucket
To view the details of an object in an S3 bucket, run the following command:


```
cliS3 view -b bucket_name -k object_key
```

Replace bucket_name with the name of the desired S3 bucket and object_key with the key of the object you want to view.

### Download an object from an S3 bucket
To download an object from an S3 bucket to a local file, run the following command:


```
cliS3 download -b bucket_name -k object_key -o output_path
```

Replace bucket_name with the name of the desired S3 bucket, object_key with the key of the object you want to download, and output_path with the local file path where you want to save the downloaded object.

## Contributing
If you'd like to contribute to the development of CLI-S3, feel free to submit a pull request or create an issue on the project's [GitHub repository](https://github.com/tralawar/s3-cli-tool). We welcome any suggestions and improvements.

## License
This project is licensed under the MIT License.
