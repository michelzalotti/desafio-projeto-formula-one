import fastify from "fastify";

export const app = fastify({ logger: true });
const port = Number(process.env.PORT);

function init() {
  app.listen({ port }, (err) => {
    console.log(`Server is running at port: ${port}`);

    if (err) {
      console.log(err.message);
    }
  });
}

init();
