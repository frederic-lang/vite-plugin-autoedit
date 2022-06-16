type ServerReturn = 'success' | 'failure';

export interface ServerFunctions {
  add(a: number, b: number): number;
  save(payload: unknown) : ServerReturn
}

export interface AutoEditClient {
  add(a: number, b: number): Promise<number>;
  save(payload: unknown) : Promise<ServerReturn>
}

export interface ClientFunctions {
  alert(message: string): void
}
