import * as cdk from '@aws-cdk/core';
import { WorkshopPipelineStage } from './pipeline-stage';
import { CodePipeline, CodePipelineSource, ShellStep } from '@aws-cdk/pipelines';

export class WorkShopPipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);


        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'CDKWorkshopPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('aloosefish/cdk-workshop', 'master'),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });

        const deploy = new WorkshopPipelineStage(this, 'Deploy');
        const deployStage = pipeline.addStage(deploy);
    }
}