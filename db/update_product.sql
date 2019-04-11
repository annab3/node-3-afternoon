UPDATE product
SET description = $1
where product_id = $2;

SELECT * FROM product;