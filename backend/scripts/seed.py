import http.client
import json


class Product:
    __init__(
        id,
        title,
        price,
        image,
    ):

products = 


conn = http.client.HTTPConnection("localhost", 8081)

for product in products:
    product_json = json.dumps(product)
    headers = {"Content-type": "application/json"}
    data = product_json.encode("utf-8")
    conn.request("POST", "/products", data, headers)
    res = conn.getresponse()
    res.read()
conn.close()
