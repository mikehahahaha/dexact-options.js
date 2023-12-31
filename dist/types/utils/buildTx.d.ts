import { PopulatedTransaction } from '@ethersproject/contracts';
import { JsonRpcProvider } from '@ethersproject/providers';
export default function buildTx(provider: JsonRpcProvider, chainId: number, to: string, from: string, data: string): PopulatedTransaction;
