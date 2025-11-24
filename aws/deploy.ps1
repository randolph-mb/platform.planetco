$StackName = "planetco-news-backend"
$TemplateFile = "aws/template.yaml"

Write-Host "Deploying CloudFormation stack: $StackName..."
aws cloudformation deploy --template-file $TemplateFile --stack-name $StackName --capabilities CAPABILITY_IAM

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!"
    $ApiUrl = aws cloudformation describe-stacks --stack-name $StackName --query "Stacks[0].Outputs[?OutputKey=='ApiUrl'].OutputValue" --output text
    Write-Host "API URL: $ApiUrl"
    
    # Save API URL to a file for the agent to read
    $ApiUrl | Out-File "aws/api_url.txt"
} else {
    Write-Host "Deployment failed."
    exit 1
}
