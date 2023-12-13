import app from "./app";

const port = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server Listening on ${port}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

startServer();
