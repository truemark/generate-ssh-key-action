# AWS EC2 Run Instance Action

[![LICENSE](https://img.shields.io/badge/license-BSD3-green)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/truemark/generate-ssh-key-action)](https://github.com/truemark/generate-ssh-key-action/releases)
![GitHub closed issues](https://img.shields.io/github/issues-closed/truemark/generate-ssh-key-action)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/truemark/generate-ssh-key-action)
![build-test](https://github.com/truemark/generate-ssh-key-action/workflows/build-test/badge.svg)

GitHub action used to generate an SSH key pair 

## Examples

```yml

```

You can use default-arm64 and default-amd64 to get the latest Amazon Linux ARM.
You can also use the AMI ID of your own AMI.

## Inputs

| Name                          | Type       | Required | Description                                                                                 |
|-------------------------------|------------|----------|---------------------------------------------------------------------------------------------|
| subnet-id                     | string     | Yes      | Subnet ID to launch the instance in                                                         |
| security-group-id             | string     | Yes      | Security group to apply to the EC2 instance                                                 |
| image-id                      | string     | Yes      | Image ID to use for the EC2 instance. Also accepts default-arm64 and default-amd64 options  |
| instance-type                 | string     | Yes      | Instance type to use for the EC2 instance                                                   |
| instance-profile              | string     | No       | Instance profile to use for the EC2 instance                                                |
| volume-size                   | number     | No       | Volume size in GB to use for the EC2 instance                                               |
| associate-public-ip-address   | boolean    | No       | Associate a public IP address to the instance                                               |
| tags                          | string     | No       | Tags to apply to the EC2 instance. Format: JSON                                             |
| user-data                     | string     | No       | User data to apply to the EC2 instance                                                      |
| instance-shutdown-behavior    | string     | No       | Shutdown behavior for the EC2 instance. This may be stop or terminate. Default is terminate |
| region                        | string     | Yes      | AWS region to use for the EC2 instance                                                      |
| key-name                      | string     | No       | SSH key name to use for the EC2 instance                                                    |
| terminate-on-post             | boolean    | No       | Terminate the EC2 instance after the post step. Default is true.                            |

## Outputs
| Name                          | Type       | Description                                                                                 |
|-------------------------------|------------|---------------------------------------------------------------------------------------------|
| instance-id                   | string     | Instance ID of the EC2 instance                                                             |

## Development

> Install `node version 16`

Install the dependencies
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:
```bash
$ npm test
```
