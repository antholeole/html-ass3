Run the script `scripts/seed.py` with an arg how many products you want to add to the database. Example: `python3 scripts/seed.py 20`

this is the shape of a product object:

```json
{
		"_id": 3,
		"id": 3,
		"title": "Mens Cotton Jacket",
		"price": 55.99,
		"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		"category": "men's clothing",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		"rating": {
			"rate": 4.7,
			"count": 500
		}
}
```

there's:
- DELETE /products/:id to delete a product by id
- POST /products/ to add a product (just add a body that is the product object)
- PATCH /products/:id to update a product (just add a body that is the product object)
- GET /products/ which gets a list of products
- GET /products/:id which gets a product by id



