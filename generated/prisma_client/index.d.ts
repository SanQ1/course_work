
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model order_item
 * 
 */
export type order_item = $Result.DefaultSelection<Prisma.$order_itemPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model category_product
 * 
 */
export type category_product = $Result.DefaultSelection<Prisma.$category_productPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_item`: Exposes CRUD operations for the **order_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_item.findMany()
    * ```
    */
  get order_item(): Prisma.order_itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_product`: Exposes CRUD operations for the **category_product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_products
    * const category_products = await prisma.category_product.findMany()
    * ```
    */
  get category_product(): Prisma.category_productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customer: 'customer',
    order: 'order',
    order_item: 'order_item',
    product: 'product',
    category: 'category',
    category_product: 'category_product',
    review: 'review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "order" | "order_item" | "product" | "category" | "category_product" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      order_item: {
        payload: Prisma.$order_itemPayload<ExtArgs>
        fields: Prisma.order_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findFirst: {
            args: Prisma.order_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          findMany: {
            args: Prisma.order_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          create: {
            args: Prisma.order_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          createMany: {
            args: Prisma.order_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          delete: {
            args: Prisma.order_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          update: {
            args: Prisma.order_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          deleteMany: {
            args: Prisma.order_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>[]
          }
          upsert: {
            args: Prisma.order_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemPayload>
          }
          aggregate: {
            args: Prisma.Order_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item>
          }
          groupBy: {
            args: Prisma.order_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      category_product: {
        payload: Prisma.$category_productPayload<ExtArgs>
        fields: Prisma.category_productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.category_productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.category_productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          findFirst: {
            args: Prisma.category_productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.category_productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          findMany: {
            args: Prisma.category_productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>[]
          }
          create: {
            args: Prisma.category_productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          createMany: {
            args: Prisma.category_productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.category_productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>[]
          }
          delete: {
            args: Prisma.category_productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          update: {
            args: Prisma.category_productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          deleteMany: {
            args: Prisma.category_productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.category_productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.category_productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>[]
          }
          upsert: {
            args: Prisma.category_productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_productPayload>
          }
          aggregate: {
            args: Prisma.Category_productAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_product>
          }
          groupBy: {
            args: Prisma.category_productGroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_productGroupByOutputType>[]
          }
          count: {
            args: Prisma.category_productCountArgs<ExtArgs>
            result: $Utils.Optional<Category_productCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    customer?: customerOmit
    order?: orderOmit
    order_item?: order_itemOmit
    product?: productOmit
    category?: categoryOmit
    category_product?: category_productOmit
    review?: reviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    order: number
    review: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | CustomerCountOutputTypeCountOrderArgs
    review?: boolean | CustomerCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    order_item: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | OrderCountOutputTypeCountOrder_itemArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    order_item: number
    category_product: number
    review: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | ProductCountOutputTypeCountOrder_itemArgs
    category_product?: boolean | ProductCountOutputTypeCountCategory_productArgs
    review?: boolean | ProductCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrder_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategory_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_productWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    category_product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category_product?: boolean | CategoryCountOutputTypeCountCategory_productArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategory_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_productWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerid: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerid: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerid: number | null
    name: string | null
    surname: string | null
    phone_number: string | null
    email: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerid: number | null
    name: string | null
    surname: string | null
    phone_number: string | null
    email: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customerid: number
    name: number
    surname: number
    phone_number: number
    email: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerid?: true
  }

  export type CustomerSumAggregateInputType = {
    customerid?: true
  }

  export type CustomerMinAggregateInputType = {
    customerid?: true
    name?: true
    surname?: true
    phone_number?: true
    email?: true
    created_at?: true
    deleted_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerid?: true
    name?: true
    surname?: true
    phone_number?: true
    email?: true
    created_at?: true
    deleted_at?: true
  }

  export type CustomerCountAggregateInputType = {
    customerid?: true
    name?: true
    surname?: true
    phone_number?: true
    email?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerid: number
    name: string
    surname: string
    phone_number: string
    email: string
    created_at: Date
    deleted_at: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    name?: boolean
    surname?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    deleted_at?: boolean
    order?: boolean | customer$orderArgs<ExtArgs>
    review?: boolean | customer$reviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    name?: boolean
    surname?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    name?: boolean
    surname?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    customerid?: boolean
    name?: boolean
    surname?: boolean
    phone_number?: boolean
    email?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerid" | "name" | "surname" | "phone_number" | "email" | "created_at" | "deleted_at", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | customer$orderArgs<ExtArgs>
    review?: boolean | customer$reviewArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerid: number
      name: string
      surname: string
      phone_number: string
      email: string
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerid`
     * const customerWithCustomeridOnly = await prisma.customer.findMany({ select: { customerid: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerid`
     * const customerWithCustomeridOnly = await prisma.customer.createManyAndReturn({
     *   select: { customerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customerid`
     * const customerWithCustomeridOnly = await prisma.customer.updateManyAndReturn({
     *   select: { customerid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends customer$orderArgs<ExtArgs> = {}>(args?: Subset<T, customer$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends customer$reviewArgs<ExtArgs> = {}>(args?: Subset<T, customer$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly customerid: FieldRef<"customer", 'Int'>
    readonly name: FieldRef<"customer", 'String'>
    readonly surname: FieldRef<"customer", 'String'>
    readonly phone_number: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly created_at: FieldRef<"customer", 'DateTime'>
    readonly deleted_at: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.order
   */
  export type customer$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * customer.review
   */
  export type customer$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    orderid: number | null
    customerid: number | null
  }

  export type OrderSumAggregateOutputType = {
    orderid: number | null
    customerid: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderid: number | null
    customerid: number | null
    address: string | null
    created_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    orderid: number | null
    customerid: number | null
    address: string | null
    created_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    orderid: number
    customerid: number
    address: number
    created_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    orderid?: true
    customerid?: true
  }

  export type OrderSumAggregateInputType = {
    orderid?: true
    customerid?: true
  }

  export type OrderMinAggregateInputType = {
    orderid?: true
    customerid?: true
    address?: true
    created_at?: true
  }

  export type OrderMaxAggregateInputType = {
    orderid?: true
    customerid?: true
    address?: true
    created_at?: true
  }

  export type OrderCountAggregateInputType = {
    orderid?: true
    customerid?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderid: number
    customerid: number
    address: string
    created_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    customerid?: boolean
    address?: boolean
    created_at?: boolean
    order_item?: boolean | order$order_itemArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    customerid?: boolean
    address?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderid?: boolean
    customerid?: boolean
    address?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    orderid?: boolean
    customerid?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderid" | "customerid" | "address" | "created_at", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | order$order_itemArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
      customer: Prisma.$customerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderid: number
      customerid: number
      address: string
      created_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderid`
     * const orderWithOrderidOnly = await prisma.order.findMany({ select: { orderid: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderid`
     * const orderWithOrderidOnly = await prisma.order.createManyAndReturn({
     *   select: { orderid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderid`
     * const orderWithOrderidOnly = await prisma.order.updateManyAndReturn({
     *   select: { orderid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends order$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, order$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly orderid: FieldRef<"order", 'Int'>
    readonly customerid: FieldRef<"order", 'Int'>
    readonly address: FieldRef<"order", 'String'>
    readonly created_at: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.order_item
   */
  export type order$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model order_item
   */

  export type AggregateOrder_item = {
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  export type Order_itemAvgAggregateOutputType = {
    productid: number | null
    orderid: number | null
    quantity: number | null
  }

  export type Order_itemSumAggregateOutputType = {
    productid: number | null
    orderid: number | null
    quantity: number | null
  }

  export type Order_itemMinAggregateOutputType = {
    productid: number | null
    orderid: number | null
    quantity: number | null
  }

  export type Order_itemMaxAggregateOutputType = {
    productid: number | null
    orderid: number | null
    quantity: number | null
  }

  export type Order_itemCountAggregateOutputType = {
    productid: number
    orderid: number
    quantity: number
    _all: number
  }


  export type Order_itemAvgAggregateInputType = {
    productid?: true
    orderid?: true
    quantity?: true
  }

  export type Order_itemSumAggregateInputType = {
    productid?: true
    orderid?: true
    quantity?: true
  }

  export type Order_itemMinAggregateInputType = {
    productid?: true
    orderid?: true
    quantity?: true
  }

  export type Order_itemMaxAggregateInputType = {
    productid?: true
    orderid?: true
    quantity?: true
  }

  export type Order_itemCountAggregateInputType = {
    productid?: true
    orderid?: true
    quantity?: true
    _all?: true
  }

  export type Order_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item to aggregate.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemMaxAggregateInputType
  }

  export type GetOrder_itemAggregateType<T extends Order_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item[P]>
      : GetScalarType<T[P], AggregateOrder_item[P]>
  }




  export type order_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithAggregationInput | order_itemOrderByWithAggregationInput[]
    by: Order_itemScalarFieldEnum[] | Order_itemScalarFieldEnum
    having?: order_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemCountAggregateInputType | true
    _avg?: Order_itemAvgAggregateInputType
    _sum?: Order_itemSumAggregateInputType
    _min?: Order_itemMinAggregateInputType
    _max?: Order_itemMaxAggregateInputType
  }

  export type Order_itemGroupByOutputType = {
    productid: number
    orderid: number
    quantity: number
    _count: Order_itemCountAggregateOutputType | null
    _avg: Order_itemAvgAggregateOutputType | null
    _sum: Order_itemSumAggregateOutputType | null
    _min: Order_itemMinAggregateOutputType | null
    _max: Order_itemMaxAggregateOutputType | null
  }

  type GetOrder_itemGroupByPayload<T extends order_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemGroupByOutputType[P]>
        }
      >
    >


  export type order_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    orderid?: boolean
    quantity?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    orderid?: boolean
    quantity?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    orderid?: boolean
    quantity?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item"]>

  export type order_itemSelectScalar = {
    productid?: boolean
    orderid?: boolean
    quantity?: boolean
  }

  export type order_itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productid" | "orderid" | "quantity", ExtArgs["result"]["order_item"]>
  export type order_itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }
  export type order_itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }

  export type $order_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productid: number
      orderid: number
      quantity: number
    }, ExtArgs["result"]["order_item"]>
    composites: {}
  }

  type order_itemGetPayload<S extends boolean | null | undefined | order_itemDefaultArgs> = $Result.GetResult<Prisma.$order_itemPayload, S>

  type order_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemCountAggregateInputType | true
    }

  export interface order_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item'], meta: { name: 'order_item' } }
    /**
     * Find zero or one Order_item that matches the filter.
     * @param {order_itemFindUniqueArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemFindUniqueArgs>(args: SelectSubset<T, order_itemFindUniqueArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemFindUniqueOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemFindFirstArgs>(args?: SelectSubset<T, order_itemFindFirstArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindFirstOrThrowArgs} args - Arguments to find a Order_item
     * @example
     * // Get one Order_item
     * const order_item = await prisma.order_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_item.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_item.findMany({ take: 10 })
     * 
     * // Only select the `productid`
     * const order_itemWithProductidOnly = await prisma.order_item.findMany({ select: { productid: true } })
     * 
     */
    findMany<T extends order_itemFindManyArgs>(args?: SelectSubset<T, order_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_item.
     * @param {order_itemCreateArgs} args - Arguments to create a Order_item.
     * @example
     * // Create one Order_item
     * const Order_item = await prisma.order_item.create({
     *   data: {
     *     // ... data to create a Order_item
     *   }
     * })
     * 
     */
    create<T extends order_itemCreateArgs>(args: SelectSubset<T, order_itemCreateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemCreateManyArgs>(args?: SelectSubset<T, order_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_item = await prisma.order_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `productid`
     * const order_itemWithProductidOnly = await prisma.order_item.createManyAndReturn({
     *   select: { productid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_item.
     * @param {order_itemDeleteArgs} args - Arguments to delete one Order_item.
     * @example
     * // Delete one Order_item
     * const Order_item = await prisma.order_item.delete({
     *   where: {
     *     // ... filter to delete one Order_item
     *   }
     * })
     * 
     */
    delete<T extends order_itemDeleteArgs>(args: SelectSubset<T, order_itemDeleteArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_item.
     * @param {order_itemUpdateArgs} args - Arguments to update one Order_item.
     * @example
     * // Update one Order_item
     * const order_item = await prisma.order_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemUpdateArgs>(args: SelectSubset<T, order_itemUpdateArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemDeleteManyArgs>(args?: SelectSubset<T, order_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemUpdateManyArgs>(args: SelectSubset<T, order_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_item = await prisma.order_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `productid`
     * const order_itemWithProductidOnly = await prisma.order_item.updateManyAndReturn({
     *   select: { productid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_item.
     * @param {order_itemUpsertArgs} args - Arguments to update or create a Order_item.
     * @example
     * // Update or create a Order_item
     * const order_item = await prisma.order_item.upsert({
     *   create: {
     *     // ... data to create a Order_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item we want to update
     *   }
     * })
     */
    upsert<T extends order_itemUpsertArgs>(args: SelectSubset<T, order_itemUpsertArgs<ExtArgs>>): Prisma__order_itemClient<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_item.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemCountArgs>(
      args?: Subset<T, order_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemAggregateArgs>(args: Subset<T, Order_itemAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemAggregateType<T>>

    /**
     * Group by Order_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemGroupByArgs['orderBy'] }
        : { orderBy?: order_itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item model
   */
  readonly fields: order_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_item model
   */
  interface order_itemFieldRefs {
    readonly productid: FieldRef<"order_item", 'Int'>
    readonly orderid: FieldRef<"order_item", 'Int'>
    readonly quantity: FieldRef<"order_item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order_item findUnique
   */
  export type order_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findUniqueOrThrow
   */
  export type order_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item findFirst
   */
  export type order_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findFirstOrThrow
   */
  export type order_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_item to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item findMany
   */
  export type order_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * order_item create
   */
  export type order_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item.
     */
    data: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
  }

  /**
   * order_item createMany
   */
  export type order_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_item createManyAndReturn
   */
  export type order_itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemCreateManyInput | order_itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item update
   */
  export type order_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item.
     */
    data: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
    /**
     * Choose, which order_item to update.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item updateMany
   */
  export type order_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_item updateManyAndReturn
   */
  export type order_itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item upsert
   */
  export type order_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item to update in case it exists.
     */
    where: order_itemWhereUniqueInput
    /**
     * In case the order_item found by the `where` argument doesn't exist, create a new order_item with this data.
     */
    create: XOR<order_itemCreateInput, order_itemUncheckedCreateInput>
    /**
     * In case the order_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemUpdateInput, order_itemUncheckedUpdateInput>
  }

  /**
   * order_item delete
   */
  export type order_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    /**
     * Filter which order_item to delete.
     */
    where: order_itemWhereUniqueInput
  }

  /**
   * order_item deleteMany
   */
  export type order_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_item without action
   */
  export type order_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productid: number | null
    cost_for_one: Decimal | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    productid: number | null
    cost_for_one: Decimal | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    productid: number | null
    name: string | null
    cost_for_one: Decimal | null
    desctiption: string | null
    quantity: number | null
  }

  export type ProductMaxAggregateOutputType = {
    productid: number | null
    name: string | null
    cost_for_one: Decimal | null
    desctiption: string | null
    quantity: number | null
  }

  export type ProductCountAggregateOutputType = {
    productid: number
    name: number
    cost_for_one: number
    desctiption: number
    quantity: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productid?: true
    cost_for_one?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    productid?: true
    cost_for_one?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    productid?: true
    name?: true
    cost_for_one?: true
    desctiption?: true
    quantity?: true
  }

  export type ProductMaxAggregateInputType = {
    productid?: true
    name?: true
    cost_for_one?: true
    desctiption?: true
    quantity?: true
  }

  export type ProductCountAggregateInputType = {
    productid?: true
    name?: true
    cost_for_one?: true
    desctiption?: true
    quantity?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productid: number
    name: string
    cost_for_one: Decimal
    desctiption: string
    quantity: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    name?: boolean
    cost_for_one?: boolean
    desctiption?: boolean
    quantity?: boolean
    order_item?: boolean | product$order_itemArgs<ExtArgs>
    category_product?: boolean | product$category_productArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    name?: boolean
    cost_for_one?: boolean
    desctiption?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    name?: boolean
    cost_for_one?: boolean
    desctiption?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    productid?: boolean
    name?: boolean
    cost_for_one?: boolean
    desctiption?: boolean
    quantity?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productid" | "name" | "cost_for_one" | "desctiption" | "quantity", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | product$order_itemArgs<ExtArgs>
    category_product?: boolean | product$category_productArgs<ExtArgs>
    review?: boolean | product$reviewArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      order_item: Prisma.$order_itemPayload<ExtArgs>[]
      category_product: Prisma.$category_productPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productid: number
      name: string
      cost_for_one: Prisma.Decimal
      desctiption: string
      quantity: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productid`
     * const productWithProductidOnly = await prisma.product.findMany({ select: { productid: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productid`
     * const productWithProductidOnly = await prisma.product.createManyAndReturn({
     *   select: { productid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `productid`
     * const productWithProductidOnly = await prisma.product.updateManyAndReturn({
     *   select: { productid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends product$order_itemArgs<ExtArgs> = {}>(args?: Subset<T, product$order_itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category_product<T extends product$category_productArgs<ExtArgs> = {}>(args?: Subset<T, product$category_productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends product$reviewArgs<ExtArgs> = {}>(args?: Subset<T, product$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly productid: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly cost_for_one: FieldRef<"product", 'Decimal'>
    readonly desctiption: FieldRef<"product", 'String'>
    readonly quantity: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.order_item
   */
  export type product$order_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item
     */
    select?: order_itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_item
     */
    omit?: order_itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemInclude<ExtArgs> | null
    where?: order_itemWhereInput
    orderBy?: order_itemOrderByWithRelationInput | order_itemOrderByWithRelationInput[]
    cursor?: order_itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemScalarFieldEnum | Order_itemScalarFieldEnum[]
  }

  /**
   * product.category_product
   */
  export type product$category_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    where?: category_productWhereInput
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    cursor?: category_productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_productScalarFieldEnum | Category_productScalarFieldEnum[]
  }

  /**
   * product.review
   */
  export type product$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    categoryid: number | null
  }

  export type CategorySumAggregateOutputType = {
    categoryid: number | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryid: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryid: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryid: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    categoryid?: true
  }

  export type CategorySumAggregateInputType = {
    categoryid?: true
  }

  export type CategoryMinAggregateInputType = {
    categoryid?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryid?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryid?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    categoryid: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryid?: boolean
    name?: boolean
    category_product?: boolean | category$category_productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryid?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryid?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    categoryid?: boolean
    name?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryid" | "name", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category_product?: boolean | category$category_productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      category_product: Prisma.$category_productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryid: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryid`
     * const categoryWithCategoryidOnly = await prisma.category.findMany({ select: { categoryid: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `categoryid`
     * const categoryWithCategoryidOnly = await prisma.category.createManyAndReturn({
     *   select: { categoryid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `categoryid`
     * const categoryWithCategoryidOnly = await prisma.category.updateManyAndReturn({
     *   select: { categoryid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category_product<T extends category$category_productArgs<ExtArgs> = {}>(args?: Subset<T, category$category_productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly categoryid: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.category_product
   */
  export type category$category_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    where?: category_productWhereInput
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    cursor?: category_productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Category_productScalarFieldEnum | Category_productScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model category_product
   */

  export type AggregateCategory_product = {
    _count: Category_productCountAggregateOutputType | null
    _avg: Category_productAvgAggregateOutputType | null
    _sum: Category_productSumAggregateOutputType | null
    _min: Category_productMinAggregateOutputType | null
    _max: Category_productMaxAggregateOutputType | null
  }

  export type Category_productAvgAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type Category_productSumAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type Category_productMinAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type Category_productMaxAggregateOutputType = {
    productid: number | null
    categoryid: number | null
  }

  export type Category_productCountAggregateOutputType = {
    productid: number
    categoryid: number
    _all: number
  }


  export type Category_productAvgAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type Category_productSumAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type Category_productMinAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type Category_productMaxAggregateInputType = {
    productid?: true
    categoryid?: true
  }

  export type Category_productCountAggregateInputType = {
    productid?: true
    categoryid?: true
    _all?: true
  }

  export type Category_productAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_product to aggregate.
     */
    where?: category_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_products to fetch.
     */
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: category_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned category_products
    **/
    _count?: true | Category_productCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Category_productAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Category_productSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_productMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_productMaxAggregateInputType
  }

  export type GetCategory_productAggregateType<T extends Category_productAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_product]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_product[P]>
      : GetScalarType<T[P], AggregateCategory_product[P]>
  }




  export type category_productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_productWhereInput
    orderBy?: category_productOrderByWithAggregationInput | category_productOrderByWithAggregationInput[]
    by: Category_productScalarFieldEnum[] | Category_productScalarFieldEnum
    having?: category_productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_productCountAggregateInputType | true
    _avg?: Category_productAvgAggregateInputType
    _sum?: Category_productSumAggregateInputType
    _min?: Category_productMinAggregateInputType
    _max?: Category_productMaxAggregateInputType
  }

  export type Category_productGroupByOutputType = {
    productid: number
    categoryid: number
    _count: Category_productCountAggregateOutputType | null
    _avg: Category_productAvgAggregateOutputType | null
    _sum: Category_productSumAggregateOutputType | null
    _min: Category_productMinAggregateOutputType | null
    _max: Category_productMaxAggregateOutputType | null
  }

  type GetCategory_productGroupByPayload<T extends category_productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_productGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_productGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_productGroupByOutputType[P]>
            : GetScalarType<T[P], Category_productGroupByOutputType[P]>
        }
      >
    >


  export type category_productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_product"]>

  export type category_productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_product"]>

  export type category_productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productid?: boolean
    categoryid?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_product"]>

  export type category_productSelectScalar = {
    productid?: boolean
    categoryid?: boolean
  }

  export type category_productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productid" | "categoryid", ExtArgs["result"]["category_product"]>
  export type category_productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type category_productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type category_productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }

  export type $category_productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category_product"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      category: Prisma.$categoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productid: number
      categoryid: number
    }, ExtArgs["result"]["category_product"]>
    composites: {}
  }

  type category_productGetPayload<S extends boolean | null | undefined | category_productDefaultArgs> = $Result.GetResult<Prisma.$category_productPayload, S>

  type category_productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<category_productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_productCountAggregateInputType | true
    }

  export interface category_productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category_product'], meta: { name: 'category_product' } }
    /**
     * Find zero or one Category_product that matches the filter.
     * @param {category_productFindUniqueArgs} args - Arguments to find a Category_product
     * @example
     * // Get one Category_product
     * const category_product = await prisma.category_product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends category_productFindUniqueArgs>(args: SelectSubset<T, category_productFindUniqueArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {category_productFindUniqueOrThrowArgs} args - Arguments to find a Category_product
     * @example
     * // Get one Category_product
     * const category_product = await prisma.category_product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends category_productFindUniqueOrThrowArgs>(args: SelectSubset<T, category_productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productFindFirstArgs} args - Arguments to find a Category_product
     * @example
     * // Get one Category_product
     * const category_product = await prisma.category_product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends category_productFindFirstArgs>(args?: SelectSubset<T, category_productFindFirstArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productFindFirstOrThrowArgs} args - Arguments to find a Category_product
     * @example
     * // Get one Category_product
     * const category_product = await prisma.category_product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends category_productFindFirstOrThrowArgs>(args?: SelectSubset<T, category_productFindFirstOrThrowArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_products
     * const category_products = await prisma.category_product.findMany()
     * 
     * // Get first 10 Category_products
     * const category_products = await prisma.category_product.findMany({ take: 10 })
     * 
     * // Only select the `productid`
     * const category_productWithProductidOnly = await prisma.category_product.findMany({ select: { productid: true } })
     * 
     */
    findMany<T extends category_productFindManyArgs>(args?: SelectSubset<T, category_productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_product.
     * @param {category_productCreateArgs} args - Arguments to create a Category_product.
     * @example
     * // Create one Category_product
     * const Category_product = await prisma.category_product.create({
     *   data: {
     *     // ... data to create a Category_product
     *   }
     * })
     * 
     */
    create<T extends category_productCreateArgs>(args: SelectSubset<T, category_productCreateArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_products.
     * @param {category_productCreateManyArgs} args - Arguments to create many Category_products.
     * @example
     * // Create many Category_products
     * const category_product = await prisma.category_product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends category_productCreateManyArgs>(args?: SelectSubset<T, category_productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Category_products and returns the data saved in the database.
     * @param {category_productCreateManyAndReturnArgs} args - Arguments to create many Category_products.
     * @example
     * // Create many Category_products
     * const category_product = await prisma.category_product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Category_products and only return the `productid`
     * const category_productWithProductidOnly = await prisma.category_product.createManyAndReturn({
     *   select: { productid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends category_productCreateManyAndReturnArgs>(args?: SelectSubset<T, category_productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category_product.
     * @param {category_productDeleteArgs} args - Arguments to delete one Category_product.
     * @example
     * // Delete one Category_product
     * const Category_product = await prisma.category_product.delete({
     *   where: {
     *     // ... filter to delete one Category_product
     *   }
     * })
     * 
     */
    delete<T extends category_productDeleteArgs>(args: SelectSubset<T, category_productDeleteArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_product.
     * @param {category_productUpdateArgs} args - Arguments to update one Category_product.
     * @example
     * // Update one Category_product
     * const category_product = await prisma.category_product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends category_productUpdateArgs>(args: SelectSubset<T, category_productUpdateArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_products.
     * @param {category_productDeleteManyArgs} args - Arguments to filter Category_products to delete.
     * @example
     * // Delete a few Category_products
     * const { count } = await prisma.category_product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends category_productDeleteManyArgs>(args?: SelectSubset<T, category_productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_products
     * const category_product = await prisma.category_product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends category_productUpdateManyArgs>(args: SelectSubset<T, category_productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_products and returns the data updated in the database.
     * @param {category_productUpdateManyAndReturnArgs} args - Arguments to update many Category_products.
     * @example
     * // Update many Category_products
     * const category_product = await prisma.category_product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Category_products and only return the `productid`
     * const category_productWithProductidOnly = await prisma.category_product.updateManyAndReturn({
     *   select: { productid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends category_productUpdateManyAndReturnArgs>(args: SelectSubset<T, category_productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category_product.
     * @param {category_productUpsertArgs} args - Arguments to update or create a Category_product.
     * @example
     * // Update or create a Category_product
     * const category_product = await prisma.category_product.upsert({
     *   create: {
     *     // ... data to create a Category_product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_product we want to update
     *   }
     * })
     */
    upsert<T extends category_productUpsertArgs>(args: SelectSubset<T, category_productUpsertArgs<ExtArgs>>): Prisma__category_productClient<$Result.GetResult<Prisma.$category_productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productCountArgs} args - Arguments to filter Category_products to count.
     * @example
     * // Count the number of Category_products
     * const count = await prisma.category_product.count({
     *   where: {
     *     // ... the filter for the Category_products we want to count
     *   }
     * })
    **/
    count<T extends category_productCountArgs>(
      args?: Subset<T, category_productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_productCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_productAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Category_productAggregateArgs>(args: Subset<T, Category_productAggregateArgs>): Prisma.PrismaPromise<GetCategory_productAggregateType<T>>

    /**
     * Group by Category_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends category_productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: category_productGroupByArgs['orderBy'] }
        : { orderBy?: category_productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, category_productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_productGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category_product model
   */
  readonly fields: category_productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category_product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__category_productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category_product model
   */
  interface category_productFieldRefs {
    readonly productid: FieldRef<"category_product", 'Int'>
    readonly categoryid: FieldRef<"category_product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * category_product findUnique
   */
  export type category_productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter, which category_product to fetch.
     */
    where: category_productWhereUniqueInput
  }

  /**
   * category_product findUniqueOrThrow
   */
  export type category_productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter, which category_product to fetch.
     */
    where: category_productWhereUniqueInput
  }

  /**
   * category_product findFirst
   */
  export type category_productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter, which category_product to fetch.
     */
    where?: category_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_products to fetch.
     */
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_products.
     */
    cursor?: category_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_products.
     */
    distinct?: Category_productScalarFieldEnum | Category_productScalarFieldEnum[]
  }

  /**
   * category_product findFirstOrThrow
   */
  export type category_productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter, which category_product to fetch.
     */
    where?: category_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_products to fetch.
     */
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_products.
     */
    cursor?: category_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_products.
     */
    distinct?: Category_productScalarFieldEnum | Category_productScalarFieldEnum[]
  }

  /**
   * category_product findMany
   */
  export type category_productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter, which category_products to fetch.
     */
    where?: category_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_products to fetch.
     */
    orderBy?: category_productOrderByWithRelationInput | category_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing category_products.
     */
    cursor?: category_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_products.
     */
    skip?: number
    distinct?: Category_productScalarFieldEnum | Category_productScalarFieldEnum[]
  }

  /**
   * category_product create
   */
  export type category_productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * The data needed to create a category_product.
     */
    data: XOR<category_productCreateInput, category_productUncheckedCreateInput>
  }

  /**
   * category_product createMany
   */
  export type category_productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many category_products.
     */
    data: category_productCreateManyInput | category_productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category_product createManyAndReturn
   */
  export type category_productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * The data used to create many category_products.
     */
    data: category_productCreateManyInput | category_productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category_product update
   */
  export type category_productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * The data needed to update a category_product.
     */
    data: XOR<category_productUpdateInput, category_productUncheckedUpdateInput>
    /**
     * Choose, which category_product to update.
     */
    where: category_productWhereUniqueInput
  }

  /**
   * category_product updateMany
   */
  export type category_productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update category_products.
     */
    data: XOR<category_productUpdateManyMutationInput, category_productUncheckedUpdateManyInput>
    /**
     * Filter which category_products to update
     */
    where?: category_productWhereInput
    /**
     * Limit how many category_products to update.
     */
    limit?: number
  }

  /**
   * category_product updateManyAndReturn
   */
  export type category_productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * The data used to update category_products.
     */
    data: XOR<category_productUpdateManyMutationInput, category_productUncheckedUpdateManyInput>
    /**
     * Filter which category_products to update
     */
    where?: category_productWhereInput
    /**
     * Limit how many category_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category_product upsert
   */
  export type category_productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * The filter to search for the category_product to update in case it exists.
     */
    where: category_productWhereUniqueInput
    /**
     * In case the category_product found by the `where` argument doesn't exist, create a new category_product with this data.
     */
    create: XOR<category_productCreateInput, category_productUncheckedCreateInput>
    /**
     * In case the category_product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<category_productUpdateInput, category_productUncheckedUpdateInput>
  }

  /**
   * category_product delete
   */
  export type category_productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
    /**
     * Filter which category_product to delete.
     */
    where: category_productWhereUniqueInput
  }

  /**
   * category_product deleteMany
   */
  export type category_productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_products to delete
     */
    where?: category_productWhereInput
    /**
     * Limit how many category_products to delete.
     */
    limit?: number
  }

  /**
   * category_product without action
   */
  export type category_productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_product
     */
    select?: category_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_product
     */
    omit?: category_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_productInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    customerid: number | null
    productid: number | null
  }

  export type ReviewSumAggregateOutputType = {
    customerid: number | null
    productid: number | null
  }

  export type ReviewMinAggregateOutputType = {
    customerid: number | null
    productid: number | null
    review: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    customerid: number | null
    productid: number | null
    review: string | null
  }

  export type ReviewCountAggregateOutputType = {
    customerid: number
    productid: number
    review: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    customerid?: true
    productid?: true
  }

  export type ReviewSumAggregateInputType = {
    customerid?: true
    productid?: true
  }

  export type ReviewMinAggregateInputType = {
    customerid?: true
    productid?: true
    review?: true
  }

  export type ReviewMaxAggregateInputType = {
    customerid?: true
    productid?: true
    review?: true
  }

  export type ReviewCountAggregateInputType = {
    customerid?: true
    productid?: true
    review?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    customerid: number
    productid: number
    review: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    productid?: boolean
    review?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    productid?: boolean
    review?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerid?: boolean
    productid?: boolean
    review?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    customerid?: boolean
    productid?: boolean
    review?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerid" | "productid" | "review", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      customer: Prisma.$customerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerid: number
      productid: number
      review: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `customerid`
     * const reviewWithCustomeridOnly = await prisma.review.findMany({ select: { customerid: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `customerid`
     * const reviewWithCustomeridOnly = await prisma.review.createManyAndReturn({
     *   select: { customerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `customerid`
     * const reviewWithCustomeridOnly = await prisma.review.updateManyAndReturn({
     *   select: { customerid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly customerid: FieldRef<"review", 'Int'>
    readonly productid: FieldRef<"review", 'Int'>
    readonly review: FieldRef<"review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    customerid: 'customerid',
    name: 'name',
    surname: 'surname',
    phone_number: 'phone_number',
    email: 'email',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    orderid: 'orderid',
    customerid: 'customerid',
    address: 'address',
    created_at: 'created_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_itemScalarFieldEnum: {
    productid: 'productid',
    orderid: 'orderid',
    quantity: 'quantity'
  };

  export type Order_itemScalarFieldEnum = (typeof Order_itemScalarFieldEnum)[keyof typeof Order_itemScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productid: 'productid',
    name: 'name',
    cost_for_one: 'cost_for_one',
    desctiption: 'desctiption',
    quantity: 'quantity'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    categoryid: 'categoryid',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Category_productScalarFieldEnum: {
    productid: 'productid',
    categoryid: 'categoryid'
  };

  export type Category_productScalarFieldEnum = (typeof Category_productScalarFieldEnum)[keyof typeof Category_productScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    customerid: 'customerid',
    productid: 'productid',
    review: 'review'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    customerid?: IntFilter<"customer"> | number
    name?: StringFilter<"customer"> | string
    surname?: StringFilter<"customer"> | string
    phone_number?: StringFilter<"customer"> | string
    email?: StringFilter<"customer"> | string
    created_at?: DateTimeFilter<"customer"> | Date | string
    deleted_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    order?: OrderListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    customerid?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    order?: orderOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    customerid?: number
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    name?: StringFilter<"customer"> | string
    surname?: StringFilter<"customer"> | string
    phone_number?: StringFilter<"customer"> | string
    email?: StringFilter<"customer"> | string
    created_at?: DateTimeFilter<"customer"> | Date | string
    deleted_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    order?: OrderListRelationFilter
    review?: ReviewListRelationFilter
  }, "customerid">

  export type customerOrderByWithAggregationInput = {
    customerid?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    customerid?: IntWithAggregatesFilter<"customer"> | number
    name?: StringWithAggregatesFilter<"customer"> | string
    surname?: StringWithAggregatesFilter<"customer"> | string
    phone_number?: StringWithAggregatesFilter<"customer"> | string
    email?: StringWithAggregatesFilter<"customer"> | string
    created_at?: DateTimeWithAggregatesFilter<"customer"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"customer"> | Date | string | null
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    orderid?: IntFilter<"order"> | number
    customerid?: IntFilter<"order"> | number
    address?: StringFilter<"order"> | string
    created_at?: DateTimeFilter<"order"> | Date | string
    order_item?: Order_itemListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }

  export type orderOrderByWithRelationInput = {
    orderid?: SortOrder
    customerid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    order_item?: order_itemOrderByRelationAggregateInput
    customer?: customerOrderByWithRelationInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    orderid?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    customerid?: IntFilter<"order"> | number
    address?: StringFilter<"order"> | string
    created_at?: DateTimeFilter<"order"> | Date | string
    order_item?: Order_itemListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }, "orderid">

  export type orderOrderByWithAggregationInput = {
    orderid?: SortOrder
    customerid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    orderid?: IntWithAggregatesFilter<"order"> | number
    customerid?: IntWithAggregatesFilter<"order"> | number
    address?: StringWithAggregatesFilter<"order"> | string
    created_at?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type order_itemWhereInput = {
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    productid?: IntFilter<"order_item"> | number
    orderid?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }

  export type order_itemOrderByWithRelationInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
    product?: productOrderByWithRelationInput
    order?: orderOrderByWithRelationInput
  }

  export type order_itemWhereUniqueInput = Prisma.AtLeast<{
    productid_orderid?: order_itemProductidOrderidCompoundUniqueInput
    AND?: order_itemWhereInput | order_itemWhereInput[]
    OR?: order_itemWhereInput[]
    NOT?: order_itemWhereInput | order_itemWhereInput[]
    productid?: IntFilter<"order_item"> | number
    orderid?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }, "productid_orderid">

  export type order_itemOrderByWithAggregationInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
    _count?: order_itemCountOrderByAggregateInput
    _avg?: order_itemAvgOrderByAggregateInput
    _max?: order_itemMaxOrderByAggregateInput
    _min?: order_itemMinOrderByAggregateInput
    _sum?: order_itemSumOrderByAggregateInput
  }

  export type order_itemScalarWhereWithAggregatesInput = {
    AND?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    OR?: order_itemScalarWhereWithAggregatesInput[]
    NOT?: order_itemScalarWhereWithAggregatesInput | order_itemScalarWhereWithAggregatesInput[]
    productid?: IntWithAggregatesFilter<"order_item"> | number
    orderid?: IntWithAggregatesFilter<"order_item"> | number
    quantity?: IntWithAggregatesFilter<"order_item"> | number
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    productid?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    cost_for_one?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    desctiption?: StringFilter<"product"> | string
    quantity?: IntFilter<"product"> | number
    order_item?: Order_itemListRelationFilter
    category_product?: Category_productListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    productid?: SortOrder
    name?: SortOrder
    cost_for_one?: SortOrder
    desctiption?: SortOrder
    quantity?: SortOrder
    order_item?: order_itemOrderByRelationAggregateInput
    category_product?: category_productOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    productid?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    cost_for_one?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    desctiption?: StringFilter<"product"> | string
    quantity?: IntFilter<"product"> | number
    order_item?: Order_itemListRelationFilter
    category_product?: Category_productListRelationFilter
    review?: ReviewListRelationFilter
  }, "productid">

  export type productOrderByWithAggregationInput = {
    productid?: SortOrder
    name?: SortOrder
    cost_for_one?: SortOrder
    desctiption?: SortOrder
    quantity?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    productid?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    cost_for_one?: DecimalWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string
    desctiption?: StringWithAggregatesFilter<"product"> | string
    quantity?: IntWithAggregatesFilter<"product"> | number
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    categoryid?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    category_product?: Category_productListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    categoryid?: SortOrder
    name?: SortOrder
    category_product?: category_productOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    categoryid?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    category_product?: Category_productListRelationFilter
  }, "categoryid">

  export type categoryOrderByWithAggregationInput = {
    categoryid?: SortOrder
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    categoryid?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type category_productWhereInput = {
    AND?: category_productWhereInput | category_productWhereInput[]
    OR?: category_productWhereInput[]
    NOT?: category_productWhereInput | category_productWhereInput[]
    productid?: IntFilter<"category_product"> | number
    categoryid?: IntFilter<"category_product"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
  }

  export type category_productOrderByWithRelationInput = {
    productid?: SortOrder
    categoryid?: SortOrder
    product?: productOrderByWithRelationInput
    category?: categoryOrderByWithRelationInput
  }

  export type category_productWhereUniqueInput = Prisma.AtLeast<{
    productid_categoryid?: category_productProductidCategoryidCompoundUniqueInput
    AND?: category_productWhereInput | category_productWhereInput[]
    OR?: category_productWhereInput[]
    NOT?: category_productWhereInput | category_productWhereInput[]
    productid?: IntFilter<"category_product"> | number
    categoryid?: IntFilter<"category_product"> | number
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
  }, "productid_categoryid">

  export type category_productOrderByWithAggregationInput = {
    productid?: SortOrder
    categoryid?: SortOrder
    _count?: category_productCountOrderByAggregateInput
    _avg?: category_productAvgOrderByAggregateInput
    _max?: category_productMaxOrderByAggregateInput
    _min?: category_productMinOrderByAggregateInput
    _sum?: category_productSumOrderByAggregateInput
  }

  export type category_productScalarWhereWithAggregatesInput = {
    AND?: category_productScalarWhereWithAggregatesInput | category_productScalarWhereWithAggregatesInput[]
    OR?: category_productScalarWhereWithAggregatesInput[]
    NOT?: category_productScalarWhereWithAggregatesInput | category_productScalarWhereWithAggregatesInput[]
    productid?: IntWithAggregatesFilter<"category_product"> | number
    categoryid?: IntWithAggregatesFilter<"category_product"> | number
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    customerid?: IntFilter<"review"> | number
    productid?: IntFilter<"review"> | number
    review?: StringFilter<"review"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    customerid?: SortOrder
    productid?: SortOrder
    review?: SortOrder
    product?: productOrderByWithRelationInput
    customer?: customerOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    productid_customerid?: reviewProductidCustomeridCompoundUniqueInput
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    customerid?: IntFilter<"review"> | number
    productid?: IntFilter<"review"> | number
    review?: StringFilter<"review"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }, "productid_customerid">

  export type reviewOrderByWithAggregationInput = {
    customerid?: SortOrder
    productid?: SortOrder
    review?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    customerid?: IntWithAggregatesFilter<"review"> | number
    productid?: IntWithAggregatesFilter<"review"> | number
    review?: StringWithAggregatesFilter<"review"> | string
  }

  export type customerCreateInput = {
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    order?: orderCreateNestedManyWithoutCustomerInput
    review?: reviewCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    customerid?: number
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    order?: orderUncheckedCreateNestedManyWithoutCustomerInput
    review?: reviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUpdateManyWithoutCustomerNestedInput
    review?: reviewUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUncheckedUpdateManyWithoutCustomerNestedInput
    review?: reviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    customerid?: number
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type customerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customerUncheckedUpdateManyInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderCreateInput = {
    address: string
    created_at?: Date | string
    order_item?: order_itemCreateNestedManyWithoutOrderInput
    customer: customerCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    orderid?: number
    customerid: number
    address: string
    created_at?: Date | string
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUpdateManyWithoutOrderNestedInput
    customer?: customerUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    customerid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    orderid?: number
    customerid: number
    address: string
    created_at?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    customerid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateInput = {
    quantity: number
    product: productCreateNestedOneWithoutOrder_itemInput
    order: orderCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateInput = {
    productid: number
    orderid: number
    quantity: number
  }

  export type order_itemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrder_itemNestedInput
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateInput = {
    productid?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemCreateManyInput = {
    productid: number
    orderid: number
    quantity: number
  }

  export type order_itemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyInput = {
    productid?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateInput = {
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemCreateNestedManyWithoutProductInput
    category_product?: category_productCreateNestedManyWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    productid?: number
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput
    category_product?: category_productUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUpdateManyWithoutProductNestedInput
    category_product?: category_productUpdateManyWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    productid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    category_product?: category_productUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    productid?: number
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateManyInput = {
    productid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type categoryCreateInput = {
    name: string
    category_product?: category_productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    categoryid?: number
    name: string
    category_product?: category_productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category_product?: category_productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category_product?: category_productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    categoryid?: number
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type category_productCreateInput = {
    product: productCreateNestedOneWithoutCategory_productInput
    category: categoryCreateNestedOneWithoutCategory_productInput
  }

  export type category_productUncheckedCreateInput = {
    productid: number
    categoryid: number
  }

  export type category_productUpdateInput = {
    product?: productUpdateOneRequiredWithoutCategory_productNestedInput
    category?: categoryUpdateOneRequiredWithoutCategory_productNestedInput
  }

  export type category_productUncheckedUpdateInput = {
    productid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type category_productCreateManyInput = {
    productid: number
    categoryid: number
  }

  export type category_productUpdateManyMutationInput = {

  }

  export type category_productUncheckedUpdateManyInput = {
    productid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateInput = {
    review: string
    product: productCreateNestedOneWithoutReviewInput
    customer: customerCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    customerid: number
    productid: number
    review: string
  }

  export type reviewUpdateInput = {
    review?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutReviewNestedInput
    customer?: customerUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type reviewCreateManyInput = {
    customerid: number
    productid: number
    review: string
  }

  export type reviewUpdateManyMutationInput = {
    review?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    productid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    customerid?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    customerid?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    customerid?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    customerid?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    customerid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Order_itemListRelationFilter = {
    every?: order_itemWhereInput
    some?: order_itemWhereInput
    none?: order_itemWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type order_itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    orderid?: SortOrder
    customerid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    orderid?: SortOrder
    customerid?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    orderid?: SortOrder
    customerid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    orderid?: SortOrder
    customerid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    orderid?: SortOrder
    customerid?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type order_itemProductidOrderidCompoundUniqueInput = {
    productid: number
    orderid: number
  }

  export type order_itemCountOrderByAggregateInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemAvgOrderByAggregateInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemMaxOrderByAggregateInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemMinOrderByAggregateInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemSumOrderByAggregateInput = {
    productid?: SortOrder
    orderid?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Category_productListRelationFilter = {
    every?: category_productWhereInput
    some?: category_productWhereInput
    none?: category_productWhereInput
  }

  export type category_productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    productid?: SortOrder
    name?: SortOrder
    cost_for_one?: SortOrder
    desctiption?: SortOrder
    quantity?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    productid?: SortOrder
    cost_for_one?: SortOrder
    quantity?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    productid?: SortOrder
    name?: SortOrder
    cost_for_one?: SortOrder
    desctiption?: SortOrder
    quantity?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    productid?: SortOrder
    name?: SortOrder
    cost_for_one?: SortOrder
    desctiption?: SortOrder
    quantity?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    productid?: SortOrder
    cost_for_one?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type categoryCountOrderByAggregateInput = {
    categoryid?: SortOrder
    name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    categoryid?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    categoryid?: SortOrder
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    categoryid?: SortOrder
    name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    categoryid?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type category_productProductidCategoryidCompoundUniqueInput = {
    productid: number
    categoryid: number
  }

  export type category_productCountOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type category_productAvgOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type category_productMaxOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type category_productMinOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type category_productSumOrderByAggregateInput = {
    productid?: SortOrder
    categoryid?: SortOrder
  }

  export type reviewProductidCustomeridCompoundUniqueInput = {
    productid: number
    customerid: number
  }

  export type reviewCountOrderByAggregateInput = {
    customerid?: SortOrder
    productid?: SortOrder
    review?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    customerid?: SortOrder
    productid?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    customerid?: SortOrder
    productid?: SortOrder
    review?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    customerid?: SortOrder
    productid?: SortOrder
    review?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    customerid?: SortOrder
    productid?: SortOrder
  }

  export type orderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput> | orderCreateWithoutCustomerInput[] | orderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: orderCreateOrConnectWithoutCustomerInput | orderCreateOrConnectWithoutCustomerInput[]
    createMany?: orderCreateManyCustomerInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput> | orderCreateWithoutCustomerInput[] | orderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: orderCreateOrConnectWithoutCustomerInput | orderCreateOrConnectWithoutCustomerInput[]
    createMany?: orderCreateManyCustomerInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type orderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput> | orderCreateWithoutCustomerInput[] | orderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: orderCreateOrConnectWithoutCustomerInput | orderCreateOrConnectWithoutCustomerInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutCustomerInput | orderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: orderCreateManyCustomerInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutCustomerInput | orderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: orderUpdateManyWithWhereWithoutCustomerInput | orderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCustomerInput | reviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCustomerInput | reviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCustomerInput | reviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput> | orderCreateWithoutCustomerInput[] | orderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: orderCreateOrConnectWithoutCustomerInput | orderCreateOrConnectWithoutCustomerInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutCustomerInput | orderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: orderCreateManyCustomerInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutCustomerInput | orderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: orderUpdateManyWithWhereWithoutCustomerInput | orderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput> | reviewCreateWithoutCustomerInput[] | reviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCustomerInput | reviewCreateOrConnectWithoutCustomerInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCustomerInput | reviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: reviewCreateManyCustomerInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCustomerInput | reviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCustomerInput | reviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type order_itemCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type customerCreateNestedOneWithoutOrderInput = {
    create?: XOR<customerCreateWithoutOrderInput, customerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: customerCreateOrConnectWithoutOrderInput
    connect?: customerWhereUniqueInput
  }

  export type order_itemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type order_itemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type customerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<customerCreateWithoutOrderInput, customerUncheckedCreateWithoutOrderInput>
    connectOrCreate?: customerCreateOrConnectWithoutOrderInput
    upsert?: customerUpsertWithoutOrderInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutOrderInput, customerUpdateWithoutOrderInput>, customerUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput> | order_itemCreateWithoutOrderInput[] | order_itemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutOrderInput | order_itemCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutOrderInput | order_itemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemCreateManyOrderInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutOrderInput | order_itemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutOrderInput | order_itemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemInput
    connect?: productWhereUniqueInput
  }

  export type orderCreateNestedOneWithoutOrder_itemInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput
    connect?: orderWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: productCreateOrConnectWithoutOrder_itemInput
    upsert?: productUpsertWithoutOrder_itemInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrder_itemInput, productUpdateWithoutOrder_itemInput>, productUncheckedUpdateWithoutOrder_itemInput>
  }

  export type orderUpdateOneRequiredWithoutOrder_itemNestedInput = {
    create?: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrder_itemInput
    upsert?: orderUpsertWithoutOrder_itemInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrder_itemInput, orderUpdateWithoutOrder_itemInput>, orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type order_itemCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type category_productCreateNestedManyWithoutProductInput = {
    create?: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput> | category_productCreateWithoutProductInput[] | category_productUncheckedCreateWithoutProductInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutProductInput | category_productCreateOrConnectWithoutProductInput[]
    createMany?: category_productCreateManyProductInputEnvelope
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type order_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
  }

  export type category_productUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput> | category_productCreateWithoutProductInput[] | category_productUncheckedCreateWithoutProductInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutProductInput | category_productCreateOrConnectWithoutProductInput[]
    createMany?: category_productCreateManyProductInputEnvelope
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type category_productUpdateManyWithoutProductNestedInput = {
    create?: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput> | category_productCreateWithoutProductInput[] | category_productUncheckedCreateWithoutProductInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutProductInput | category_productCreateOrConnectWithoutProductInput[]
    upsert?: category_productUpsertWithWhereUniqueWithoutProductInput | category_productUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: category_productCreateManyProductInputEnvelope
    set?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    disconnect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    delete?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    update?: category_productUpdateWithWhereUniqueWithoutProductInput | category_productUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: category_productUpdateManyWithWhereWithoutProductInput | category_productUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: category_productScalarWhereInput | category_productScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type order_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput> | order_itemCreateWithoutProductInput[] | order_itemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemCreateOrConnectWithoutProductInput | order_itemCreateOrConnectWithoutProductInput[]
    upsert?: order_itemUpsertWithWhereUniqueWithoutProductInput | order_itemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemCreateManyProductInputEnvelope
    set?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    disconnect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    delete?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    connect?: order_itemWhereUniqueInput | order_itemWhereUniqueInput[]
    update?: order_itemUpdateWithWhereUniqueWithoutProductInput | order_itemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemUpdateManyWithWhereWithoutProductInput | order_itemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
  }

  export type category_productUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput> | category_productCreateWithoutProductInput[] | category_productUncheckedCreateWithoutProductInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutProductInput | category_productCreateOrConnectWithoutProductInput[]
    upsert?: category_productUpsertWithWhereUniqueWithoutProductInput | category_productUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: category_productCreateManyProductInputEnvelope
    set?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    disconnect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    delete?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    update?: category_productUpdateWithWhereUniqueWithoutProductInput | category_productUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: category_productUpdateManyWithWhereWithoutProductInput | category_productUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: category_productScalarWhereInput | category_productScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput> | reviewCreateWithoutProductInput[] | reviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutProductInput | reviewCreateOrConnectWithoutProductInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutProductInput | reviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: reviewCreateManyProductInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutProductInput | reviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutProductInput | reviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type category_productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput> | category_productCreateWithoutCategoryInput[] | category_productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutCategoryInput | category_productCreateOrConnectWithoutCategoryInput[]
    createMany?: category_productCreateManyCategoryInputEnvelope
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
  }

  export type category_productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput> | category_productCreateWithoutCategoryInput[] | category_productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutCategoryInput | category_productCreateOrConnectWithoutCategoryInput[]
    createMany?: category_productCreateManyCategoryInputEnvelope
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
  }

  export type category_productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput> | category_productCreateWithoutCategoryInput[] | category_productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutCategoryInput | category_productCreateOrConnectWithoutCategoryInput[]
    upsert?: category_productUpsertWithWhereUniqueWithoutCategoryInput | category_productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: category_productCreateManyCategoryInputEnvelope
    set?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    disconnect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    delete?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    update?: category_productUpdateWithWhereUniqueWithoutCategoryInput | category_productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: category_productUpdateManyWithWhereWithoutCategoryInput | category_productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: category_productScalarWhereInput | category_productScalarWhereInput[]
  }

  export type category_productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput> | category_productCreateWithoutCategoryInput[] | category_productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: category_productCreateOrConnectWithoutCategoryInput | category_productCreateOrConnectWithoutCategoryInput[]
    upsert?: category_productUpsertWithWhereUniqueWithoutCategoryInput | category_productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: category_productCreateManyCategoryInputEnvelope
    set?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    disconnect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    delete?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    connect?: category_productWhereUniqueInput | category_productWhereUniqueInput[]
    update?: category_productUpdateWithWhereUniqueWithoutCategoryInput | category_productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: category_productUpdateManyWithWhereWithoutCategoryInput | category_productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: category_productScalarWhereInput | category_productScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutCategory_productInput = {
    create?: XOR<productCreateWithoutCategory_productInput, productUncheckedCreateWithoutCategory_productInput>
    connectOrCreate?: productCreateOrConnectWithoutCategory_productInput
    connect?: productWhereUniqueInput
  }

  export type categoryCreateNestedOneWithoutCategory_productInput = {
    create?: XOR<categoryCreateWithoutCategory_productInput, categoryUncheckedCreateWithoutCategory_productInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_productInput
    connect?: categoryWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutCategory_productNestedInput = {
    create?: XOR<productCreateWithoutCategory_productInput, productUncheckedCreateWithoutCategory_productInput>
    connectOrCreate?: productCreateOrConnectWithoutCategory_productInput
    upsert?: productUpsertWithoutCategory_productInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCategory_productInput, productUpdateWithoutCategory_productInput>, productUncheckedUpdateWithoutCategory_productInput>
  }

  export type categoryUpdateOneRequiredWithoutCategory_productNestedInput = {
    create?: XOR<categoryCreateWithoutCategory_productInput, categoryUncheckedCreateWithoutCategory_productInput>
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_productInput
    upsert?: categoryUpsertWithoutCategory_productInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutCategory_productInput, categoryUpdateWithoutCategory_productInput>, categoryUncheckedUpdateWithoutCategory_productInput>
  }

  export type productCreateNestedOneWithoutReviewInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    connect?: productWhereUniqueInput
  }

  export type customerCreateNestedOneWithoutReviewInput = {
    create?: XOR<customerCreateWithoutReviewInput, customerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: customerCreateOrConnectWithoutReviewInput
    connect?: customerWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    connectOrCreate?: productCreateOrConnectWithoutReviewInput
    upsert?: productUpsertWithoutReviewInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutReviewInput, productUpdateWithoutReviewInput>, productUncheckedUpdateWithoutReviewInput>
  }

  export type customerUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<customerCreateWithoutReviewInput, customerUncheckedCreateWithoutReviewInput>
    connectOrCreate?: customerCreateOrConnectWithoutReviewInput
    upsert?: customerUpsertWithoutReviewInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutReviewInput, customerUpdateWithoutReviewInput>, customerUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type orderCreateWithoutCustomerInput = {
    address: string
    created_at?: Date | string
    order_item?: order_itemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutCustomerInput = {
    orderid?: number
    address: string
    created_at?: Date | string
    order_item?: order_itemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutCustomerInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput>
  }

  export type orderCreateManyCustomerInputEnvelope = {
    data: orderCreateManyCustomerInput | orderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutCustomerInput = {
    review: string
    product: productCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutCustomerInput = {
    productid: number
    review: string
  }

  export type reviewCreateOrConnectWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput>
  }

  export type reviewCreateManyCustomerInputEnvelope = {
    data: reviewCreateManyCustomerInput | reviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type orderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutCustomerInput, orderUncheckedUpdateWithoutCustomerInput>
    create: XOR<orderCreateWithoutCustomerInput, orderUncheckedCreateWithoutCustomerInput>
  }

  export type orderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutCustomerInput, orderUncheckedUpdateWithoutCustomerInput>
  }

  export type orderUpdateManyWithWhereWithoutCustomerInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    orderid?: IntFilter<"order"> | number
    customerid?: IntFilter<"order"> | number
    address?: StringFilter<"order"> | string
    created_at?: DateTimeFilter<"order"> | Date | string
  }

  export type reviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutCustomerInput, reviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<reviewCreateWithoutCustomerInput, reviewUncheckedCreateWithoutCustomerInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutCustomerInput, reviewUncheckedUpdateWithoutCustomerInput>
  }

  export type reviewUpdateManyWithWhereWithoutCustomerInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    customerid?: IntFilter<"review"> | number
    productid?: IntFilter<"review"> | number
    review?: StringFilter<"review"> | string
  }

  export type order_itemCreateWithoutOrderInput = {
    quantity: number
    product: productCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutOrderInput = {
    productid: number
    quantity: number
  }

  export type order_itemCreateOrConnectWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemCreateManyOrderInputEnvelope = {
    data: order_itemCreateManyOrderInput | order_itemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type customerCreateWithoutOrderInput = {
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    review?: reviewCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutOrderInput = {
    customerid?: number
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    review?: reviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutOrderInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutOrderInput, customerUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemCreateWithoutOrderInput, order_itemUncheckedCreateWithoutOrderInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutOrderInput, order_itemUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutOrderInput>
  }

  export type order_itemScalarWhereInput = {
    AND?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    OR?: order_itemScalarWhereInput[]
    NOT?: order_itemScalarWhereInput | order_itemScalarWhereInput[]
    productid?: IntFilter<"order_item"> | number
    orderid?: IntFilter<"order_item"> | number
    quantity?: IntFilter<"order_item"> | number
  }

  export type customerUpsertWithoutOrderInput = {
    update: XOR<customerUpdateWithoutOrderInput, customerUncheckedUpdateWithoutOrderInput>
    create: XOR<customerCreateWithoutOrderInput, customerUncheckedCreateWithoutOrderInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutOrderInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutOrderInput, customerUncheckedUpdateWithoutOrderInput>
  }

  export type customerUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: reviewUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutOrderInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: reviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type productCreateWithoutOrder_itemInput = {
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    category_product?: category_productCreateNestedManyWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrder_itemInput = {
    productid?: number
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    category_product?: category_productUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrder_itemInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>
  }

  export type orderCreateWithoutOrder_itemInput = {
    address: string
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutOrder_itemInput = {
    orderid?: number
    customerid: number
    address: string
    created_at?: Date | string
  }

  export type orderCreateOrConnectWithoutOrder_itemInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
  }

  export type productUpsertWithoutOrder_itemInput = {
    update: XOR<productUpdateWithoutOrder_itemInput, productUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<productCreateWithoutOrder_itemInput, productUncheckedCreateWithoutOrder_itemInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrder_itemInput, productUncheckedUpdateWithoutOrder_itemInput>
  }

  export type productUpdateWithoutOrder_itemInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_product?: category_productUpdateManyWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrder_itemInput = {
    productid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    category_product?: category_productUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type orderUpsertWithoutOrder_itemInput = {
    update: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<orderCreateWithoutOrder_itemInput, orderUncheckedCreateWithoutOrder_itemInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrder_itemInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrder_itemInput, orderUncheckedUpdateWithoutOrder_itemInput>
  }

  export type orderUpdateWithoutOrder_itemInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutOrder_itemInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    customerid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemCreateWithoutProductInput = {
    quantity: number
    order: orderCreateNestedOneWithoutOrder_itemInput
  }

  export type order_itemUncheckedCreateWithoutProductInput = {
    orderid: number
    quantity: number
  }

  export type order_itemCreateOrConnectWithoutProductInput = {
    where: order_itemWhereUniqueInput
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemCreateManyProductInputEnvelope = {
    data: order_itemCreateManyProductInput | order_itemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type category_productCreateWithoutProductInput = {
    category: categoryCreateNestedOneWithoutCategory_productInput
  }

  export type category_productUncheckedCreateWithoutProductInput = {
    categoryid: number
  }

  export type category_productCreateOrConnectWithoutProductInput = {
    where: category_productWhereUniqueInput
    create: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput>
  }

  export type category_productCreateManyProductInputEnvelope = {
    data: category_productCreateManyProductInput | category_productCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutProductInput = {
    review: string
    customer: customerCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutProductInput = {
    customerid: number
    review: string
  }

  export type reviewCreateOrConnectWithoutProductInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewCreateManyProductInputEnvelope = {
    data: reviewCreateManyProductInput | reviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type order_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    update: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
    create: XOR<order_itemCreateWithoutProductInput, order_itemUncheckedCreateWithoutProductInput>
  }

  export type order_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemWhereUniqueInput
    data: XOR<order_itemUpdateWithoutProductInput, order_itemUncheckedUpdateWithoutProductInput>
  }

  export type order_itemUpdateManyWithWhereWithoutProductInput = {
    where: order_itemScalarWhereInput
    data: XOR<order_itemUpdateManyMutationInput, order_itemUncheckedUpdateManyWithoutProductInput>
  }

  export type category_productUpsertWithWhereUniqueWithoutProductInput = {
    where: category_productWhereUniqueInput
    update: XOR<category_productUpdateWithoutProductInput, category_productUncheckedUpdateWithoutProductInput>
    create: XOR<category_productCreateWithoutProductInput, category_productUncheckedCreateWithoutProductInput>
  }

  export type category_productUpdateWithWhereUniqueWithoutProductInput = {
    where: category_productWhereUniqueInput
    data: XOR<category_productUpdateWithoutProductInput, category_productUncheckedUpdateWithoutProductInput>
  }

  export type category_productUpdateManyWithWhereWithoutProductInput = {
    where: category_productScalarWhereInput
    data: XOR<category_productUpdateManyMutationInput, category_productUncheckedUpdateManyWithoutProductInput>
  }

  export type category_productScalarWhereInput = {
    AND?: category_productScalarWhereInput | category_productScalarWhereInput[]
    OR?: category_productScalarWhereInput[]
    NOT?: category_productScalarWhereInput | category_productScalarWhereInput[]
    productid?: IntFilter<"category_product"> | number
    categoryid?: IntFilter<"category_product"> | number
  }

  export type reviewUpsertWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
    create: XOR<reviewCreateWithoutProductInput, reviewUncheckedCreateWithoutProductInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutProductInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutProductInput, reviewUncheckedUpdateWithoutProductInput>
  }

  export type reviewUpdateManyWithWhereWithoutProductInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutProductInput>
  }

  export type category_productCreateWithoutCategoryInput = {
    product: productCreateNestedOneWithoutCategory_productInput
  }

  export type category_productUncheckedCreateWithoutCategoryInput = {
    productid: number
  }

  export type category_productCreateOrConnectWithoutCategoryInput = {
    where: category_productWhereUniqueInput
    create: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput>
  }

  export type category_productCreateManyCategoryInputEnvelope = {
    data: category_productCreateManyCategoryInput | category_productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type category_productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: category_productWhereUniqueInput
    update: XOR<category_productUpdateWithoutCategoryInput, category_productUncheckedUpdateWithoutCategoryInput>
    create: XOR<category_productCreateWithoutCategoryInput, category_productUncheckedCreateWithoutCategoryInput>
  }

  export type category_productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: category_productWhereUniqueInput
    data: XOR<category_productUpdateWithoutCategoryInput, category_productUncheckedUpdateWithoutCategoryInput>
  }

  export type category_productUpdateManyWithWhereWithoutCategoryInput = {
    where: category_productScalarWhereInput
    data: XOR<category_productUpdateManyMutationInput, category_productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productCreateWithoutCategory_productInput = {
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemCreateNestedManyWithoutProductInput
    review?: reviewCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategory_productInput = {
    productid?: number
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput
    review?: reviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategory_productInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategory_productInput, productUncheckedCreateWithoutCategory_productInput>
  }

  export type categoryCreateWithoutCategory_productInput = {
    name: string
  }

  export type categoryUncheckedCreateWithoutCategory_productInput = {
    categoryid?: number
    name: string
  }

  export type categoryCreateOrConnectWithoutCategory_productInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutCategory_productInput, categoryUncheckedCreateWithoutCategory_productInput>
  }

  export type productUpsertWithoutCategory_productInput = {
    update: XOR<productUpdateWithoutCategory_productInput, productUncheckedUpdateWithoutCategory_productInput>
    create: XOR<productCreateWithoutCategory_productInput, productUncheckedCreateWithoutCategory_productInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCategory_productInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCategory_productInput, productUncheckedUpdateWithoutCategory_productInput>
  }

  export type productUpdateWithoutCategory_productInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUpdateManyWithoutProductNestedInput
    review?: reviewUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategory_productInput = {
    productid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    review?: reviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type categoryUpsertWithoutCategory_productInput = {
    update: XOR<categoryUpdateWithoutCategory_productInput, categoryUncheckedUpdateWithoutCategory_productInput>
    create: XOR<categoryCreateWithoutCategory_productInput, categoryUncheckedCreateWithoutCategory_productInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutCategory_productInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutCategory_productInput, categoryUncheckedUpdateWithoutCategory_productInput>
  }

  export type categoryUpdateWithoutCategory_productInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutCategory_productInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productCreateWithoutReviewInput = {
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemCreateNestedManyWithoutProductInput
    category_product?: category_productCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutReviewInput = {
    productid?: number
    name: string
    cost_for_one: Decimal | DecimalJsLike | number | string
    desctiption: string
    quantity: number
    order_item?: order_itemUncheckedCreateNestedManyWithoutProductInput
    category_product?: category_productUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutReviewInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
  }

  export type customerCreateWithoutReviewInput = {
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    order?: orderCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutReviewInput = {
    customerid?: number
    name: string
    surname: string
    phone_number: string
    email: string
    created_at?: Date | string
    deleted_at?: Date | string | null
    order?: orderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutReviewInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutReviewInput, customerUncheckedCreateWithoutReviewInput>
  }

  export type productUpsertWithoutReviewInput = {
    update: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
    create: XOR<productCreateWithoutReviewInput, productUncheckedCreateWithoutReviewInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutReviewInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutReviewInput, productUncheckedUpdateWithoutReviewInput>
  }

  export type productUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUpdateManyWithoutProductNestedInput
    category_product?: category_productUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutReviewInput = {
    productid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cost_for_one?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desctiption?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_item?: order_itemUncheckedUpdateManyWithoutProductNestedInput
    category_product?: category_productUncheckedUpdateManyWithoutProductNestedInput
  }

  export type customerUpsertWithoutReviewInput = {
    update: XOR<customerUpdateWithoutReviewInput, customerUncheckedUpdateWithoutReviewInput>
    create: XOR<customerCreateWithoutReviewInput, customerUncheckedCreateWithoutReviewInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutReviewInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutReviewInput, customerUncheckedUpdateWithoutReviewInput>
  }

  export type customerUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutReviewInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type orderCreateManyCustomerInput = {
    orderid?: number
    address: string
    created_at?: Date | string
  }

  export type reviewCreateManyCustomerInput = {
    productid: number
    review: string
  }

  export type orderUpdateWithoutCustomerInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutCustomerInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_item?: order_itemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutCustomerInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUpdateWithoutCustomerInput = {
    review?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutCustomerInput = {
    productid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutCustomerInput = {
    productid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemCreateManyOrderInput = {
    productid: number
    quantity: number
  }

  export type order_itemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutOrderInput = {
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutOrderInput = {
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemCreateManyProductInput = {
    orderid: number
    quantity: number
  }

  export type category_productCreateManyProductInput = {
    categoryid: number
  }

  export type reviewCreateManyProductInput = {
    customerid: number
    review: string
  }

  export type order_itemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrder_itemNestedInput
  }

  export type order_itemUncheckedUpdateWithoutProductInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemUncheckedUpdateManyWithoutProductInput = {
    orderid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type category_productUpdateWithoutProductInput = {
    category?: categoryUpdateOneRequiredWithoutCategory_productNestedInput
  }

  export type category_productUncheckedUpdateWithoutProductInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type category_productUncheckedUpdateManyWithoutProductInput = {
    categoryid?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutProductInput = {
    review?: StringFieldUpdateOperationsInput | string
    customer?: customerUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutProductInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type reviewUncheckedUpdateManyWithoutProductInput = {
    customerid?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
  }

  export type category_productCreateManyCategoryInput = {
    productid: number
  }

  export type category_productUpdateWithoutCategoryInput = {
    product?: productUpdateOneRequiredWithoutCategory_productNestedInput
  }

  export type category_productUncheckedUpdateWithoutCategoryInput = {
    productid?: IntFieldUpdateOperationsInput | number
  }

  export type category_productUncheckedUpdateManyWithoutCategoryInput = {
    productid?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}