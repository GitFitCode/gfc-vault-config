# gfc-vault-config

Centralized config schema to allow for reusability of config values across various projects

- V1: Central config file rationale
    - [ ]  Allow our projects to to easily have multiple enviorments
    - [ ]  Easier for sofrware engineers to locate and adjust if needed
    - [ ]  Reusability of config values
    - [ ]  Provide insight about the software based on the values within the config
    
## Development Notes

*PLEASE READ CAREFULLY BEFORE IMPORTING THIS REPO*

### Prerequisites 

#### Environment Variables File `.env`

You should have an `.env` file with all of your projects secrets and keys. Ultimately these should already be described within `gfc-vault-config`.

**PLEASE NOTE:** If you have an environment variable that isn't part of the `gfc-vault-config` then please create a PR with the new config schema change like the other custom environment variables. 

#### Installing `gfc-vault-config` in an existing project via npm using the following commands

*Within the repository you would like to use it in, please run either of the following based on your project:*

 `npm install git+https://git@github.com/GitFitCode/gfc-vault-config.git`
 
 `pnpm install git+https://git@github.com/GitFitCode/gfc-vault-config.git`
 
In order to be able to install the repository you will need to generate a personal token within github. This will need to be stored in your `.env` file so you can reference it later.

When you trigger the following command within your terminal in VSCode you will get a prompt asking for a password. You will need to provide the [token](https://github.com/settings/tokens) that you recently generated. After, you will see the library start downloading.


#### Using the gfc-vault-config module within code

Lets say we have an`index.js` file that we wanted to access the config in. All we would do is import the config using with one of the following:

  `import * as config from './config';`

  `const config = require('./config');`

We would now be able to access any of the config properties. You can verify this by using console.log to view the config value

    `console.log(config);`

You should see a similar out put to what's below.

    {
        ...
        someEnvKey1: 15589,
        someEnvKey2: '345600',
        port: 3000,
        someMaxDuration: 2500000,
        ...
    }

    
### If we want to evolve this project we can explore**

- V2: [Secrets/Key Management](https://cloud.google.com/secret-manager/docs/overview)
    - [ ]  [Vulnerabilities to resolve](https://cloud.google.com/secret-manager/docs/best-practices)
        - [ ]  Secrets accessible on the filesystem are at risk of directory traversal attacks where an attacker could read the secrets values
        - [ ]  Potential Risks due to Misconfigurations
            - [ ]  enabling debug endpoints
            - [ ]  including dependencies that log env details or secrets
            - [ ]  Syncing secrets to another data source, we need to consider the access controls of that datasource
                - [ ]  Can the datasource access the secret?
                - [ ]  Can we audit access to the secrets?
                - [ ]  Does the datasource comply with data-at-rest-encryption and regionalization requirements?
    - [ ]  Create a Loopback application that interfaces with the Secret Manager API via rest
    - [ ]  Secret
        - [ ]  A secret is a project-global object that contains a collection of metadata and secret versions
    - [ ]  Version
        - [ ]  A secret version stores the actual secret data, such as API keys, passwords, or certificates.
        - [ ]  You can address individual versions of a secret. You cannot modify a version, but you can delete it.
    - [ ]  Rotation
        - [ ]  Limit impact in the case of leaked secrets
        - [ ]  Ensure those who no longer require access cannot access previously accessed secrets
        - [ ]  Rotation flow will reduce likelihood of an outage
