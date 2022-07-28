const axios = require('axios');


const getOne = () => {
  console.log('\x1b[32m\x1b[1m', 'INSIDE MODEL')
}




module.exports = {
  getOne
}









// LIST OF CURRENT QUERIES TEST ON PGADMIN

SELECT * FROM product LIMIT 5;   // Returns back list of products (CHANGE LIMIT TO VAR)


// RETURN INDIVIDUAL PRODUCT INFORMATION INCLUDED ARRAY OF FEATURE OBJS
SELECT
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
WHERE product.id = 5;

// PARTIALLY WORKING - NEED TO FIGURE OUT NESTED OBJ FOR SKUS
SELECT
product.id,
(
SELECT json_agg(item)
	FROM (
		SELECT styles.id AS style_id,
		styles.name AS name,
		styles.original_price AS original_price,
		styles.sale_price AS sale_price,
		styles.default_style AS "default?",
		( SELECT json_agg(item)
		 	FROM (
			SELECT photos.thumbnail_url AS thubnail_url,
			photos.url AS url
			FROM photos
			WHERE photos.styleid = styles.id
			) item
		) AS photos
		FROM styles
		WHERE styles.productid = product.id
	) item
) AS results
FROM product
WHERE product.id = 1;