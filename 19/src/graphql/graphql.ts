import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ErrorInfo = {
  __typename?: 'ErrorInfo';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type LoginRequest = {
  otp?: InputMaybe<Scalars['Int']['input']>;
  phone: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Response>;
  requestOtp?: Maybe<Response>;
};


export type MutationLoginArgs = {
  request?: InputMaybe<LoginRequest>;
};


export type MutationRequestOtpArgs = {
  request?: InputMaybe<LoginRequest>;
};

export type Query = {
  __typename?: 'Query';
  queryUserDetails?: Maybe<QueryUserResponse>;
};


export type QueryQueryUserDetailsArgs = {
  request?: InputMaybe<QueryUserRequest>;
};

export type QueryUserRequest = {
  id: Scalars['String']['input'];
};

export type QueryUserResponse = {
  __typename?: 'QueryUserResponse';
  errors?: Maybe<ErrorInfo>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserResponse>;
};

export type Response = {
  __typename?: 'Response';
  errors?: Maybe<ErrorInfo>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type QueryUserDetailsQueryVariables = Exact<{
  request: QueryUserRequest;
}>;


export type QueryUserDetailsQuery = { __typename?: 'Query', queryUserDetails?: { __typename?: 'QueryUserResponse', success?: boolean | null, errors?: { __typename?: 'ErrorInfo', code?: string | null, message?: string | null } | null, user?: { __typename?: 'UserResponse', id?: number | null, name?: string | null, role?: string | null, org?: string | null } | null } | null };

export type LoginMutationVariables = Exact<{
  request: LoginRequest;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Response', success?: boolean | null, errors?: { __typename?: 'ErrorInfo', code?: string | null, message?: string | null } | null } | null };


export const QueryUserDetailsDocument = gql`
    query QueryUserDetails($request: QueryUserRequest!) {
  queryUserDetails(request: $request) {
    success
    errors {
      code
      message
    }
    user {
      id
      name
      role
      org
    }
  }
}
    `;

/**
 * __useQueryUserDetailsQuery__
 *
 * To run a query within a React component, call `useQueryUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserDetailsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useQueryUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<QueryUserDetailsQuery, QueryUserDetailsQueryVariables> & ({ variables: QueryUserDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>(QueryUserDetailsDocument, options);
      }
export function useQueryUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>(QueryUserDetailsDocument, options);
        }
export function useQueryUserDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>(QueryUserDetailsDocument, options);
        }
export type QueryUserDetailsQueryHookResult = ReturnType<typeof useQueryUserDetailsQuery>;
export type QueryUserDetailsLazyQueryHookResult = ReturnType<typeof useQueryUserDetailsLazyQuery>;
export type QueryUserDetailsSuspenseQueryHookResult = ReturnType<typeof useQueryUserDetailsSuspenseQuery>;
export type QueryUserDetailsQueryResult = Apollo.QueryResult<QueryUserDetailsQuery, QueryUserDetailsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($request: LoginRequest!) {
  login(request: $request) {
    success
    errors {
      code
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;