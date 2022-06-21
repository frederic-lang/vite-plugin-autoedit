import { createRPCClient } from 'vite-dev-rpc'
import { hot, ViteHotContext } from 'vite-hot-client'
import type { AutoEditClient, ClientFunctions, ServerFunctions } from './rpc'


let rpc = false as AutoEditClient | false

if (hot) {
  rpc = createRPCClient<ServerFunctions, ClientFunctions>('autoedit', hot as ViteHotContext, {
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
  
