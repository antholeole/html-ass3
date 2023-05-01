import http.client
import json
import sys

def get_fakestore_products(num_products):
    conn = http.client.HTTPSConnection("fakestoreapi.com")
    conn.request("GET", "/products")
    res = conn.getresponse()
    data = res.read().decode("utf-8")
    conn.close()

    # parse the JSON data and return the first 3 items
    return json.loads(data)[:num_products]

products = get_fakestore_products(int(sys.argv[1]) if len(sys.argv) > 1 else 3)
conn = http.client.HTTPConnection("localhost", 8081)

for product in products:
    product_json = json.dumps(product)
    headers = {"Content-type": "application/json"}
    data = product_json.encode("utf-8")
    conn.request("POST", "/products", data, headers)
    res = conn.getresponse()
    res.read()
conn.close()
