import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req: any, res: (arg0: any, arg1: any) => any, ctx: { status: (arg0: number) => any; json: (arg0: { name: string; }[]) => any; }) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Bruce Wayne" },
        { name: "Clark Kent" },
        { name: "Princess Diana" },
      ]),
    );
  }),
];
