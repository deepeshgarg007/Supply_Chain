/** 
 * Trade a product to a new player
 * @param {org.example.mynetwork.MoveProduct} moveProduct - the trade product transaction
 * @transaction
 */

async function moveProduct(moveProduct) { // eslint-disable-line no-unused-vars
 moveProduct.product.issuer = moveProduct.product.owner;
 moveProduct.product.owner = moveProduct.newOwner;
 const assetRegistry = await getAssetRegistry('org.example.mynetwork.Product');
 await assetRegistry.update(moveProduct.product);
}
