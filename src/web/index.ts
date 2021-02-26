import app from './app';

const PORT = process.env.APP_PORT || 8000;

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
