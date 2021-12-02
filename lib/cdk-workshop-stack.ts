import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import { HitCounter } from './hitcounter';
import { TableViewer } from 'cdk-dynamo-table-viewer';

export class CdkWorkshopStack extends cdk.Stack {
  public readonly hcViewUrl: cdk.CfnOutput;
  public readonly hcEndPoint: cdk.CfnOutput;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    const hellowWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    })

    const gateway = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hellowWithCounter.handler
    });

    const tv = new TableViewer(this, 'ViewHitCounter', {
      title: 'Hello Hits',
      table: hellowWithCounter.table,
      sortBy: "-hits"
    });

    this.hcEndPoint = new cdk.CfnOutput(this, 'GatewayUrl', {
      value: gateway.url
    });

    this.hcViewUrl = new cdk.CfnOutput(this, 'TableViewerUrl', {
      value: tv.endpoint
    })
  }
}
