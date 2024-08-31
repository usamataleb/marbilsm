import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('17a02642-3d97-4496-b8a6-b897e4a52370', '1Sid4@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('9e16ccdf-3d3d-4901-8bca-b71550dc8941', '8Woodrow.Nader-Welch74@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv11223', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('92096032-b58f-425a-ad1a-58bc68f8b114', '15Mckenna79@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f7be5c87-7fc0-4364-9df0-a2e4b487dd17', '29Elda.Ernser@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('680185a2-cb16-4ec9-ba05-49fc9935f38b', '36Tyrel.Senger@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv11223', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('5d14e39b-b710-44d5-8c4d-82ff581eaa00', '43Howard_Brown@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('20a7cdfc-f83f-4dd5-8a78-ffb3f4aa4b00', '50Xzavier_Reichel24@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('383d47ad-daa5-4629-a651-79bc6acf13c7', '57Rasheed.Rice40@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv11223', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('7866a72f-9d79-4042-8d5c-b37c9d1f44ed', '64Anna.Hudson@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv78901', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('65ad9f48-6413-4a68-8646-d7fae65f1ff9', 'm1n2b3v4c5x6z7a8s9d0', '{"caterva":"derideo","occaecati":"compono","labore":"aut","aranea":"vulnus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('a7d710fc-e49b-4333-ad4c-51598306d0a3', 'l1k2j3h4g5f6d7s8a9p0', '{"certe":"sed","tempore":"ara","benevolentia":"temptatio"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('54412aac-3ddf-4bb2-aba5-5e6498c91bfa', 'l1k2j3h4g5f6d7s8a9p0', '{"nihil":"sint","vobis":"tergeo","depono":"cerno"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ea8b2374-4096-49c6-a98b-cfad9de6fcf4', 'z9y8x7w6v5u4t3s2r1q0', '{"vix":"vivo","ambitus":"tempora","adulatio":"pecus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('51d25337-cc0b-48da-b3c8-6d34a7de4cc3', 'l1k2j3h4g5f6d7s8a9p0', '{"magni":"texo","sub":"tenax","aveho":"cunabula","sophismata":"verbera","surgo":"soluta"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0884b279-6afc-4e37-babb-e65c1e6fb005', 'q1w2e3r4t5y6u7i8o9p0', '{"tactus":"supellex","demulceo":"attonbitus","denuncio":"barba","talio":"minima"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('dd40ecbd-d013-4896-878b-f66a3c711b0a', 'z9y8x7w6v5u4t3s2r1q0', '{"tracto":"subito","concedo":"atrocitas","deleo":"quo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('5081024e-fde7-414a-aba4-0530b7b47bc1', 'z9y8x7w6v5u4t3s2r1q0', '{"cunae":"defendo","nam":"deripio","copia":"tolero","bonus":"arma"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1f90488c-8641-435c-ba94-de5e4c3fbf7c', 'z9y8x7w6v5u4t3s2r1q0', '{"curiositas":"odio","cuius":"architecto","cedo":"sono"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('10d1d69c-a29c-40f5-9981-c6f839d0318a', 'l1k2j3h4g5f6d7s8a9p0', '{"valeo":"ambulo","vel":"dapifer","spectaculum":"ara"}'::jsonb);

INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee', 'Beta', 'A cybersecurity enhancement project', '2025-06-28T04:38:24.678Z', '2025-07-07T01:46:43.311Z', 'Cancelled', 'f7be5c87-7fc0-4364-9df0-a2e4b487dd17');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('d9b3b151-831e-4cfa-813c-a09d15e7bfa6', 'Beta', 'A cloud migration initiative', '2025-06-26T09:02:05.895Z', '2023-12-06T22:09:31.738Z', 'On Hold', '9e16ccdf-3d3d-4901-8bca-b71550dc8941');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('f3e6ed00-2c85-4ca0-aa9f-09ea82209805', 'Epsilon', 'An ecommerce platform development', '2024-03-22T16:23:07.378Z', '2024-08-27T00:59:06.193Z', 'Cancelled', '9e16ccdf-3d3d-4901-8bca-b71550dc8941');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('8ba784fa-11bc-4123-9601-88bbc10114e5', 'Beta', 'A comprehensive marketing campaign', '2025-03-19T16:02:02.853Z', '2023-10-31T07:20:29.403Z', 'Completed', '9e16ccdf-3d3d-4901-8bca-b71550dc8941');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('b78cdb05-c03a-4f33-a2f8-49464b29ffcd', 'Gamma', 'A cuttingedge AI project', '2025-05-19T06:03:46.557Z', '2023-10-31T04:24:28.940Z', 'Cancelled', 'f7be5c87-7fc0-4364-9df0-a2e4b487dd17');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('639a6319-ec48-40be-a919-04b08d2e1886', 'Delta', 'A comprehensive marketing campaign', '2024-12-07T17:23:38.908Z', '2023-12-22T22:32:34.437Z', 'Cancelled', '9e16ccdf-3d3d-4901-8bca-b71550dc8941');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('e2bb93b0-c0cf-4429-8da9-2a2d0ec6312f', 'Epsilon', 'A cuttingedge AI project', '2024-10-09T08:05:05.346Z', '2023-12-30T22:19:51.447Z', 'Completed', '5d14e39b-b710-44d5-8c4d-82ff581eaa00');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('b64cc886-070e-472f-9fa8-328adb3dd8d6', 'Gamma', 'A cloud migration initiative', '2025-05-11T18:16:23.035Z', '2024-06-26T23:39:07.875Z', 'Cancelled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('46c4dc0b-fb09-4ece-9ad1-08a8f00583b3', 'Beta', 'A cloud migration initiative', '2025-02-10T17:55:25.491Z', '2025-04-04T11:02:03.854Z', 'Pending', '17a02642-3d97-4496-b8a6-b897e4a52370');
INSERT INTO "Project" ("id", "name", "description", "startDate", "endDate", "status", "userId") VALUES ('4472033e-accd-4611-9d5d-9c7568450664', 'Gamma', 'A cloud migration initiative', '2024-11-10T08:09:42.571Z', '2025-03-11T05:18:29.348Z', 'In Progress', '383d47ad-daa5-4629-a651-79bc6acf13c7');

INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('e01ba753-e593-444e-bfe8-3321978faff2', 'Optimize SEO', 'Create a responsive landing page for the new product', 'On Hold', 'High', '2023-11-07T09:59:20.133Z', 'f3e6ed00-2c85-4ca0-aa9f-09ea82209805');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('fe03db79-499a-47b6-9844-ff2e1a1f065b', 'Optimize SEO', 'Optimize the website for search engines', 'In Progress', 'Medium', '2023-09-15T09:42:58.665Z', 'dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('8893011a-c166-4693-9bd3-0de636aeaaa5', 'Develop Landing Page', 'Set up user authentication using OAuth', 'In Progress', 'Low', '2023-09-25T01:57:58.009Z', 'e2bb93b0-c0cf-4429-8da9-2a2d0ec6312f');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('95787a8f-8b69-4866-adfb-8babc55fece4', 'Develop Landing Page', 'Develop a marketing campaign for the product launch', 'Cancelled', 'Medium', '2024-09-26T18:31:11.859Z', 'dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('ef02f1ef-bbde-413d-8001-4bf6e02757c4', 'Create Marketing Campaign', 'Set up user authentication using OAuth', 'On Hold', 'Critical', '2025-08-14T06:09:21.960Z', 'b64cc886-070e-472f-9fa8-328adb3dd8d6');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('f3375106-b9ef-414b-a0bd-3ee094321b10', 'Optimize SEO', 'Develop a marketing campaign for the product launch', 'Completed', 'Critical', '2024-04-12T19:14:54.249Z', 'dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('c540742f-f73b-4d3c-93c6-21e43b7a23a1', 'Implement Authentication', 'Develop a marketing campaign for the product launch', 'Cancelled', 'Low', '2024-12-13T06:29:34.785Z', 'dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('2cd838fd-9a43-45d1-a72e-cd7c48ef9c0b', 'Design Database Schema', 'Design the database schema for the new application', 'Pending', 'Normal', '2024-12-05T13:58:05.496Z', 'b64cc886-070e-472f-9fa8-328adb3dd8d6');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('6370f5f0-5ea9-4c0b-accd-2d959b658510', 'Implement Authentication', 'Develop a marketing campaign for the product launch', 'Pending', 'Critical', '2024-09-25T14:38:07.491Z', 'd9b3b151-831e-4cfa-813c-a09d15e7bfa6');
INSERT INTO "Task" ("id", "name", "description", "status", "priority", "dueDate", "projectId") VALUES ('7797e40e-8092-4b2a-9b4d-bee8ec1074f3', 'Develop Landing Page', 'Design the database schema for the new application', 'Pending', 'Critical', '2025-08-27T08:21:11.822Z', 'dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee');

INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('120a8a23-9b00-4c28-aea3-d72ef614ad3d', '5.75', '2024-01-29T04:23:29.835Z', '17a02642-3d97-4496-b8a6-b897e4a52370', '2cd838fd-9a43-45d1-a72e-cd7c48ef9c0b');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('c5373636-27b9-4e29-9fb0-22fed04c2b5a', '8', '2023-11-25T02:40:32.768Z', '383d47ad-daa5-4629-a651-79bc6acf13c7', 'fe03db79-499a-47b6-9844-ff2e1a1f065b');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('c5473a70-ee8c-4f9b-9fe6-25cb269837a2', '9', '2024-04-27T01:12:53.553Z', '92096032-b58f-425a-ad1a-58bc68f8b114', '7797e40e-8092-4b2a-9b4d-bee8ec1074f3');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('daf7df25-5d7d-4945-b8ba-a1eb91891927', '5.75', '2024-05-30T13:12:37.483Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f3375106-b9ef-414b-a0bd-3ee094321b10');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('bbd01319-fc44-4ee8-bdd9-e74d0a600ff5', '8', '2024-08-01T06:54:08.686Z', 'f7be5c87-7fc0-4364-9df0-a2e4b487dd17', '7797e40e-8092-4b2a-9b4d-bee8ec1074f3');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('bc77e745-a5b5-4847-afd4-a882e5fed73d', '5.75', '2023-09-09T15:19:33.081Z', '92096032-b58f-425a-ad1a-58bc68f8b114', 'e01ba753-e593-444e-bfe8-3321978faff2');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('d0a3f1a2-61ab-4218-a163-26c5c9b4913e', '5.75', '2025-03-13T05:11:54.164Z', '17a02642-3d97-4496-b8a6-b897e4a52370', '6370f5f0-5ea9-4c0b-accd-2d959b658510');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('2d4c42ce-439f-4743-ad73-4a3734810414', '5.75', '2025-05-10T11:16:23.413Z', '7866a72f-9d79-4042-8d5c-b37c9d1f44ed', '6370f5f0-5ea9-4c0b-accd-2d959b658510');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('f9b03e6a-5d12-4f92-97b4-133dbcc873c3', '6.5', '2024-12-19T16:29:13.590Z', '5d14e39b-b710-44d5-8c4d-82ff581eaa00', 'c540742f-f73b-4d3c-93c6-21e43b7a23a1');
INSERT INTO "Timesheet" ("id", "hoursWorked", "date", "userId", "taskId") VALUES ('69b05316-1ae1-4a43-9246-cfb2533ded81', '6.5', '2024-05-22T05:26:10.920Z', '7866a72f-9d79-4042-8d5c-b37c9d1f44ed', '8893011a-c166-4693-9bd3-0de636aeaaa5');

INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('4db573b2-9b0b-4bfd-9524-007da3936307', 'Globex Corporation', '252Heber.DAmore-Reynolds@hotmail.com', '18005555678', '254 443 E 6th St, New York, NY 10009');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('734b798e-2f33-469c-89fd-1669d18efac5', 'Umbrella Corporation', '257Cleta98@yahoo.com', '18005556789', '259 18 Spring St, New York, NY 10012');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('93b3a55a-e748-4d29-a937-cac29953e9f9', 'Acme Corp', '262Halle_Bradtke61@yahoo.com', '18005555678', '264 136 E 13th St, New York, NY 10003');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('5a0be935-40d9-44a6-b386-e30271459e30', 'Soylent Corp', '267Rico.Hagenes@gmail.com', '18005556789', '269 330 W Broadway, New York, NY 10013');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('fbc1363e-8a4f-495b-9597-dfe9940e879e', 'Acme Corp', '272Madeline32@gmail.com', '18005555678', '274 91 Christopher St, New York, NY 10014');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('6421836a-b53a-4017-bf01-5eb6f2f1539a', 'Globex Corporation', '277Willis_Dickinson@gmail.com', '18005556789', '279 18 Spring St, New York, NY 10012');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('596797a1-86a5-40f7-bc0a-00f90e6e80d0', 'Soylent Corp', '282Trinity_Hickle89@hotmail.com', '18005554321', '284 136 E 13th St, New York, NY 10003');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('b0aaad21-5179-4220-bfcc-f8c0a85b891d', 'Acme Corp', '287Sylvia78@gmail.com', '18005558765', '289 18 Spring St, New York, NY 10012');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('e5ea685d-67f5-4e19-832b-ab434da6aee8', 'Initech', '292Linnie_Batz38@yahoo.com', '18005556789', '294 42 E 20th St, New York, NY 10003');
INSERT INTO "Client" ("id", "name", "contactEmail", "contactPhone", "address") VALUES ('51cee1c8-39c5-4d6a-81ad-964592d97a5c', 'Acme Corp', '297Maria11@yahoo.com', '18005555678', '299 136 E 13th St, New York, NY 10003');

INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('d9b3b151-831e-4cfa-813c-a09d15e7bfa6', 'e5ea685d-67f5-4e19-832b-ab434da6aee8', 'd7e94a1e-c952-4527-890f-477b06e0c6ce');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('b64cc886-070e-472f-9fa8-328adb3dd8d6', '5a0be935-40d9-44a6-b386-e30271459e30', 'b5c214a8-c57f-4a8d-b33c-4e67019b77d4');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('f3e6ed00-2c85-4ca0-aa9f-09ea82209805', '51cee1c8-39c5-4d6a-81ad-964592d97a5c', '13bcb262-443e-440b-bc12-f7a56e2b0a13');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('8ba784fa-11bc-4123-9601-88bbc10114e5', '734b798e-2f33-469c-89fd-1669d18efac5', 'ebf1cd2c-1f7b-4cf2-bde3-800a54a71412');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('4472033e-accd-4611-9d5d-9c7568450664', '596797a1-86a5-40f7-bc0a-00f90e6e80d0', '99fbc1df-2087-4d63-bd3e-5cf087b6476a');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('f3e6ed00-2c85-4ca0-aa9f-09ea82209805', '93b3a55a-e748-4d29-a937-cac29953e9f9', 'c21ea77e-5b3c-41cd-b4a5-74c7d21fb7ac');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('f3e6ed00-2c85-4ca0-aa9f-09ea82209805', '734b798e-2f33-469c-89fd-1669d18efac5', 'f589bfca-4a2b-4410-99d9-2b020620f97a');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('dc0c485d-b2b4-4c55-bd57-ecdf3b3d3eee', '6421836a-b53a-4017-bf01-5eb6f2f1539a', '5186986c-c3da-4434-be52-56f692f654ad');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('d9b3b151-831e-4cfa-813c-a09d15e7bfa6', 'b0aaad21-5179-4220-bfcc-f8c0a85b891d', '9db30c13-4771-447a-950a-f2e8c9043c4f');
INSERT INTO "ProjectClient" ("projectId", "clientId", "id") VALUES ('e2bb93b0-c0cf-4429-8da9-2a2d0ec6312f', 'e5ea685d-67f5-4e19-832b-ab434da6aee8', '82a69c0a-6372-4f5b-bc1d-68d7b14993ec');

INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('d76e2ca3-274e-428a-b4bc-0bb693efaae5', '3200.50', '2025-04-09T00:08:37.737Z', 'Pending', '51cee1c8-39c5-4d6a-81ad-964592d97a5c');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('b4536d87-eed0-4b16-9f3c-c2e3062e4c85', '450.00', '2024-09-03T18:48:46.302Z', 'Cancelled', '734b798e-2f33-469c-89fd-1669d18efac5');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('13f67199-ed36-405c-99a4-9d2c160362f3', '250.75', '2023-09-08T19:58:16.320Z', 'Overdue', '51cee1c8-39c5-4d6a-81ad-964592d97a5c');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('1a4db5f3-4065-4484-ab9d-35b6196ecbde', '250.75', '2024-05-22T20:49:26.726Z', 'Paid', '51cee1c8-39c5-4d6a-81ad-964592d97a5c');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('9801208f-803c-41e6-9a3f-0b7372691e1f', '250.75', '2023-12-16T08:21:16.658Z', 'Pending', 'fbc1363e-8a4f-495b-9597-dfe9940e879e');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('988622dc-6a1c-4f64-b7a6-fc6fa5ba456b', '120.99', '2024-08-26T19:47:07.842Z', 'Cancelled', '93b3a55a-e748-4d29-a937-cac29953e9f9');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('38cf1b79-0b18-4dd0-918e-973b99fb0aac', '450.00', '2024-07-07T02:17:16.162Z', 'In Progress', '734b798e-2f33-469c-89fd-1669d18efac5');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('f9ee7576-846a-44b8-b9ee-04b783343a56', '250.75', '2024-09-10T03:51:07.472Z', 'Overdue', '596797a1-86a5-40f7-bc0a-00f90e6e80d0');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('67bb766f-f2b7-4905-a1a6-d1004b68092d', '450.00', '2023-09-11T05:04:07.169Z', 'Paid', '734b798e-2f33-469c-89fd-1669d18efac5');
INSERT INTO "Invoice" ("id", "amount", "dueDate", "status", "clientId") VALUES ('36b23f7f-a7f2-45c6-bf76-91e21b4d498a', '1500.00', '2024-02-07T01:17:43.344Z', 'Overdue', 'fbc1363e-8a4f-495b-9597-dfe9940e879e');

INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('0739d295-88e0-46cb-9710-cc89766f891b', '150.75', '2025-08-03T17:07:47.970Z', 'Debit Card', '9801208f-803c-41e6-9a3f-0b7372691e1f');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('ac1b813e-e06d-476e-a349-04dbeeb2d615', '250.50', '2024-02-14T02:06:51.745Z', 'Debit Card', '38cf1b79-0b18-4dd0-918e-973b99fb0aac');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('21996066-0483-467d-b39e-7ecdfdbe4edf', '250.50', '2025-05-31T02:08:50.089Z', 'Cryptocurrency', '67bb766f-f2b7-4905-a1a6-d1004b68092d');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('9754305e-f66c-4d40-b8c0-fbb772dcbb0e', '150.75', '2024-08-10T11:14:01.754Z', 'Bank Transfer', '67bb766f-f2b7-4905-a1a6-d1004b68092d');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('a4da654b-e9ca-4edd-af3a-9c9e70317c80', '150.75', '2025-01-26T19:22:12.210Z', 'Debit Card', 'f9ee7576-846a-44b8-b9ee-04b783343a56');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('84412f64-1ba2-4c8a-91a9-ea5fafe2cd86', '300.00', '2024-04-05T06:34:03.874Z', 'Bank Transfer', 'd76e2ca3-274e-428a-b4bc-0bb693efaae5');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('d1eb865e-c66b-44ed-8982-2d43046d61ea', '300.00', '2024-03-17T08:23:33.296Z', 'Cryptocurrency', 'b4536d87-eed0-4b16-9f3c-c2e3062e4c85');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('3eb39dea-727d-4e67-94be-dc37bef26ab1', '250.50', '2023-09-21T05:35:32.569Z', 'Debit Card', 'b4536d87-eed0-4b16-9f3c-c2e3062e4c85');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('da1e4f0a-1db6-4fa7-aed7-0206fc48ca57', '100.00', '2025-01-01T09:29:16.410Z', 'Bank Transfer', '36b23f7f-a7f2-45c6-bf76-91e21b4d498a');
INSERT INTO "Payment" ("id", "amount", "date", "method", "invoiceId") VALUES ('df0875e7-bc0b-4172-9224-26afa07b3ac8', '150.75', '2025-08-21T21:33:35.379Z', 'Cryptocurrency', 'f9ee7576-846a-44b8-b9ee-04b783343a56');

INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('4bfc98fa-480d-41b2-9055-8d800c9f4cae', '2024-11-22T09:37:07.107Z', '2 hours', 'Outlined next steps and timeline.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fbc1363e-8a4f-495b-9597-dfe9940e879e');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('0a16ccf4-52c9-4e49-b581-105c5888e024', '2025-05-02T21:43:54.086Z', '1 hour', 'Outlined next steps and timeline.', 'f7be5c87-7fc0-4364-9df0-a2e4b487dd17', '596797a1-86a5-40f7-bc0a-00f90e6e80d0');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('194756c2-1b02-4a68-8d69-555f7ac9952a', '2024-07-01T12:58:07.733Z', '1.5 hours', 'Discussed project scope and requirements.', '5d14e39b-b710-44d5-8c4d-82ff581eaa00', '4db573b2-9b0b-4bfd-9524-007da3936307');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('5856d0e2-515d-427e-a3ea-5e4c0e6026a3', '2025-01-03T17:50:08.638Z', '1.5 hours', 'Suggested improvements for performance optimization.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b0aaad21-5179-4220-bfcc-f8c0a85b891d');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('efae267b-6687-4c11-9a72-33d5cef86a8e', '2024-07-19T11:06:15.629Z', '45 minutes', 'Discussed project scope and requirements.', '383d47ad-daa5-4629-a651-79bc6acf13c7', 'e5ea685d-67f5-4e19-832b-ab434da6aee8');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('2955dcb1-58b6-425e-9061-f398a648693b', '2024-06-04T05:44:16.799Z', '1 hour', 'Outlined next steps and timeline.', '383d47ad-daa5-4629-a651-79bc6acf13c7', '734b798e-2f33-469c-89fd-1669d18efac5');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('c4d46137-5502-4008-ae5b-95579f3eeb2a', '2024-06-03T19:21:02.719Z', '30 minutes', 'Discussed project scope and requirements.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '93b3a55a-e748-4d29-a937-cac29953e9f9');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('ca3d8553-4de1-407b-85ff-d08e51c49b29', '2024-05-19T20:01:19.631Z', '2 hours', 'Outlined next steps and timeline.', '383d47ad-daa5-4629-a651-79bc6acf13c7', '734b798e-2f33-469c-89fd-1669d18efac5');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('8d1744ba-5cf2-448b-b155-44baa5f0b123', '2024-04-03T12:33:21.061Z', '1.5 hours', 'Discussed project scope and requirements.', '17a02642-3d97-4496-b8a6-b897e4a52370', '4db573b2-9b0b-4bfd-9524-007da3936307');
INSERT INTO "Consultation" ("id", "date", "duration", "notes", "userId", "clientId") VALUES ('a0ee7d05-bb0b-45b1-ad65-0a16c69c960a', '2025-07-27T14:25:46.086Z', '2 hours', 'Discussed project scope and requirements.', '5d14e39b-b710-44d5-8c4d-82ff581eaa00', 'fbc1363e-8a4f-495b-9597-dfe9940e879e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
