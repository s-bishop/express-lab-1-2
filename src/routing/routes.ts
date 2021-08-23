import express from "express";
import shops from "../shop";
const routes = express.Router();

//API
routes.get("/api/shops", (req,res) => {
    const minRating = Number(req.query.minRating);
    if(minRating){
        res.json(shops.filter(shop => shop.rating >= minRating));
    }else{
        res.json(shops);
    }
});

routes.get("/api/shops/:id", (req,res) => {
    let shopId = shops.find(element => element.id === +req.params.id);
    if (shopId){ 
        res.json(shopId);
    }else{
        res.json({"error": `Shop not found: ${req.params.id}`});
        res.status(404)
    }
    res.json();
});

//Web App
routes.get("/", (req,  res) => {
    res.render("home");
});

routes.get("/shop-list", (req, res) => {
    res.render("shop-list", {shops})
});

routes.get("/shop-details/:id", (req, res) => {
    let shopId = req.params.id;
    let shopName = shops.find(element => element.id === +req.params.id);
    res.render("shop-details", {shops, shopName, shopId});
});

export default routes;