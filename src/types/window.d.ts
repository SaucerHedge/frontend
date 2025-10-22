interface HashPackProvider {
  getAccountId(): Promise<string>;
  sendTransaction(transaction: any, accountId: any): Promise<any>;
  disconnect(): void;
}

interface Window {
  hashpack?: HashPackProvider;
  appKit?: any;
}

export {};
