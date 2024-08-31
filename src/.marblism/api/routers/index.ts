/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createProjectRouter from "./Project.router";
import createTaskRouter from "./Task.router";
import createTimesheetRouter from "./Timesheet.router";
import createProjectClientRouter from "./ProjectClient.router";
import createClientRouter from "./Client.router";
import createInvoiceRouter from "./Invoice.router";
import createPaymentRouter from "./Payment.router";
import createConsultationRouter from "./Consultation.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as ProjectClientType } from "./Project.router";
import { ClientType as TaskClientType } from "./Task.router";
import { ClientType as TimesheetClientType } from "./Timesheet.router";
import { ClientType as ProjectClientClientType } from "./ProjectClient.router";
import { ClientType as ClientClientType } from "./Client.router";
import { ClientType as InvoiceClientType } from "./Invoice.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as ConsultationClientType } from "./Consultation.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        project: createProjectRouter(router, procedure),
        task: createTaskRouter(router, procedure),
        timesheet: createTimesheetRouter(router, procedure),
        projectClient: createProjectClientRouter(router, procedure),
        client: createClientRouter(router, procedure),
        invoice: createInvoiceRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        consultation: createConsultationRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    project: ProjectClientType<AppRouter>;
    task: TaskClientType<AppRouter>;
    timesheet: TimesheetClientType<AppRouter>;
    projectClient: ProjectClientClientType<AppRouter>;
    client: ClientClientType<AppRouter>;
    invoice: InvoiceClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    consultation: ConsultationClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
