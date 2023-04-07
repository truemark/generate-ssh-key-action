# AWS EC2 Run Instance Action

[![LICENSE](https://img.shields.io/badge/license-BSD3-green)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/truemark/generate-ssh-key-action)](https://github.com/truemark/generate-ssh-key-action/releases)
![GitHub closed issues](https://img.shields.io/github/issues-closed/truemark/generate-ssh-key-action)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/truemark/generate-ssh-key-action)
![build-test](https://github.com/truemark/generate-ssh-key-action/workflows/build-test/badge.svg)

GitHub action used to generate an SSH key pair 

## Examples

```yml
      - name: Generate SSH Key
        id: ssh-key
        uses: truemark/generate-ssh-key-action@v1
```

You can use default-arm64 and default-amd64 to get the latest Amazon Linux ARM.
You can also use the AMI ID of your own AMI.

## Inputs

| Name                        | Type       | Required | Description                                                                                                |
|-----------------------------|------------|----------|------------------------------------------------------------------------------------------------------------|
| type                        | string     | Yes      | Type of the SSH key, either 'rsa' or 'ecdsa'. Default is 'ecdsa'                                           |
| name                        | string     | Yes      | Name of the SSH key. This will be used as the file name for the keys. Defaults are ids_rsa or id_ed25519   |

## Outputs
| Name               | Type       | Description              |
|--------------------|------------|--------------------------|
| private-key-path   | string     | Path to the private key  |
| public-key-path    | string     | Path to the public key   |
| public-key         | string     | SSH public key           |

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
