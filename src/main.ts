import * as core from '@actions/core'
import {loadConfig} from './config'
import * as path from 'path'
import * as fs from 'fs'
import {execaSync} from 'execa'
import {setOutput} from '@actions/core'

async function run(): Promise<void> {
  try {
    const config = loadConfig()
    const sshDir = path.join(process.env['HOME'] ?? '', '.ssh')
    if (!fs.existsSync(sshDir)) {
      fs.mkdirSync(sshDir, {recursive: true})
      fs.chmodSync(sshDir, '700')
    }
    const filename = config.name ?? (config.type === 'rsa' ? 'id_rsa' : 'id_ed25519')
    const keyPath = path.join(sshDir, filename)
    const pubKeyPath = path.join(sshDir, `${filename}.pub`)
    if (config.type === 'rsa') {
      execaSync('ssh-keygen', ['-t', 'rsa', '-b', '4096', '-f', keyPath, '-N', '', '-q'])
    } else {
      execaSync('ssh-keygen', ['-t', 'ed25519', '-f', keyPath, '-N', '', '-q'])
    }
    fs.chmodSync(keyPath, '600')
    fs.chmodSync(pubKeyPath, '644')
    setOutput('private-key-path', keyPath)
    setOutput('public-key-path', pubKeyPath)
    setOutput('public-key', fs.readFileSync(pubKeyPath, 'utf8'))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
