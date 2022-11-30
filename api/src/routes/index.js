const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRoute = require("./products.js")
const categoriesRoute = require("./categories.js")
const usersRoute = require("./users.js")
const commentsRoute = require("./comments.js")
const purchaseRoute = require("./purchase.js")
const favoritesRoute = require("./favorites.js")
const buyPaypalRoute = require("./buyPaypal.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/products', productsRoute)
router.use('/categories', categoriesRoute)
router.use('/users', usersRoute)
router.use('/comments', commentsRoute)
router.use('/purchase', purchaseRoute)
router.use('/favorites', favoritesRoute)
router.use('/buyings', buyPaypalRoute)

module.exports = router;
