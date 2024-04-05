// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
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

export type AuthManagerload = {
  __typename?: 'AuthManagerload';
  manager: ManagerPublicInfo;
  token: Scalars['String']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: UserPublicInfo;
};

export type Gym = {
  __typename?: 'Gym';
  id: Scalars['ID']['output'];
  image: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownerid: Scalars['String']['output'];
  pending: Scalars['Boolean']['output'];
  postition: Array<Scalars['String']['output']>;
  rate: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GymChangeStatusInput = {
  id: Scalars['String']['input'];
};

export type GymDeleteInput = {
  id: Scalars['String']['input'];
};

export type GymManager = {
  __typename?: 'GymManager';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type GymManagerRegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GymRegisterInput = {
  image: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerid: Scalars['String']['input'];
  postition: Array<Scalars['String']['input']>;
  rate: Scalars['String']['input'];
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ManagerLogininput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ManagerPublicInfo = {
  __typename?: 'ManagerPublicInfo';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeStatusGym: Gym;
  deleteGym: Gym;
  loginManager: AuthManagerload;
  loginUser: AuthPayload;
  registerGym: Gym;
  registerManager: GymManager;
  registerUser: User;
};


export type MutationChangeStatusGymArgs = {
  input?: InputMaybe<GymChangeStatusInput>;
};


export type MutationDeleteGymArgs = {
  input: GymDeleteInput;
};


export type MutationLoginManagerArgs = {
  input: ManagerLogininput;
};


export type MutationLoginUserArgs = {
  input: UserLogininput;
};


export type MutationRegisterGymArgs = {
  input: GymRegisterInput;
};


export type MutationRegisterManagerArgs = {
  input: GymManagerRegisterInput;
};


export type MutationRegisterUserArgs = {
  input: UserRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  getGym?: Maybe<Gym>;
  getGyms: Array<Maybe<Gym>>;
  getManager?: Maybe<GymManager>;
  getManagers: Array<Maybe<GymManager>>;
  getUser?: Maybe<User>;
  getUsers: Array<Maybe<User>>;
};


export type QueryGetGymArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetManagerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type UserLogininput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserPublicInfo = {
  __typename?: 'UserPublicInfo';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type UserRegisterInput = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserMutationVariables = Exact<{
  input: UserLogininput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'UserPublicInfo', image?: string | null, email: string, name: string, id: string } } };

export type RegisterUserMutationVariables = Exact<{
  input: UserRegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', id: string, name: string, email: string, password: string, image?: string | null } };

export type GetGymsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGymsQuery = { __typename?: 'Query', getGyms: Array<{ __typename?: 'Gym', id: string, name: string, ownerid: string, title: string, postition: Array<string>, image: Array<string>, rate: string, pending: boolean, thumbnail: string } | null> };


export const LoginUserDocument = gql`
    mutation LoginUser($input: UserLogininput!) {
  loginUser(input: $input) {
    token
    user {
      image
      email
      name
      id
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>
    } & TChildProps;
export function withLoginUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps, TDataName>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: UserRegisterInput!) {
  registerUser(input: $input) {
    id
    name
    email
    password
    image
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
export type RegisterUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>
    } & TChildProps;
export function withRegisterUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterUserMutation,
  RegisterUserMutationVariables,
  RegisterUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterUserMutation, RegisterUserMutationVariables, RegisterUserProps<TChildProps, TDataName>>(RegisterUserDocument, {
      alias: 'registerUser',
      ...operationOptions
    });
};

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetGymsDocument = gql`
    query GetGyms {
  getGyms {
    id
    name
    ownerid
    title
    postition
    image
    rate
    pending
    thumbnail
  }
}
    `;
export type GetGymsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetGymsQuery, GetGymsQueryVariables>
    } & TChildProps;
export function withGetGyms<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGymsQuery,
  GetGymsQueryVariables,
  GetGymsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetGymsQuery, GetGymsQueryVariables, GetGymsProps<TChildProps, TDataName>>(GetGymsDocument, {
      alias: 'getGyms',
      ...operationOptions
    });
};

/**
 * __useGetGymsQuery__
 *
 * To run a query within a React component, call `useGetGymsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGymsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGymsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGymsQuery(baseOptions?: Apollo.QueryHookOptions<GetGymsQuery, GetGymsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGymsQuery, GetGymsQueryVariables>(GetGymsDocument, options);
      }
export function useGetGymsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGymsQuery, GetGymsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGymsQuery, GetGymsQueryVariables>(GetGymsDocument, options);
        }
export function useGetGymsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGymsQuery, GetGymsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGymsQuery, GetGymsQueryVariables>(GetGymsDocument, options);
        }
export type GetGymsQueryHookResult = ReturnType<typeof useGetGymsQuery>;
export type GetGymsLazyQueryHookResult = ReturnType<typeof useGetGymsLazyQuery>;
export type GetGymsSuspenseQueryHookResult = ReturnType<typeof useGetGymsSuspenseQuery>;
export type GetGymsQueryResult = Apollo.QueryResult<GetGymsQuery, GetGymsQueryVariables>;