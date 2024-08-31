/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ProjectClientInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.createMany(input as any))),

        create: procedure.input($Schema.ProjectClientInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.create(input as any))),

        deleteMany: procedure.input($Schema.ProjectClientInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.deleteMany(input as any))),

        delete: procedure.input($Schema.ProjectClientInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.delete(input as any))),

        findFirst: procedure.input($Schema.ProjectClientInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).projectClient.findFirst(input as any))),

        findMany: procedure.input($Schema.ProjectClientInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).projectClient.findMany(input as any))),

        findUnique: procedure.input($Schema.ProjectClientInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).projectClient.findUnique(input as any))),

        updateMany: procedure.input($Schema.ProjectClientInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.updateMany(input as any))),

        update: procedure.input($Schema.ProjectClientInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectClient.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ProjectClientCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ProjectClientCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectClientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectClientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectClientGetPayload<T>, Context>) => Promise<Prisma.ProjectClientGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ProjectClientDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ProjectClientDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectClientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectClientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectClientGetPayload<T>, Context>) => Promise<Prisma.ProjectClientGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ProjectClientFindFirstArgs, TData = Prisma.ProjectClientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectClientFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProjectClientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectClientFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectClientFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProjectClientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProjectClientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ProjectClientFindManyArgs, TData = Array<Prisma.ProjectClientGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectClientFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ProjectClientGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectClientFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectClientFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ProjectClientGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ProjectClientGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ProjectClientFindUniqueArgs, TData = Prisma.ProjectClientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectClientFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProjectClientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectClientFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectClientFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProjectClientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProjectClientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ProjectClientUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ProjectClientUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectClientUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectClientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectClientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectClientUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectClientUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectClientGetPayload<T>, Context>) => Promise<Prisma.ProjectClientGetPayload<T>>
            };

    };
}
