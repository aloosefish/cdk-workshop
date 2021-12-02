import * as cdk from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from '@aws-cdk/pipelines';

export class WorkShopPipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // connect Github repo
        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'CDKWorkshopPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('aloosefish/cdk-workshop', 'master'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}