import { createRPCClient } from 'vite-dev-rpc'
import type { AutoEditClient, ClientFunctions, ServerFunctions } from './rpc'


let rpc = false as AutoEditClient | false

if (import.meta.hot) {
  rpc = createRPCClient<ServerFunctions, ClientFunctions>('autoedit', import.meta.hot, {
    alert(message) {
      console.log(message)
    },
  })
}

export function autoEditClient() : AutoEditClient | false {
  return rpc;
}


/*   const div = document.getElementById('output')!
  const button = document.getElementById('button')!
  const msg = document.getElementById('msg')!
  const writeButton = document.getElementById('write')!
  button.addEventListener('click', update) */
  
