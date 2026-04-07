# shop-back

Django REST Framework backend API for Online Shop (Lab 9).

## Setup

```bash
python -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata initial_data
python manage.py createsuperuser
python manage.py runserver
```

## API Endpoints

### Categories
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/categories/` | List all |
| POST | `/api/categories/` | Create |
| GET | `/api/categories/<id>/` | Get by ID |
| PUT | `/api/categories/<id>/` | Update |
| DELETE | `/api/categories/<id>/` | Delete |
| GET | `/api/categories/<id>/products/` | Products by category |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products/` | List all |
| POST | `/api/products/` | Create |
| GET | `/api/products/<id>/` | Get by ID |
| PUT | `/api/products/<id>/` | Update |
| DELETE | `/api/products/<id>/` | Delete |

## Admin: http://127.0.0.1:8000/admin/
## Postman: import OnlineShopAPI.postman_collection.json
