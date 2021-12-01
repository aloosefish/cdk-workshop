# Intro to AWS CDK

This is an introductory AWS CDK project based on the below tutorial. It features a custom 'HitCounter' Construct (invoked by a Lambda Function) that counts the number of visitors to different endpoints. This tally is saved in a DynamoDB instance that is displayed using the [TableViewer](https://www.npmjs.com/package/cdk-dynamo-table-viewer) Construct.

There are basic Jest tests.
There is also a basic pipeline.

This is my very first time working with the AWS CDK.

Most of this should probably work (build and deploy) without updates. Two things that need to be updated are following variables in `test/hitcounter.test.ts` : 

```
DOWNSTREAM_FUNCTION_NAME
HITS_TABLE_NAME
 ```   

They will need to be updated to whatever their generated names are in your instance.

To run this code you will need Admin-Level programmatic access to an AWS account.

Everything but the pipeline portion was within the Free Tier to deploy and run for about an hour.

Remember to run `cdk destroy` after you are finished.

## Full Tutorial  
See [this useful workshop](https://cdkworkshop.com/20-typescript.html) on working with the AWS CDK for Typescript projects.


## Commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk destroy`    terminates all resources in the stack
