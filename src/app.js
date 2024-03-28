import express from "express";
import path from "path";
import axios from "axios";
import bodyParser from "body-parser";

const url = "https://api.clashofclans.com/v1/"
const bearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZlMzRmNmI2LTRlNTItNGUwOC04YWM4LTk0YzJiNGEwMTc2MCIsImlhdCI6MTcxMTYxMTQ5Nywic3ViIjoiZGV2ZWxvcGVyLzkzNWFmOTllLTdjNDMtN2U0MS1jOGFmLWM3MzczNjA3ZGZjNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIyMy4yMzMuODcuMjA0Il0sInR5cGUiOiJjbGllbnQifV19.Ws59WUYpHECrT_HYDywaV98zOBMoJl_E2LMbHlL5fjyhgTJefo18yrACUQsc_xUoC0lhBkmBzXZUE4uiC6fEHA";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("../public"));
app.listen(port, () => {
    console.log("app running on 3000");
});
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/players", async (req, res) => {
    const playerTag = encodeURIComponent(req.body.playerTag);
    const type="player";
    let response;
    try {
        response = await axios.get(url + "players/" + playerTag, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        const result = JSON.stringify(response.data, null, 2);
        console.log(response.data.name);
        res.render("index.ejs", { data: result, dataobj: response.data,type:type });
    } catch (error) {
        // res.render("index.ejs", { content: JSON.stringify(error.response.data) });
        console.log(error.response.data);
    }
})
app.post("/clans", async (req, res) => {
    const clanTag = encodeURIComponent(req.body.clanTag);
    const type="clan";
    let response;
    try {
        response = await axios.get(url + "clans?name=" + clanTag, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });
        const result = JSON.stringify(response.data, null, 2);
        console.log(response.data.name);
        res.render("index.ejs", { data: result, dataobj: response.data,type:type });
    } catch (error) {
        // res.render("index.ejs", { content: JSON.stringify(error.response.data) });
        console.log(error.response.data);
    }
})

