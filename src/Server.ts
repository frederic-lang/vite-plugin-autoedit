import type { Plugin } from 'vite'
import { createRPCServer } from 'vite-dev-rpc'
import type { ClientFunctions, ServerFunctions } from './rpc'
import fs from 'fs'


export function autoEditPlugin(): Plugin {
  return {
    name: 'autoedit',
    configureServer(server) {
      const rpc = createRPCServer<ClientFunctions, ServerFunctions>('autoedit', server.ws, {
        save(path, payload) {
          fs.writeFileSync(path,JSON.stringify(payload))
          console.log(payload)
          return 'success'
        }
      })
    },
  }
}
