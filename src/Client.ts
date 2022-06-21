import { createRPCClient } from 'vite-dev-rpc'
import { ViteHotContext } from 'vite/types/hot'
import type { AutoEditClient, ClientFunctions, ServerFunctions } from './rpc'



export function autoEditClient(hot: ViteHotContext) : AutoEditClient | undefined {

  let aeClient = undefined as AutoEditClient | undefined

  if (hot) {
    aeClient = createRPCClient<ServerFunctions, ClientFunctions>('autoedit', hot as ViteHotContext, {
      alert(message) {
        console.log(message)
      },
    })
  }

  return aeClient;
}


/*   const div = document.getElementById('output')!
  const button = document.getElementById('button')!
  const msg = document.getElementById('msg')!
  const writeButton = document.getElementById('write')!
  button.addEventListener('click', update) */
  
