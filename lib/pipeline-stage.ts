import { CdkWorkshopStack } from './cdk-workshop-stack';
import { Stage, Construct, StageProps, CfnOutput } from '@aws-cdk/core';

export class WorkshopPipelineStage extends Stage {
    public readonly hcViewerUrl: CfnOutput;
    public readonly hcEndPoint: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new CdkWorkshopStack(this, 'WebService');

        this.hcEndPoint = service.hcEndPoint;
        this.hcViewerUrl = service.hcViewUrl;
    }
}