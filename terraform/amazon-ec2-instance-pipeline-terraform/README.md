# Amazon EC2 Instance Pipeline with Terraform

The Terraform script performs the following operations to set up an EC2 instance:

1. **EC2 Instance Creation**: The instance is created using a specific AMI and instance type. The instance metadata is set to enforce IMDSv2 for enhanced security.

## Pre-commit Hooks

`.pre-commit-config.yaml` is useful for identifying simple issues before submission to code review. Pointing these issues out before code review, allows a code reviewer to focus on the architecture of a change while not wasting time with trivial style nitpicks. Make sure you have all tools from the requirements section installed for pre-commit hooks to work.

## Manual Installation

Make sure you have all tools from the requirements section installed.

You may change variables in the `00-variables.tf` to meet your requirements.

Initialize a working directory containing Terraform configuration files using the command:

`terraform init`

Run the pre-commit hooks to check for formatting and validation issues:

`pre-commit run --all-files`

Review the changes that Terraform plans to make to your infrastructure using the command:

`terraform plan`

Deploy using the command:

`terraform apply -auto-approve`

## Backend for Terraform State

The `backend` block in the `01-providers.tf` must remain commented until the bucket and the DynamoDB table are created.

After all your resources will be created, you will need to replace empty values for `region` and `bucket` in the `backend` block of the `01-providers.tf` since variables are not allowed in this block.

For `region` you need to specify the region where the S3 bucket and DynamoDB table are located. You need to use the same value that you have in the `00-variables.tf` for the `region` variable.

For `bucket` you will get its values in the output after the first run of `terraform apply -auto-approve`.

After your values are set, you can then uncomment the `backend` block and run again `terraform init` and then `terraform apply -auto-approve`.

In this way, the `terraform.tfstate` file will be stored in an S3 bucket and DynamoDB will be used for state locking and consistency checking.

## SSH

Once you've run `terraform apply` and the resources are successfully created, a private key file will be generated in your project root directory (where your Terraform files are located). This key can be used to securely connect to the created Amazon Lightsail instance via SSH.

Here's an example of how to use the key to connect via SSH (replace myuser with your username and myinstance with your instance's public IP address or hostname):

`ssh -i key-pair-ec2-1.pem ubuntu@instance-static-ip`

## GitHub Actions

`.github` is useful if you are planning to run a pipeline on GitHub and implement the GitOps approach.

Remove the `.example` part from the name of the files in `.github/workflow` for the GitHub Actions pipeline to work.

Note, that you will need to add variables such as AWS_ACCESS_KEY_ID, AWS_DEFAULT_REGION, and AWS_SECRET_ACCESS_KEY in your GitHub projects CI/CD settings section to run your pipeline.

Therefore, you will need to create a service user in advance, using AWS Identity and Access Management (IAM) to get values for these variables and assign an access policy to the user to be able to operate with your resources.

You can delete `.github` if you are not planning to use the GitHub pipeline.

1. **Terraform Unit Tests**

This workflow executes a series of unit tests on the infrastructure code and is triggered by each commit. It begins by running [terraform fmt]( https://www.terraform.io/cli/commands/fmt) to ensure proper code formatting and adherence to terraform best practices. Subsequently, it performs [terraform validate](https://www.terraform.io/cli/commands/validate) to check for syntactical correctness and internal consistency of the code.

To further enhance the code quality and security, two additional tools, tfsec and tflint, are utilized:

tfsec: This step checks the code for potential security issues using tfsec, an open-source security scanner for Terraform. It helps identify any security vulnerabilities or misconfigurations in the infrastructure code.

tflint: This step employs tflint, a Terraform linting tool, to perform additional static code analysis and linting on the Terraform code. It helps detect potential issues and ensures adherence to best practices and coding standards specific to Terraform.

2. **Terraform Plan / Apply**

This workflow runs on every pull request and on each commit to the main branch. The plan stage of the workflow is used to understand the impact of the IaC changes on the environment by running [terraform plan](https://www.terraform.io/cli/commands/plan). This report is then attached to the PR for easy review. The apply stage runs after the plan when the workflow is triggered by a push to the main branch. This stage will take the plan document and [apply](https://www.terraform.io/cli/commands/apply) the changes after a manual review has signed off if there are any pending changes to the environment.

3. **Terraform Drift Detection**

This workflow runs on a periodic basis to scan your environment for any configuration drift or changes made outside of terraform. If any drift is detected, a GitHub Issue is raised to alert the maintainers of the project.

If you have paid version of GitHub and you wish to have the approval process implemented, please refer to the provided [guide](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment#creating-an-environment) to create an environment called production and uncomment this part in the `02-terraform-plan-apply.yml`:

```
on:
  push:
    branches:
    - main
  pull_request:
    branches:
    - main
```

And comment out this part in the `02-terraform-plan-apply.yml`:

```
on:
  workflow_run:
    workflows: [Terraform Unit Tests]
    types:
      - completed
```

Once the production environment is created, set up a protection rule and include any necessary approvers who must approve production deployments. You may also choose to restrict the environment to your main branch. For more detailed instructions, please see [here](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).

If you have a free version of GitHub no action is needed, but approval process will not be enabled.

## GitLab CI/CD

`.gitlab-ci.yml` is useful if you are planning to run a pipeline on GitLab and implement the GitOps approach.

Remove the `.example` part from the name of the file `.gitlab-ci.yml` for the GitLab pipeline to work.

Note, that you will need to add variables such as AWS_ACCESS_KEY_ID, AWS_DEFAULT_REGION, and AWS_SECRET_ACCESS_KEY in your GitLab projects CI/CD settings section to run your pipeline.

Therefore, you will need to create a service user in advance, using AWS Identity and Access Management (IAM) to get values for these variables and assign an access policy to the user to be able to operate with your resources.

You can delete `.gitlab-ci.yml` if you are not planning to use the GitLab pipeline.

1. **Terraform Unit Tests**

This workflow executes a series of unit tests on the infrastructure code and is triggered by each commit. It begins by running [terraform fmt]( https://www.terraform.io/cli/commands/fmt) to ensure proper code formatting and adherence to terraform best practices. Subsequently, it performs [terraform validate](https://www.terraform.io/cli/commands/validate) to check for syntactical correctness and internal consistency of the code.

To further enhance the code quality and security, two additional tools, tfsec and tflint, are utilized:

tfsec: This step checks the code for potential security issues using tfsec, an open-source security scanner for Terraform. It helps identify any security vulnerabilities or misconfigurations in the infrastructure code.

tflint: This step employs tflint, a Terraform linting tool, to perform additional static code analysis and linting on the Terraform code. It helps detect potential issues and ensures adherence to best practices and coding standards specific to Terraform.

2. **Terraform Plan / Apply**

To ensure accuracy and control over the changes made to your infrastructure, it is essential to manually initiate the job for applying the configuration. Before proceeding with the application, it is crucial to carefully review the generated plan. This step allows you to verify that the proposed changes align with your intended modifications to the infrastructure. By manually reviewing and approving the plan, you can confidently ensure that only the intended modifications will be implemented, mitigating any potential risks or unintended consequences.

## Committing Changes and Triggering Pipeline

Follow these steps to commit changes and trigger the pipeline:

1. **Install pre-commit hooks**: Make sure you have all tools from the requirements section installed.

2. **Clone the Git repository** (If you haven't already):

`git clone <repository-url>`

3. **Navigate to the repository directory**:

`cd <repository-directory>`

4. **Create a new branch**:

`git checkout -b <new-feature-branch-name>`

5. **Make changes** to the Terraform files as needed.

6. **Run pre-commit hooks**: Before committing, run the pre-commit hooks to check for formatting and validation issues:

`pre-commit run --all-files`

7. **Fix any issues**: If the pre-commit hooks report any issues, fix them and re-run the hooks until they pass.

8. **Stage and commit the changes**:

`git add .`

`git commit -m "Your commit message describing the changes"`

9. **Push the changes** to the repository:

`git push origin <branch-name>`

Replace `<branch-name>` with the name of the branch you are working on (e.g., `new-feature-branch-name`).

10.  **Monitor the pipeline**: After pushing the changes, the pipeline will be triggered automatically. You can monitor the progress of the pipeline and check for any issues in the CI/CD interface.

11.  **Merge Request**: If the pipeline is successful and the changes are on a feature branch, create a Merge Request to merge the changes into the main branch. If the pipeline fails, investigate the issue, fix it, and push the changes again to re-trigger the pipeline. Once the merge request is created, your team can review the changes, provide feedback, and approve or request changes. After the merge request has been reviewed and approved, it can be merged into the main branch to apply the changes to the production infrastructure.



<div align="center">

### Show some 💜 by starring some of the [repositories](https://github.com/heyValdemar?tab=repositories)!

![octocat](https://user-images.githubusercontent.com/10498744/210113490-e2fad07f-4488-4da8-a656-b9abbdd8cb26.gif)

</div>

![footer](https://user-images.githubusercontent.com/10498744/210157572-1fca0242-8af2-46a6-bfa3-666ffd40ebde.svg)
