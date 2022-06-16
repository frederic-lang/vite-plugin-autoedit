type ServerReturn = 'success' | 'failure';

export interface ServerFunctions {
  save(path:string, payload: unknown) : ServerReturn
}

export interface AutoEditClient {
  save(path:string, payload: unknown) : Promise<ServerReturn>
}

export interface ClientFunctions {
  alert(message: string): void
}
