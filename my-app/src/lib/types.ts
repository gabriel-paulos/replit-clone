
export type UsersToSandboxes = {

    userId: string;
    sandboxId: string;
    sharedOn: string;

};

export type Sandbox = {

    id: string;
    name: string;
    type: "react" | "node";
    visibility: "public" | "private";
    createdAt: Date;
    userId: string;
    usersToSandboxes: UsersToSandboxes[];

};


export type User = {

    id: string;
    name: string;
    email: string;
    generations: string;
    sandbox: Sandbox[];
    usersToSandboxes: UsersToSandboxes[];

};

