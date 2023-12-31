import { ApolloClient, ApolloQueryResult, NormalizedCacheObject, OperationVariables, QueryOptions } from '@apollo/client/core';
export default function subgraphRequest<T = any, TVariables extends OperationVariables = OperationVariables>(client: ApolloClient<NormalizedCacheObject>, options: QueryOptions<TVariables, T>): Promise<ApolloQueryResult<T | null | undefined>>;
