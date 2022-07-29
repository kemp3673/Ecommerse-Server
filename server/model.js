const axios = require('axios');
const pool = require('../postgreSQL/db.js');


module.exports = {

  list: () => {
    let limit = 5;
    console.log('\x1b[32m\x1b[1m', 'INDIVIDUAL MODEL')
    return pool.query(`SELECT * FROM product LIMIT 5;`)
  },

  individual: (productID) => {
    console.log('\x1b[32m\x1b[1m', 'LIST MODEL')
    return pool.query(
      `SELECT
      product.id,
      product.name,
      product.slogan,
      product.description,
      product.category,
      product.default_price,
      product.created_at,
      product.updated_at,
      (
        SELECT json_agg(item)
        FROM (
          SELECT features.feature AS feature,
          features.value AS value
          FROM features
          WHERE features.product_id = product.id
        ) item
      ) AS features
      FROM product
      WHERE product.id = ${productID};`)
    },

  styles: (productID) => {
    console.log('\x1b[32m\x1b[1m', 'STYLES MODEL')
    return pool.query(
      `SELECT
        product.id AS product_id,
        (SELECT json_agg(item)
          FROM(
            SELECT styles.id AS style_id,
              styles.name AS name,
              styles.original_price AS original_price,
              styles.sale_price AS sale_price,
              styles.default_style AS "default?",
              (SELECT json_agg(item)
                FROM(
                  SELECT photos.thumbnail_url AS thubnail_url,
                    photos.url AS url
                  FROM photos
                  WHERE photos.styleid = styles.id
                ) item
              ) AS photos,
        (SELECT
          json_object_agg(
            skus.id, JSON_build_object(
              'quantity', skus.quantity,
              'size', skus.size
            )
          )
          FROM skus
          WHERE skus.styleid = styles.id
        ) AS skus
          FROM styles
          WHERE styles.productid = product.id
        ) item
      ) AS results
      FROM product
      WHERE product.id = ${productID};`)
  }
}