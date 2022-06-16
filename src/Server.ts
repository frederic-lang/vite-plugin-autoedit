import type { Plugin } from 'vite'
import { createRPCServer } from 'vite-dev-rpc'
import type { ClientFunctions, ServerFunctions } from './rpc'
import fs from 'fs'


export function autoEditPlugin(): Plugin {
  return {
    name: 'autoedit',
    configureServer(server) {
      const rpc = createRPCServer<ClientFunctions, ServerFunctions>('autoedit', server.ws, {
        add(a, b) {
          // eslint-disable-next-line no-console
          console.log(`RPC ${a} ADD ${b}`)
          const result = a + b
          if (result > 150) {
            setTimeout(() => {
              rpc.alert.asEvent(`Someone got ${result}!`)
            }, 50)
          }
          return result
        },
        save(payload) {
          fs.writeFileSync('src/count.json',JSON.stringify(payload))
          console.log(payload)
          return 'success'
        }
      })
    },
  }
}
