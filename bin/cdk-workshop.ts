#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WorkShopPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new WorkShopPipelineStack(app, 'CdkWorkshopPipelineStack');