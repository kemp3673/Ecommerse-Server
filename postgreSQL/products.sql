DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE TABLE product (
  ID INTEGER PRIMARY KEY,
  name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  default_price INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
  );


  CREATE TABLE styles (
    ID INTEGER PRIMARY KEY,
    productID INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    sale_price VARCHAR,  -- INT not accepting null
    original_price INTEGER NOT NULL,
    default_style BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT fk_product
      FOREIGN KEY(productID)
        REFERENCES product(ID)
  );

  CREATE TABLE skus (
    ID INTEGER PRIMARY KEY,
    styleId INTEGER NOT NULL,
    size VARCHAR(10) NOT NULL,
    quantity INTEGER NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(styleId)
        REFERENCES styles(ID)
  );

  CREATE TABLE features (
    ID INTEGER PRIMARY KEY,
    product_id INTEGER NOT NULL,
    feature VARCHAR NOT NULL,
    value VARCHAR NOT NULL,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id)
        REFERENCES product(ID)
  );

  CREATE TABLE photos (
    ID INTEGER PRIMARY KEY,
    styleID INTEGER NOT NULL,
    url VARCHAR NOT NULL,
    thumbnail_url VARCHAR NOT NULL,
    CONSTRAINT fk_styles
      FOREIGN KEY(styleID)
        REFERENCES styles(ID)
  );

COPY product(id, name, slogan, description, category, default_price)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/product.csv'
  DELIMITER ','
  CSV HEADER;


COPY styles(id, productId, name, sale_price, original_price, default_style)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/styles.csv'
  DELIMITER ','
  CSV HEADER;

COPY skus(id, styleId, size, quantity)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/skus.csv'
  DELIMITER ','
  CSV HEADER;

COPY photos(id, styleId, url, thumbnail_url)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/photos.csv'
  DELIMITER ','
  CSV HEADER;

COPY features(id, product_Id, feature, value)
  FROM '/Users/nicholaskempkes/repositories/Server Design Capstone/Product-Overview/csv_files/features.csv'
  DELIMITER ','
  CSV HEADER;




