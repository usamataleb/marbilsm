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

        createMany: procedure.input($Schema.TimesheetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.createMany(input as any))),

        create: procedure.input($Schema.TimesheetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.create(input as any))),

        deleteMany: procedure.input($Schema.TimesheetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.deleteMany(input as any))),

        delete: procedure.input($Schema.TimesheetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.delete(input as any))),

        findFirst: procedure.input($Schema.TimesheetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).timesheet.findFirst(input as any))),

        findMany: procedure.input($Schema.TimesheetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).timesheet.findMany(input as any))),

        findUnique: procedure.input($Schema.TimesheetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).timesheet.findUnique(input as any))),

        updateMany: procedure.input($Schema.TimesheetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.updateMany(input as any))),

        update: procedure.input($Schema.TimesheetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).timesheet.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TimesheetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TimesheetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TimesheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TimesheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TimesheetGetPayload<T>, Context>) => Promise<Prisma.TimesheetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TimesheetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TimesheetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TimesheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TimesheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TimesheetGetPayload<T>, Context>) => Promise<Prisma.TimesheetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TimesheetFindFirstArgs, TData = Prisma.TimesheetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TimesheetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TimesheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TimesheetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TimesheetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TimesheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TimesheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TimesheetFindManyArgs, TData = Array<Prisma.TimesheetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TimesheetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TimesheetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TimesheetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TimesheetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TimesheetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TimesheetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TimesheetFindUniqueArgs, TData = Prisma.TimesheetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TimesheetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TimesheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TimesheetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TimesheetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TimesheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TimesheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TimesheetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TimesheetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TimesheetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TimesheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TimesheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TimesheetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TimesheetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TimesheetGetPayload<T>, Context>) => Promise<Prisma.TimesheetGetPayload<T>>
            };

    };
}
