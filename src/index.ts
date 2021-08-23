import path from 'path';
import express from "express";
import routes from "./routing/routes";
import cors from "cors";

const app = express();
const port = 3000;


// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port,() => {
    console.log(`Listening to port: ${port}`);
});
